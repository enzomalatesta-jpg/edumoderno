const produto = {
  id: 25,
  nome: "Monitor",
  preco: 900,
  estoque: 8
};

const {id, ...dadosProduto} = produto;

console.log(id);
console.log(dadosProduto); 