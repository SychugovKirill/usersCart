const renderModal = (arr) => {
  const root = document.getElementById(`root`);
  const modal = document.querySelector(`.modal`);
  const body = document.querySelector(`.page`)

  root.addEventListener(`click`, (evt) => {
    const target = evt.target.closest(`.cart`);

    if (!target) {
      return;
    }

    const name = target.querySelector(`.cart__name`).innerHTML;
    const currentUser = arr.find((item) => {
      return item.name === name;
    });

    modal.addEventListener(`click`, (event) => {
      const targetWrap = event.target.closest(`.modal__wrap`);

      if (targetWrap) {
        return;
      }

      modal.classList.remove(`active`);
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.paddingRight = '0';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });

    modal.classList.add(`active`);
    document.body.style.position = 'fixed';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.paddingRight = '15px';
    document.body.style.top = `-${window.scrollY}px`;
    const modalName = modal.querySelector(`#modalName`);
    const modalTel = modal.querySelector(`#modalTel`);
    const modalEmail = modal.querySelector(`#modalEmail`);
    const modalDate = modal.querySelector(`#modalDate`);
    const modalPost = modal.querySelector(`#modalPost`);
    const modalDivision = modal.querySelector(`#modalDivision`);
    const modalText = modal.querySelector(`#textBottom`);
    modalName.innerHTML = currentUser.name;
    modalTel.innerHTML = currentUser.phone;
    modalEmail.innerHTML = currentUser.email;
    modalDate.innerHTML = currentUser.hire_date;
    modalPost.innerHTML = currentUser.position_name;
    modalDivision.innerHTML = currentUser.department;
    modalText.insertAdjacentHTML(`beforeend`, currentUser.address);
  });
}

export default renderModal;
