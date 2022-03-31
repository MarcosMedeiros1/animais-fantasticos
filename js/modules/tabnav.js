const classAtivo = "ativo";
export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(classAtivo);

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(classAtivo);
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add(classAtivo, direcao);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();
