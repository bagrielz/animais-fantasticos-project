// Clique fora do dropdown

// Element faz referência ao this (dropdown menu) dado como parâmetro no momento em que outsideClick() é ativado.
// Events faz referência a array dada como parâmetro no momento em que outsideClick() é ativado.
// Callback faz referência a função dada como parâmetro no momento em que outsideClick() é ativado.
export default function outsideClick(element, events, callback) {
  // Seleciona documento HTML.
  const html = document.documentElement;
  const outside = "data-outside";

  // Verifica se o evento já foi adicionado.
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) =>
      // O callback não é adicionado ao HTML de primeira pelo o bubble, pois o setTimeout() é uma função assíncrona e portanto entra em uma fila de espera até a Call Stack estiver vazia.
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick))
    );
    element.setAttribute(outside, "");
  }

  // Função só é criada quando oustideClick é ativado.
  function handleOutsideClick(event) {
    // Verifica se o click contém um alvo do elemento (dropdown menu).
    if (!element.contains(event.target)) {
      // Remove o atributo após clicar fora do elemento.
      element.removeAttribute(outside);
      html.removeEventListener("click", handleOutsideClick);
      callback();
    }
  }
}
