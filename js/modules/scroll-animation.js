const activeClass = "active";

// Animação ao scroll
export default function initScrollAnimation() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  function animateScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHalf = window.innerHeight * 0.6;
      const isSectionVisible = sectionTop - windowHalf < 0;

      if (isSectionVisible) {
        section.classList.add(activeClass);
      } else if (section.classList.contains(activeClass)) {
        section.classList.remove(activeClass);
      }
    });
  }

  if (sections.length) {
    window.addEventListener("scroll", animateScroll);
    animateScroll();
  }
}
