const classAtivo = "active";
export default function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowHalf = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowHalf < 0;

      if (isSectionVisible) {
        section.classList.add(classAtivo);
      } else if (section.classList.contains(".active")) {
        section.classList.remove(".active");
      }
    });
  }

  if (sections.length) {
    window.addEventListener("scroll", animaScroll);
    animaScroll();
  }
}
