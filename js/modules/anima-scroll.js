const classAtivo = "ativo";
export default function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowHalf = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowHalf < 0;

      if (isSectionVisible) {
        section.classList.add(classAtivo);
      } else if (section.classList.contains(".ativo")) {
        section.classList.remove(".ativo");
      }
    });
  }

  if (sections.length) {
    window.addEventListener("scroll", animaScroll);
    animaScroll();
  }
}