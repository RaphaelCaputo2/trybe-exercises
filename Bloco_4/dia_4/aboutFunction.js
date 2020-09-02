function palidromo(palavra){
  let divideEmArray = palavra.split('');
  let ehpalidromo = true;
  for (let i in divideEmArray) {
    if (divideEmArray[i] != palavra[(palavra.length -1) - i]) {
      ehpalidromo = false;
    }
  }
  return ehpalidromo;
};
console.log(palidromo('ovo'));