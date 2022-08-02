import sendRequest from "./fetch";
import renderRoot from "./renderRoot";
import {debounce} from "lodash";

const renderFilter = () => {
  const filter = document.querySelector(`.filter`);
  const input = filter.querySelector(`input`);

  const render = (evt) => {
    evt.preventDefault();
    const root = document.getElementById(`root`);
    const value = filter.querySelector(`input`).value;

    sendRequest(`http://127.0.0.1:3000/?term=${value}`)
      .then((res) => {
        root.innerHTML = ``;
        renderRoot(res);
      });
  };

  input.addEventListener(`input`, debounce(render, 300));
};

export default renderFilter;
