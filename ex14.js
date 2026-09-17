const numeros = [10, 20, 30];

const somar = (...numeros) => {
  const [primeiro, segundo, ...restantes] = numeros;
const soma =primeiro + segundo + restantes
console.log(soma);
};
somar(...numeros);