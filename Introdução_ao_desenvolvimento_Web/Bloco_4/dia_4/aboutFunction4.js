function numeros(arrayInteiro) {
    let numeros = 0;
    for (let i in arrayInteiro) {
        if (arrayInteiro.length < arrayInteiro[i].length) {
            numeros = arrayInteiro[i];

        }

    }
    return numeros;
}

console.log(numeros(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));