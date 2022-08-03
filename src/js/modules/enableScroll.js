const enableScroll = () => {
  const body = document.body;
  const modal = document.querySelector(`.modal`);

  let pagePosition = parseInt(body.dataset.position, 10);
  body.style.top = `auto`;
  body.classList.remove(`page--scrollDisable`);
  body.style.paddingRight = ``;
  modal.style.paddingRight = ``;
  window.scroll({top: pagePosition, left: 0});
};

export default enableScroll;
