/* ============================================================
   shared.js — Boyer Candy Company
   Common JavaScript shared across all pages.
   Page-specific logic remains in each page's inline <script>.
   ============================================================ */

// ── Scroll Reveal (IntersectionObserver for .reveal elements) ──────────────
(function () {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
}());
