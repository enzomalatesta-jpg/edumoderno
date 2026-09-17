const usuario = {
  id: 1,
  nome: "Ana",
  email: "ana@email.com",
  ativo: true
};

const usuarioAtualizado = { ...usuario, email : "ana.silva@email.com"};
console.log(usuarioAtualizado);