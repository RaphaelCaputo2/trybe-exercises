let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for(let i = 0; i < numeros.length; i += 1) {
  if(numeros[i] > maiorNumero)
  maiorNumero = numeros[i]
}



console.log(maiorNumero);