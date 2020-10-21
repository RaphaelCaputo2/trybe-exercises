let n = 5;
let linhas;
let simbolo = "*";
let saida = '';
let posicao = n;
let coluna;

for (linhas = 0; linhas < n; linhas += 1) {
    for (coluna = 0; coluna <= n; coluna += 1) {
        if (coluna < posicao) {
            saida = saida + ' ';
        } else {
            saida += simbolo
        }
    }
    console.log(saida);
    saida = '';
    posicao -= 1;
};