const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PlayerModal.js","./hls.js"])))=>i.map(i=>d[i]);
var Xt=Object.defineProperty,Zt=Object.defineProperties;var en=Object.getOwnPropertyDescriptors;var Ge=Object.getOwnPropertySymbols;var tn=Object.prototype.hasOwnProperty,nn=Object.prototype.propertyIsEnumerable;var Qe=(s,e,t)=>e in s?Xt(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,K=(s,e)=>{for(var t in e||(e={}))tn.call(e,t)&&Qe(s,t,e[t]);if(Ge)for(var t of Ge(e))nn.call(e,t)&&Qe(s,t,e[t]);return s},V=(s,e)=>Zt(s,en(e));var b=(s,e,t)=>new Promise((n,i)=>{var r=l=>{try{o(t.next(l))}catch(d){i(d)}},a=l=>{try{o(t.throw(l))}catch(d){i(d)}},o=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,a);o((t=t.apply(s,e)).next())});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const sn="modulepreload",rn=function(s,e){return new URL(s,e).href},Xe={},an=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let a=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),d=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=a(t.map(c=>{if(c=rn(c,n),c in Xe)return;Xe[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let f=o.length-1;f>=0;f--){const P=o[f];if(P.href===c&&(!h||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const y=document.createElement("link");if(y.rel=h?"stylesheet":sn,h||(y.as="script"),y.crossOrigin="",y.href=c,d&&y.setAttribute("nonce",d),document.head.appendChild(y),h)return new Promise((f,P)=>{y.addEventListener("load",f),y.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},R={TMDB_API_KEY:"tflix_tmdb_api_key",WATCH_HISTORY:"tflix_watch_history",WATCHLIST:"tflix_watchlist",DEFAULT_PROVIDER:"tflix_default_provider",LAST_TAB:"tflix_last_tab",CUSTOM_PROVIDER_SOURCES:"tflix_custom_provider_sources",PLAYER_MODE:"tflix_player_mode",SETUP_TOUR_SEEN:"tflix_setup_tour_seen",CONFIRMED_SHOW_MAP:"tflix_confirmed_show_map",EPISODE_AVAILABILITY:"tflix_episode_availability"},on=1440*60*1e3,I={getApiKey(){return localStorage.getItem(R.TMDB_API_KEY)||""},hasApiKey(){const s=this.getApiKey();return!!(s&&s.trim()!=="")},getCustomApiKey(){return this.getApiKey()},setApiKey(s){!s||s.trim()===""?localStorage.removeItem(R.TMDB_API_KEY):localStorage.setItem(R.TMDB_API_KEY,s.trim())},isUsingCustomKey(){return this.hasApiKey()},getPlayerMode(){return localStorage.getItem(R.PLAYER_MODE)||"auto"},setPlayerMode(s){localStorage.setItem(R.PLAYER_MODE,s)},getProviderSources(){try{const s=JSON.parse(localStorage.getItem(R.CUSTOM_PROVIDER_SOURCES)||"[]");return Array.isArray(s)?s:[]}catch(s){return[]}},setProviderSources(s){!Array.isArray(s)||s.length===0?localStorage.removeItem(R.CUSTOM_PROVIDER_SOURCES):localStorage.setItem(R.CUSTOM_PROVIDER_SOURCES,JSON.stringify(s))},addProviderSource(s,e){const t=this.getProviderSources().filter(n=>n.url!==s);t.push({url:s,providers:e,addedAt:Date.now()}),this.setProviderSources(t)},removeProviderSource(s){this.setProviderSources(this.getProviderSources().filter(e=>e.url!==s))},getCustomProviders(){return this.getProviderSources().flatMap(s=>s.providers||[])},hasCustomProviders(){return this.getCustomProviders().length>0},getDefaultProvider(){return localStorage.getItem(R.DEFAULT_PROVIDER)||""},setDefaultProvider(s){localStorage.setItem(R.DEFAULT_PROVIDER,s)},_itemKey(s,e){return`${s}:${e}`},getWatchlist(){try{return JSON.parse(localStorage.getItem(R.WATCHLIST)||"[]").map(e=>{const t=e.media_type||e.mediaType||(e.first_air_date?"tv":"movie");return V(K({},e),{media_type:t,mediaType:t,source:e.source||"tmdb"})})}catch(s){return[]}},addToWatchlist(s){const e=this.getWatchlist(),t=s.source||"tmdb";if(!e.some(n=>this._itemKey(n.source,n.id)===this._itemKey(t,s.id))){const n=s.media_type||s.mediaType||(s.first_air_date?"tv":"movie");e.unshift({id:s.id,source:t,media_type:n,mediaType:n,title:s.title||s.name,name:s.name||s.title,poster_path:s.poster_path,backdrop_path:s.backdrop_path,vote_average:s.vote_average,release_date:s.release_date||s.first_air_date,first_air_date:s.first_air_date||s.release_date,addedAt:Date.now()}),localStorage.setItem(R.WATCHLIST,JSON.stringify(e.slice(0,100)))}},removeFromWatchlist(s,e){const t=this.getWatchlist().filter(n=>this._itemKey(n.source,n.id)!==this._itemKey(s,e));localStorage.setItem(R.WATCHLIST,JSON.stringify(t))},isInWatchlist(s,e){return this.getWatchlist().some(t=>this._itemKey(t.source,t.id)===this._itemKey(s,e))},getHistory(){try{return JSON.parse(localStorage.getItem(R.WATCH_HISTORY)||"[]").map(e=>{const t=e.media_type||e.mediaType||(e.first_air_date?"tv":"movie");return V(K({},e),{media_type:t,mediaType:t,source:e.source||"tmdb"})})}catch(s){return[]}},saveHistory(s){const e=s.source||"tmdb",t=s.media_type||s.mediaType||(s.first_air_date?"tv":"movie"),n=this.getHistory().filter(l=>this._itemKey(l.source,l.id)!==this._itemKey(e,s.id)),i=this.getHistory().find(l=>this._itemKey(l.source,l.id)===this._itemKey(e,s.id)),r=s.season||(i?i.season:1),a=s.episode||(i?i.episode:1),o=i&&i.season===r&&i.episode===a;n.unshift({id:s.id,source:e,media_type:t,mediaType:t,title:s.title||s.name,name:s.name||s.title,poster_path:s.poster_path,backdrop_path:s.backdrop_path,vote_average:s.vote_average,release_date:s.release_date||s.first_air_date,first_air_date:s.first_air_date||s.release_date,season:r,episode:a,currentTime:typeof s.currentTime=="number"?s.currentTime:o?i.currentTime:0,duration:typeof s.duration=="number"?s.duration:o?i.duration:0,progress:typeof s.progress=="number"?s.progress:o?i.progress:0,watchedAt:Date.now()}),localStorage.setItem(R.WATCH_HISTORY,JSON.stringify(n.slice(0,30)))},updateProgress(s,e,t,n,i,r){if(!e||typeof i!="number"||i<0)return;const a=this.getHistory(),o=a.find(l=>this._itemKey(l.source,l.id)===this._itemKey(s,e));o&&(o.season=t||o.season||1,o.episode=n||o.episode||1,o.currentTime=Math.floor(i),o.duration=Math.floor(r||o.duration||0),o.progress=o.duration>0?Math.min(100,Math.round(o.currentTime/o.duration*100)):0,o.watchedAt=Date.now(),localStorage.setItem(R.WATCH_HISTORY,JSON.stringify(a)))},getProgress(s,e,t=1,n=1){const i=this.getHistory().find(a=>this._itemKey(a.source,a.id)===this._itemKey(s,e));return i?i.media_type==="tv"||i.mediaType==="tv"?i.season===t&&i.episode===n&&i.currentTime>5?{currentTime:i.currentTime,duration:i.duration,progress:i.progress}:null:i.currentTime>10?{currentTime:i.currentTime,duration:i.duration,progress:i.progress}:null:null},clearHistory(){localStorage.removeItem(R.WATCH_HISTORY)},removeFromHistory(s,e){const t=this.getHistory().filter(n=>this._itemKey(n.source,n.id)!==this._itemKey(s,e));localStorage.setItem(R.WATCH_HISTORY,JSON.stringify(t))},_showKey(s,e){return e!=null?`${s}:s${e}`:String(s)},getConfirmedShowMap(){try{return JSON.parse(localStorage.getItem(R.CONFIRMED_SHOW_MAP)||"{}")}catch(s){return{}}},getConfirmedShowId(s,e,t=null){const n=this.getConfirmedShowMap();return n[s]&&n[s][this._showKey(e,t)]||null},setConfirmedShowId(s,e,t,n=null){const i=this.getConfirmedShowMap();i[s]||(i[s]={}),i[s][this._showKey(e,n)]=t,localStorage.setItem(R.CONFIRMED_SHOW_MAP,JSON.stringify(i))},getEpisodeAvailability(s,e,t=null){try{const n=JSON.parse(localStorage.getItem(R.EPISODE_AVAILABILITY)||"{}"),i=n[s]&&n[s][this._showKey(e,t)];return!i||Date.now()-i.fetchedAt>on?null:i.episodes}catch(n){return null}},setEpisodeAvailability(s,e,t,n=null){let i;try{i=JSON.parse(localStorage.getItem(R.EPISODE_AVAILABILITY)||"{}")}catch(r){i={}}i[s]||(i[s]={}),i[s][this._showKey(e,n)]={episodes:t,fetchedAt:Date.now()},localStorage.setItem(R.EPISODE_AVAILABILITY,JSON.stringify(i))},hasSeenSetupTour(){return localStorage.getItem(R.SETUP_TOUR_SEEN)==="1"},setSetupTourSeen(){localStorage.setItem(R.SETUP_TOUR_SEEN,"1")},clearAllData(){localStorage.clear()}},Lt="https://api.themoviedb.org/3",Ze="https://image.tmdb.org/t/p",Q=new Map,ln=100,z={FEED:300*1e3,DETAILS:600*1e3,SEASON:900*1e3,SEARCH:120*1e3};function dn(s){const e=Q.get(s);return e?Date.now()>e.expiresAt?(Q.delete(s),null):e.data:null}function et(s,e,t){if(!(t<=0)){if(Q.size>=ln){const n=Q.keys().next().value;n!==void 0&&Q.delete(n)}Q.set(s,{data:e,expiresAt:Date.now()+t})}}const Ke="tflix_tmdb_feed_cache",tt=40;function Rt(){try{return JSON.parse(localStorage.getItem(Ke)||"{}")}catch(s){return{}}}function cn(s){const t=Rt()[s];return!t||Date.now()>t.expiresAt?null:t.data}function un(s,e,t){const n=Rt();n[s]={data:e,expiresAt:Date.now()+t};const i=Object.keys(n);if(i.length>tt){i.sort((r,a)=>n[r].expiresAt-n[a].expiresAt);for(let r=0;r<i.length-tt;r++)delete n[i[r]]}try{localStorage.setItem(Ke,JSON.stringify(n))}catch(r){}}function j(n){return b(this,arguments,function*(s,e={},t=0){const i=I.getApiKey();if(!i)throw new Error("TMDB API Key is required. Please enter your free personal API key in Settings.");const r=`${i}:${s}:${JSON.stringify(e)}`;if(t>0){const d=dn(r);if(d)return d;if(t===z.FEED){const c=cn(r);if(c)return et(r,c,t),c}}const a=new URL(`${Lt}${s}`);a.searchParams.set("api_key",i),a.searchParams.set("language","en-US"),Object.entries(e).forEach(([d,c])=>{c!=null&&c!==""&&a.searchParams.set(d,c)});const o=yield fetch(a.toString());if(!o.ok){const d=yield o.text();throw new Error(`TMDB error (${o.status}): ${d}`)}const l=yield o.json();return t>0&&(et(r,l,t),t===z.FEED&&un(r,l,t)),l})}const L={clearCache(){Q.clear();try{localStorage.removeItem(Ke)}catch(s){}},getImageUrl(s,e="w342"){return s?/^https?:\/\//.test(s)?s:`${Ze}/${e}${s}`:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='500' height='750' fill='%231a1a1a'><rect width='100%' height='100%'/><text x='50%' y='50%' fill='%23666' font-size='20' font-family='sans-serif' text-anchor='middle' dy='.3em'>No Image</text></svg>"},getBackdropUrl(s,e="w1280"){return s?/^https?:\/\//.test(s)?s:`${Ze}/${e}${s}`:""},testApiKey(s){return b(this,null,function*(){try{const e=`${Lt}/configuration?api_key=${encodeURIComponent(s)}`,t=yield fetch(e);return t.ok?{success:!0}:{success:!1,error:(yield t.json().catch(()=>({}))).status_message||`HTTP ${t.status}`}}catch(e){return{success:!1,error:e.message||"Network error"}}})},getTrending(s="all",e="week"){return b(this,null,function*(){return((yield j(`/trending/${s}/${e}`,{},z.FEED)).results||[]).filter(n=>n.poster_path||n.backdrop_path)})},getPopularMovies(s=1){return b(this,null,function*(){return((yield j("/movie/popular",{page:s},z.FEED)).results||[]).map(t=>V(K({},t),{media_type:"movie"}))})},getTopRatedMovies(s=1){return b(this,null,function*(){return((yield j("/movie/top_rated",{page:s},z.FEED)).results||[]).map(t=>V(K({},t),{media_type:"movie"}))})},getPopularTV(s=1){return b(this,null,function*(){return((yield j("/tv/popular",{page:s},z.FEED)).results||[]).map(t=>V(K({},t),{media_type:"tv"}))})},getTopRatedTV(s=1){return b(this,null,function*(){return((yield j("/tv/top_rated",{page:s},z.FEED)).results||[]).map(t=>V(K({},t),{media_type:"tv"}))})},getByGenre(s,e,t=1){return b(this,null,function*(){return((yield j(s==="tv"?"/discover/tv":"/discover/movie",{with_genres:e,sort_by:"popularity.desc",page:t},z.FEED)).results||[]).map(r=>V(K({},r),{media_type:s}))})},getDetails(s,e){return b(this,null,function*(){const t=s==="tv"?"tv":"movie",n=yield j(`/${t}/${e}`,{append_to_response:"credits,similar,videos,external_ids"},z.DETAILS);return n.media_type=t,!n.imdb_id&&n.external_ids&&n.external_ids.imdb_id&&(n.imdb_id=n.external_ids.imdb_id),n})},getSeasonDetails(s,e){return b(this,null,function*(){return(yield j(`/tv/${s}/season/${e}`,{},z.SEASON)).episodes||[]})},searchMulti(s,e=1){return b(this,null,function*(){return!s||!s.trim()?[]:((yield j("/search/multi",{query:s.trim(),page:e,include_adult:!1},z.SEARCH)).results||[]).filter(n=>(n.media_type==="movie"||n.media_type==="tv")&&(n.poster_path||n.backdrop_path))})}},D={ENTER:13,LEFT:37,UP:38,RIGHT:39,DOWN:40,BACK:10009,BACKSPACE:8,MEDIA_PLAY_PAUSE:10252,MEDIA_PLAY:415,MEDIA_PAUSE:19,MEDIA_STOP:413,MEDIA_FAST_FORWARD:417,MEDIA_REWIND:412,MEDIA_TRACK_NEXT:10233,MEDIA_TRACK_PREVIOUS:10232};class hn{constructor(){this.currentFocusedElement=null,this.scopeStack=[],this.backHandlers=[],this.mediaKeyHandlers=[],this.isEnabled=!0,this.lastNavTime=0,this.throttleMs=40,this.pressTimer=null,this.pressTarget=null,this.longPressFired=!1,this.HOLD_MS=550}get activeScope(){for(;this.scopeStack.length>0;){const e=this.scopeStack[this.scopeStack.length-1];if(document.body.contains(e))return e;this.scopeStack.pop()}return null}init(){this.registerTizenHardwareKeys(),window.addEventListener("keydown",this.handleKeyDown.bind(this),{capture:!0}),window.addEventListener("focusin",this.handleFocusIn.bind(this)),setTimeout(()=>{this.focusFirstAvailable()},150)}registerTizenHardwareKeys(){try{window.tizen&&window.tizen.tvinputdevice&&["MediaPlayPause","MediaPlay","MediaPause","MediaStop","MediaFastForward","MediaRewind","MediaTrackNext","MediaTrackPrevious"].forEach(t=>{try{window.tizen.tvinputdevice.registerKey(t)}catch(n){}})}catch(e){console.warn("Tizen key registration skipped:",e)}}setScope(e){e&&(this.scopeStack=this.scopeStack.filter(t=>t!==e),this.scopeStack.push(e),this.focusFirstAvailable())}clearScope(e){e?this.scopeStack=this.scopeStack.filter(t=>t!==e):this.scopeStack.pop(),this.focusFirstAvailable()}pushBackHandler(e){this.backHandlers.push(e)}popBackHandler(e){e?this.backHandlers=this.backHandlers.filter(t=>t!==e):this.backHandlers.pop()}pushMediaKeyHandler(e){this.mediaKeyHandlers.push(e)}popMediaKeyHandler(e){e?this.mediaKeyHandlers=this.mediaKeyHandlers.filter(t=>t!==e):this.mediaKeyHandlers.pop()}getFocusableElements(){const e=this.activeScope||document.body;return Array.from(e.querySelectorAll('button, a, input, select, textarea, [tabindex="0"], .focusable')).filter(n=>this.isVisibleFocusable(n))}isVisibleFocusable(e){if(e.disabled||e.getAttribute("aria-hidden")==="true"||e.getAttribute("tabindex")==="-1"||e.offsetParent===null&&window.getComputedStyle(e).position!=="fixed")return!1;const t=window.getComputedStyle(e);return this.activeScope&&this.activeScope.contains(e)?t.display!=="none"&&t.visibility!=="hidden":t.display!=="none"&&t.visibility!=="hidden"&&t.opacity!=="0"}focusFirstAvailable(){const e=this.getFocusableElements();if(e.length>0){const t=e.find(n=>n.classList.contains("primary-focus"))||e[0];this.setFocus(t)}}focusElement(e,t=!0){return this.setFocus(e,t)}setFocus(e,t=!0){if(!e)return;if(this.currentFocusedElement&&this.currentFocusedElement!==e&&(this.currentFocusedElement.classList.remove("tflix-focused"),this.currentFocusedElement.blur()),this.currentFocusedElement=e,e.classList.add("tflix-focused"),!this.isTextInput(e))try{e.focus({preventScroll:!0})}catch(i){e.focus()}t&&e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"});const n={element:e};Object.defineProperty(n,"text",{enumerable:!0,get:()=>e.innerText||e.getAttribute("aria-label")||e.tagName}),window.dispatchEvent(new CustomEvent("tflix:focuschange",{detail:n}))}handleFocusIn(e){const t=e.target;!t||t===this.currentFocusedElement||!t.classList||!t.classList.contains("focusable")||(this.currentFocusedElement&&this.currentFocusedElement.classList.remove("tflix-focused"),this.currentFocusedElement=t,t.classList.add("tflix-focused"))}handleKeyDown(e){if(!this.isEnabled)return;const t=Date.now();if(t-this.lastNavTime<this.throttleMs)return;const n=e.keyCode||e.which,i=e.key;if(n===D.BACK||i==="Escape"||n===D.BACKSPACE&&!this.isTextInput(document.activeElement)){e.preventDefault(),e.stopPropagation(),this.handleBack();return}if((n===D.MEDIA_PLAY_PAUSE||n===D.MEDIA_PLAY||n===D.MEDIA_PAUSE||n===D.MEDIA_STOP||n===D.MEDIA_FAST_FORWARD||n===D.MEDIA_REWIND||n===D.MEDIA_TRACK_NEXT||n===D.MEDIA_TRACK_PREVIOUS||i==="MediaPlayPause"||i==="MediaPlay"||i==="MediaPause")&&this.mediaKeyHandlers.length>0){e.preventDefault();const a=this.mediaKeyHandlers[this.mediaKeyHandlers.length-1];a(n,i);return}if(n===D.ENTER||i==="Enter"){if(this.currentFocusedElement&&document.body.contains(this.currentFocusedElement)){if(this.isTextInput(this.currentFocusedElement)){if(e.preventDefault(),document.activeElement!==this.currentFocusedElement)try{this.currentFocusedElement.focus({preventScroll:!0})}catch(a){this.currentFocusedElement.focus()}else this.currentFocusedElement.dispatchEvent(new Event("change",{bubbles:!0}));return}if(e.preventDefault(),this.currentFocusedElement.dataset.hold==="1"){this.handleHoldableEnter(e,this.currentFocusedElement);return}if(this.currentFocusedElement.dataset.manualEnter==="1")return;this.currentFocusedElement.click();return}else if(this.focusFirstAvailable(),this.currentFocusedElement){e.preventDefault(),this.currentFocusedElement.click();return}}let r=null;if(n===D.UP||i==="ArrowUp"?r="UP":n===D.DOWN||i==="ArrowDown"?r="DOWN":n===D.LEFT||i==="ArrowLeft"?r="LEFT":(n===D.RIGHT||i==="ArrowRight")&&(r="RIGHT"),r){if(this.isTextInput(document.activeElement)&&(r==="LEFT"||r==="RIGHT")){const a=document.activeElement,o=(a.value||"").length,l=a.selectionStart;if(o>0&&(r==="LEFT"&&l>0||r==="RIGHT"&&l<o))return}if(this.currentFocusedElement&&this.currentFocusedElement.dataset.lockHorizontal==="1"&&(r==="LEFT"||r==="RIGHT"))return;e.preventDefault(),this.lastNavTime=t,this.navigate(r)}}handleHoldableEnter(e,t){if(e.repeat||this.pressTimer)return;this.longPressFired=!1,this.pressTarget=t,this.pressTimer=setTimeout(()=>{this.longPressFired=!0,this.pressTimer=null,this.pressTarget&&document.body.contains(this.pressTarget)&&this.pressTarget.dispatchEvent(new CustomEvent("tflix:longpress",{bubbles:!0}))},this.HOLD_MS);const n=i=>{(i.keyCode||i.which)!==D.ENTER&&i.key!=="Enter"||(window.removeEventListener("keyup",n,{capture:!0}),this.pressTimer&&(clearTimeout(this.pressTimer),this.pressTimer=null),!this.longPressFired&&this.pressTarget&&document.body.contains(this.pressTarget)&&this.pressTarget.click(),this.pressTarget=null)};window.addEventListener("keyup",n,{capture:!0})}isTextInput(e){if(!e)return!1;const t=e.tagName.toLowerCase();return t==="input"||t==="textarea"}handleBack(){if(this.backHandlers.length>0){const e=this.backHandlers[this.backHandlers.length-1];if(e()!==!1)return}this.exitApp()}exitApp(){if(window.tizen&&window.tizen.application)try{return window.tizen.application.getCurrentApplication().exit(),!0}catch(e){console.warn("tizen.application.exit() failed:",e)}try{return window.close(),!0}catch(e){console.warn("window.close() failed:",e)}return!1}navigate(e){const t=this.activeScope||document.body,n=Array.from(t.querySelectorAll('button, a, input, select, textarea, [tabindex="0"], .focusable'));if(n.length===0)return;if(!this.currentFocusedElement||!n.includes(this.currentFocusedElement)){const u=n.filter(p=>this.isVisibleFocusable(p));u.length>0&&this.setFocus(u[0]);return}const i="nav"+e.charAt(0)+e.slice(1).toLowerCase(),r=this.currentFocusedElement.dataset[i];if(r){const u=t.querySelector(r);if(u&&n.includes(u)&&this.isVisibleFocusable(u)){this.setFocus(u);return}}const a=this.currentFocusedElement.getBoundingClientRect(),o=e==="UP"||e==="DOWN",l=[];for(const u of n){if(u===this.currentFocusedElement)continue;const p=u.getBoundingClientRect();this.isInDirection(a,p,e)&&l.push({el:u,rect:p})}let d=null,c=!1,h=1/0;for(const{el:u,rect:p}of l){if(!this.isVisibleFocusable(u))continue;const y=this.getPerpendicularOverlap(a,p,e)>0;if(o&&!y||c&&!y)continue;const f=this.calculateDistance(a,p,e);(y&&!c||f<h)&&(h=f,d=u,c=y)}d&&this.setFocus(d)}getPerpendicularOverlap(e,t,n){return n==="UP"||n==="DOWN"?Math.max(0,Math.min(e.right,t.right)-Math.max(e.left,t.left)):Math.max(0,Math.min(e.bottom,t.bottom)-Math.max(e.top,t.top))}isInDirection(e,t,n){const i={x:e.left+e.width/2,y:e.top+e.height/2},r={x:t.left+t.width/2,y:t.top+t.height/2},a=8;switch(n){case"UP":return r.y<i.y-a;case"DOWN":return r.y>i.y+a;case"LEFT":return r.x<i.x-a;case"RIGHT":return r.x>i.x+a;default:return!1}}calculateDistance(e,t,n){const i={x:e.left+e.width/2,y:e.top+e.height/2},r={x:t.left+t.width/2,y:t.top+t.height/2},a=r.x-i.x,o=r.y-i.y;return n==="LEFT"||n==="RIGHT"?Math.abs(a)+Math.abs(o)*2.5:Math.abs(o)+Math.abs(a)*2.5}}const M=new hn,pn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-house"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
</svg>
`,gn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-film"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M7 3v18" />
  <path d="M3 7.5h4" />
  <path d="M3 12h18" />
  <path d="M3 16.5h4" />
  <path d="M17 3v18" />
  <path d="M17 7.5h4" />
  <path d="M17 16.5h4" />
</svg>
`,fn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-tv"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m17 2-5 5-5-5" />
  <rect width="20" height="15" x="2" y="7" rx="2" />
</svg>
`,vn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-bookmark"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
</svg>
`,mn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-bookmark-plus"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 7v6" />
  <path d="M15 10H9" />
  <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
</svg>
`,yn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-bookmark-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
  <path d="m9 10 2 2 4-4" />
</svg>
`,bn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-search"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" />
</svg>
`,wn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-settings"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
  <circle cx="12" cy="12" r="3" />
</svg>
`,xn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-x"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18 6 6 18" />
  <path d="m6 6 12 12" />
</svg>
`,En=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-play"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
</svg>
`,Sn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-pause"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect x="14" y="3" width="5" height="18" rx="1" />
  <rect x="5" y="3" width="5" height="18" rx="1" />
</svg>
`,kn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-skip-forward"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 4v16" />
  <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />
</svg>
`,Cn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-rewind"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z" />
  <path d="M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z" />
</svg>
`,Tn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-fast-forward"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" />
  <path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" />
</svg>
`,Mn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-captions"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
  <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
</svg>
`,Pn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-wifi"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 20h.01" />
  <path d="M2 8.82a15 15 0 0 1 20 0" />
  <path d="M5 12.859a10 10 0 0 1 14 0" />
  <path d="M8.5 16.429a5 5 0 0 1 7 0" />
</svg>
`,In=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-qr-code"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="5" height="5" x="3" y="3" rx="1" />
  <rect width="5" height="5" x="16" y="3" rx="1" />
  <rect width="5" height="5" x="3" y="16" rx="1" />
  <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
  <path d="M21 21v.01" />
  <path d="M12 7v3a2 2 0 0 1-2 2H7" />
  <path d="M3 12h.01" />
  <path d="M12 3h.01" />
  <path d="M12 16v.01" />
  <path d="M16 12h1" />
  <path d="M21 12v.01" />
  <path d="M12 21v-1" />
</svg>
`,An=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-smartphone"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
  <path d="M12 18h.01" />
</svg>
`,_n=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-zap"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z" />
</svg>
`,$n=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-rotate-ccw"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
</svg>
`,Bn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-plug"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 22v-5" />
  <path d="M15 8V2" />
  <path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" />
  <path d="M9 8V2" />
</svg>
`,Ln=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-clock"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M12 6v6l4 2" />
</svg>
`,Rn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-flame"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
</svg>
`,Nn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-popcorn"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" />
  <path d="M10 22 9 8" />
  <path d="m14 22 1-14" />
  <path d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z" />
</svg>
`,Dn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
</svg>
`,Hn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-rocket"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" />
  <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />
</svg>
`,zn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-drama"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 11h.01" />
  <path d="M14 6h.01" />
  <path d="M18 6h.01" />
  <path d="M6.5 13.1h.01" />
  <path d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" />
  <path d="M17.4 9.9c-.8.8-2 .8-2.8 0" />
  <path d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7" />
  <path d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" />
</svg>
`,Fn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-satellite"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5" />
  <path d="M16.5 7.5 19 5" />
  <path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5" />
  <path d="M9 21a6 6 0 0 0-6-6" />
  <path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z" />
</svg>
`,Un=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-chevron-left"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m15 18-6-6 6-6" />
</svg>
`,qn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-chevron-right"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m9 18 6-6-6-6" />
</svg>
`,Kn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-chevron-down"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m6 9 6 6 6-6" />
</svg>
`,Vn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 6 9 17l-5-5" />
</svg>
`,jn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-plus"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 12h14" />
  <path d="M12 5v14" />
</svg>
`,On=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-key"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m2 21 9.6-9.6" />
  <path d="m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19" />
  <circle cx="15.5" cy="7.5" r="5.5" />
</svg>
`,Wn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-list-video"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 5H3" />
  <path d="M10 12H3" />
  <path d="M10 19H3" />
  <path d="M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" />
</svg>
`,Yn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-trash-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
</svg>
`,Jn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-refresh-cw"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
  <path d="M21 3v5h-5" />
  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
  <path d="M8 16H3v5" />
</svg>
`,Gn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-download"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" />
</svg>
`,Qn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-folder-open"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />
</svg>
`,Xn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-server"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
  <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
  <line x1="6" x2="6.01" y1="6" y2="6" />
  <line x1="6" x2="6.01" y1="18" y2="18" />
</svg>
`,Zn=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-circle-alert"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <line x1="12" x2="12" y1="8" y2="12" />
  <line x1="12" x2="12.01" y1="16" y2="16" />
</svg>
`,ei=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-triangle-alert"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
  <path d="M12 9v4" />
  <path d="M12 17h.01" />
</svg>
`,ti=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-ellipsis-vertical"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="1" />
  <circle cx="12" cy="5" r="1" />
  <circle cx="12" cy="19" r="1" />
</svg>
`,ni=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-loader-circle"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
</svg>
`,ii=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-eye"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
  <circle cx="12" cy="12" r="3" />
</svg>
`,si=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-eye-off"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
  <path d="m2 2 20 20" />
</svg>
`,ri=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-info"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M12 16v-4" />
  <path d="M12 8h.01" />
</svg>
`,ai=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-plug-zap"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
  <path d="m2 22 3-3" />
  <path d="M7.5 13.5 10 11" />
  <path d="M10.5 16.5 13 14" />
  <path d="m18 3-4 4h6l-4 4" />
</svg>
`,oi=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-keyboard"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 8h.01" />
  <path d="M12 12h.01" />
  <path d="M14 8h.01" />
  <path d="M16 12h.01" />
  <path d="M18 8h.01" />
  <path d="M6 8h.01" />
  <path d="M7 16h10" />
  <path d="M8 12h.01" />
  <rect width="20" height="16" x="2" y="4" rx="2" />
</svg>
`,li=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-flag"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
</svg>
`,di=`<!-- @license lucide-static v1.39.0 - ISC -->
<svg
  class="lucide lucide-compass"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
</svg>
`,ci={home:pn,film:gn,tv:fn,bookmark:vn,"bookmark-plus":mn,"bookmark-check":yn,search:bn,settings:wn,x:xn,play:En,pause:Sn,"skip-forward":kn,rewind:Cn,"fast-forward":Tn,captions:Mn,wifi:Pn,"qr-code":In,smartphone:An,zap:_n,"rotate-ccw":$n,plug:Bn,clock:Ln,flame:Rn,popcorn:Nn,star:Dn,rocket:Hn,drama:zn,satellite:Fn,"chevron-left":Un,"chevron-right":qn,"chevron-down":Kn,check:Vn,plus:jn,key:On,"list-video":Wn,"trash-2":Yn,"refresh-cw":Jn,download:Gn,"folder-open":Qn,server:Xn,"circle-alert":Zn,"triangle-alert":ei,"ellipsis-vertical":ti,"loader-circle":ni,eye:ii,"eye-off":si,info:ri,"plug-zap":ai,keyboard:oi,flag:li,compass:di};function m(s,{size:e=18,className:t=""}={}){const n=ci[s];return n?n.replace(/<!--[\s\S]*?-->\n?/,"").replace(/width="24"/,`width="${e}"`).replace(/height="24"/,`height="${e}"`).replace('class="lucide',`class="icon${t?` ${t}`:""} lucide`).trim():""}function me({item:s,onPlay:e,onDetails:t}){const n=document.createElement("div");if(n.className="hero-banner",!s)return n.style.display="none",n;const i=s.title||s.name||"Featured Title",r=L.getBackdropUrl(s.backdrop_path,"w1280"),a=(s.release_date||s.first_air_date||"").substring(0,4),o=s.vote_average?s.vote_average.toFixed(1):"N/A",l=s.overview||"No description available.",d=s.media_type==="tv"||s.mediaType==="tv"||!!s.first_air_date,c=d?"TV SERIES":"MOVIE";return r&&(n.style.backgroundImage=`url('${r}')`),n.innerHTML=`
    <div class="hero-backdrop-gradient"></div>
    <div class="hero-content">
      <div class="hero-tag">${m("star",{size:13})} SPOTLIGHT ${c}</div>
      <h1 class="hero-title">${i}</h1>
      <div class="hero-meta">
        <span class="rating-badge">${m("star",{size:14})} ${o}</span>
        ${a?`<span>•</span><span>${a}</span>`:""}
        <span>•</span><span>TMDB HD</span>
      </div>
      <p class="hero-overview">${l}</p>
      <div class="hero-actions">
        <button class="btn btn-primary focusable primary-focus" id="hero-play-btn">
          ${m("play")} Play Now
        </button>
        <button class="btn btn-secondary focusable" id="hero-details-btn">
          ${m("info")} More Info
        </button>
      </div>
    </div>
  `,n.querySelector("#hero-play-btn").addEventListener("click",()=>{e(V(K({},s),{media_type:d?"tv":"movie",mediaType:d?"tv":"movie",title:i}))}),n.querySelector("#hero-details-btn").addEventListener("click",()=>{t(s)}),n}function H({title:s,items:e,icon:t="film",onItemSelect:n}){const i=document.createElement("div");if(i.className="media-section",!e||e.length===0)return i.style.display="none",i;const r=document.createElement("h2");r.className="section-title",r.innerHTML=`${m(t,{size:20})} <span>${s}</span>`,i.appendChild(r);const a=document.createElement("div");return a.className="media-carousel",e.forEach(o=>{const l=document.createElement("div");l.className="media-card focusable",l.setAttribute("tabindex","0");const d=o.title||o.name||"Untitled",c=L.getImageUrl(o.poster_path,"w342"),h=o.media_type==="tv"||o.mediaType==="tv",u=(o.release_date||o.first_air_date||"").substring(0,4),p=o.vote_average?o.vote_average.toFixed(1):"",y=h&&o.season&&o.episode?`S${o.season} E${o.episode}`:"";l.innerHTML=`
      <img src="${c}" alt="${d}" loading="lazy" />
      <div class="media-card-info">
        <div class="media-card-title">${d}</div>
        <div class="media-card-sub">
          <span>${y||u}</span>
          ${p?`<span style="color:#fbbf24; font-weight:700; display:inline-flex; align-items:center; gap:3px;">${m("star",{size:11})} ${p}</span>`:""}
        </div>
      </div>
    `,l.addEventListener("click",()=>{n(o)}),a.appendChild(l)}),i.appendChild(a),i}function ui(s){const e=s.duration||0,t=s.currentTime||0,n=Math.max(0,Math.round((e-t)/60));return n<=0?"":n>=60?`${Math.floor(n/60)}h ${n%60}m left`:`${n}m left`}function hi({items:s,onItemSelect:e,onChanged:t}){const n=document.createElement("div");n.className="media-section";const i=document.createElement("h2");i.className="section-title",i.innerHTML=`${m("clock",{size:20})} <span>Continue Watching</span>`,n.appendChild(i);const r=document.createElement("div");r.className="media-carousel",n.appendChild(r);function a(){r.innerHTML="";const l=I.getHistory();if(l.length===0){n.style.display="none";return}n.style.display="",l.forEach(d=>{const c=document.createElement("div");c.className="media-card continue-card focusable",c.setAttribute("tabindex","0"),c.setAttribute("data-hold","1");const h=d.title||d.name||"Untitled",u=L.getImageUrl(d.poster_path,"w342"),y=(d.media_type==="tv"||d.mediaType==="tv")&&d.season&&d.episode?`S${d.season} E${d.episode}`:"",f=ui(d);c.innerHTML=`
        <img src="${u}" alt="${h}" loading="lazy" />
        ${y||f?`
          <div class="cw-badge">${[y,f].filter(Boolean).join(" · ")}</div>
        `:""}
        <div class="cw-progress-track"><div class="cw-progress-fill" style="width:${d.progress||0}%"></div></div>
        <div class="media-card-info">
          <div class="media-card-title">${h}</div>
          <div class="media-card-sub"><span>${y||f||"Resume"}</span></div>
        </div>
      `,c.addEventListener("click",()=>e(d)),c.addEventListener("tflix:longpress",()=>o(d)),c.addEventListener("contextmenu",$=>{$.preventDefault(),o(d)});let P=null;const S=()=>{P&&(clearTimeout(P),P=null)};c.addEventListener("mousedown",()=>{S(),P=setTimeout(()=>o(d),550)}),["mouseup","mouseleave"].forEach($=>c.addEventListener($,S)),r.appendChild(c)})}function o(l){const d=l.title||l.name||"Untitled",c=document.createElement("div");c.className="modal-overlay cw-context-overlay",c.innerHTML=`
      <div class="modal-container cw-context-menu">
        <h3 class="cw-context-title">${d}</h3>
        <button class="btn btn-primary focusable primary-focus" id="cw-ctx-play">${m("play")} Continue Watching</button>
        <button class="btn btn-secondary focusable" id="cw-ctx-remove" style="color:#ef4444;">${m("trash-2")} Remove from Continue Watching</button>
        <button class="btn btn-secondary focusable" id="cw-ctx-cancel">${m("x")} Cancel</button>
      </div>
    `,document.body.appendChild(c);const h=()=>u();M.setScope(c),M.pushBackHandler(h);function u(){M.popBackHandler(h),M.clearScope(c),c.parentNode&&c.parentNode.removeChild(c)}c.querySelector("#cw-ctx-play").addEventListener("click",()=>{u(),e(l)}),c.querySelector("#cw-ctx-remove").addEventListener("click",()=>{I.removeFromHistory(l.source||"tmdb",l.id),u(),a(),t&&t()}),c.querySelector("#cw-ctx-cancel").addEventListener("click",()=>u())}return a(),(!s||s.length===0)&&(n.style.display="none"),n}function Nt({ranges:s,currentStart:e,onSelect:t}){const n=document.createElement("div");n.className="modal-overlay range-menu-overlay",n.innerHTML=`
    <div class="modal-container range-menu">
      <h3 class="range-menu-title">Jump to Episode Range</h3>
      <div class="range-menu-list">
        ${s.map(o=>`
          <button class="range-menu-item focusable ${o.start===e?"active":""}" data-range-start="${o.start}">
            Episodes ${o.start}–${o.end}
          </button>
        `).join("")}
      </div>
      <button class="btn btn-secondary focusable" id="range-menu-cancel">${m("x")} Cancel</button>
    </div>
  `,document.body.appendChild(n);const i=()=>(r(),!0);M.setScope(n),M.pushBackHandler(i);function r(){M.popBackHandler(i),M.clearScope(n),n.parentNode&&n.parentNode.removeChild(n)}n.querySelectorAll(".range-menu-item").forEach(o=>{o.addEventListener("click",()=>{const l=parseInt(o.dataset.rangeStart,10);r(),t(l)})}),n.querySelector("#range-menu-cancel").addEventListener("click",r);const a=n.querySelector(".range-menu-item.active");return a&&M.setFocus(a),r}const J="http://127.0.0.1:47993",pi=2e3,X=45e3;function G(s,e){return b(this,null,function*(){const t=new AbortController,n=setTimeout(()=>t.abort(),e);try{return yield fetch(s,{signal:t.signal})}finally{clearTimeout(n)}})}let le=null;function O(){return b(this,null,function*(){if(le===!0)return!0;try{le=(yield G(`${J}/health`,pi)).ok}catch(s){le=!1}return le})}function Qi(s,e,t=1,n=1,i=null,r=!1){return b(this,null,function*(){var P;if(!(yield O()))throw new Error("Local stream relay is not running. Direct providers require TizenBrew's serviceFile support.");const o=e.media_type==="tv"||e.mediaType==="tv",d=(e.title||e.name||"").replace(/\s*-\s*S\d+E\d+\s*$/i,""),c=(e.release_date||e.first_air_date||"").split("-")[0]||"",h=e.imdb_id||((P=e.external_ids)==null?void 0:P.imdb_id)||"",u=i||I.getConfirmedShowId(s,String(e.id),o?t:null),p=new URLSearchParams({provider:s,tmdbId:String(e.id),imdbId:h,title:d,year:c,isTv:o?"1":"0",season:String(t),episode:String(n),confirmedShowId:u||"",forceConfirm:r?"1":"0"}),y=yield G(`${J}/resolve?${p.toString()}`,X),f=yield y.json();if(!y.ok)throw new Error(f.error||`${s} failed to resolve`);if(f.needsConfirmation)return{needsConfirmation:!0,candidates:f.candidates||[],providerId:s,providerName:f.providerName};if(f.embedUrl)return{embedUrl:f.embedUrl,providerId:s,providerName:f.providerName};if(!f.streamUrl)throw new Error(`${s} did not return a stream URL`);return{streamUrl:f.streamUrl,subtitles:f.subtitles||[],providerId:s,providerName:f.providerName}})}function gi(s,e,t=null){return b(this,null,function*(){const n=I.getConfirmedShowId(s,String(e),t);if(!n)return null;const i=I.getEpisodeAvailability(s,String(e),t);if(i)return i;if(!(yield O()))return null;const a=new URLSearchParams({provider:s,confirmedShowId:n});try{const o=yield G(`${J}/episodes?${a.toString()}`,X);if(!o.ok)return null;const l=yield o.json();return Array.isArray(l.episodes)?(I.setEpisodeAvailability(s,String(e),l.episodes,t),l.episodes):null}catch(o){return null}})}function Xi(s,e,t,n=1,i=1){return b(this,null,function*(){if(!(yield O()))throw new Error("Local stream relay is not running. Direct providers require TizenBrew's serviceFile support.");const a=new URLSearchParams({provider:s,native:"1",confirmedShowId:String(e),isTv:t?"1":"0",season:String(n),episode:String(i)}),o=yield G(`${J}/resolve?${a.toString()}`,X),l=yield o.json();if(!o.ok)throw new Error(l.error||`${s} failed to resolve`);if(l.embedUrl)return{embedUrl:l.embedUrl,providerId:s,providerName:l.providerName};if(!l.streamUrl)throw new Error(`${s} did not return a stream URL`);return{streamUrl:l.streamUrl,subtitles:l.subtitles||[],providerId:s,providerName:l.providerName}})}function nt(s,e,t=1){return b(this,null,function*(){if(!(yield O()))throw new Error("Local stream relay is not running.");const i=new URLSearchParams({provider:s,category:e,page:String(t)}),r=yield G(`${J}/browse?${i.toString()}`,X),a=yield r.json();if(!r.ok)throw new Error(a.error||`${s} browse failed`);return{items:a.items||[],hasMore:!!a.hasMore}})}function fi(s,e){return b(this,null,function*(){if(!(yield O()))throw new Error("Local stream relay is not running.");const n=new URLSearchParams({provider:s,q:e}),i=yield G(`${J}/search-native?${n.toString()}`,X),r=yield i.json();if(!i.ok)throw new Error(r.error||`${s} search failed`);return{items:r.items||[]}})}function Dt(s,e){return b(this,null,function*(){if(!(yield O()))return{seasons:[]};const n=new URLSearchParams({provider:s,nativeId:e}),i=yield G(`${J}/seasons?${n.toString()}`,X),r=yield i.json();return i.ok?{seasons:r.seasons||[]}:{seasons:[]}})}function Ht(s,e,t=null){return b(this,null,function*(){if(!(yield O()))throw new Error("Local stream relay is not running.");const i=new URLSearchParams({provider:s,nativeId:e});t&&i.set("seasonId",t);const r=yield G(`${J}/native-episodes?${i.toString()}`,X),a=yield r.json();if(!r.ok)throw new Error(a.error||`${s} episode listing failed`);return{episodes:a.episodes||[]}})}const Ve="http://127.0.0.1:47993",vi="https://tflix-providers.zyrex.workers.dev/index.json";let je=[],zt=[];function he(){return b(this,null,function*(){try{const s=yield fetch(`${Ve}/providers`);if(!s.ok)return!1;const e=yield s.json();return je=(e.providers||[]).map(t=>({id:t.id,name:t.name,description:t.description||"",type:"direct",packManifestUrl:t.packManifestUrl||null,packName:t.packName||null,fuzzyMatch:!!t.fuzzyMatch,supportsAvailability:!!t.supportsAvailability,catalogMode:t.catalogMode||"tmdb",catalogTypes:t.catalogTypes||[],catalogCategories:t.catalogCategories||[],disableTmdbArtFallback:!!t.disableTmdbArtFallback})),zt=e.packs||[],!0}catch(s){return!1}})}function it(){return zt}function mi(s){return b(this,null,function*(){const e=yield fetch(`${Ve}/packs/uninstall`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:s})}),t=yield e.json();if(!e.ok)throw new Error(t.error||"Uninstall failed");return yield he(),t})}function Ft(){return b(this,arguments,function*(s=vi){const e=yield fetch(s);if(!e.ok)throw new Error(`Failed to load pack catalog (${e.status})`);const t=yield e.json();if(!Array.isArray(t))throw new Error("Invalid catalog: expected an array");return t})}function Ut(s){return b(this,null,function*(){const e=yield fetch(`${Ve}/packs/install`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:s})}),t=yield e.json();if(!e.ok)throw new Error(t.error||"Install failed");return yield he(),t})}function yi(s){return b(this,null,function*(){const e=s&&s.trim();if(!e)throw new Error("Enter a provider repository URL first");const t=yield fetch(e);if(!t.ok)throw new Error(`Failed to load providers (${t.status}): ${t.statusText}`);const n=yield t.json();if(!Array.isArray(n))throw new Error("Invalid provider list: Root must be a JSON array of providers");const i=n.filter(a=>a&&a.id&&a.name&&(a.movieUrl||a.tvUrl||a.getMovieUrl||a.getTvUrl));if(i.length===0)throw new Error("No valid providers found in the specified repository");const r=i.filter(a=>a.type!=="direct").map(a=>({id:String(a.id),name:String(a.name),description:String(a.description||""),type:"embed",movieUrl:a.movieUrl||(typeof a.getMovieUrl=="string"?a.getMovieUrl:""),tvUrl:a.tvUrl||(typeof a.getTvUrl=="string"?a.getTvUrl:"")}));return I.addProviderSource(e,r),r})}function ae(){const s=I.getCustomProviders().filter(e=>e.type!=="direct");return[...je,...s]}function de(){return je.filter(s=>s.catalogMode==="native")}function qt(s){const e=ae();if(e.length===0)return null;const t=e.find(n=>n.id===s);return t||e.find(n=>n.catalogMode!=="native")||null}function bi(s){const e=ae().filter(i=>i.catalogMode!=="native");if(e.length===0)return[];if(s){const i=e.find(r=>r.id===s);if(i){const r=e.filter(l=>l.id!==s),a=r.filter(l=>l.type==="direct"),o=r.filter(l=>l.type!=="direct");return[i,...a,...o]}}const t=e.filter(i=>i.type==="direct"),n=e.filter(i=>i.type!=="direct");return[...t,...n]}function Zi(s,e=new Set){const t=bi(s);for(const n of t)if(n.id!==s&&!e.has(n.id))return n;return null}function es(s){const e=qt(s);return!!(e&&e.type==="direct")}function ts(s,e,t,n=1,i=1,r=0){const a=qt(s);if(!a)return"";const o=e==="tv";let l=o?a.tvUrl||a.movieUrl||"":a.movieUrl||a.tvUrl||"";if(!l)return"";let d=l.replace(/\{id\}/g,encodeURIComponent(String(t))).replace(/\{season\}/g,encodeURIComponent(String(n))).replace(/\{episode\}/g,encodeURIComponent(String(i))).replace(/\{type\}/g,o?"tv":"movie");if(a.id==="vidlink"&&r>10){const c=d.includes("?")?"&":"?";d=`${d}${c}startAt=${Math.floor(r)}`}return d}const ye=25;class wi{constructor({item:e,onPlay:t,onClose:n}){this.item=e,this.onPlay=t,this.onClose=n,this.details=null,this.selectedSeason=1,this.episodes=[],this.ranges=null,this.selectedRangeStart=1,this.modalEl=null,this.backHandler=this.close.bind(this),this.availableEpisodes=null,this.availabilityProviderId=null}loadAvailability(){return b(this,null,function*(){const e=I.getDefaultProvider();if(!e)return;const t=ae().find(i=>i.id===e);if(!t||!t.supportsAvailability)return;const n=yield gi(e,this.details.id,this.selectedSeason);n&&(this.availableEpisodes=new Set(n),this.availabilityProviderId=e,this.modalEl&&document.body.contains(this.modalEl)&&this.renderEpisodeCards())})}render(){return b(this,null,function*(){this.modalEl=document.createElement("div"),this.modalEl.className="modal-overlay";const e=this.item.media_type||this.item.mediaType||(this.item.first_air_date?"tv":"movie");this.modalEl.innerHTML=`
      <div class="modal-container">
        <div style="padding: 60px; text-align: center; color: #a1a1aa;">
          <div style="font-size: 24px; font-weight: 700; margin-bottom: 12px; color: #fff;">Loading Details...</div>
          <div>Connecting to TMDB</div>
        </div>
      </div>
    `,document.body.appendChild(this.modalEl),M.setScope(this.modalEl),M.pushBackHandler(this.backHandler);try{this.details=yield L.getDetails(e,this.item.id),this.updateContent(),e==="tv"&&this.loadAvailability()}catch(t){console.error("Failed to load details:",t),this.modalEl.innerHTML=`
        <div class="modal-container" style="padding: 40px; text-align: center;">
          <h2 style="color: #e50914; margin-bottom: 16px;">Error Loading Media Details</h2>
          <p style="color: #a1a1aa; margin-bottom: 24px;">${t.message}</p>
          <button class="btn btn-primary focusable" id="details-error-back">Go Back</button>
        </div>
      `,this.modalEl.querySelector("#details-error-back").addEventListener("click",()=>this.close()),M.setScope(this.modalEl)}return this.modalEl})}updateContent(){return b(this,null,function*(){const e=this.details.media_type==="tv"||this.details.mediaType==="tv",t=this.details.title||this.details.name,n=L.getBackdropUrl(this.details.backdrop_path,"w1280"),i=L.getImageUrl(this.details.poster_path,"w342"),r=(this.details.release_date||this.details.first_air_date||"").substring(0,4),a=this.details.vote_average?this.details.vote_average.toFixed(1):"N/A",o=this.details.runtime?`${this.details.runtime} mins`:this.details.number_of_seasons?`${this.details.number_of_seasons} Seasons`:"",l=(this.details.genres||[]).map(f=>`<span class="genre-tag">${f.name}</span>`).join(""),d=I.isInWatchlist("tmdb",this.details.id),c=I.getHistory().find(f=>f.source==="tmdb"&&f.id===this.details.id),h=c?c.season:1,u=c?c.episode:1;let p="";e&&this.details.seasons&&this.details.seasons.length>0&&(p=`
        <div style="margin-top: 24px;">
          <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 8px;">Seasons</h3>
          <div class="season-tabs" id="season-tabs-container">
            ${this.details.seasons.filter(P=>P.season_number>0).map(P=>`
              <button class="season-btn focusable ${P.season_number===this.selectedSeason?"active":""}" data-season="${P.season_number}">
                ${P.name||`Season ${P.season_number}`}${P.episode_count?` <span class="season-ep-count">(${P.episode_count})</span>`:""}
              </button>
            `).join("")}
          </div>
          <button class="range-picker-btn focusable" id="details-range-btn" hidden></button>
          <div class="episodes-grid" id="episodes-container">
            <div style="color: #71717a; padding: 20px;">Loading episodes...</div>
          </div>
        </div>
      `),this.modalEl.innerHTML=`
      <div class="modal-container">
        <div class="details-hero" style="${n?`background-image: url('${n}')`:""}">
          <div class="details-gradient"></div>
        </div>
        <div class="details-content">
          <div class="details-header">
            <div class="details-poster">
              <img src="${i}" alt="${t}" />
            </div>
            <div class="details-info">
              <h1 class="details-title">${t}</h1>
              <div class="details-genres">${l}</div>
              <div class="hero-meta" style="margin-bottom: 18px;">
                <span class="rating-badge">${m("star",{size:14})} ${a}</span>
                ${r?`<span>•</span><span>${r}</span>`:""}
                ${o?`<span>•</span><span>${o}</span>`:""}
                <span>•</span><span>${e?"TV Series":"Movie"}</span>
              </div>
              <p class="hero-overview" style="-webkit-line-clamp: 4; margin-bottom: 20px;">${this.details.overview||"No synopsis available."}</p>
              <div class="hero-actions">
                <button class="btn btn-primary focusable primary-focus" id="details-play-btn">
                  ${m("play")} ${e?`Play S${h} E${u}`:"Play Movie"}
                </button>
                <button class="btn btn-secondary focusable" id="details-watchlist-btn">
                  ${m(d?"bookmark-check":"bookmark-plus")} ${d?"In Watchlist":"Watchlist"}
                </button>
                <button class="btn btn-secondary focusable" id="details-close-btn">
                  ${m("x")} Close
                </button>
              </div>
            </div>
          </div>
          ${p}
        </div>
      </div>
    `,this.modalEl.querySelector("#details-play-btn").addEventListener("click",()=>{const f={id:this.details.id,media_type:e?"tv":"movie",mediaType:e?"tv":"movie",title:t,name:this.details.name||this.details.title,season:h,episode:u,poster_path:this.details.poster_path,backdrop_path:this.details.backdrop_path,vote_average:this.details.vote_average};this.close(),this.onPlay(f)});const y=this.modalEl.querySelector("#details-watchlist-btn");if(y.addEventListener("click",()=>{I.isInWatchlist("tmdb",this.details.id)?(I.removeFromWatchlist("tmdb",this.details.id),y.innerHTML=`${m("bookmark-plus")} Watchlist`):(I.addToWatchlist(this.details),y.innerHTML=`${m("bookmark-check")} In Watchlist`)}),this.modalEl.querySelector("#details-close-btn").addEventListener("click",()=>this.close()),e){this.modalEl.querySelectorAll(".season-btn").forEach(S=>{S.addEventListener("click",$=>{const A=parseInt($.currentTarget.dataset.season,10);this.loadSeasonEpisodes(A)})});const P=this.modalEl.querySelector("#details-range-btn");P&&P.addEventListener("click",()=>this.openRangePicker()),this.loadSeasonEpisodes(this.selectedSeason,h===this.selectedSeason?u:null)}M.setScope(this.modalEl)})}computeRanges(e){if(e.length<=ye)return null;const t=e.map(a=>a.episode_number),n=Math.min(...t),i=Math.max(...t),r=[];for(let a=n;a<=i;a+=ye)r.push({start:a,end:Math.min(a+ye-1,i)});return r}rangeContaining(e){return this.ranges?this.ranges.find(t=>e>=t.start&&e<=t.end)||this.ranges[0]:null}loadSeasonEpisodes(e,t=null){return b(this,null,function*(){this.selectedSeason=e,this.modalEl.querySelectorAll(".season-btn").forEach(r=>{r.classList.toggle("active",parseInt(r.dataset.season,10)===e)});const i=this.modalEl.querySelector("#episodes-container");if(i){i.innerHTML='<div style="color: #71717a; padding: 20px;">Loading episodes...</div>';try{if(this.episodes=yield L.getSeasonDetails(this.details.id,e),this.episodes.length===0){i.innerHTML='<div style="color: #71717a; padding: 20px;">No episodes found for this season.</div>';return}this.ranges=this.computeRanges(this.episodes);const r=t!==null?t:this.episodes[0].episode_number,a=this.rangeContaining(r);this.selectedRangeStart=a?a.start:this.episodes[0].episode_number,this.updateRangeButton(),this.renderEpisodeCards(t)}catch(r){console.error("Failed to load season episodes:",r),i.innerHTML=`<div style="color: #e50914; padding: 20px;">Failed to load episodes: ${r.message}</div>`}}})}updateRangeButton(){const e=this.modalEl.querySelector("#details-range-btn");if(!e)return;if(!this.ranges){e.hidden=!0;return}const t=this.rangeContaining(this.selectedRangeStart);e.hidden=!1,e.innerHTML=`Episodes ${t.start}–${t.end} ${m("chevron-down",{size:14})}`}openRangePicker(){this.ranges&&Nt({ranges:this.ranges,currentStart:this.selectedRangeStart,onSelect:e=>{this.selectedRangeStart=e,this.updateRangeButton(),this.renderEpisodeCards()}})}renderEpisodeCards(e=null){const t=this.modalEl.querySelector("#episodes-container");if(!t)return;const n=this.rangeContaining(this.selectedRangeStart),i=n?this.episodes.filter(a=>a.episode_number>=n.start&&a.episode_number<=n.end):this.episodes,r=this.selectedSeason;t.innerHTML="",i.forEach(a=>{const o=document.createElement("div");o.className="episode-card focusable",o.setAttribute("tabindex","0"),o.dataset.episodeNumber=a.episode_number,o.dataset.navUp=this.ranges?"#details-range-btn":".season-btn.active";const l=a.still_path?L.getImageUrl(a.still_path,"w342"):L.getImageUrl(this.details.backdrop_path,"w342"),d=this.availableEpisodes&&!this.availableEpisodes.has(a.episode_number);d&&o.classList.add("episode-unavailable");const c=d?(ae().find(h=>h.id===this.availabilityProviderId)||{}).name||this.availabilityProviderId:"";o.innerHTML=`
        <div class="episode-thumb">
          <img src="${l}" alt="Episode ${a.episode_number}" loading="lazy" />
          <div class="episode-number">EP ${a.episode_number}</div>
          ${d?`<div class="episode-unavailable-badge" title="Not found on ${c}">${m("flag",{size:12})} Not on ${c}</div>`:""}
        </div>
        <div class="episode-info">
          <div class="episode-title">${a.name||`Episode ${a.episode_number}`}</div>
          <div class="episode-desc">${a.overview||"No episode description."}</div>
        </div>
      `,o.addEventListener("click",()=>{const h={id:this.details.id,media_type:"tv",mediaType:"tv",title:`${this.details.name||this.details.title} - S${r}E${a.episode_number}`,name:this.details.name||this.details.title,season:r,episode:a.episode_number,poster_path:this.details.poster_path,backdrop_path:this.details.backdrop_path,vote_average:this.details.vote_average};this.close(),this.onPlay(h)}),t.appendChild(o)}),e!==null&&setTimeout(()=>{const a=t.querySelector(`.episode-card[data-episode-number="${e}"]`);a&&M.setFocus(a)},50)}close(){M.popBackHandler(this.backHandler),M.clearScope(this.modalEl),this.modalEl&&this.modalEl.parentNode&&this.modalEl.parentNode.removeChild(this.modalEl),this.onClose&&this.onClose()}}class xi{constructor({onSelectMedia:e,onClose:t}){this.onSelectMedia=e,this.onClose=t,this.query="",this.results=[],this.searchTimer=null,this.modalEl=null,this.backHandler=this.close.bind(this)}render(){this.modalEl=document.createElement("div"),this.modalEl.className="modal-overlay",this.modalEl.innerHTML=`
      <div class="modal-container search-container" style="max-width: 1050px; max-height: 90vh;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <div>
            <h2 style="font-size: 26px; font-weight: 800; color: #fff;">Search Catalog</h2>
            <p style="font-size: 13px; color: #71717a;">Type using Samsung TV keyboard or phone via SmartThings</p>
          </div>
          <button class="btn btn-secondary focusable" id="search-close-btn" style="padding: 6px 16px; font-size: 14px;">${m("x")} Close</button>
        </div>

        <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 24px;">
          <input 
            type="text" 
            id="search-input" 
            class="focusable primary-focus" 
            placeholder="Search movies, TV series, titles..." 
            value="${this.query}" 
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
            style="flex: 1; background: #16161f; border: 2px solid rgba(255,255,255,0.15); border-radius: 10px; padding: 16px 20px; color: #fff; font-size: 20px; font-weight: 600; outline: none; transition: border-color 0.2s;"
          />
          <button class="btn btn-secondary focusable" id="search-clear-btn" style="padding: 16px 20px; font-size: 15px;">
            Clear
          </button>
        </div>

        <div>
          <h3 id="results-count" style="font-size: 17px; font-weight: 700; margin-bottom: 14px; color: #d4d4d8;">Search Results</h3>
          <div class="search-results-grid" id="search-results-grid" style="max-height: 55vh;">
            <div style="color: #71717a; padding: 30px 10px; text-align: center;">
              Select the search box above to start searching.
            </div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(this.modalEl);const e=this.modalEl.querySelector("#search-input");return e.addEventListener("input",t=>{this.query=t.target.value,this.triggerSearch()}),this.modalEl.querySelector("#search-clear-btn").addEventListener("click",()=>{this.query="",e.value="",e.focus(),this.triggerSearch()}),this.modalEl.querySelector("#search-close-btn").addEventListener("click",()=>this.close()),M.setScope(this.modalEl),M.pushBackHandler(this.backHandler),this.modalEl}triggerSearch(){clearTimeout(this.searchTimer);const e=this.modalEl.querySelector("#search-results-grid"),t=this.modalEl.querySelector("#results-count");if(!this.query.trim()){e&&(e.innerHTML='<div style="color: #71717a; padding: 30px 10px; text-align: center;">Select the search box above to start searching.</div>'),t&&(t.textContent="Search Results");return}if(!I.hasApiKey()){e&&(e.innerHTML='<div style="color: #ef4444; padding: 30px 10px; text-align: center;">TMDB API Key required. Please enter your API key in Settings.</div>'),t&&(t.textContent="Key Required");return}e&&(e.innerHTML='<div style="color: #71717a; padding: 30px 10px; text-align: center;">Searching TMDB catalog...</div>'),this.searchTimer=setTimeout(()=>b(this,null,function*(){try{if(this.results=yield L.searchMulti(this.query),t&&(t.textContent=`Found ${this.results.length} results for "${this.query}"`),this.results.length===0){e&&(e.innerHTML='<div style="color: #71717a; padding: 30px 10px; text-align: center;">No movies or TV shows matched your search.</div>');return}e&&(e.innerHTML="",this.results.forEach(n=>{const i=document.createElement("div");i.className="media-card focusable",i.setAttribute("tabindex","0");const r=n.title||n.name||"Untitled",a=L.getImageUrl(n.poster_path,"w342"),o=(n.release_date||n.first_air_date||"").substring(0,4),l=n.media_type==="tv"?"TV":"Movie";i.innerHTML=`
              <img src="${a}" alt="${r}" loading="lazy" />
              <div class="media-card-info">
                <div class="media-card-title">${r}</div>
                <div class="media-card-sub">
                  <span>${o}</span>
                  <span style="color:#e50914; font-weight:700;">${l}</span>
                </div>
              </div>
            `,i.addEventListener("click",()=>{this.onSelectMedia(n)}),e.appendChild(i)}))}catch(n){console.error("Search error:",n),e&&(e.innerHTML=`<div style="color: #e50914; padding: 30px 10px; text-align: center;">Search failed: ${n.message}</div>`)}}),250)}close(){clearTimeout(this.searchTimer),M.popBackHandler(this.backHandler),M.clearScope(this.modalEl),this.modalEl&&this.modalEl.parentNode&&this.modalEl.parentNode.removeChild(this.modalEl),this.onClose&&this.onClose()}}function Ei(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ne={},be,st;function Si(){return st||(st=1,be=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),be}var we={},Y={},rt;function Z(){if(rt)return Y;rt=1;let s;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return Y.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},Y.getSymbolTotalCodewords=function(n){return e[n]},Y.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},Y.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');s=n},Y.isKanjiModeEnabled=function(){return typeof s!="undefined"},Y.toSJIS=function(n){return s(n)},Y}var xe={},at;function Oe(){return at||(at=1,(function(s){s.L={bit:1},s.M={bit:0},s.Q={bit:3},s.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return s.L;case"m":case"medium":return s.M;case"q":case"quartile":return s.Q;case"h":case"high":return s.H;default:throw new Error("Unknown EC Level: "+t)}}s.isValid=function(n){return n&&typeof n.bit!="undefined"&&n.bit>=0&&n.bit<4},s.from=function(n,i){if(s.isValid(n))return n;try{return e(n)}catch(r){return i}}})(xe)),xe}var Ee,ot;function ki(){if(ot)return Ee;ot=1;function s(){this.buffer=[],this.length=0}return s.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Ee=s,Ee}var Se,lt;function Ci(){if(lt)return Se;lt=1;function s(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return s.prototype.set=function(e,t,n,i){const r=e*this.size+t;this.data[r]=n,i&&(this.reservedBit[r]=!0)},s.prototype.get=function(e,t){return this.data[e*this.size+t]},s.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},s.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},Se=s,Se}var ke={},dt;function Ti(){return dt||(dt=1,(function(s){const e=Z().getSymbolSize;s.getRowColCoords=function(n){if(n===1)return[];const i=Math.floor(n/7)+2,r=e(n),a=r===145?26:Math.ceil((r-13)/(2*i-2))*2,o=[r-7];for(let l=1;l<i-1;l++)o[l]=o[l-1]-a;return o.push(6),o.reverse()},s.getPositions=function(n){const i=[],r=s.getRowColCoords(n),a=r.length;for(let o=0;o<a;o++)for(let l=0;l<a;l++)o===0&&l===0||o===0&&l===a-1||o===a-1&&l===0||i.push([r[o],r[l]]);return i}})(ke)),ke}var Ce={},ct;function Mi(){if(ct)return Ce;ct=1;const s=Z().getSymbolSize,e=7;return Ce.getPositions=function(n){const i=s(n);return[[0,0],[i-e,0],[0,i-e]]},Ce}var Te={},ut;function Pi(){return ut||(ut=1,(function(s){s.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};s.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},s.from=function(i){return s.isValid(i)?parseInt(i,10):void 0},s.getPenaltyN1=function(i){const r=i.size;let a=0,o=0,l=0,d=null,c=null;for(let h=0;h<r;h++){o=l=0,d=c=null;for(let u=0;u<r;u++){let p=i.get(h,u);p===d?o++:(o>=5&&(a+=e.N1+(o-5)),d=p,o=1),p=i.get(u,h),p===c?l++:(l>=5&&(a+=e.N1+(l-5)),c=p,l=1)}o>=5&&(a+=e.N1+(o-5)),l>=5&&(a+=e.N1+(l-5))}return a},s.getPenaltyN2=function(i){const r=i.size;let a=0;for(let o=0;o<r-1;o++)for(let l=0;l<r-1;l++){const d=i.get(o,l)+i.get(o,l+1)+i.get(o+1,l)+i.get(o+1,l+1);(d===4||d===0)&&a++}return a*e.N2},s.getPenaltyN3=function(i){const r=i.size;let a=0,o=0,l=0;for(let d=0;d<r;d++){o=l=0;for(let c=0;c<r;c++)o=o<<1&2047|i.get(d,c),c>=10&&(o===1488||o===93)&&a++,l=l<<1&2047|i.get(c,d),c>=10&&(l===1488||l===93)&&a++}return a*e.N3},s.getPenaltyN4=function(i){let r=0;const a=i.data.length;for(let l=0;l<a;l++)r+=i.data[l];return Math.abs(Math.ceil(r*100/a/5)-10)*e.N4};function t(n,i,r){switch(n){case s.Patterns.PATTERN000:return(i+r)%2===0;case s.Patterns.PATTERN001:return i%2===0;case s.Patterns.PATTERN010:return r%3===0;case s.Patterns.PATTERN011:return(i+r)%3===0;case s.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(r/3))%2===0;case s.Patterns.PATTERN101:return i*r%2+i*r%3===0;case s.Patterns.PATTERN110:return(i*r%2+i*r%3)%2===0;case s.Patterns.PATTERN111:return(i*r%3+(i+r)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}s.applyMask=function(i,r){const a=r.size;for(let o=0;o<a;o++)for(let l=0;l<a;l++)r.isReserved(l,o)||r.xor(l,o,t(i,l,o))},s.getBestMask=function(i,r){const a=Object.keys(s.Patterns).length;let o=0,l=1/0;for(let d=0;d<a;d++){r(d),s.applyMask(d,i);const c=s.getPenaltyN1(i)+s.getPenaltyN2(i)+s.getPenaltyN3(i)+s.getPenaltyN4(i);s.applyMask(d,i),c<l&&(l=c,o=d)}return o}})(Te)),Te}var ce={},ht;function Kt(){if(ht)return ce;ht=1;const s=Oe(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return ce.getBlocksCount=function(i,r){switch(r){case s.L:return e[(i-1)*4+0];case s.M:return e[(i-1)*4+1];case s.Q:return e[(i-1)*4+2];case s.H:return e[(i-1)*4+3];default:return}},ce.getTotalCodewordsCount=function(i,r){switch(r){case s.L:return t[(i-1)*4+0];case s.M:return t[(i-1)*4+1];case s.Q:return t[(i-1)*4+2];case s.H:return t[(i-1)*4+3];default:return}},ce}var Me={},re={},pt;function Ii(){if(pt)return re;pt=1;const s=new Uint8Array(512),e=new Uint8Array(256);return(function(){let n=1;for(let i=0;i<255;i++)s[i]=n,e[n]=i,n<<=1,n&256&&(n^=285);for(let i=255;i<512;i++)s[i]=s[i-255]})(),re.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},re.exp=function(n){return s[n]},re.mul=function(n,i){return n===0||i===0?0:s[e[n]+e[i]]},re}var gt;function Ai(){return gt||(gt=1,(function(s){const e=Ii();s.mul=function(n,i){const r=new Uint8Array(n.length+i.length-1);for(let a=0;a<n.length;a++)for(let o=0;o<i.length;o++)r[a+o]^=e.mul(n[a],i[o]);return r},s.mod=function(n,i){let r=new Uint8Array(n);for(;r.length-i.length>=0;){const a=r[0];for(let l=0;l<i.length;l++)r[l]^=e.mul(i[l],a);let o=0;for(;o<r.length&&r[o]===0;)o++;r=r.slice(o)}return r},s.generateECPolynomial=function(n){let i=new Uint8Array([1]);for(let r=0;r<n;r++)i=s.mul(i,new Uint8Array([1,e.exp(r)]));return i}})(Me)),Me}var Pe,ft;function _i(){if(ft)return Pe;ft=1;const s=Ai();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(n){this.degree=n,this.genPoly=s.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(n.length+this.degree);i.set(n);const r=s.mod(i,this.genPoly),a=this.degree-r.length;if(a>0){const o=new Uint8Array(this.degree);return o.set(r,a),o}return r},Pe=e,Pe}var Ie={},Ae={},_e={},vt;function Vt(){return vt||(vt=1,_e.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),_e}var F={},mt;function jt(){if(mt)return F;mt=1;const s="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;F.KANJI=new RegExp(t,"g"),F.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),F.BYTE=new RegExp(n,"g"),F.NUMERIC=new RegExp(s,"g"),F.ALPHANUMERIC=new RegExp(e,"g");const i=new RegExp("^"+t+"$"),r=new RegExp("^"+s+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return F.testKanji=function(l){return i.test(l)},F.testNumeric=function(l){return r.test(l)},F.testAlphanumeric=function(l){return a.test(l)},F}var yt;function ee(){return yt||(yt=1,(function(s){const e=Vt(),t=jt();s.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},s.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},s.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},s.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},s.MIXED={bit:-1},s.getCharCountIndicator=function(r,a){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?r.ccBits[0]:a<27?r.ccBits[1]:r.ccBits[2]},s.getBestModeForData=function(r){return t.testNumeric(r)?s.NUMERIC:t.testAlphanumeric(r)?s.ALPHANUMERIC:t.testKanji(r)?s.KANJI:s.BYTE},s.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},s.isValid=function(r){return r&&r.bit&&r.ccBits};function n(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return s.NUMERIC;case"alphanumeric":return s.ALPHANUMERIC;case"kanji":return s.KANJI;case"byte":return s.BYTE;default:throw new Error("Unknown mode: "+i)}}s.from=function(r,a){if(s.isValid(r))return r;try{return n(r)}catch(o){return a}}})(Ae)),Ae}var bt;function $i(){return bt||(bt=1,(function(s){const e=Z(),t=Kt(),n=Oe(),i=ee(),r=Vt(),a=7973,o=e.getBCHDigit(a);function l(u,p,y){for(let f=1;f<=40;f++)if(p<=s.getCapacity(f,y,u))return f}function d(u,p){return i.getCharCountIndicator(u,p)+4}function c(u,p){let y=0;return u.forEach(function(f){const P=d(f.mode,p);y+=P+f.getBitsLength()}),y}function h(u,p){for(let y=1;y<=40;y++)if(c(u,y)<=s.getCapacity(y,p,i.MIXED))return y}s.from=function(p,y){return r.isValid(p)?parseInt(p,10):y},s.getCapacity=function(p,y,f){if(!r.isValid(p))throw new Error("Invalid QR Code version");typeof f=="undefined"&&(f=i.BYTE);const P=e.getSymbolTotalCodewords(p),S=t.getTotalCodewordsCount(p,y),$=(P-S)*8;if(f===i.MIXED)return $;const A=$-d(f,p);switch(f){case i.NUMERIC:return Math.floor(A/10*3);case i.ALPHANUMERIC:return Math.floor(A/11*2);case i.KANJI:return Math.floor(A/13);case i.BYTE:default:return Math.floor(A/8)}},s.getBestVersionForData=function(p,y){let f;const P=n.from(y,n.M);if(Array.isArray(p)){if(p.length>1)return h(p,P);if(p.length===0)return 1;f=p[0]}else f=p;return l(f.mode,f.getLength(),P)},s.getEncodedBits=function(p){if(!r.isValid(p)||p<7)throw new Error("Invalid QR Code version");let y=p<<12;for(;e.getBCHDigit(y)-o>=0;)y^=a<<e.getBCHDigit(y)-o;return p<<12|y}})(Ie)),Ie}var $e={},wt;function Bi(){if(wt)return $e;wt=1;const s=Z(),e=1335,t=21522,n=s.getBCHDigit(e);return $e.getEncodedBits=function(r,a){const o=r.bit<<3|a;let l=o<<10;for(;s.getBCHDigit(l)-n>=0;)l^=e<<s.getBCHDigit(l)-n;return(o<<10|l)^t},$e}var Be={},Le,xt;function Li(){if(xt)return Le;xt=1;const s=ee();function e(t){this.mode=s.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let i,r,a;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),a=parseInt(r,10),n.put(a,10);const o=this.data.length-i;o>0&&(r=this.data.substr(i),a=parseInt(r,10),n.put(a,o*3+1))},Le=e,Le}var Re,Et;function Ri(){if(Et)return Re;Et=1;const s=ee(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=s.ALPHANUMERIC,this.data=n}return t.getBitsLength=function(i){return 11*Math.floor(i/2)+6*(i%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let r;for(r=0;r+2<=this.data.length;r+=2){let a=e.indexOf(this.data[r])*45;a+=e.indexOf(this.data[r+1]),i.put(a,11)}this.data.length%2&&i.put(e.indexOf(this.data[r]),6)},Re=t,Re}var Ne,St;function Ni(){if(St)return Ne;St=1;const s=ee();function e(t){this.mode=s.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(n){return n*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let n=0,i=this.data.length;n<i;n++)t.put(this.data[n],8)},Ne=e,Ne}var De,kt;function Di(){if(kt)return De;kt=1;const s=ee(),e=Z();function t(n){this.mode=s.KANJI,this.data=n}return t.getBitsLength=function(i){return i*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let i;for(i=0;i<this.data.length;i++){let r=e.toSJIS(this.data[i]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[i]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),n.put(r,13)}},De=t,De}var He={exports:{}},Ct;function Hi(){return Ct||(Ct=1,(function(s){var e={single_source_shortest_paths:function(t,n,i){var r={},a={};a[n]=0;var o=e.PriorityQueue.make();o.push(n,0);for(var l,d,c,h,u,p,y,f,P;!o.empty();){l=o.pop(),d=l.value,h=l.cost,u=t[d]||{};for(c in u)u.hasOwnProperty(c)&&(p=u[c],y=h+p,f=a[c],P=typeof a[c]=="undefined",(P||f>y)&&(a[c]=y,o.push(c,y),r[c]=d))}if(typeof i!="undefined"&&typeof a[i]=="undefined"){var S=["Could not find a path from ",n," to ",i,"."].join("");throw new Error(S)}return r},extract_shortest_path_from_predecessor_list:function(t,n){for(var i=[],r=n;r;)i.push(r),t[r],r=t[r];return i.reverse(),i},find_path:function(t,n,i){var r=e.single_source_shortest_paths(t,n,i);return e.extract_shortest_path_from_predecessor_list(r,i)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,i={},r;t=t||{};for(r in n)n.hasOwnProperty(r)&&(i[r]=n[r]);return i.queue=[],i.sorter=t.sorter||n.default_sorter,i},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var i={value:t,cost:n};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};s.exports=e})(He)),He.exports}var Tt;function zi(){return Tt||(Tt=1,(function(s){const e=ee(),t=Li(),n=Ri(),i=Ni(),r=Di(),a=jt(),o=Z(),l=Hi();function d(S){return unescape(encodeURIComponent(S)).length}function c(S,$,A){const _=[];let N;for(;(N=S.exec(A))!==null;)_.push({data:N[0],index:N.index,mode:$,length:N[0].length});return _}function h(S){const $=c(a.NUMERIC,e.NUMERIC,S),A=c(a.ALPHANUMERIC,e.ALPHANUMERIC,S);let _,N;return o.isKanjiModeEnabled()?(_=c(a.BYTE,e.BYTE,S),N=c(a.KANJI,e.KANJI,S)):(_=c(a.BYTE_KANJI,e.BYTE,S),N=[]),$.concat(A,_,N).sort(function(k,g){return k.index-g.index}).map(function(k){return{data:k.data,mode:k.mode,length:k.length}})}function u(S,$){switch($){case e.NUMERIC:return t.getBitsLength(S);case e.ALPHANUMERIC:return n.getBitsLength(S);case e.KANJI:return r.getBitsLength(S);case e.BYTE:return i.getBitsLength(S)}}function p(S){return S.reduce(function($,A){const _=$.length-1>=0?$[$.length-1]:null;return _&&_.mode===A.mode?($[$.length-1].data+=A.data,$):($.push(A),$)},[])}function y(S){const $=[];for(let A=0;A<S.length;A++){const _=S[A];switch(_.mode){case e.NUMERIC:$.push([_,{data:_.data,mode:e.ALPHANUMERIC,length:_.length},{data:_.data,mode:e.BYTE,length:_.length}]);break;case e.ALPHANUMERIC:$.push([_,{data:_.data,mode:e.BYTE,length:_.length}]);break;case e.KANJI:$.push([_,{data:_.data,mode:e.BYTE,length:d(_.data)}]);break;case e.BYTE:$.push([{data:_.data,mode:e.BYTE,length:d(_.data)}])}}return $}function f(S,$){const A={},_={start:{}};let N=["start"];for(let w=0;w<S.length;w++){const k=S[w],g=[];for(let v=0;v<k.length;v++){const x=k[v],E=""+w+v;g.push(E),A[E]={node:x,lastCount:0},_[E]={};for(let C=0;C<N.length;C++){const T=N[C];A[T]&&A[T].node.mode===x.mode?(_[T][E]=u(A[T].lastCount+x.length,x.mode)-u(A[T].lastCount,x.mode),A[T].lastCount+=x.length):(A[T]&&(A[T].lastCount=x.length),_[T][E]=u(x.length,x.mode)+4+e.getCharCountIndicator(x.mode,$))}}N=g}for(let w=0;w<N.length;w++)_[N[w]].end=0;return{map:_,table:A}}function P(S,$){let A;const _=e.getBestModeForData(S);if(A=e.from($,_),A!==e.BYTE&&A.bit<_.bit)throw new Error('"'+S+'" cannot be encoded with mode '+e.toString(A)+`.
 Suggested mode is: `+e.toString(_));switch(A===e.KANJI&&!o.isKanjiModeEnabled()&&(A=e.BYTE),A){case e.NUMERIC:return new t(S);case e.ALPHANUMERIC:return new n(S);case e.KANJI:return new r(S);case e.BYTE:return new i(S)}}s.fromArray=function($){return $.reduce(function(A,_){return typeof _=="string"?A.push(P(_,null)):_.data&&A.push(P(_.data,_.mode)),A},[])},s.fromString=function($,A){const _=h($,o.isKanjiModeEnabled()),N=y(_),w=f(N,A),k=l.find_path(w.map,"start","end"),g=[];for(let v=1;v<k.length-1;v++)g.push(w.table[k[v]].node);return s.fromArray(p(g))},s.rawSplit=function($){return s.fromArray(h($,o.isKanjiModeEnabled()))}})(Be)),Be}var Mt;function Fi(){if(Mt)return we;Mt=1;const s=Z(),e=Oe(),t=ki(),n=Ci(),i=Ti(),r=Mi(),a=Pi(),o=Kt(),l=_i(),d=$i(),c=Bi(),h=ee(),u=zi();function p(w,k){const g=w.size,v=r.getPositions(k);for(let x=0;x<v.length;x++){const E=v[x][0],C=v[x][1];for(let T=-1;T<=7;T++)if(!(E+T<=-1||g<=E+T))for(let B=-1;B<=7;B++)C+B<=-1||g<=C+B||(T>=0&&T<=6&&(B===0||B===6)||B>=0&&B<=6&&(T===0||T===6)||T>=2&&T<=4&&B>=2&&B<=4?w.set(E+T,C+B,!0,!0):w.set(E+T,C+B,!1,!0))}}function y(w){const k=w.size;for(let g=8;g<k-8;g++){const v=g%2===0;w.set(g,6,v,!0),w.set(6,g,v,!0)}}function f(w,k){const g=i.getPositions(k);for(let v=0;v<g.length;v++){const x=g[v][0],E=g[v][1];for(let C=-2;C<=2;C++)for(let T=-2;T<=2;T++)C===-2||C===2||T===-2||T===2||C===0&&T===0?w.set(x+C,E+T,!0,!0):w.set(x+C,E+T,!1,!0)}}function P(w,k){const g=w.size,v=d.getEncodedBits(k);let x,E,C;for(let T=0;T<18;T++)x=Math.floor(T/3),E=T%3+g-8-3,C=(v>>T&1)===1,w.set(x,E,C,!0),w.set(E,x,C,!0)}function S(w,k,g){const v=w.size,x=c.getEncodedBits(k,g);let E,C;for(E=0;E<15;E++)C=(x>>E&1)===1,E<6?w.set(E,8,C,!0):E<8?w.set(E+1,8,C,!0):w.set(v-15+E,8,C,!0),E<8?w.set(8,v-E-1,C,!0):E<9?w.set(8,15-E-1+1,C,!0):w.set(8,15-E-1,C,!0);w.set(v-8,8,1,!0)}function $(w,k){const g=w.size;let v=-1,x=g-1,E=7,C=0;for(let T=g-1;T>0;T-=2)for(T===6&&T--;;){for(let B=0;B<2;B++)if(!w.isReserved(x,T-B)){let W=!1;C<k.length&&(W=(k[C]>>>E&1)===1),w.set(x,T-B,W),E--,E===-1&&(C++,E=7)}if(x+=v,x<0||g<=x){x-=v,v=-v;break}}}function A(w,k,g){const v=new t;g.forEach(function(B){v.put(B.mode.bit,4),v.put(B.getLength(),h.getCharCountIndicator(B.mode,w)),B.write(v)});const x=s.getSymbolTotalCodewords(w),E=o.getTotalCodewordsCount(w,k),C=(x-E)*8;for(v.getLengthInBits()+4<=C&&v.put(0,4);v.getLengthInBits()%8!==0;)v.putBit(0);const T=(C-v.getLengthInBits())/8;for(let B=0;B<T;B++)v.put(B%2?17:236,8);return _(v,w,k)}function _(w,k,g){const v=s.getSymbolTotalCodewords(k),x=o.getTotalCodewordsCount(k,g),E=v-x,C=o.getBlocksCount(k,g),T=v%C,B=C-T,W=Math.floor(v/C),se=Math.floor(E/C),Jt=se+1,We=W-se,Gt=new l(We);let pe=0;const oe=new Array(C),Ye=new Array(C);let ge=0;const Qt=new Uint8Array(w.buffer);for(let te=0;te<C;te++){const ve=te<B?se:Jt;oe[te]=Qt.slice(pe,pe+ve),Ye[te]=Gt.encode(oe[te]),pe+=ve,ge=Math.max(ge,ve)}const fe=new Uint8Array(v);let Je=0,U,q;for(U=0;U<ge;U++)for(q=0;q<C;q++)U<oe[q].length&&(fe[Je++]=oe[q][U]);for(U=0;U<We;U++)for(q=0;q<C;q++)fe[Je++]=Ye[q][U];return fe}function N(w,k,g,v){let x;if(Array.isArray(w))x=u.fromArray(w);else if(typeof w=="string"){let W=k;if(!W){const se=u.rawSplit(w);W=d.getBestVersionForData(se,g)}x=u.fromString(w,W||40)}else throw new Error("Invalid data");const E=d.getBestVersionForData(x,g);if(!E)throw new Error("The amount of data is too big to be stored in a QR Code");if(!k)k=E;else if(k<E)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+E+`.
`);const C=A(k,g,x),T=s.getSymbolSize(k),B=new n(T);return p(B,k),y(B),f(B,k),S(B,g,0),k>=7&&P(B,k),$(B,C),isNaN(v)&&(v=a.getBestMask(B,S.bind(null,B,g))),a.applyMask(v,B),S(B,g,v),{modules:B,version:k,errorCorrectionLevel:g,maskPattern:v,segments:x}}return we.create=function(k,g){if(typeof k=="undefined"||k==="")throw new Error("No input text");let v=e.M,x,E;return typeof g!="undefined"&&(v=e.from(g.errorCorrectionLevel,e.M),x=d.from(g.version),E=a.from(g.maskPattern),g.toSJISFunc&&s.setToSJISFunction(g.toSJISFunc)),N(k,x,v,E)},we}var ze={},Fe={},Pt;function Ot(){return Pt||(Pt=1,(function(s){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(r){return[r,r]}))),n.length===6&&n.push("F","F");const i=parseInt(n.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+n.slice(0,6).join("")}}s.getOptions=function(n){n||(n={}),n.color||(n.color={});const i=typeof n.margin=="undefined"||n.margin===null||n.margin<0?4:n.margin,r=n.width&&n.width>=21?n.width:void 0,a=n.scale||4;return{width:r,scale:r?4:a,margin:i,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},s.getScale=function(n,i){return i.width&&i.width>=n+i.margin*2?i.width/(n+i.margin*2):i.scale},s.getImageWidth=function(n,i){const r=s.getScale(n,i);return Math.floor((n+i.margin*2)*r)},s.qrToImageData=function(n,i,r){const a=i.modules.size,o=i.modules.data,l=s.getScale(a,r),d=Math.floor((a+r.margin*2)*l),c=r.margin*l,h=[r.color.light,r.color.dark];for(let u=0;u<d;u++)for(let p=0;p<d;p++){let y=(u*d+p)*4,f=r.color.light;if(u>=c&&p>=c&&u<d-c&&p<d-c){const P=Math.floor((u-c)/l),S=Math.floor((p-c)/l);f=h[o[P*a+S]?1:0]}n[y++]=f.r,n[y++]=f.g,n[y++]=f.b,n[y]=f.a}}})(Fe)),Fe}var It;function Ui(){return It||(It=1,(function(s){const e=Ot();function t(i,r,a){i.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=a,r.width=a,r.style.height=a+"px",r.style.width=a+"px"}function n(){try{return document.createElement("canvas")}catch(i){throw new Error("You need to specify a canvas element")}}s.render=function(r,a,o){let l=o,d=a;typeof l=="undefined"&&(!a||!a.getContext)&&(l=a,a=void 0),a||(d=n()),l=e.getOptions(l);const c=e.getImageWidth(r.modules.size,l),h=d.getContext("2d"),u=h.createImageData(c,c);return e.qrToImageData(u.data,r,l),t(h,d,c),h.putImageData(u,0,0),d},s.renderToDataURL=function(r,a,o){let l=o;typeof l=="undefined"&&(!a||!a.getContext)&&(l=a,a=void 0),l||(l={});const d=s.render(r,a,l),c=l.type||"image/png",h=l.rendererOpts||{};return d.toDataURL(c,h.quality)}})(ze)),ze}var Ue={},At;function qi(){if(At)return Ue;At=1;const s=Ot();function e(i,r){const a=i.a/255,o=r+'="'+i.hex+'"';return a<1?o+" "+r+'-opacity="'+a.toFixed(2).slice(1)+'"':o}function t(i,r,a){let o=i+r;return typeof a!="undefined"&&(o+=" "+a),o}function n(i,r,a){let o="",l=0,d=!1,c=0;for(let h=0;h<i.length;h++){const u=Math.floor(h%r),p=Math.floor(h/r);!u&&!d&&(d=!0),i[h]?(c++,h>0&&u>0&&i[h-1]||(o+=d?t("M",u+a,.5+p+a):t("m",l,0),l=0,d=!1),u+1<r&&i[h+1]||(o+=t("h",c),c=0)):l++}return o}return Ue.render=function(r,a,o){const l=s.getOptions(a),d=r.modules.size,c=r.modules.data,h=d+l.margin*2,u=l.color.light.a?"<path "+e(l.color.light,"fill")+' d="M0 0h'+h+"v"+h+'H0z"/>':"",p="<path "+e(l.color.dark,"stroke")+' d="'+n(c,d,l.margin)+'"/>',y='viewBox="0 0 '+h+" "+h+'"',P='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+y+' shape-rendering="crispEdges">'+u+p+`</svg>
`;return typeof o=="function"&&o(null,P),P},Ue}var _t;function Ki(){if(_t)return ne;_t=1;const s=Si(),e=Fi(),t=Ui(),n=qi();function i(r,a,o,l,d){const c=[].slice.call(arguments,1),h=c.length,u=typeof c[h-1]=="function";if(!u&&!s())throw new Error("Callback required as last argument");if(u){if(h<2)throw new Error("Too few arguments provided");h===2?(d=o,o=a,a=l=void 0):h===3&&(a.getContext&&typeof d=="undefined"?(d=l,l=void 0):(d=l,l=o,o=a,a=void 0))}else{if(h<1)throw new Error("Too few arguments provided");return h===1?(o=a,a=l=void 0):h===2&&!a.getContext&&(l=o,o=a,a=void 0),new Promise(function(p,y){try{const f=e.create(o,l);p(r(f,a,l))}catch(f){y(f)}})}try{const p=e.create(o,l);d(null,r(p,a,l))}catch(p){d(p)}}return ne.create=e.create,ne.toCanvas=i.bind(null,t.render),ne.toDataURL=i.bind(null,t.renderToDataURL),ne.toString=i.bind(null,function(r,a,o){return n.render(r,o)}),ne}var Vi=Ki();const Wt=Ei(Vi),$t="http://127.0.0.1:47993",ie=["welcome","tmdb-key","providers","done"];class Yt{constructor({onComplete:e}){this.onComplete=e,this.modalEl=null,this.step=0,this.keyInput="",this.pairing=null,this.pairingPollTimer=null,this.catalog=null,this.catalogInstalling=null,this.backHandler=this.handleBack.bind(this)}render(){return this.modalEl=document.createElement("div"),this.modalEl.className="modal-overlay",this.updateView(),document.body.appendChild(this.modalEl),M.setScope(this.modalEl),M.pushBackHandler(this.backHandler),this.modalEl}handleBack(){this.step>0&&this.prevStep()}updateView(){this.modalEl.innerHTML=`
      <div class="modal-container" style="padding: 44px; max-width: 760px; max-height: 90vh; overflow-y: auto;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <div style="display:flex; gap:8px;">
            ${ie.map((e,t)=>`
              <span style="width:8px; height:8px; border-radius:50%; background:${t===this.step?"#e50914":"rgba(255,255,255,0.2)"}; transition: background 0.2s;"></span>
            `).join("")}
          </div>
          <button class="focusable" id="tour-skip-btn" style="background:none; border:none; color:#71717a; font-size:13px; cursor:pointer;">Skip Tour ›</button>
        </div>
        <div id="tour-step-body" style="min-height: 320px; padding-top: 18px;">
          ${this.renderStep()}
        </div>
      </div>
    `,this.modalEl.querySelector("#tour-skip-btn").addEventListener("click",()=>this.finish()),this.bindStepEvents(),M.setScope(this.modalEl),this.pairing&&this.pairing.status==="pending"&&this.renderQrCode()}renderStep(){switch(ie[this.step]){case"welcome":return this.renderWelcome();case"tmdb-key":return this.renderTmdbKeyStep();case"providers":return this.renderProvidersStep();case"done":return this.renderDoneStep();default:return""}}renderWelcome(){return`
      <div style="text-align:center; padding: 30px 10px;">
        <div style="margin-bottom: 18px; color: #e50914; display: flex; justify-content: center;">${m("tv",{size:56})}</div>
        <h2 style="font-size: 30px; font-weight: 800; color: #fff; margin-bottom: 14px;">Welcome to TFlix</h2>
        <p style="color: #a1a1aa; font-size: 16px; line-height: 1.6; max-width: 480px; margin: 0 auto 32px;">
          Quick setup — two steps, about a minute. You'll connect your free TMDB catalog key and (optionally) pick a streaming provider.
        </p>
        <button class="btn btn-primary focusable primary-focus" id="tour-next-btn" style="padding: 14px 36px; font-size: 16px;">
          Get Started
        </button>
      </div>
    `}renderTmdbKeyStep(){return`
      <h2 style="font-size: 24px; font-weight: 800; color: #fff; margin-bottom: 8px;">1. Connect Your TMDB Key</h2>
      <p style="color: #a1a1aa; font-size: 14px; line-height: 1.6; margin-bottom: 22px;">
        TFlix needs a free personal TMDB API key to browse the catalog. Get one at
        <strong style="color: #e50914;">themoviedb.org/settings/api</strong> — then enter it below or scan the QR code with your phone.
      </p>

      ${I.hasApiKey()?`
        <div style="background: #142a1c; border: 1px solid rgba(74,222,128,0.3); padding: 14px 18px; border-radius: 8px; margin-bottom: 20px; color: #4ade80; font-size: 14px; font-weight: 600;">
          ${m("check",{size:14})} TMDB key configured — you're good to go.
        </div>
      `:`
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 12px;">
          <div style="background: #1a1a24; border-radius: 10px; padding: 18px;">
            <div style="font-size: 13px; font-weight: 700; color: #d4d4d8; margin-bottom: 10px;">${m("keyboard",{size:14})} Type on this TV</div>
            <input
              type="text" id="tour-key-input" class="focusable"
              placeholder="Paste or type your TMDB API Key..."
              value="${this.keyInput}"
              autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
              style="width: 100%; box-sizing: border-box; background: #16161f; border: 2px solid rgba(255,255,255,0.15); border-radius: 8px; padding: 12px 14px; color: #fff; font-size: 14px; font-family: monospace; outline: none; margin-bottom: 10px;"
            />
            <button class="btn btn-primary focusable" id="tour-save-key-btn" style="width: 100%; padding: 10px; font-size: 14px;">Test & Save Key</button>
            <div id="tour-key-feedback" style="font-size: 13px; min-height: 20px; margin-top: 8px;"></div>
          </div>
          <div style="background: #1a1a24; border-radius: 10px; padding: 18px; display: flex; flex-direction: column; align-items: center; text-align: center;">
            <div style="font-size: 13px; font-weight: 700; color: #d4d4d8; margin-bottom: 10px; align-self: flex-start;">${m("smartphone",{size:14})} Or scan with your phone</div>
            ${this.renderKeyPairingUi()}
          </div>
        </div>
      `}
    `}renderKeyPairingUi(){return this.pairing?this.pairing.status==="pending"?`
        <canvas id="tour-pairing-qr-canvas" width="150" height="150" style="border-radius: 8px; background: #fff; margin-bottom: 10px;"></canvas>
        ${this.pairing.ssid?`<div style="font-size: 11px; color: #4ade80; margin-bottom: 6px;">${m("wifi",{size:12})} TV Wi-Fi: ${this.pairing.ssid}</div>`:""}
        <div style="font-size: 12px; color: #a1a1aa;">Scan, then paste your key on your phone.</div>
        <div style="font-size: 12px; color: #71717a; margin-top: 6px;">Waiting&hellip;</div>
        <button class="btn btn-secondary focusable" id="tour-cancel-pairing-btn" style="margin-top: 10px; padding: 6px 14px; font-size: 12px;">Cancel</button>
      `:this.pairing.status==="done"?`<div style="color: #4ade80; font-size: 14px;">${m("check",{size:14})} ${this.pairing.message}</div>`:`
      <div style="color: #ef4444; font-size: 13px; margin-bottom: 10px;">${this.pairing.message}</div>
      <button class="btn btn-secondary focusable" id="tour-start-pairing-btn" style="padding: 8px 16px; font-size: 13px;">Try Again</button>
    `:'<button class="btn btn-secondary focusable" id="tour-start-pairing-btn" style="padding: 10px 18px; font-size: 14px; margin-top: auto;">Generate QR Code</button>'}renderProvidersStep(){return`
      <h2 style="font-size: 24px; font-weight: 800; color: #fff; margin-bottom: 8px;">2. Add a Streaming Provider</h2>
      <p style="color: #a1a1aa; font-size: 14px; line-height: 1.6; margin-bottom: 22px;">
        TFlix is a clean open-source player with no bundled sources. Browse native HLS provider packs below,
        or skip this and configure a provider (including your own embed repository URL) later in Settings.
      </p>
      <div style="background: #1a1a24; padding: 16px; border-radius: 10px;">
        ${this.renderCatalogUi()}
      </div>
    `}renderCatalogUi(){return this.catalog?this.catalog.error?`<div style="color: #ef4444; font-size: 13px; margin-bottom: 8px;">${this.catalog.error}</div>
        <button class="btn btn-secondary focusable" id="tour-browse-packs-btn" style="padding: 8px 16px; font-size: 13px;">Retry</button>`:`
      <div style="display: flex; flex-direction: column; gap: 8px;">
        ${this.catalog.map(e=>{const t=this.catalogInstalling===e.manifestUrl;return`
            <div style="background: #1a1a24; padding: 12px 16px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; gap: 14px;">
              <div style="text-align: left;">
                <div style="font-size: 13px; font-weight: 700; color: #fff;">${e.name}</div>
                <div style="font-size: 11px; color: #a1a1aa; margin-top: 2px;">${e.description||""}</div>
              </div>
              <button class="btn ${t?"btn-secondary":"btn-primary"} focusable install-pack-btn" data-manifest-url="${e.manifestUrl}" style="padding: 7px 14px; font-size: 12px; white-space: nowrap;" ${t?"disabled":""}>
                ${t?"Installing…":"⬇ Install"}
              </button>
            </div>
          `}).join("")}
      </div>
    `:`<button class="btn btn-secondary focusable" id="tour-browse-packs-btn" style="padding: 8px 16px; font-size: 13px;">${m("search",{size:14})} Browse Provider Packs</button>`}renderDoneStep(){const e=I.hasApiKey();return`
      <div style="text-align:center; padding: 30px 10px;">
        <div style="margin-bottom: 18px; color: ${e?"#e50914":"#fbbf24"}; display: flex; justify-content: center;">${m(e?"film":"triangle-alert",{size:56})}</div>
        <h2 style="font-size: 28px; font-weight: 800; color: #fff; margin-bottom: 14px;">
          ${e?"You're all set!":"Almost there"}
        </h2>
        <p style="color: #a1a1aa; font-size: 15px; line-height: 1.6; max-width: 460px; margin: 0 auto 32px;">
          ${e?"TFlix is configured and ready to browse. You can always change your key or providers later in Settings.":"You haven't added a TMDB key yet — you can still explore, but browsing the catalog will ask for one. Add it any time from Settings."}
        </p>
        <button class="btn btn-primary focusable primary-focus" id="tour-finish-btn" style="padding: 14px 36px; font-size: 16px;">
          Enter TFlix
        </button>
      </div>
    `}bindStepEvents(){const e=this.modalEl.querySelector("#tour-next-btn");e&&e.addEventListener("click",()=>this.nextStep());const t=this.modalEl.querySelector("#tour-finish-btn");t&&t.addEventListener("click",()=>this.finish());const n=this.modalEl.querySelector("#tour-key-input");n&&(n.addEventListener("input",l=>{this.keyInput=l.target.value}),n.addEventListener("keydown",l=>{l.key==="Enter"&&this.saveKey()}));const i=this.modalEl.querySelector("#tour-save-key-btn");i&&i.addEventListener("click",()=>this.saveKey());const r=this.modalEl.querySelector("#tour-start-pairing-btn");r&&r.addEventListener("click",()=>this.startKeyPairing());const a=this.modalEl.querySelector("#tour-cancel-pairing-btn");a&&a.addEventListener("click",()=>{this.stopKeyPairing(),this.updateView()}),ie[this.step]==="tmdb-key"&&I.hasApiKey()?this.attachStepNav(!0):ie[this.step]==="tmdb-key"&&this.attachStepNav(!1,!0);const o=this.modalEl.querySelector("#tour-browse-packs-btn");o&&o.addEventListener("click",()=>this.loadCatalog()),this.modalEl.querySelectorAll(".install-pack-btn").forEach(l=>{l.addEventListener("click",d=>this.installFromCatalog(d.currentTarget.dataset.manifestUrl))}),ie[this.step]==="providers"&&this.attachStepNav(!0,!0)}attachStepNav(e,t=!1){const n=this.modalEl.querySelector("#tour-step-body"),i=document.createElement("div");i.style.cssText="display:flex; justify-content:space-between; align-items:center; margin-top:28px;",i.innerHTML=`
      <button class="btn btn-secondary focusable" id="tour-back-btn" style="padding: 10px 22px; font-size: 14px;">${m("chevron-left",{size:16})} Back</button>
      <div style="display:flex; gap:12px;">
        ${t?'<button class="btn btn-secondary focusable" id="tour-skip-step-btn" style="padding: 10px 22px; font-size: 14px;">Skip</button>':""}
        <button class="btn btn-primary focusable" id="tour-advance-btn" style="padding: 10px 26px; font-size: 14px;" ${e?"":"disabled"}>Next ${m("chevron-right",{size:16})}</button>
      </div>
    `,n.appendChild(i),i.querySelector("#tour-back-btn").addEventListener("click",()=>this.prevStep());const r=i.querySelector("#tour-skip-step-btn");r&&r.addEventListener("click",()=>this.nextStep());const a=i.querySelector("#tour-advance-btn");e&&a.addEventListener("click",()=>this.nextStep())}saveKey(){return b(this,null,function*(){const e=this.modalEl.querySelector("#tour-key-feedback"),t=this.keyInput.trim();if(!t){e&&(e.style.color="#ef4444",e.textContent="Please type or paste an API Key first.");return}e&&(e.style.color="#fbbf24",e.textContent="Validating key with TMDB...");const n=yield L.testApiKey(t);n.success?(I.setApiKey(t),L.clearCache(),this.stopKeyPairing(),this.updateView()):e&&(e.style.color="#ef4444",e.textContent=`Invalid TMDB key: ${n.error}`)})}startKeyPairing(){return b(this,null,function*(){if(!(yield O())){this.pairing={status:"error",message:"Phone pairing needs the local TizenBrew service — enter the key on the TV instead."},this.updateView();return}try{const n=yield(yield fetch(`${$t}/pair/start?kind=tmdb_key`)).json();this.pairing={code:n.code,pairUrl:n.pairUrl,expiresAt:n.expiresAt,ssid:n.ssid||null,status:"pending"},this.updateView(),this.pollKeyPairing()}catch(t){this.pairing={status:"error",message:`Could not start pairing: ${t.message}`},this.updateView()}})}renderQrCode(){const e=this.modalEl.querySelector("#tour-pairing-qr-canvas");!e||!this.pairing||Wt.toCanvas(e,this.pairing.pairUrl,{width:150,margin:1},t=>{t&&console.warn("[SetupTourModal] QR render failed:",t)})}pollKeyPairing(){if(clearTimeout(this.pairingPollTimer),!(!this.pairing||this.pairing.status!=="pending")){if(Date.now()>this.pairing.expiresAt){this.startKeyPairing();return}this.pairingPollTimer=setTimeout(()=>b(this,null,function*(){try{const t=yield(yield fetch(`${$t}/pair/status?code=${this.pairing.code}`)).json();if(t.state==="done"){const n=t.result||{};if(n.error)this.pairing={status:"error",message:n.error};else if(n.apiKey){const i=yield L.testApiKey(n.apiKey);i.success?(I.setApiKey(n.apiKey),L.clearCache(),this.pairing={status:"done",message:"Key received from your phone and saved!"}):this.pairing={status:"error",message:`Received a key but TMDB rejected it: ${i.error}`}}else this.pairing={status:"error",message:"No key was received."};this.updateView();return}if(t.state==="expired"){this.startKeyPairing();return}this.pollKeyPairing()}catch(e){this.pollKeyPairing()}}),2e3)}}stopKeyPairing(){clearTimeout(this.pairingPollTimer),this.pairing=null}loadCatalog(){return b(this,null,function*(){try{this.catalog=yield Ft()}catch(e){this.catalog={error:`Could not load pack catalog: ${e.message}`}}this.updateView()})}installFromCatalog(e){return b(this,null,function*(){this.catalogInstalling=e,this.updateView();try{yield Ut(e),this.catalogInstalling=null,this.updateView()}catch(t){this.catalogInstalling=null,this.catalog={error:`Install failed: ${t.message}`},this.updateView()}})}nextStep(){this.stopKeyPairing(),this.step<ie.length-1&&(this.step+=1,this.updateView())}prevStep(){this.stopKeyPairing(),this.step>0&&(this.step-=1,this.updateView())}finish(){this.stopKeyPairing(),I.setSetupTourSeen(),M.popBackHandler(this.backHandler),M.clearScope(this.modalEl),this.modalEl&&this.modalEl.parentNode&&this.modalEl.parentNode.removeChild(this.modalEl),this.onComplete&&this.onComplete()}}const ue="http://127.0.0.1:47993";function ji(s){if(!s)return null;if(s.id)return`#${CSS.escape(s.id)}`;if(s.dataset.manifestUrl){const e=s.classList.contains("install-pack-btn")?".install-pack-btn":s.classList.contains("uninstall-pack-btn")?".uninstall-pack-btn":null;if(e)return`${e}[data-manifest-url="${CSS.escape(s.dataset.manifestUrl)}"]`}return s.dataset.provider?`.provider-btn[data-provider="${CSS.escape(s.dataset.provider)}"]`:null}class Oi{constructor({onClose:e,onSettingsChanged:t}){this.onClose=e,this.onSettingsChanged=t,this.modalEl=null,this.keyInput=I.getApiKey(),this.keyVisible=!1,this.providerRepoInput="",this.selectedProvider=I.getDefaultProvider(),this.backHandler=this.close.bind(this),this.pairing=null,this.pairingPollTimer=null,this.catalog=null,this.catalogInstalling=null,this.relayStatus=null}render(){return this.modalEl=document.createElement("div"),this.modalEl.className="modal-overlay",this.updateView(),document.body.appendChild(this.modalEl),M.setScope(this.modalEl),M.pushBackHandler(this.backHandler),this.checkRelay(),this.modalEl}checkRelay(){return b(this,null,function*(){const e=new AbortController,t=setTimeout(()=>e.abort(),2e3);try{const n=yield fetch(`${ue}/health`,{signal:e.signal});this.relayStatus=n.ok}catch(n){this.relayStatus=!1}finally{clearTimeout(t)}this.modalEl&&this.updateView()})}updateView(){const e=I.hasApiKey(),t=I.getApiKey(),n=e?`Configured (${t.length>8?t.slice(0,4)+"••••••••"+t.slice(-4):"••••••••"})`:"Not Configured (Required)",i=ae().filter(g=>g.catalogMode!=="native"),r=i.length>0;r&&(!this.selectedProvider||!i.some(g=>g.id===this.selectedProvider))&&(this.selectedProvider=i[0].id,I.setDefaultProvider(this.selectedProvider));const a=this.modalEl.querySelector(".modal-container"),o=a?a.scrollTop:0,l=ji(this.modalEl.querySelector(".tflx-focused"));this.modalEl.innerHTML=`
      <div class="modal-container" style="padding: 40px; max-width: 920px; max-height: 90vh; overflow-y: auto;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
          <h2 style="font-size: 28px; font-weight: 800; color: #fff;">TFlix Settings</h2>
          <button class="btn btn-secondary focusable" id="settings-close-btn" style="padding: 6px 16px; font-size: 14px;">${m("x")} Close</button>
        </div>

        <!-- TMDB Key Section -->
        <div class="settings-section">
          <div class="settings-label">Personal TMDB API Configuration</div>
          <p class="settings-desc">
            TFlix requires your personal TMDB API Key to browse media and episode catalogs.
            <br>
            <span style="color: #a1a1aa; font-size: 13px;">Get your free API key at <strong style="color: #e50914;">themoviedb.org/settings/api</strong></span>
          </p>

          <div style="background: #1a1a24; padding: 14px 20px; border-radius: 8px; margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between;">
            <div>
              <div style="font-size: 11px; color: #71717a; text-transform: uppercase; font-weight: 700;">API Key Status</div>
              <div style="font-size: 15px; font-weight: 600; color: ${e?"#4ade80":"#ef4444"};">${n}</div>
            </div>
            ${e?`
              <button class="btn btn-secondary focusable" id="btn-remove-key" style="padding: 6px 14px; font-size: 13px; color: #ef4444;">
                Remove API Key
              </button>
            `:""}
          </div>

          <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 10px;">
            <div style="position: relative; flex: 1;">
              <input
                type="${this.keyVisible?"text":"password"}"
                id="tmdb-api-input"
                class="focusable primary-focus"
                placeholder="Paste or type your TMDB API Key..."
                value="${this.keyInput}"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
                style="width: 100%; box-sizing: border-box; background: #16161f; border: 2px solid rgba(255,255,255,0.15); border-radius: 8px; padding: 14px 46px 14px 18px; color: #fff; font-size: 16px; font-family: monospace; outline: none; transition: border-color 0.2s;"
              />
              <button class="focusable" id="btn-toggle-key-visibility" title="${this.keyVisible?"Hide key":"Show key"}" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; color: #a1a1aa; cursor: pointer; padding: 6px; display: flex; border-radius: 6px;">
                ${m(this.keyVisible?"eye-off":"eye",{size:18})}
              </button>
            </div>
            <button class="btn btn-primary focusable" id="btn-save-key" style="padding: 14px 24px; white-space: nowrap;">
              Test & Save Key
            </button>
          </div>
          <div id="key-feedback" style="font-size: 14px; min-height: 22px;"></div>
        </div>

        <!-- Stream Providers & Extensions Section -->
        <div class="settings-section">
          <div class="settings-label">Streaming Providers & Extensions</div>
          <p class="settings-desc">
            TFlix is a clean open-source player and does not bundle media stream sources. Point it at a provider repository URL you trust (see the schema in <code>providers.example.json</code>), or browse native HLS provider packs below.
          </p>

          <div style="background: #1a1a24; padding: 14px 20px; border-radius: 8px; margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between;">
            <div>
              <div style="font-size: 11px; color: #71717a; text-transform: uppercase; font-weight: 700;">Provider Status</div>
              <div style="font-size: 15px; font-weight: 600; color: ${r?"#4ade80":"#ef4444"};">
                ${r?`${m("check",{size:14})} ${i.length} Providers Active`:"No Providers Configured"}
              </div>
            </div>
          </div>

          <div style="margin-bottom: 14px;">
            <div style="font-size: 12px; color: #a1a1aa; margin-bottom: 6px; font-weight: 600;">Add Provider Repository:</div>
            <div style="display: flex; gap: 12px; align-items: center;">
              <input
                type="text"
                id="provider-repo-input"
                class="focusable"
                placeholder="https://.../providers.json"
                value="${this.providerRepoInput}"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
                style="flex: 1; background: #16161f; border: 2px solid rgba(255,255,255,0.15); border-radius: 8px; padding: 12px 16px; color: #fff; font-size: 14px; font-family: monospace; outline: none; transition: border-color 0.2s;"
              />
              <button class="btn btn-secondary focusable" id="btn-fetch-custom-repo" style="padding: 12px 20px; white-space: nowrap;">
                ${m("plus",{size:14})} Add
              </button>
            </div>
            <div id="provider-feedback" style="font-size: 14px; min-height: 22px; margin-top: 6px;"></div>
          </div>

          ${this.renderEmbedSources()}

          ${r?`
            <div style="margin-top: 16px;">
              <div style="font-size: 13px; color: #d4d4d8; font-weight: 700; margin-bottom: 10px;">Choose Default Server:</div>
              <div class="provider-options">
                ${(()=>{const g=Math.floor((i.length-1)/2)*2;return i.map((v,x)=>`
                    <button class="provider-btn focusable ${v.id===this.selectedProvider?"active":""}" data-provider="${v.id}"${x>=g?' data-nav-down="#btn-recheck-relay"':""}>
                      <div style="display:flex; justify-content:space-between; align-items:center;">
                        <div class="name">${v.name} ${v.id===this.selectedProvider?m("check",{size:14}):""}</div>
                        <span class="hud-badge-tag" style="font-size: 9px; background: ${v.type==="direct"?"#16a34a":"#3f3f46"}; display:inline-flex; align-items:center; gap:3px;">
                          ${v.type==="direct"?`${m("zap",{size:10})} NATIVE HLS`:`${m("tv",{size:10})} EMBED`}
                        </span>
                      </div>
                      <div class="desc">${v.description||"Streaming provider"}</div>
                    </button>
                  `).join("")})()}
              </div>
            </div>
          `:""}
        </div>

        <!-- Provider Pack Pairing Section -->
        <div class="settings-section">
          <div class="settings-label">Add a Provider Pack (Advanced)</div>
          <p class="settings-desc">
            Direct HLS providers are resolved by a local relay running on this TV, outside the browser. A "provider pack" adds more sources to it. Only add a pack from someone you trust — it runs code on this device.
          </p>

          <div style="background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3b82f6; padding: 12px 18px 12px 15px; border-radius: 8px; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; gap: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="color: #60a5fa; display: flex;">${m("wifi",{size:20})}</div>
              <div>
                <div style="font-size: 11px; color: #93c5fd; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">System &middot; Local Relay</div>
                <div style="font-size: 14px; font-weight: 600; color: ${this.relayStatus?"#4ade80":this.relayStatus===!1?"#ef4444":"#a1a1aa"};">
                  ${this.relayStatus===null?"Checking…":this.relayStatus?`${m("check",{size:14})} Reachable (${ue})`:`${m("triangle-alert",{size:14})} Not reachable`}
                </div>
              </div>
            </div>
            <button class="btn btn-secondary focusable" id="btn-recheck-relay" style="padding: 6px 14px; font-size: 13px;">${m("refresh-cw",{size:14})} Recheck</button>
          </div>

          ${this.renderPackStatus()}
          ${this.renderCatalogUi()}
          <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.08);">
            <div style="font-size: 12px; color: #71717a; margin-bottom: 10px;">Have a pack from somewhere else? Add it via your phone:</div>
            ${this.renderPairingUi()}
          </div>
        </div>

        <!-- Data Management Section -->
        <div class="settings-section">
          <div class="settings-label">Storage & History</div>
          <p class="settings-desc">Manage local watch history, watchlist, and resume progress stored on this TV.</p>
          <div style="display: flex; gap: 14px;">
            <button class="btn btn-secondary focusable" id="btn-clear-history">
              Clear Watch History
            </button>
            <button class="btn btn-secondary focusable" id="btn-replay-tour">
              ${m("rotate-ccw")} Replay Setup Tour
            </button>
            <button class="btn btn-secondary focusable" id="btn-clear-all" style="color: #ef4444;">
              Reset All App Data
            </button>
          </div>
          <div id="storage-feedback" style="margin-top: 10px; font-size: 14px; color: #4ade80;"></div>
        </div>

        <div style="text-align: center; font-size: 11px; color: #52525b; margin-top: 8px;">TFlix v2.0.5-referrer.1</div>
      </div>
    `,this.modalEl.querySelector("#settings-close-btn").addEventListener("click",()=>this.close());const d=this.modalEl.querySelector("#tmdb-api-input");d.addEventListener("input",g=>{this.keyInput=g.target.value}),d.addEventListener("keydown",g=>{g.key==="Enter"&&this.saveKey()});const c=this.modalEl.querySelector("#btn-toggle-key-visibility");c&&c.addEventListener("click",()=>{this.keyVisible=!this.keyVisible,this.updateView();const g=this.modalEl.querySelector("#tmdb-api-input");g&&M.setFocus(g)}),this.modalEl.querySelector("#btn-save-key").addEventListener("click",()=>this.saveKey());const h=this.modalEl.querySelector("#btn-remove-key");h&&h.addEventListener("click",()=>{I.setApiKey(""),L.clearCache(),this.keyInput="",this.updateView(),this.onSettingsChanged&&this.onSettingsChanged()});const u=this.modalEl.querySelector("#provider-repo-input");u&&u.addEventListener("input",g=>{this.providerRepoInput=g.target.value});const p=this.modalEl.querySelector("#btn-fetch-custom-repo");p&&p.addEventListener("click",()=>b(this,null,function*(){yield this.loadProvidersFromUrl(this.providerRepoInput)})),this.modalEl.querySelectorAll(".remove-source-btn").forEach(g=>{g.addEventListener("click",v=>{I.removeProviderSource(v.currentTarget.dataset.sourceUrl),this.selectedProvider=I.getDefaultProvider(),this.updateView()})}),this.modalEl.querySelectorAll(".uninstall-pack-btn").forEach(g=>{g.addEventListener("click",v=>b(this,null,function*(){const x=v.currentTarget,E=x.dataset.manifestUrl;x.disabled=!0;try{yield mi(E),this.selectedProvider=I.getDefaultProvider()}catch(C){console.warn("[SettingsModal] Pack uninstall failed:",C)}this.updateView()}))});const y=this.modalEl.querySelector("#btn-recheck-relay");y&&y.addEventListener("click",()=>{this.relayStatus=null,this.updateView(),this.checkRelay()});const f=this.modalEl.querySelector("#btn-browse-packs");f&&f.addEventListener("click",()=>this.loadCatalog()),this.modalEl.querySelectorAll(".install-pack-btn").forEach(g=>{g.addEventListener("click",v=>{this.installFromCatalog(v.currentTarget.dataset.manifestUrl)})});const P=this.modalEl.querySelector("#btn-start-pairing");P&&P.addEventListener("click",()=>this.startPairing());const S=this.modalEl.querySelector("#btn-cancel-pairing");S&&S.addEventListener("click",()=>{this.stopPairing(),this.updateView()}),this.pairing&&this.pairing.status==="pending"&&this.renderQrCode(),this.modalEl.querySelectorAll(".provider-btn").forEach(g=>{g.addEventListener("click",v=>{const x=v.currentTarget.dataset.provider;this.selectedProvider=x,I.setDefaultProvider(x),this.updateView()})});const A=this.modalEl.querySelector("#btn-clear-history");A&&A.addEventListener("click",()=>{I.clearHistory();const g=this.modalEl.querySelector("#storage-feedback");g&&(g.textContent="Watch history cleared successfully."),this.onSettingsChanged&&this.onSettingsChanged()});const _=this.modalEl.querySelector("#btn-replay-tour");_&&_.addEventListener("click",()=>{this.close(),new Yt({onComplete:()=>{this.onSettingsChanged&&this.onSettingsChanged()}}).render()});const N=this.modalEl.querySelector("#btn-clear-all");N&&N.addEventListener("click",()=>{I.clearAllData(),L.clearCache();const g=this.modalEl.querySelector("#storage-feedback");g&&(g.textContent="All app data reset. Reloading..."),setTimeout(()=>{window.location.reload()},1e3)});const w=l?this.modalEl.querySelector(l):null;w?M.focusElement(w,!1):M.setScope(this.modalEl);const k=this.modalEl.querySelector(".modal-container");k&&(k.scrollTop=o)}loadProvidersFromUrl(e){return b(this,null,function*(){const t=this.modalEl.querySelector("#provider-feedback");t&&(t.style.color="#fbbf24",t.textContent="Fetching and verifying provider list...");try{const n=yield yi(e);this.providerRepoInput="",!this.selectedProvider&&n[0]&&(this.selectedProvider=n[0].id,I.setDefaultProvider(this.selectedProvider)),this.updateView();const i=this.modalEl.querySelector("#provider-feedback");i&&(i.style.color="#4ade80",i.textContent=`Added ${n.length} provider(s) from this source!`)}catch(n){t&&(t.style.color="#ef4444",t.textContent=`Error: ${n.message}`)}})}saveKey(){return b(this,null,function*(){const e=this.modalEl.querySelector("#key-feedback"),t=this.keyInput.trim();if(!t){e&&(e.style.color="#ef4444",e.textContent="Please type or paste an API Key first.");return}e&&(e.style.color="#fbbf24",e.textContent="Validating key with TMDB...");const n=yield L.testApiKey(t);if(n.success){I.setApiKey(t),L.clearCache(),this.updateView();const i=this.modalEl.querySelector("#key-feedback");i&&(i.style.color="#4ade80",i.textContent="TMDB API Key verified and saved successfully!"),this.onSettingsChanged&&this.onSettingsChanged()}else e&&(e.style.color="#ef4444",e.textContent=`Invalid TMDB key: ${n.error}`)})}renderEmbedSources(){const e=I.getProviderSources();return e.length===0?"":`
      <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 14px;">
        ${e.map(t=>`
          <div style="background: #1a1a24; padding: 12px 18px; border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 12px;">
              <div style="min-width: 0;">
                <div style="font-size: 12px; font-weight: 700; color: #fff; font-family: monospace; word-break: break-all;">${t.url}</div>
                <div style="font-size: 12px; color: #71717a; margin-top: 2px;">${t.providers.length} provider(s): ${t.providers.map(n=>n.name).join(", ")}</div>
              </div>
              <button class="btn btn-secondary focusable remove-source-btn" data-source-url="${t.url}" style="padding: 6px 12px; font-size: 12px; color: #ef4444; white-space: nowrap;">
                ${m("trash-2",{size:13})} Remove
              </button>
            </div>
          </div>
        `).join("")}
      </div>
    `}renderPackStatus(){const e=it();return e.length===0?'<div style="font-size: 13px; color: #71717a; margin-bottom: 12px;">No provider packs installed yet.</div>':`
      <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 12px;">
        ${e.map(t=>`
          <div style="background: #1a1a24; padding: 12px 18px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; gap: 12px;">
            <div style="min-width: 0;">
              <div style="font-size: 14px; font-weight: 600; color: #4ade80;">${t.name}</div>
              <div style="font-size: 12px; color: #71717a; margin-top: 2px;">${t.providerIds.length} provider(s) &middot; installed ${new Date(t.installedAt).toLocaleString()}</div>
            </div>
            <button class="btn btn-secondary focusable uninstall-pack-btn" data-manifest-url="${t.manifestUrl}" style="padding: 6px 12px; font-size: 12px; color: #ef4444; white-space: nowrap;">
              ${m("trash-2",{size:13})} Uninstall
            </button>
          </div>
        `).join("")}
      </div>
    `}renderCatalogUi(){if(!this.catalog)return`<button class="btn btn-primary focusable" id="btn-browse-packs" style="padding: 10px 18px; font-size: 14px;">${m("search")} Browse Provider Packs</button>`;if(this.catalog.error)return`<div style="color: #ef4444; font-size: 14px; margin-bottom: 8px;">${this.catalog.error}</div>
        <button class="btn btn-secondary focusable" id="btn-browse-packs" style="padding: 8px 16px; font-size: 13px;">Retry</button>`;const e=new Set(it().map(n=>n.manifestUrl)),t=this.catalog.filter(n=>!e.has(n.manifestUrl));return t.length===0?'<div style="font-size: 13px; color: #71717a;">All available packs are already installed.</div>':`
      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${t.map(n=>{const i=this.catalogInstalling===n.manifestUrl;return`
            <div style="background: #1a1a24; padding: 14px 18px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; gap: 16px;">
              <div>
                <div style="font-size: 14px; font-weight: 700; color: #fff;">${n.name}</div>
                <div style="font-size: 12px; color: #a1a1aa; margin-top: 2px;">${n.description||""}</div>
              </div>
              <button class="btn ${i?"btn-secondary":"btn-primary"} focusable install-pack-btn" data-manifest-url="${n.manifestUrl}" style="padding: 8px 16px; font-size: 13px; white-space: nowrap;" ${i?"disabled":""}>
                ${i?"Installing…":`${m("download",{size:14})} Install`}
              </button>
            </div>
          `}).join("")}
      </div>
    `}loadCatalog(){return b(this,null,function*(){try{this.catalog=yield Ft()}catch(e){this.catalog={error:`Could not load pack catalog: ${e.message}`}}this.updateView()})}installFromCatalog(e){return b(this,null,function*(){this.catalogInstalling=e,this.updateView();try{const t=yield Ut(e);this.selectedProvider=I.getDefaultProvider(),this.catalogInstalling=null,this.updateView(),this.onSettingsChanged&&this.onSettingsChanged(),console.log(`[Settings] Installed pack: ${t.name} -> ${t.installed.join(", ")}`)}catch(t){this.catalogInstalling=null,this.catalog={error:`Install failed: ${t.message}`},this.updateView()}})}renderPairingUi(){return this.pairing?this.pairing.status==="pending"?`
        <div style="display: flex; gap: 20px; align-items: center; background: #1a1a24; padding: 18px; border-radius: 10px;">
          <canvas id="pairing-qr-canvas" width="180" height="180" style="border-radius: 8px; background: #fff;"></canvas>
          <div>
            <div style="font-size: 14px; color: #d4d4d8; margin-bottom: 6px;">Scan with your phone, or visit:</div>
            <div style="font-family: monospace; font-size: 13px; color: #4ade80; word-break: break-all;">${this.pairing.pairUrl}</div>
            ${this.pairing.ssid?`<div style="font-size: 12px; color: #4ade80; margin-top: 8px;">${m("wifi",{size:14})} TV Wi-Fi: ${this.pairing.ssid} — make sure your phone matches.</div>`:""}
            <div style="font-size: 13px; color: #a1a1aa; margin-top: 10px;">Waiting for pack to be submitted&hellip;</div>
            <button class="btn btn-secondary focusable" id="btn-cancel-pairing" style="margin-top: 12px; padding: 6px 14px; font-size: 13px;">Cancel</button>
          </div>
        </div>
      `:this.pairing.status==="done"?`<div style="color: #4ade80; font-size: 14px;">${m("check",{size:14})} ${this.pairing.message}</div>
        <button class="btn btn-secondary focusable" id="btn-start-pairing" style="margin-top: 10px; padding: 10px 18px; font-size: 14px;">${m("smartphone",{size:14})} Add Another Pack</button>`:`<div style="color: #ef4444; font-size: 14px;">${this.pairing.message}</div>
      <button class="btn btn-secondary focusable" id="btn-start-pairing" style="margin-top: 10px; padding: 10px 18px; font-size: 14px;">${m("smartphone",{size:14})} Try Again</button>`:`<button class="btn btn-secondary focusable" id="btn-start-pairing" style="padding: 10px 18px; font-size: 14px;">${m("smartphone",{size:14})} Add Pack via Phone (QR Code)</button>`}startPairing(){return b(this,null,function*(){if(!(yield O())){this.pairing={status:"error",message:"Local relay is not running — provider packs require TizenBrew serviceFile support."},this.updateView();return}try{const n=yield(yield fetch(`${ue}/pair/start`)).json();this.pairing={code:n.code,pairUrl:n.pairUrl,expiresAt:n.expiresAt,ssid:n.ssid||null,status:"pending"},this.updateView(),this.pollPairingStatus()}catch(t){this.pairing={status:"error",message:`Could not start pairing: ${t.message}`},this.updateView()}})}renderQrCode(){const e=this.modalEl.querySelector("#pairing-qr-canvas");!e||!this.pairing||Wt.toCanvas(e,this.pairing.pairUrl,{width:180,margin:1},t=>{t&&console.warn("[SettingsModal] QR render failed:",t)})}pollPairingStatus(){if(clearTimeout(this.pairingPollTimer),!(!this.pairing||this.pairing.status!=="pending")){if(Date.now()>this.pairing.expiresAt){this.startPairing();return}this.pairingPollTimer=setTimeout(()=>b(this,null,function*(){try{const t=yield(yield fetch(`${ue}/pair/status?code=${this.pairing.code}`)).json();if(t.state==="done"){const n=t.result||{};if(n.error)this.pairing={status:"error",message:n.error};else{yield he();const i=(n.installed||[]).length,r=(n.errors||[]).length;this.pairing={status:"done",message:`Installed "${n.name}" — ${i} provider(s) added${r?`, ${r} failed`:""}.`},this.selectedProvider=I.getDefaultProvider()}this.updateView();return}if(t.state==="expired"){this.startPairing();return}this.pollPairingStatus()}catch(e){this.pollPairingStatus()}}),2e3)}}stopPairing(){clearTimeout(this.pairingPollTimer),this.pairing=null}close(){clearTimeout(this.pairingPollTimer),M.popBackHandler(this.backHandler),M.clearScope(this.modalEl),this.modalEl&&this.modalEl.parentNode&&this.modalEl.parentNode.removeChild(this.modalEl),this.onClose&&this.onClose()}}const qe=25,Wi=60;function Bt(s,e){return{id:s.id,source:e,title:s.title,name:s.title,poster_path:s.poster||null,media_type:s.type==="tv"?"tv":"movie",mediaType:s.type==="tv"?"tv":"movie",release_date:s.year?`${s.year}-01-01`:"",first_air_date:s.year?`${s.year}-01-01`:"",_native:s}}class Yi{constructor({provider:e,onPlayNative:t}){this.provider=e,this.onPlayNative=t,this.containerEl=null,this.detailsEl=null,this.detailsBackHandler=null,this.currentNativeItem=null,this.categoryState={},this.episodes=[],this.ranges=null,this.selectedRangeStart=1}render(){this.containerEl=document.createElement("div"),this.containerEl.className="provider-browse-screen",this.containerEl.style.padding="100px 48px 48px";const e=document.createElement("div");e.style.marginBottom="24px",e.innerHTML=`
      <h2 style="font-size: 28px; font-weight: 800; margin-bottom: 6px;">${this.provider.name}</h2>
      <p style="color: #a1a1aa; font-size: 14px; margin-bottom: 20px;">Native catalog — browsed and played independently of TMDB.</p>
      <div class="search-input-wrap" style="max-width: 480px; display: flex; gap: 10px;">
        <input type="text" id="native-search-input" class="focusable" placeholder="Search ${this.provider.name}..."
          style="flex: 1; padding: 12px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.15); background: #181824; color: #fff; font-size: 14px;" />
        <button class="btn btn-primary focusable" id="native-search-btn" style="padding: 12px 20px;">${m("search",{size:16})}</button>
      </div>
    `,this.containerEl.appendChild(e);const t=e.querySelector("#native-search-input"),n=e.querySelector("#native-search-btn"),i=()=>{const r=t.value.trim();r?this.renderSearchResults(r):this.renderCategories()};return n.addEventListener("click",i),t.addEventListener("keydown",r=>{r.key==="Enter"&&i()}),this.rowsContainer=document.createElement("div"),this.containerEl.appendChild(this.rowsContainer),this.renderCategories(),this.containerEl}renderSearchResults(e){return b(this,null,function*(){this.rowsContainer.innerHTML='<div style="color:#a1a1aa; padding: 20px 0;">Searching...</div>';try{const{items:t}=yield fi(this.provider.id,e);this.rowsContainer.innerHTML="";const n=H({title:`Results for "${e}"`,icon:"search",items:t.map(i=>Bt(i,this.provider.id)),onItemSelect:i=>this.openNativeDetails(i)});this.rowsContainer.appendChild(n),t.length===0&&(this.rowsContainer.innerHTML='<div style="color:#a1a1aa; padding: 20px 0;">No results.</div>')}catch(t){this.rowsContainer.innerHTML=`<div style="color:#ef4444; padding: 20px 0;">Search failed: ${t.message}</div>`}setTimeout(()=>M.focusFirstAvailable(),50)})}renderCategories(){this.rowsContainer.innerHTML="";const e=this.provider.catalogCategories||[];if(e.length===0){this.rowsContainer.innerHTML='<div style="color:#a1a1aa; padding: 20px 0;">This provider has no browsable categories.</div>';return}e.forEach(t=>this.renderCategoryRow(t))}renderCategoryRow(e){return b(this,null,function*(){const t=document.createElement("div");t.className="media-section",t.innerHTML=`<h2 class="section-title">${e.label}</h2><div style="color:#a1a1aa; padding: 8px 0;">Loading...</div>`,this.rowsContainer.appendChild(t),this.categoryState[e.id]={page:1,hasMore:!1,items:[]};try{const{items:n,hasMore:i}=yield nt(this.provider.id,e.id,1);this.categoryState[e.id]={page:1,hasMore:i,items:n},this.renderCategorySection(t,e)}catch(n){t.innerHTML=`<h2 class="section-title">${e.label}</h2><div style="color:#ef4444; padding: 8px 0;">Failed to load: ${n.message}</div>`}})}renderCategorySection(e,t){const n=this.categoryState[t.id];e.innerHTML="";const i=document.createElement("h2");if(i.className="section-title",i.textContent=t.label,e.appendChild(i),n.items.length===0){const o=document.createElement("div");o.style.cssText="color:#a1a1aa; padding: 8px 0;",o.textContent="Nothing here yet.",e.appendChild(o);return}const r=H({title:"",items:n.items.map(o=>Bt(o,this.provider.id)),onItemSelect:o=>this.openNativeDetails(o)}),a=r.querySelector(".section-title");if(a&&a.remove(),e.appendChild(r),n.hasMore){const o=document.createElement("button");o.className="btn btn-secondary focusable",o.style.marginTop="10px",o.textContent=n.loading?"Loading...":"Load more",o.disabled=!!n.loading,o.addEventListener("click",()=>b(this,null,function*(){if(!n.loading){n.loading=!0,o.textContent="Loading...",o.disabled=!0;try{const l=yield nt(this.provider.id,t.id,n.page+1);n.page+=1,n.hasMore=l.hasMore,n.items=n.items.concat(l.items).slice(-Wi),n.loading=!1,this.renderCategorySection(e,t)}catch(l){n.loading=!1,o.textContent="Retry",o.disabled=!1}}})),e.appendChild(o)}}openNativeDetails(e,t=null){return b(this,null,function*(){const n=e._native,i=n.type==="tv";this.currentNativeItem=n,this.detailsEl=document.createElement("div"),this.detailsEl.className="modal-overlay",this.detailsEl.innerHTML=`
      <div class="modal-container" style="max-width: 600px; padding: 36px;">
        <div style="display:flex; gap:20px; margin-bottom: 20px;">
          <img src="${L.getImageUrl(n.poster,"w342")}" alt="${n.title}" style="width:120px; border-radius:8px; flex-shrink:0;" />
          <div>
            <h2 style="font-size: 22px; font-weight: 800; margin-bottom: 6px;">${n.title}</h2>
            <p style="color:#a1a1aa; font-size: 13px;">${n.year||""} · ${i?"TV Series":"Movie"} · ${this.provider.name}</p>
          </div>
        </div>
        <div id="native-details-body">
          ${i?'<div style="color:#a1a1aa;">Loading seasons...</div>':""}
        </div>
        <div style="display:flex; gap:10px; margin-top: 20px;">
          ${t?`
            <button class="btn btn-primary focusable primary-focus" id="native-details-resume">
              ${m("play")} Resume S${t.season} E${t.episodeNumber}
            </button>
          `:""}
          <button class="btn btn-secondary focusable" id="native-details-watchlist">
            ${I.isInWatchlist(this.provider.id,n.id)?`${m("bookmark-check")} In Watchlist`:`${m("bookmark-plus")} Watchlist`}
          </button>
          <button class="btn btn-secondary focusable ${t?"":"primary-focus"}" id="native-details-close">
            ${m("x")} Close
          </button>
        </div>
      </div>
    `,document.body.appendChild(this.detailsEl),M.setScope(this.detailsEl),this.detailsBackHandler=()=>this.closeNativeDetails(),M.pushBackHandler(this.detailsBackHandler),this.detailsEl.querySelector("#native-details-close").addEventListener("click",()=>this.closeNativeDetails()),t&&this.detailsEl.querySelector("#native-details-resume").addEventListener("click",()=>{this.closeNativeDetails(),this.onPlayNative&&this.onPlayNative({id:t.episodeId,nativeShowId:n.id,source:this.provider.id,media_type:"tv",mediaType:"tv",title:n.title,name:n.title,poster_path:n.poster||null,backdrop_path:null,season:t.season,episode:t.episodeNumber})});const r=this.detailsEl.querySelector("#native-details-watchlist");if(r.addEventListener("click",()=>{I.isInWatchlist(this.provider.id,n.id)?(I.removeFromWatchlist(this.provider.id,n.id),r.innerHTML=`${m("bookmark-plus")} Watchlist`):(I.addToWatchlist({id:n.id,source:this.provider.id,title:n.title,name:n.title,poster_path:n.poster||null,media_type:i?"tv":"movie",mediaType:i?"tv":"movie",release_date:n.year?`${n.year}-01-01`:"",first_air_date:n.year?`${n.year}-01-01`:""}),r.innerHTML=`${m("bookmark-check")} In Watchlist`)}),!i){const a=this.detailsEl.querySelector("#native-details-body");a.innerHTML=this.renderPlayButton(n.id,!1,1,1),this.attachPlayHandler(a,n.id,!1,1,1);return}try{const{seasons:a}=yield Dt(this.provider.id,n.id);a.length===0?yield this.loadEpisodesInto(n.id,null):this.renderSeasonPicker(n.id,a,t)}catch(a){const o=this.detailsEl.querySelector("#native-details-body");o&&(o.innerHTML=`<div style="color:#ef4444;">Failed to load seasons: ${a.message}</div>`)}})}renderSeasonPicker(e,t,n=null){const i=this.detailsEl.querySelector("#native-details-body");if(!i)return;const r=n?Math.max(0,Math.min(t.length-1,n.season-1)):0;i.innerHTML=`
      <div style="margin-bottom: 12px; font-weight: 700;">Season</div>
      <div class="season-tabs">
        ${t.map((a,o)=>`<button class="season-btn focusable ${o===r?"active":""}" data-season-id="${a.id}">${a.label}</button>`).join("")}
      </div>
      <div id="native-episodes-body" style="margin-top: 16px;"></div>
    `,i.querySelectorAll(".season-btn").forEach((a,o)=>{a.addEventListener("click",()=>{i.querySelectorAll(".season-btn").forEach(l=>l.classList.remove("active")),a.classList.add("active"),this.loadEpisodesInto(e,a.dataset.seasonId,!0,o+1)})}),this.loadEpisodesInto(e,t[r].id,!0,r+1)}loadEpisodesInto(e,t,n=!1,i=1){return b(this,null,function*(){const r=n?"#native-episodes-body":"#native-details-body",a=this.detailsEl.querySelector(r);if(a){a.innerHTML='<div style="color:#a1a1aa;">Loading episodes...</div>';try{const{episodes:o}=yield Ht(this.provider.id,e,t);if(o.length===0){a.innerHTML='<div style="color:#a1a1aa;">No episodes found.</div>';return}this.episodes=o,this.ranges=this.computeRanges(o),this.selectedRangeStart=o[0].number,a.innerHTML=`
        <button class="range-picker-btn focusable" id="native-range-btn" hidden></button>
        <div id="native-episodes-list"></div>
      `,a.querySelector("#native-range-btn").addEventListener("click",()=>this.openRangePicker(a,i)),this.updateRangeButton(a),this.renderEpisodeButtons(a,i)}catch(o){a.innerHTML=`<div style="color:#ef4444;">Failed to load episodes: ${o.message}</div>`}}})}computeRanges(e){if(e.length<=qe)return null;const t=e.map(a=>a.number),n=Math.min(...t),i=Math.max(...t),r=[];for(let a=n;a<=i;a+=qe)r.push({start:a,end:Math.min(a+qe-1,i)});return r}rangeContaining(e){return this.ranges?this.ranges.find(t=>e>=t.start&&e<=t.end)||this.ranges[0]:null}updateRangeButton(e){const t=e.querySelector("#native-range-btn");if(!t)return;if(!this.ranges){t.hidden=!0;return}const n=this.rangeContaining(this.selectedRangeStart);t.hidden=!1,t.innerHTML=`Episodes ${n.start}–${n.end} ${m("chevron-down",{size:14})}`}openRangePicker(e,t){this.ranges&&Nt({ranges:this.ranges,currentStart:this.selectedRangeStart,onSelect:n=>{this.selectedRangeStart=n,this.updateRangeButton(e),this.renderEpisodeButtons(e,t)}})}renderEpisodeButtons(e,t){const n=e.querySelector("#native-episodes-list");if(!n)return;const i=this.rangeContaining(this.selectedRangeStart),r=i?this.episodes.filter(a=>a.number>=i.start&&a.number<=i.end):this.episodes;n.innerHTML=`
      <div style="display:flex; flex-wrap:wrap; gap:8px;">
        ${r.map(a=>`
          <button class="btn btn-secondary focusable" data-episode-id="${a.id}" data-episode-number="${a.number}" style="padding: 8px 14px; font-size: 13px;" ${a.title?`title="${a.title.replace(/"/g,"&quot;")}"`:""}>
            Episode ${a.number}
          </button>
        `).join("")}
      </div>
    `,n.querySelectorAll("[data-episode-id]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.episodeId,l=Number(a.dataset.episodeNumber)||1;e.innerHTML=this.renderPlayButton(o,!0,t,l),this.attachPlayHandler(e,o,!0,t,l)})})}renderPlayButton(e,t,n,i){return`
      <button class="btn btn-primary focusable primary-focus" id="native-play-btn" style="margin-top: 8px;">
        ${m("play")} Play
      </button>
    `}attachPlayHandler(e,t,n,i,r){const a=e.querySelector("#native-play-btn");a&&a.addEventListener("click",()=>{if(!this.onPlayNative)return;const o=this.currentNativeItem||{},l=o.title||"Playing Media",d={id:t,nativeShowId:o.id,source:this.provider.id,media_type:n?"tv":"movie",mediaType:n?"tv":"movie",title:l,name:l,poster_path:o.poster||null,backdrop_path:null,season:i,episode:r};this.closeNativeDetails(),this.onPlayNative(d)})}closeNativeDetails(){this.detailsEl&&(this.detailsBackHandler&&M.popBackHandler(this.detailsBackHandler),M.clearScope(this.detailsEl),this.detailsEl.parentNode&&this.detailsEl.parentNode.removeChild(this.detailsEl),this.detailsEl=null,this.detailsBackHandler=null,this.currentNativeItem=null)}}class Ji{constructor(){this.activeTab="home",this.appEl=document.getElementById("app"),this.mainContentEl=null,this.navBarEl=null}init(){return b(this,null,function*(){if(this.renderShell(),M.init(),he().then(()=>this.updateProvidersNavVisibility()),M.pushBackHandler(()=>(this.showExitConfirm(),!0)),!I.hasSeenSetupTour()){this.openSetupTour();return}yield this.loadTab(this.activeTab)})}openSetupTour(){new Yt({onComplete:()=>this.loadTab(this.activeTab)}).render()}showExitConfirm(){if(this.exitModalEl)return;this.exitModalEl=document.createElement("div"),this.exitModalEl.className="modal-overlay",this.exitModalEl.innerHTML=`
      <div class="modal-container" style="max-width: 420px; padding: 36px; text-align: center;">
        <div style="margin-bottom: 14px; color: #e50914; display: flex; justify-content: center;">${m("triangle-alert",{size:40})}</div>
        <h2 style="font-size: 20px; font-weight: 800; color: #fff; margin-bottom: 10px;">Exit TFlix?</h2>
        <p style="color: #a1a1aa; font-size: 14px; margin-bottom: 26px;">Are you sure you want to close the app?</p>
        <div style="display: flex; gap: 12px; justify-content: center;">
          <button class="btn btn-secondary focusable primary-focus" id="exit-confirm-cancel" style="padding: 12px 28px;">Cancel</button>
          <button class="btn btn-primary focusable" id="exit-confirm-ok" style="padding: 12px 28px;">Exit</button>
        </div>
      </div>
    `,document.body.appendChild(this.exitModalEl);const e=()=>(this.closeExitConfirm(),!0);M.setScope(this.exitModalEl),M.pushBackHandler(e),this._exitBackHandler=e,this.exitModalEl.querySelector("#exit-confirm-cancel").addEventListener("click",()=>this.closeExitConfirm()),this.exitModalEl.querySelector("#exit-confirm-ok").addEventListener("click",()=>{M.exitApp()||console.warn("[App] No exit mechanism available in this environment."),this.closeExitConfirm()})}closeExitConfirm(){this.exitModalEl&&(M.popBackHandler(this._exitBackHandler),M.clearScope(this.exitModalEl),this.exitModalEl.parentNode&&this.exitModalEl.parentNode.removeChild(this.exitModalEl),this.exitModalEl=null,this._exitBackHandler=null)}renderShell(){const e=(n,i,r)=>`
      <button class="nav-btn focusable ${this.activeTab===n?"active":""}" data-tab="${n}">
        ${m(i,{size:22})}
        <span>${r}</span>
      </button>
    `;this.appEl.innerHTML=`
      <nav class="sidebar">
        <div class="sidebar-brand">
          <span class="brand-logo">TFLIX</span>
          <span class="brand-badge">TV</span>
        </div>
        <div class="nav-links">
          ${e("home","home","Home")}
          ${e("movies","film","Movies")}
          ${e("tv","tv","TV Shows")}
          ${e("watchlist","bookmark","Watchlist")}
          <div id="nav-providers-slot"></div>
          <button class="nav-btn focusable" id="nav-search-btn">${m("search",{size:22})}<span>Search</span></button>
          <button class="nav-btn focusable" id="nav-settings-btn">${m("settings",{size:22})}<span>Settings</span></button>
        </div>
      </nav>
      <div class="main-content" id="main-content">
        <div style="padding: 56px 48px; text-align: center; color: #a1a1aa;">
          <h2 style="color: #fff; margin-bottom: 12px;">Loading TFlix...</h2>
          <p>Connecting to TMDB</p>
        </div>
      </div>
    `,this.mainContentEl=this.appEl.querySelector("#main-content"),this.navBarEl=this.appEl.querySelector(".sidebar"),this.navBarEl.querySelectorAll(".nav-btn[data-tab]").forEach(n=>{n.addEventListener("click",i=>{const r=i.currentTarget.dataset.tab;this.switchTab(r)})}),this.navBarEl.querySelector("#nav-search-btn").addEventListener("click",()=>{this.openSearch()}),this.navBarEl.querySelector("#nav-settings-btn").addEventListener("click",()=>{this.openSettings()}),this.updateProvidersNavVisibility()}updateProvidersNavVisibility(){const e=this.navBarEl&&this.navBarEl.querySelector("#nav-providers-slot");if(!e)return;if(!(de().length>0)){e.innerHTML="",this.activeTab==="providers"&&this.switchTab("home");return}e.querySelector(".nav-btn")||(e.innerHTML=`
      <button class="nav-btn focusable ${this.activeTab==="providers"?"active":""}" data-tab="providers">
        ${m("compass",{size:22})}
        <span>Providers</span>
      </button>
    `,e.querySelector(".nav-btn").addEventListener("click",()=>this.switchTab("providers")))}switchTab(e){return b(this,null,function*(){if(this.activeTab===e&&this.mainContentEl.children.length>1)return;this.activeTab=e,this.navBarEl.querySelectorAll(".nav-btn[data-tab]").forEach(n=>{n.classList.toggle("active",n.dataset.tab===e)}),yield this.loadTab(e)})}loadTab(e){return b(this,null,function*(){if(e!=="watchlist"&&e!=="providers"&&!I.hasApiKey()){this.mainContentEl.innerHTML=`
        <div style="padding: 64px 48px; text-align: center; max-width: 650px; margin: 0 auto;">
          <div style="margin-bottom: 16px; color: #e50914;">${m("key",{size:54})}</div>
          <h2 style="color: #fff; font-size: 28px; font-weight: 800; margin-bottom: 12px;">TMDB API Key Required</h2>
          <p style="color: #a1a1aa; font-size: 16px; line-height: 1.6; margin-bottom: 28px;">
            TFlix requires your free TMDB API key to browse the catalog, view movie/TV details, and fetch streaming media.
            <br><br>
            Get your free key at <strong style="color: #e50914;">themoviedb.org/settings/api</strong>.
          </p>
          <button class="btn btn-primary focusable primary-focus" id="btn-setup-key" style="padding: 14px 32px; font-size: 16px;">
            ${m("settings")} Open Settings & Enter Key
          </button>
        </div>
      `,this.mainContentEl.querySelector("#btn-setup-key").addEventListener("click",()=>this.openSettings()),setTimeout(()=>M.focusFirstAvailable(),50);return}this.mainContentEl.innerHTML=`
      <div style="padding: 64px 48px; text-align: center; color: #a1a1aa;">
        <h2 style="color: #fff; margin-bottom: 12px;">Loading catalog...</h2>
      </div>
    `;try{e==="home"?yield this.renderHomeTab():e==="movies"?yield this.renderMoviesTab():e==="tv"?yield this.renderTvTab():e==="watchlist"?this.renderWatchlistTab():e==="providers"&&this.renderProvidersTab(),setTimeout(()=>{M.focusFirstAvailable()},100)}catch(t){console.error("Tab loading error:",t),this.mainContentEl.innerHTML=`
        <div style="padding: 64px 48px; text-align: center;">
          <h2 style="color: #e50914; margin-bottom: 14px;">Error Loading Content</h2>
          <p style="color: #a1a1aa; margin-bottom: 24px;">${t.message}</p>
          <div style="display: flex; gap: 12px; justify-content: center;">
            <button class="btn btn-primary focusable" id="btn-retry-tab">Retry</button>
            <button class="btn btn-secondary focusable" id="btn-err-settings">Open Settings</button>
          </div>
        </div>
      `,this.mainContentEl.querySelector("#btn-retry-tab").addEventListener("click",()=>this.loadTab(e)),this.mainContentEl.querySelector("#btn-err-settings").addEventListener("click",()=>this.openSettings()),M.focusFirstAvailable()}})}renderHomeTab(){return b(this,null,function*(){this.mainContentEl.innerHTML="";const[e,t,n,i]=yield Promise.all([L.getTrending("all","week"),L.getPopularMovies(1),L.getPopularTV(1),L.getTopRatedMovies(1)]),r=e[0],a=me({item:r,onPlay:u=>this.openPlayer(u),onDetails:u=>this.openDetails(u)});this.mainContentEl.appendChild(a);const o=I.getHistory();if(o.length>0){const u=hi({items:o,onItemSelect:p=>this.resumeHistoryItem(p)});this.mainContentEl.appendChild(u)}const l=H({title:"Trending This Week",icon:"flame",items:e.slice(1),onItemSelect:u=>this.openDetails(u)});this.mainContentEl.appendChild(l);const d=H({title:"Popular Movies",icon:"popcorn",items:t,onItemSelect:u=>this.openDetails(u)});this.mainContentEl.appendChild(d);const c=H({title:"Popular TV Series",icon:"tv",items:n,onItemSelect:u=>this.openDetails(u)});this.mainContentEl.appendChild(c);const h=H({title:"Critically Acclaimed",icon:"star",items:i,onItemSelect:u=>this.openDetails(u)});this.mainContentEl.appendChild(h)})}renderMoviesTab(){return b(this,null,function*(){this.mainContentEl.innerHTML="";const[e,t,n,i,r]=yield Promise.all([L.getTrending("movie","week"),L.getPopularMovies(1),L.getTopRatedMovies(1),L.getByGenre("movie",28),L.getByGenre("movie",878)]),a=me({item:e[0],onPlay:o=>this.openPlayer(o),onDetails:o=>this.openDetails(o)});this.mainContentEl.appendChild(a),this.mainContentEl.appendChild(H({title:"Trending Movies",icon:"flame",items:e.slice(1),onItemSelect:o=>this.openDetails(o)})),this.mainContentEl.appendChild(H({title:"Popular Right Now",icon:"popcorn",items:t,onItemSelect:o=>this.openDetails(o)})),this.mainContentEl.appendChild(H({title:"Action & Adventure",icon:"zap",items:i,onItemSelect:o=>this.openDetails(o)})),this.mainContentEl.appendChild(H({title:"Sci-Fi & Fantasy",icon:"rocket",items:r,onItemSelect:o=>this.openDetails(o)})),this.mainContentEl.appendChild(H({title:"Top Rated All Time",icon:"star",items:n,onItemSelect:o=>this.openDetails(o)}))})}renderTvTab(){return b(this,null,function*(){this.mainContentEl.innerHTML="";const[e,t,n,i,r]=yield Promise.all([L.getTrending("tv","week"),L.getPopularTV(1),L.getTopRatedTV(1),L.getByGenre("tv",18),L.getByGenre("tv",10765)]),a=me({item:e[0],onPlay:o=>this.openPlayer(o),onDetails:o=>this.openDetails(o)});this.mainContentEl.appendChild(a),this.mainContentEl.appendChild(H({title:"Trending Series",icon:"flame",items:e.slice(1),onItemSelect:o=>this.openDetails(o)})),this.mainContentEl.appendChild(H({title:"Popular Shows",icon:"tv",items:t,onItemSelect:o=>this.openDetails(o)})),this.mainContentEl.appendChild(H({title:"Sci-Fi & Supernatural",icon:"satellite",items:r,onItemSelect:o=>this.openDetails(o)})),this.mainContentEl.appendChild(H({title:"Gripping Dramas",icon:"drama",items:i,onItemSelect:o=>this.openDetails(o)})),this.mainContentEl.appendChild(H({title:"Top Rated Series",icon:"star",items:n,onItemSelect:o=>this.openDetails(o)}))})}renderWatchlistTab(){this.mainContentEl.innerHTML="";const e=I.getWatchlist(),t=document.createElement("div");if(t.style.padding="100px 48px 48px",e.length===0)t.innerHTML=`
        <div style="text-align: center; padding: 80px 20px; color: #a1a1aa;">
          <div style="margin-bottom: 16px; color: #fbbf24; display: flex; justify-content: center;">${m("bookmark",{size:48})}</div>
          <h2 style="color: #fff; margin-bottom: 10px;">Your Watchlist is Empty</h2>
          <p style="margin-bottom: 24px;">Add movies and TV shows from the details screen to find them here.</p>
          <button class="btn btn-primary focusable primary-focus" id="btn-browse-home">Browse Home</button>
        </div>
      `,t.querySelector("#btn-browse-home").addEventListener("click",()=>this.switchTab("home"));else{t.innerHTML=`
        <h2 style="font-size: 28px; font-weight: 800; margin-bottom: 24px;">My Watchlist (${e.length})</h2>
        <div class="search-results-grid" id="watchlist-grid"></div>
      `;const n=t.querySelector("#watchlist-grid"),i=I.getHistory();e.forEach(r=>{const a=document.createElement("div");a.className="media-card focusable",a.setAttribute("tabindex","0");const o=r.title||r.name||"Untitled",l=L.getImageUrl(r.poster_path,"w500"),d=(r.release_date||r.first_air_date||"").substring(0,4),c=r.media_type==="tv"||r.mediaType==="tv",h=i.find(p=>p.source===(r.source||"tmdb")&&p.id===r.id),u=h&&h.progress>0?`${h.progress}% watched${c&&h.season?` · S${h.season} E${h.episode}`:""}`:c?"TV":"Movie";a.innerHTML=`
          <img src="${l}" alt="${o}" loading="lazy" />
          ${h&&h.progress>0?`<div class="cw-progress-track"><div class="cw-progress-fill" style="width:${h.progress}%"></div></div>`:""}
          <div class="media-card-info">
            <div class="media-card-title">${o}</div>
            <div class="media-card-sub">
              <span>${d}</span>
              <span style="color:#e50914; font-weight:700;">${u}</span>
            </div>
          </div>
        `,a.addEventListener("click",()=>{this.openWatchlistItem(r)}),n.appendChild(a)})}this.mainContentEl.appendChild(t)}openWatchlistItem(e){if(!e.source||e.source==="tmdb"){this.openDetails(e);return}if(!(e.media_type==="tv"||e.mediaType==="tv")){this.openPlayer(e,{nativeMode:!0});return}const n=de().find(i=>i.id===e.source);n&&this.openProviderBrowse(n)}renderProvidersTab(){this.mainContentEl.innerHTML="";const e=de();if(this.activeProviderBrowseScreen&&(this.activeProviderBrowseScreen=null),e.length===0){const i=document.createElement("div");i.style.padding="100px 48px 48px",i.innerHTML=`
        <div style="text-align: center; padding: 80px 20px; color: #a1a1aa;">
          <div style="margin-bottom: 16px; color: #fbbf24; display: flex; justify-content: center;">${m("compass",{size:48})}</div>
          <h2 style="color: #fff; margin-bottom: 10px;">No Native-Catalog Providers Installed</h2>
          <p>Install a provider pack with its own browsable catalog from Settings to see it here.</p>
        </div>
      `,this.mainContentEl.appendChild(i);return}const t=document.createElement("div");t.style.padding="100px 48px 48px",t.innerHTML='<h2 style="font-size: 28px; font-weight: 800; margin-bottom: 24px;">Providers</h2>';const n=document.createElement("div");n.className="search-results-grid",n.style.gridTemplateColumns="repeat(auto-fill, minmax(220px, 1fr))",e.forEach(i=>{const r=document.createElement("div");r.className="media-card focusable",r.setAttribute("tabindex","0"),r.style.aspectRatio="auto",r.innerHTML=`
        <div style="padding: 24px; display:flex; flex-direction:column; gap:8px; align-items:center; text-align:center;">
          ${m("compass",{size:32})}
          <div class="media-card-title" style="margin-top:8px;">${i.name}</div>
          <div style="color:#71717a; font-size:12px;">${(i.catalogTypes||[]).join(", ")||"unknown types"}</div>
        </div>
      `,r.addEventListener("click",()=>this.openProviderBrowse(i)),n.appendChild(r)}),t.appendChild(n),this.mainContentEl.appendChild(t)}openProviderBrowse(e){this.mainContentEl.innerHTML="";const t=document.createElement("button");t.className="btn btn-secondary focusable",t.style.cssText="margin-bottom: 20px; padding: 8px 16px;",t.innerHTML=`${m("chevron-left",{size:16})} All Providers`,t.addEventListener("click",()=>this.renderProvidersTab()),this.mainContentEl.appendChild(t),this.activeProviderBrowseScreen=new Yi({provider:e,onPlayNative:n=>this.openPlayer(n,{nativeMode:!0})}),this.mainContentEl.appendChild(this.activeProviderBrowseScreen.render()),setTimeout(()=>M.focusFirstAvailable(),50)}resumeHistoryItem(e){return b(this,null,function*(){if(!e.source||e.source==="tmdb"){this.openDetails(e);return}const t=de().find(o=>o.id===e.source);if(!t){this.openPlayer(e,{nativeMode:!0});return}const n=e.media_type==="tv"||e.mediaType==="tv",i={id:e.id,title:e.title||e.name,poster:e.poster_path||null,type:n?"tv":"movie"};this.openProviderBrowse(t);const r=this.activeProviderBrowseScreen;if(!n){r.openNativeDetails({_native:i});return}let a=null;try{const o=e.season||1,{seasons:l}=yield Dt(e.source,e.id),d=l.length>0?(l[o-1]||l[0]).id:null,{episodes:c}=yield Ht(e.source,e.id,d),h=Number(e.episode)||1,u=c.find(p=>Number(p.number)===h)||c[0];u&&(a={season:o,episodeId:u.id,episodeNumber:u.number})}catch(o){console.warn("[TFlixApp] Failed to resolve resume episode:",o)}r.openNativeDetails({_native:i},a)})}openDetails(e){new wi({item:e,onPlay:n=>this.openPlayer(n),onClose:()=>{this.activeTab==="watchlist"&&this.renderWatchlistTab()}}).render()}openPlayer(n){return b(this,arguments,function*(e,{nativeMode:t=!1}={}){const{PlayerModal:i}=yield an(()=>b(null,null,function*(){const{PlayerModal:a}=yield import("./PlayerModal.js");return{PlayerModal:a}}),__vite__mapDeps([0,1]),import.meta.url);new i({media:e,nativeMode:t,onNextEpisode:a=>{this.openPlayer(a,{nativeMode:t})},onClose:()=>{t?this.activeProviderBrowseScreen&&M.focusFirstAvailable():this.activeTab==="home"&&this.loadTab("home")}}).render()})}openSearch(){const e=new xi({onSelectMedia:t=>{e.close(),this.openDetails(t)}});e.render()}openSettings(){new Oi({onSettingsChanged:()=>{this.updateProvidersNavVisibility(),this.loadTab(this.activeTab)}}).render()}}document.addEventListener("DOMContentLoaded",()=>{new Ji().init()});export{D as T,es as a,bi as b,Qi as c,Zi as d,ts as e,qt as f,ae as g,m as i,gi as l,M as n,Nt as o,Xi as r,I as s,L as t};
