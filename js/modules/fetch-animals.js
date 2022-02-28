import NumbersAnimation from "./numbers-animation.js";

// Fetch animals
export default function initFetchAnimals(url, target) {
  const numbersGrid = document.querySelector(target);

  // Cria a div contendo informações com o total de animais.
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("n-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;

    return div;
  }

  // Preenche cada animal no DOM.
  function completeAnimals(animal) {
    const divAnimal = createAnimal(animal);
    numbersGrid.appendChild(divAnimal);
  }

  // Anima o número de cada animal.
  function animateAnimalsNumbers() {
    const numbersAnimation = new NumbersAnimation(
      "[data-number]",
      ".numbers",
      "active"
    );
    numbersAnimation.init();
  }

  // Puxa os animais através de um arquivo JSON e cria cada animal utilizando createAnimal().
  async function fetchAnimals() {
    try {
      // Fetch, aguarda a resposta e transforma em um arquivo JSON.
      const animalsResponse = await fetch(url);
      const animalsJson = await animalsResponse.json();

      // Após a transformação de JSON, ativa as funções para preencher e animar os números.
      animalsJson.forEach((animal) => completeAnimals(animal));
      animateAnimalsNumbers();
    } catch (erro) {
      console.log(erro);
    }
  }

  return fetchAnimals();
}
