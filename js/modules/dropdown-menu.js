import outsideClick from "./outside-click.js";

// Variáveis
const activeClass = "active";

// Dropdown menu
export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);

    // Define touchstart e click como argumento padrão de events, caso o usuário não altere.
    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;
  }

  // Ativa o dropdown menu e adiciona a função que observa o clique fora dele.
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;

    element.classList.add(activeClass);
    outsideClick(element, this.events, () =>
      element.classList.remove(activeClass)
    );
  }

  // Adiciona os eventos ao dropdown menu.
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
