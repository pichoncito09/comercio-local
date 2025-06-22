// Animaciones al hacer scroll (Intersection Observer + Animate.css)
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  const animateClass = "animate__animated animate__fadeInUp";
  const observer = new window.IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(...animateClass.split(" "));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  animatedElements.forEach(el => observer.observe(el));

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
        navLinks[idx].classList.add('active');
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