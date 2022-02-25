// Caixa com mais informações
export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    // bind() do objeto da classe aos callbacks.
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  // Essa função pega a localizaçõa exata do cursor em relação a página.
  onMouseMove(event) {
    // event.page dá um valor inteiro e o que precisamos é de um valor em pixels, por isso se concatena com "px".
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 170}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    // Remove ambos eventos quando onMouseLeave é ativado. Mantém o código mais otimizado.
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // Essa função cria o elemento tooltip.
  createTooltipBox(element) {
    // Cria o elemento div.
    const tooltipBox = document.createElement("div");
    // Pega o atributo aria-label.
    const text = element.getAttribute("aria-label");

    tooltipBox.classList.add("tooltip");
    // Adiciona o texto dentro do elemento.
    tooltipBox.innerText = text;
    // Adiciona o elemento tooltip no final do body.
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseOver({ currentTarget }) {
    // Executa a função createTooltipBox() na propriedade tooltipBox de acordo com o event.currentTarget.
    this.createTooltipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  addTooltipEvents() {
    this.tooltips.forEach((item) =>
      item.addEventListener("mouseover", this.onMouseOver)
    );
  }

  init() {
    if (this.tooltips.lenght) {
      this.addTooltipEvents();
    }
    return this;
  }
}
