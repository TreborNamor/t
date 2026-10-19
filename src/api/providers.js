/**
 * Dynamic Provider Engine for TFlix
 *
 * Direct HLS providers are resolved by the local hlsRelay serviceFile (see
 * service/hlsRelay.js) and this module mirrors its live registry rather than
 * hardcoding provider ids here â€” that registry already includes any
 * community provider pack the user has paired in, so a new source shows up
 * here automatically once refreshRelayProviders() is called, no app update
 * needed.
 *
 * The community-JSON-URL mechanism below (fetchProvidersFromUrl) is now only
 * meaningful for simple `embed` (iframe) provider templates â€” direct
 * providers must have a matching resolver registered in the relay, so a
 * "direct" entry from a JSON list with no such resolver would fail at
 * resolve time.
 */

import { storage } from '../store/storage.js';
import {
  resolveDirectStream, isRelayAvailable, resolveNativeStream,
  browseNativeCatalog, searchNativeCatalog, getNativeSeasons, listNativeEpisodes
} from './streamScraper.js';

export {
  resolveDirectStream, isRelayAvailable, resolveNativeStream,
  browseNativeCatalog, searchNativeCatalog, getNativeSeasons, listNativeEpisodes
};

const RELAY_BASE = 'http://127.0.0.1:47993';

// Built-in embed sources for this personal TFlix fork. These mirror the
// user's providers.json so a fresh app install does not depend on adding a
// separate provider repository in Settings.
const BUILT_IN_EMBED_PROVIDERS = [
  {
    id: 'rakan',
    name: 'Rakan',
    description: 'Generally better quality.',
    type: 'embed',
    sandbox: false,
    movieUrl: 'https://vixsrc.to/movie/{id}?autoplay=true&lang=en',
    tvUrl: 'https://vixsrc.to/tv/{id}/{season}/{episode}?autoplay=true&lang=en'
  },
  {
    id: 'bard',
    name: 'Bard',
    description: 'Recommended for recently released movies.',
    type: 'embed',
    sandbox: false,
    movieUrl: 'https://moviesapi.to/movie/{id}',
    tvUrl: 'https://moviesapi.to/tv/{id}-{season}-{episode}'
  },
  {
    id: 'xayah',
    name: 'Xayah',
    description: 'Recommended for recently released movies.',
    type: 'embed',
    sandbox: false,
    movieUrl: 'https://vidsrc.sh/embed/movie?tmdb={id}&autoplay=1',
    tvUrl: 'https://vidsrc.sh/embed/tv?tmdb={id}&season={season}&episode={episode}&autoplay=1&autonext=1'
  },
  {
    id: 'ekko',
    name: 'Ekko',
    description: 'May have 4K. Generally better quality.',
    type: 'embed',
    sandbox: false,
    movieUrl: 'https://cinesrc.st/embed/movie/{id}?autoplay=true&prioritize=true&lastserver=wave',
    tvUrl: 'https://cinesrc.st/embed/tv/{id}?s={season}&e={episode}&autoplay=true&autonext=true&prioritize=true&lastserver=wave'
  },
  {
    id: 'naafiri',
    name: 'Naafiri',
    description: 'May have 4K. Generally better quality.',
    type: 'embed',
    sandbox: false,
    movieUrl: 'https://vidfast.vc/movie/{id}?autoPlay=true',
    tvUrl: 'https://vidfast.vc/tv/{id}/{season}/{episode}?autoPlay=true'
  },
  {
    id: 'ryze',
    name: 'Ryze',
    description: 'Generally better quality.',
    type: 'embed',
    sandbox: false,
    movieUrl: 'https://vidlink.pro/movie/{id}?title=true&poster=true&autoplay=true',
    tvUrl: 'https://vidlink.pro/tv/{id}/{season}/{episode}?title=true&poster=true&autoplay=true&nextbutton=true'
  }
];

// The only provider-pack-related thing hardcoded in the app: a pointer to a
// catalog, not to any specific provider. Swappable without a code change if
// this index ever needs to move.
export const DEFAULT_PACK_INDEX_URL = 'https://tflix-providers.zyrex.workers.dev/index.json';

let relayProviders = [];
let relayPacks = []; // every installed pack, side by side â€” see hlsRelay.js's per-pack subdirectories

/**
 * Refreshes the in-memory cache of relay-registered direct providers.
 * Call on app startup and after a successful provider-pack pairing.
 * Leaves the previous cache untouched on failure (e.g. relay not running).
 */
export async function refreshRelayProviders() {
  try {
    const res = await fetch(`${RELAY_BASE}/providers`);
    if (!res.ok) return false;
    const data = await res.json();
    relayProviders = (data.providers || []).map((p) => ({
      id: p.id,
      name: p.name,
      description: p.description || '',
      type: 'direct',
      packManifestUrl: p.packManifestUrl || null,
      packName: p.packName || null,
      // See docs/PROVIDER_PACKS.md's "Optional capabilities" â€” fuzzyMatch
      // gates the "wrong match?" control, supportsAvailability gates
      // episode-availability badges (streamScraper.js's listAvailableEpisodes).
      fuzzyMatch: Boolean(p.fuzzyMatch),
      supportsAvailability: Boolean(p.supportsAvailability),
      // See docs/PROVIDER_PACKS.md's "Native catalogs" section â€” a
      // catalogMode: 'native' provider is only ever resolved from the
      // dedicated native browse flow, never TMDB-flow rotation (see
      // getPrioritizedProviders/getProviderById below).
      catalogMode: p.catalogMode || 'tmdb',
      catalogTypes: p.catalogTypes || [],
      catalogCategories: p.catalogCategories || [],
      disableTmdbArtFallback: Boolean(p.disableTmdbArtFallback)
    }));
    relayPacks = data.packs || [];
    return true;
  } catch {
    return false;
  }
}

/**
 * All installed direct provider packs, each with its own providerIds â€” for
 * grouping the Settings UI by source rather than showing one "the pack".
 */
export function getRelayPacks() {
  return relayPacks;
}

/**
 * Uninstalls one pack (by its manifestUrl), leaving every other installed
 * pack untouched.
 */
export async function uninstallPackDirect(manifestUrl) {
  const res = await fetch(`${RELAY_BASE}/packs/uninstall`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: manifestUrl })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Uninstall failed');
  await refreshRelayProviders();
  return data;
}

/**
 * Fetches the browsable catalog of provider packs (name/description/manifestUrl).
 */
export async function fetchPackCatalog(indexUrl = DEFAULT_PACK_INDEX_URL) {
  const res = await fetch(indexUrl);
  if (!res.ok) throw new Error(`Failed to load pack catalog (${res.status})`);
  const data = await res.json();
  if (!Array.isArray(data)) throw new Error('Invalid catalog: expected an array');
  return data;
}

/**
 * Installs a pack directly (no pairing code) â€” only works because this call
 * originates from the app itself on the same device; the relay rejects it
 * from anywhere else on the LAN. Use the QR pairing flow for packs handed to
 * you by someone else.
 */
export async function installPackDirect(manifestUrl) {
  const res = await fetch(`${RELAY_BASE}/packs/install`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: manifestUrl })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Install failed');
  await refreshRelayProviders();
  return data;
}

/**
 * Fetch provider definitions from a remote JSON URL (embed-style templates
 * only). TFlix ships with no default here on purpose â€” the user must supply
 * their own repository URL (see providers.example.json for the schema).
 */
export async function fetchProvidersFromUrl(url) {
  const targetUrl = url && url.trim();
  if (!targetUrl) {
    throw new Error('Enter a provider repository URL first');
  }
  const res = await fetch(targetUrl);
  if (!res.ok) {
    throw new Error(`Failed to load providers (${res.status}): ${res.statusText}`);
  }
  const data = await res.json();
  if (!Array.isArray(data)) {
    throw new Error('Invalid provider list: Root must be a JSON array of providers');
  }

  const validProviders = data.filter(p => p && p.id && p.name && (p.movieUrl || p.tvUrl || p.getMovieUrl || p.getTvUrl));
  if (validProviders.length === 0) {
    throw new Error('No valid providers found in the specified repository');
  }

  // Only embed-type entries are usable from this mechanism â€” a "direct"
  // entry here has no relay resolver behind it and would fail at resolve time.
  const normalized = validProviders
    .filter(p => p.type !== 'direct')
    .map(p => ({
      id: String(p.id),
      name: String(p.name),
      description: String(p.description || ''),
      type: 'embed',
      movieUrl: p.movieUrl || (typeof p.getMovieUrl === 'string' ? p.getMovieUrl : ''),
      tvUrl: p.tvUrl || (typeof p.getTvUrl === 'string' ? p.getTvUrl : ''),
      sandbox: p.sandbox !== false
    }));

  storage.addProviderSource(targetUrl, normalized);
  return normalized;
}

/**
 * Retrieve currently active providers: relay-registered direct providers
 * merged with any embed-style providers loaded from a community JSON URL.
 */
export function getProviders() {
  const customEmbeds = storage.getCustomProviders().filter(p => p.type !== 'direct');
  const builtInIds = new Set(BUILT_IN_EMBED_PROVIDERS.map(p => p.id));
  // The bundled definitions are authoritative for matching ids. Old relay
  // packs and saved provider repositories can remain in TV storage across an
  // app update, so let either one shadowing these entries would keep using
  // stale resolver/sandbox settings instead of the updated URLs.
  const relayOnly = relayProviders.filter(p => !builtInIds.has(p.id));
  const customOnly = customEmbeds.filter(p => !builtInIds.has(p.id));
  return [...relayOnly, ...BUILT_IN_EMBED_PROVIDERS, ...customOnly];
}

/**
 * Native-catalog providers only â€” a provider with its own browsable
 * categories/search/episodes, surfaced through the dedicated Providers tab
 * rather than TMDB-driven browsing. See docs/PROVIDER_PACKS.md.
 */
export function getNativeCatalogProviders() {
  return relayProviders.filter(p => p.catalogMode === 'native');
}

/**
 * Get provider definition by ID. The list[0] fallback (used when a
 * requested id isn't registered) must skip native-catalog providers â€”
 * relayProviders lists them first, so an unmatched TMDB-flow lookup could
 * otherwise silently hand back a provider whose resolve() only understands
 * ctx.native calls (see docs/PROVIDER_PACKS.md's "Native catalogs" section).
 */
export function getProviderById(providerId) {
  const list = getProviders();
  if (list.length === 0) return null;
  const exact = list.find(p => p.id === providerId);
  if (exact) return exact;
  return list.find(p => p.catalogMode !== 'native') || null;
}

/**
 * Retrieve providers sorted with direct HLS providers first (unless a specific preferred provider is requested).
 * Excludes catalogMode: 'native' providers entirely â€” they're only ever
 * resolved from the dedicated native browse flow with ctx.native: true, not
 * ordinary TMDB-driven playback/fallback rotation.
 */
export function getPrioritizedProviders(preferredId) {
  const list = getProviders().filter(p => p.catalogMode !== 'native');
  if (list.length === 0) return [];

  if (preferredId) {
    const preferred = list.find(p => p.id === preferredId);
    if (preferred) {
      const rest = list.filter(p => p.id !== preferredId);
      const directRest = rest.filter(p => p.type === 'direct');
      const embedRest = rest.filter(p => p.type !== 'direct');
      return [preferred, ...directRest, ...embedRest];
    }
  }

  // Direct HLS providers first, then Embed providers
  const directs = list.filter(p => p.type === 'direct');
  const embeds = list.filter(p => p.type !== 'direct');
  return [...directs, ...embeds];
}

/**
 * Get the next available fallback provider that hasn't been tried yet
 */
export function getNextFallbackProvider(currentId, attemptedIds = new Set()) {
  const list = getPrioritizedProviders(currentId);
  for (const provider of list) {
    if (provider.id !== currentId && !attemptedIds.has(provider.id)) {
      return provider;
    }
  }
  return null;
}

/**
 * Check if a provider outputs a direct HLS/MP4 stream for native playback
 */
export function isDirectProvider(providerId) {
  const provider = getProviderById(providerId);
  return Boolean(provider && provider.type === 'direct');
}

/**
 * Compute embed streaming URL for given media & provider
 */
export function getEmbedUrl(providerId, mediaType, id, season = 1, episode = 1, startAt = 0) {
  const provider = getProviderById(providerId);
  if (!provider) return '';

  const isTv = mediaType === 'tv';
  let rawTemplate = isTv
    ? (provider.tvUrl || provider.movieUrl || '')
    : (provider.movieUrl || provider.tvUrl || '');

  if (!rawTemplate) return '';

  let resolved = rawTemplate
    .replace(/\{id\}/g, encodeURIComponent(String(id)))
    .replace(/\{season\}/g, encodeURIComponent(String(season)))
    .replace(/\{episode\}/g, encodeURIComponent(String(episode)))
    .replace(/\{type\}/g, isTv ? 'tv' : 'movie');

  if (provider.id === 'vidlink' && startAt > 10) {
    const separator = resolved.includes('?') ? '&' : '?';
    resolved = `${resolved}${separator}startAt=${Math.floor(startAt)}`;
  }

  return resolved;
}

