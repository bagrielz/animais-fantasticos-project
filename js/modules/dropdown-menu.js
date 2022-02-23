import outsideClick from "./outside-click.js";

// Variáveis
const activeClass = "active";

// Dropdown menu
export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    this.classList.add(activeClass);
    outsideClick(this, ["click", "touchstart"], () =>
      this.classList.remove(activeClass)
    );
  }

  dropdownMenus.forEach((menu) => {
    ["click", "touchstart"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
