const activeClass = "active";

// Modal
export default function initModal() {
  const openButton = document.querySelector('[data-modal="open"');
  const closeButton = document.querySelector('[data-modal="close"');
  const containerModal = document.querySelector('[data-modal="container"');

  if (openButton && closeButton && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle(activeClass);
    }

    function clickAwayModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    openButton.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickAwayModal);
  }
}
