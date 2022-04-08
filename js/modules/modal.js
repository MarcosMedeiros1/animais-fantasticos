export default function initModal() {
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (btnAbrir && btnFechar && containerModal) {
    const toggleModal = (event) => {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    };

    const clickForaModal = (event) => {
      if (event.target === containerModal) toggleModal(event);
    };

    btnAbrir.addEventListener("click", toggleModal);
    btnFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickForaModal);
  }
}
