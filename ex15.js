const Equipe = [
  "Eduardo",
  "Ana",
  "Carlos",
  "Lucas"
];

function criarEquipe(lider, ...integrantes) {
const [primeiro, ...resto] = Equipe;
lider = primeiro;
integrantes = resto;
console.log("Líder:", lider);
console.log("Integrantes:", integrantes);
}

criarEquipe(Equipe);