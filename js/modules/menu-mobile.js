import outsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuBtn = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const events = ["click", "touchstart"];

  function openMenu() {
    menuList.classList.add("active");
    menuBtn.classList.add("active");

    outsideClick(menuList, events, () => {
      menuList.classList.remove("active");
      menuBtn.classList.remove("active");
    });
  }

  if (menuBtn) {
    events.forEach((event) => menuBtn.addEventListener(event, openMenu));
  }
}
