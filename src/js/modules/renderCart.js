import templateCart from "./templateCart";

const renderCart = (arr) => {
  const root = document.getElementById(`root`);
  if (arr.length > 0) {
    arr.map((item) => {
      root.insertAdjacentHTML(`beforeend`, templateCart(item));
    });
  } else {
    root.innerHTML = `Nothing found`;
  }
};

export default renderCart;
