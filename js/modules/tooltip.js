// Caixa com mais informações
export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => item.addEventListener("mouseover", onMouseOver));

  function onMouseOver() {
    // Executa a função createTooltipBox() e a guarda dentro da constante tooltipBox
    // This faz referência ao(s) elemento(s) tooltip(s).
    const tooltipBox = createTooltipBox(this);

    // É criado uma propriedade tooltipBox dentro do objeto onMouseMove com o valor de tooltipBox (o próprio elemento).
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    // É criado uma propriedade element dentro do objeto onMouseLeave com o valor this (elemento).
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  const onMouseMove = {
    // Essa função pega a localizaçõa exata do cursor em relação a página.
    handleEvent(event) {
      // event.page dá um valor inteiro e o que precisamos é de um valor em pixels, por isso se concatena com "px".
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      // Remove ambos eventos quando onMouseLeave é ativado. Mantém o código mais otimizado.
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  // Essa função cria o elemento tooltip.
  function createTooltipBox(element) {
    // Cria o elemento div.
    const tooltipBox = document.createElement("div");
    // Pega o atributo aria-label.
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    // Adiciona o texto dentro do elemento.
    tooltipBox.innerText = text;
    // Adiciona o elemento tooltip no final do body.
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
