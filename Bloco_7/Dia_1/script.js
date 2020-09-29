//Exercicio 1: Crie uma função que receba um número e retorne seu fatorial.

let funcao = (n) => {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}
console.log(funcao(5));


//Exercicio bonus: tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha.
let funcao = (n) => { let resultado = 1;for (let i = 1; i <= n; i++) {resultado *= i;} resultado; };


//Exercicio 2: Crie uma função que receba uma frase e retorne qual a maior palavra.

