// Numbers animation
export default class NumbersAnimation {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    // bind() o this do objeto ao callback da mutação.
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do DOM com número em seu texto.
  // Incrementa a partir de 0 até o número final.
  static incrementNumber(number) {
    // Transforma o texto em número.
    const total = +number.innerText;
    // Valor relativo para executar o incremento, ao invés de 1 em 1. A função Math.floor() arredonda o valor.
    const increment = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      // Altera os números do texto.
      number.innerText = start;

      if (start > total) {
        // O resultado é um valor maior que o estipulado. Para evitar isso, pegamos o valor do incremento e mudamos para o valor inicial. O usuário não perceberá a mudança.
        number.innerText = total;
        clearInterval(timer);
      }
      // A função Math.random() gera um número aleatório a cada loop e multiplica com o tempo.
    }, 25 * Math.random());
  }

  // Ativa incrementar número para cada número selecionado do DOM.
  numbersAnimation() {
    this.numbers.forEach((number) => this.constructor.incrementNumber(number));
  }

  handleMutation(mutation) {
    // Verifica se na mutação há a classe 'active' e ativa a função numbersAnimation().
    if (mutation[0].target.classList.contains(this.observerClass)) {
      // Quando ocorre a animação, o observer é desativado.
      this.observer.disconnect();
      this.numbersAnimation();
    }
  }

  // Esse método ocorre quando há alguma mutação.
  addMutationObserver() {
    // O observador verifica se ocorre alguma mutação no elemento.
    this.observer = new MutationObserver(this.handleMutation);

    // Seleciona o elemento a ser observado e passa a opção de atributos como alvo.
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  // Adiciona o MutationObserver para verificar quando a classe active é adicionado ao element target.
  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
