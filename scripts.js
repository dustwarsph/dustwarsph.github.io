// Smooth scroll for anchor links in the nav
(() => {
  const DURATION = 650; // ms

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function scrollToY(targetY, duration) {
    const startY = window.scrollY || window.pageYOffset;
    const diff = targetY - startY;
    let start;

    return new Promise((resolve) => {
      function step(timestamp) {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const t = Math.min(1, elapsed / duration);
        const eased = easeInOutCubic(t);
        window.scrollTo(0, Math.round(startY + diff * eased));
        if (elapsed < duration) {
          requestAnimationFrame(step);
        } else {
          resolve();
        }
      }
      requestAnimationFrame(step);
    });
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    // Only intercept in-page anchors
    const targetId = href.slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      // compute top of element relative to document
      const rect = targetEl.getBoundingClientRect();
      const targetY = rect.top + window.scrollY - 10; // small offset
      scrollToY(targetY, DURATION).then(() => {
        // update hash without jumping
        history.replaceState(null, '', '#' + targetId);
      });
    }
  }, { passive: true });
})();
