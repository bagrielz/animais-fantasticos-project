import outsideClick from "./outside-click.js";

const activeClass = "active";

// Menu mobile
export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ["click", "touchstart"];

  if (menuButton) {
    function openMenu() {
      menuList.classList.add(activeClass);
      menuButton.classList.add(activeClass);
      outsideClick(menuList, events, () => {
        menuList.classList.remove(activeClass);
        menuButton.classList.remove(activeClass);
      });
    }

    events.forEach((userEvent) => {
      menuButton.addEventListener(userEvent, openMenu);
    });

    menuButton.addEventListener("click", openMenu);
  }
}
