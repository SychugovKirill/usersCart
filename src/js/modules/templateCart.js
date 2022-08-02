const templateCart = (data) => {
  const template = `
     <div class="cart">
        <p class="cart__name">${data.name}</p>
        <p class="cart__tel">${data.phone}</p>
        <p class="cart__mail">${data.email}</p>
    </div>
  `;
  return template;
};

export default templateCart;
