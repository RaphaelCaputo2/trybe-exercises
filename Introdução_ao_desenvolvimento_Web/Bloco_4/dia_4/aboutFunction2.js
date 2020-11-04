function numeros(arrayInteiro) {
    let numeros = 0;
    for (let i in arrayInteiro) {
        if (arrayInteiro[numeros] < arrayInteiro[i]) {
            numeros = i;

        }

    }
    return numeros;
}

console.log(numeros([2, 3, 6, 7, 10, 1, 10, 20, 30]));