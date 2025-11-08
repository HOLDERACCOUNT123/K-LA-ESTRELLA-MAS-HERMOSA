// Aplica las imágenes de fondo y header desde atributos data-*
// Mantiene la compatibilidad con .png y actualiza variables CSS globales.
(function () {
  const body = document.querySelector('body.theme-space');
  const header = document.querySelector('.site-header');

  if (body && body.dataset.bg) {
    document.documentElement.style.setProperty('--bg-image', `url('${body.dataset.bg}')`);
  }
  if (header && header.dataset.header) {
    document.documentElement.style.setProperty('--header-image', `url('${header.dataset.header}')`);
  }

  // Mejora suave de interacción para elementos con glow
  const glowers = document.querySelectorAll('.glow-on-hover');
  glowers.forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.setProperty('transition', 'text-shadow .15s ease, box-shadow .15s ease, transform .1s ease, color .15s ease');
    });
    el.addEventListener('mouseleave', () => {
      el.style.removeProperty('transition');
    });
  });
})();
