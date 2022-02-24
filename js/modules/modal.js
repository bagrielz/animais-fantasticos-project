// Modal
export default class Modal {
  constructor(openButton, closeButton, containerModal) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.containerModal = document.querySelector(containerModal);
    this.activeClass = "active";
    // O método bind() muda a referência atual do this para a classe.
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickAwayModal = this.clickAwayModal.bind(this);
  }

  // Abre ou fecha o modal.
  classToggleModal() {
    this.containerModal.classList.toggle(this.activeClass);
  }

  // Adiciona o evento de toggle ao modal.
  eventToggleModal(event) {
    event.preventDefault();
    this.classToggleModal();
  }

  // Fecha o modal ao clicar do lado de fora.
  clickAwayModal(event) {
    if (event.target === this.containerModal) {
      this.classToggleModal();
    }
  }

  // Adiciona os eventos aos elementos do modal.
  addModalEvents() {
    this.openButton.addEventListener("click", this.eventToggleModal);
    this.closeButton.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickAwayModal);
  }

  init() {
    if (this.openButton && this.closeButton && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
