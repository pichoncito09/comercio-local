// Animaciones al hacer scroll (Intersection Observer + Animate.css, AOS ahora hace la mayor parte)
document.addEventListener("DOMContentLoaded", function () {
  // Navegación activa
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  function onScroll() {
    let scrollPos = window.scrollY || document.documentElement.scrollTop;
    sections.forEach((section, idx) => {
      if (
        section.offsetTop - 90 <= scrollPos &&
        section.offsetTop + section.offsetHeight - 90 > scrollPos
      ) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[idx]?.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', onScroll);

  // Formulario: feedback visual
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const formMsg = document.getElementById('formMsg');
      formMsg.textContent = "¡Gracias por tu mensaje! Pronto te contactaremos.";
      formMsg.className = "form-msg success";
      form.reset();
    });
  }
});