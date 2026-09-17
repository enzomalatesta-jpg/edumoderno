const produto = {
  nome: "Notebook",
  preco: 3500,
  estoque: 5
};

const status = produto.estoque > 0 ? "disponível" : "sem estoque";
const produtoNovo = {... produto, status:status}
console.log(produtoNovo);
