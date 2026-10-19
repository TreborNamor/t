(() => {
  'use strict';

  if (window.__t2RemoteNavigationInstalled) return;
  window.__t2RemoteNavigationInstalled = true;

  const SELECTOR = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[role="button"]',
    '[tabindex]:not([tabindex="-1"])'
  ].join(',');

  const style = document.createElement('style');
  style.textContent = `
    html.t2-remote-navigation :focus {
      outline: 4px solid #12d9d0 !important;
      outline-offset: 4px !important;
      box-shadow: 0 0 0 3px rgba(0, 0, 0, .9), 0 0 18px rgba(18, 217, 208, .85) !important;
      scroll-margin: 36px !important;
    }
  `;

  const installStyle = () => {
    if (!document.documentElement) return false;
    document.documentElement.classList.add('t2-remote-navigation');
    if (!style.isConnected) document.documentElement.appendChild(style);
    return true;
  };

  if (!installStyle()) {
    const observer = new MutationObserver(() => {
      if (installStyle()) observer.disconnect();
    });
    observer.observe(document, { childList: true, subtree: true });
  }

  const focusProperties = ['outline', 'outline-offset', 'box-shadow'];
  const originalFocusStyles = new WeakMap();
  let highlightedElement = null;

  const clearHighlight = (element) => {
    const original = originalFocusStyles.get(element);
    if (!original) return;
    for (const [property, value, priority] of original) {
      if (value) element.style.setProperty(property, value, priority);
      else element.style.removeProperty(property);
    }
    originalFocusStyles.delete(element);
    if (highlightedElement === element) highlightedElement = null;
  };

  const highlight = (element) => {
    if (!(element instanceof HTMLElement)) return;
    if (highlightedElement && highlightedElement !== element) clearHighlight(highlightedElement);
    if (!originalFocusStyles.has(element)) {
      originalFocusStyles.set(element, focusProperties.map(property => [
        property,
        element.style.getPropertyValue(property),
        element.style.getPropertyPriority(property)
      ]));
    }
    element.style.setProperty('outline', '4px solid #12d9d0', 'important');
    element.style.setProperty('outline-offset', '4px', 'important');
    element.style.setProperty('box-shadow', '0 0 0 3px rgba(0,0,0,.9), 0 0 18px rgba(18,217,208,.85)', 'important');
    highlightedElement = element;
  };

  document.addEventListener('focusin', event => highlight(event.target));
  document.addEventListener('focusout', event => {
    if (event.target === highlightedElement) clearHighlight(event.target);
  });

  const isEditable = (element) => {
    if (!element) return false;
    const tag = element.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' ||
      element.isContentEditable;
  };

  const isVisible = (element) => {
    const rect = element.getBoundingClientRect();
    const css = window.getComputedStyle(element);
    return rect.width > 0 && rect.height > 0 && css.display !== 'none' &&
      css.visibility !== 'hidden' && Number(css.opacity) !== 0 &&
      !element.closest('[aria-hidden="true"]');
  };

  const isFixedWidget = (element) => {
    let node = element;
    while (node && node !== document.body) {
      const css = window.getComputedStyle(node);
      if (css.position === 'fixed' || css.position === 'sticky') {
        const rect = node.getBoundingClientRect();
        const isLargeOverlay = rect.width >= window.innerWidth * 0.65 &&
          rect.height >= window.innerHeight * 0.45;
        if (!isLargeOverlay) return true;
      }
      node = node.parentElement;
    }
    return false;
  };

  const getTargets = () => {
    const modal = [...document.querySelectorAll('[role="dialog"], [aria-modal="true"], dialog[open]')]
      .reverse()
      .find(isVisible);
    const scope = modal || document;
    return [...scope.querySelectorAll(SELECTOR)].filter(element => {
      if (!isVisible(element) || isFixedWidget(element) || element.tabIndex < 0) return false;
      const rect = element.getBoundingClientRect();
      if (element.tagName === 'BUTTON' && rect.width * rect.height < 1800) return false;
      return true;
    });
  };

  const center = (element) => {
    const rect = element.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  };

  const moveIntoView = (element) => {
    element.focus({ preventScroll: true });
    highlight(element);
    element.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'auto' });
  };

  const chooseTarget = (targets, origin, direction) => {
    const candidates = targets.map(element => ({ element, point: center(element) }))
      .filter(({ element }) => element !== document.activeElement)
      .map(candidate => {
        const dx = candidate.point.x - origin.x;
        const dy = candidate.point.y - origin.y;
        const primary = direction === 'left' ? -dx : direction === 'right' ? dx :
          direction === 'up' ? -dy : dy;
        const secondary = direction === 'left' || direction === 'right' ? Math.abs(dy) : Math.abs(dx);
        return { ...candidate, primary, secondary };
      })
      .filter(candidate => candidate.primary > 3)
      .sort((a, b) => {
        const score = candidate => candidate.primary + candidate.secondary * 0.8 +
          (candidate.secondary * candidate.secondary) / (candidate.primary + 180);
        return score(a) - score(b);
      });
    return candidates[0]?.element || null;
  };

  const onRemoteKey = (event) => {
    const key = event.key || ({ 37: 'ArrowLeft', 38: 'ArrowUp', 39: 'ArrowRight', 40: 'ArrowDown' })[event.keyCode];
    const direction = ({
      ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down',
      PageUp: 'up', PageDown: 'down'
    })[key];
    if (!direction || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

    const active = document.activeElement;
    if (isEditable(active) || active?.tagName === 'IFRAME' || active?.tagName === 'VIDEO' || active?.tagName === 'AUDIO') return;

    const targets = getTargets();
    if (!targets.length) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    if (!active || active === document.body || active === document.documentElement) {
      const first = targets
        .filter(element => {
          const rect = element.getBoundingClientRect();
          return rect.bottom > 0 && rect.top < window.innerHeight;
        })
        .sort((a, b) => {
          const ra = a.getBoundingClientRect();
          const rb = b.getBoundingClientRect();
          return (rb.width * rb.height) - (ra.width * ra.height) || ra.top - rb.top || ra.left - rb.left;
        })[0];
      if (first) moveIntoView(first);
      return;
    }

    const origin = center(active);
    const next = chooseTarget(targets, origin, direction);
    if (next) {
      moveIntoView(next);
      return;
    }

    if (direction === 'up' || direction === 'down') {
      const delta = Math.max(120, Math.round(window.innerHeight * 0.68)) * (direction === 'down' ? 1 : -1);
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const nextY = Math.max(0, Math.min(maxScroll, window.scrollY + delta));
      window.scrollTo({ top: nextY, behavior: event.repeat ? 'auto' : 'smooth' });
      window.setTimeout(() => {
        const visibleTargets = getTargets().filter(element => {
          const rect = element.getBoundingClientRect();
          return rect.bottom > 0 && rect.top < window.innerHeight;
        });
        const anchor = { x: origin.x, y: direction === 'down' ? window.innerHeight * 0.72 : window.innerHeight * 0.28 };
        const visibleNext = chooseTarget(visibleTargets, anchor, direction);
        if (visibleNext) moveIntoView(visibleNext);
      }, 180);
    }
  };

  window.addEventListener('keydown', onRemoteKey, true);
})();
