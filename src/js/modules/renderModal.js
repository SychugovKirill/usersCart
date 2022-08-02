const renderModal = (arr) => {
  const root = document.getElementById(`root`);
  const modal = document.querySelector(`.modal`);

  root.addEventListener(`click`, (evt) => {
    const target = evt.target.closest(`.cart`);

    if (!target) {
      return;
    }

    const name = target.querySelector(`.cart__name`).innerHTML;
    const currentUser = arr.find((item) => {
      return item.name === name;
    });
    console.log(currentUser);

    modal.addEventListener(`click`, (event) => {
      const targetWrap = event.target.closest(`.modal__wrap`);

      if (targetWrap) {
        return;
      }

      modal.classList.remove(`active`);
    });

    modal.classList.add(`active`);
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
