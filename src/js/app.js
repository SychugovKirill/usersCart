import "../scss/app.scss";
import sendRequest from "./modules/fetch";
import renderRoot from "./modules/renderRoot";
import renderFilter from "./modules/filters";

sendRequest(`http://127.0.0.1:3000/`)
  .then((response)=> {
    const data = response;
    renderRoot(data);
  });

renderFilter();
