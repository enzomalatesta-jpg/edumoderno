const produto = {
  nome: "Teclado",
  preco: 150,
  estoque: 20
};
 const produtoatualizado = { ...produto, preco: 180 };
 console.log(produtoatualizado);