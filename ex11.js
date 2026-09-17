const aluno = {
  nome: "Mariana",
  idade: 17,
  curso: "Desenvolvimento de Sistemas",
  turma: "2TDS"
};

const {nome, ...dadosAluno} = aluno

console.log(nome);
console.log(dadosAluno);