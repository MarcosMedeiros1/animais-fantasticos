import outsideClick from "./outside-click.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    this.events = events === undefined ? ["touchstart", "click"] : events;

    this.activeClass = "active";
    this.activateDropdownMenu = this.activateDropdownMenu.bind(this);
  }

  activateDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add("active");
    outsideClick(element, this.events, () => {
      element.classList.remove("active");
    });
  }

  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activateDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
