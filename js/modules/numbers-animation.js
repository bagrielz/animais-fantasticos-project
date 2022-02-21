const activeClass = "active";

// Numbers animation
export default function initNumbersAnimation() {
  function numbersAnimation() {
    const numbers = document.querySelectorAll("[data-number]");

    numbers.forEach((number) => {
      // Transforma o texto em número.
      const total = +number.innerText;
      // Valor relativo para executar o incremento, ao invés de 1 em 1. A função Math.floor() arredonda o valor.
      const incremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        // Altera os números do texto.
        number.innerText = start;

        if (start > total) {
          // O resultado é um valor maior que o estipulado. Para evitar isso, pegamos o valor do incremento e mudamos para o valor inicial. O usuário não perceberá a mudança.
          number.innerText = total;
          clearInterval(timer);
        }
        // A função Math.random() gera um número aleatório a cada loop e multiplica com o tempo.
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    // Verifica se na mutação há a classe 'active' e ativa a função numbersAnimation().
    if (mutation[0].target.classList.contains(activeClass)) {
      // Quando ocorre a animação, o observer é desativado.
      observer.disconnect();
      numbersAnimation();
    }
  }

  // O observador verifica se ocorre alguma mutação no elemento.
  const observer = new MutationObserver(handleMutation);
  // Seleciona o elemento.
  const observerTarget = document.querySelector(".numbers");

  // Seleciona o elemento a ser observado e passa a opção de atributos como alvo.
  observer.observe(observerTarget, { attributes: true });
}
