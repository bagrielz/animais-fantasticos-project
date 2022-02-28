import outsideClick from "./outside-click.js";

// Menu mobile
export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "active";
    this.openMenu = this.openMenu.bind(this);

    // Define touchstart e click como argumento padrão de events, caso o usuário não altere.
    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((userEvent) =>
      this.menuButton.addEventListener(userEvent, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
