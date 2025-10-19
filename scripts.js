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

// Header shrink-on-scroll and mobile FAB toggle
(function(){
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('.hero-overlay');
  const fab = document.getElementById('menu-fab');
  const nav = document.getElementById('site-nav');
  const SCROLL_THRESHOLD = 80;

  function onScroll(){
    if (!header) return;
    if (window.scrollY > SCROLL_THRESHOLD) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // FAB toggles mobile drawer
  if (fab && nav) {
    fab.addEventListener('click', () => {
      const open = nav.classList.toggle('mobile-drawer');
      fab.setAttribute('aria-expanded', String(open));
      if (open) {
        // trap focus: focus first link
        const first = nav.querySelector('a');
        first && first.focus();
      }
    });

    // close drawer with ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('mobile-drawer')) {
        nav.classList.remove('mobile-drawer');
        fab.setAttribute('aria-expanded', 'false');
        fab.focus();
      }
    });

    // clicking outside the nav drawer should close it
    document.addEventListener('click', (e) => {
      if (!nav.classList.contains('mobile-drawer')) return;
      if (e.target.closest('#site-nav') || e.target.closest('#menu-fab')) return;
      nav.classList.remove('mobile-drawer');
      fab.setAttribute('aria-expanded', 'false');
    });

    // Show/hide FAB based on header visibility using IntersectionObserver
    if ('IntersectionObserver' in window && hero) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            fab.style.display = 'none';
          } else {
            // show only on mobile sizes
            if (window.matchMedia('(max-width:640px)').matches) fab.style.display = 'flex';
          }
        });
      }, { threshold: 0 });
      obs.observe(hero);
    } else {
      // fallback: show FAB on small screens
      if (window.matchMedia('(max-width:640px)').matches) fab.style.display = 'flex';
    }
  }
})();
