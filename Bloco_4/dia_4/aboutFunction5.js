function numeros(arrayInteiro) {
    let numeros = 0;
    for (let i in arrayInteiro) {
        if (arrayInteiro.length == arrayInteiro[i].length) {
            numeros = arrayInteiro[i];

        }

    }
    return numeros;
}

console.log(numeros([2, 3, 2, 5, 8, 2, 3]));