let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

let aritmetica = soma / numeros.length;


if(aritmetica >= '20'){
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}