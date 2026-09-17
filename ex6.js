const produto = {
  nome: "Mouse",
  preco: 80
};

const produtocompleto = { ...produto , estoque: 15 };
console.log(produtocompleto);