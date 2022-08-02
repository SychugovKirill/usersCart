const sendRequest = (url) => {
  return fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch((err) => {
      const e = new Error(`Что то пошло не так`);
      e.data = err;
      throw e;
    });
};

export default sendRequest;

