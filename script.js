/* Tiny helper script — no dependencies. Safe to delete if you don't need it. */
(function () {
  // Mobile menu toggle
  var btn = document.querySelector('.nav-toggle');
  var list = document.getElementById('nav-list');
  if (btn && list) {
    btn.addEventListener('click', function () {
      var open = list.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    list.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        list.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }
  // Auto-update the copyright year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();

/* ===== Cometrix concept-preview additions ===== */
(function () {
  var b = document.querySelector('.cx-banner');
  function fit() { if (b) document.documentElement.style.setProperty('--cx-h', b.offsetHeight + 'px'); }
  fit(); window.addEventListener('resize', fit);
  document.querySelectorAll('form[data-preview]').forEach(function (f) {
    f.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (!f.querySelector('.cx-sent')) {
        var p = document.createElement('p'); p.className = 'cx-sent';
        p.textContent = 'Preview only: in the live site this form would send your request.';
        f.appendChild(p);
      }
    });
  });
})();
