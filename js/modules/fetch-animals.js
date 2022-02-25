import NumbersAnimation from "./numbers-animation.js";

// Fetch animals
export default function initFetchAnimals() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("n-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;

    return div;
  }

  async function fetchAnimals(url) {
    const animalsResponse = await fetch(url);
    const animalsJson = await animalsResponse.json();
    const numbersGrid = document.querySelector(".numbers-grid");

    animalsJson.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      numbersGrid.appendChild(divAnimal);
    });

    const numbersAnimation = new NumbersAnimation(
      "[data-number]",
      ".numbers",
      "active"
    );
    numbersAnimation.init();
  }

  fetchAnimals("./js/json/animals-api.json");
}
