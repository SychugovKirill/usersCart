const disableScroll = () => {
  const body = document.body;
  const modal = document.querySelector(`.modal`);
  let paddingOffset = window.innerWidth - document.body.offsetWidth + `px`;
  let pagePosition = window.scrollY;
  body.dataset.position = pagePosition;
  body.classList.add(`page--scrollDisable`);
  body.style.paddingRight = paddingOffset;
  modal.style.paddingRight = paddingOffset;
  body.style.top = -pagePosition + `px`;
};

export default disableScroll;
