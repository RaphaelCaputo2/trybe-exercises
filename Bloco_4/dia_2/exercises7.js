let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = 101;

  for(let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] < menorNumero) {
      menorNumero = numeros[i];
    }
  }
  console.log(menorNumero)