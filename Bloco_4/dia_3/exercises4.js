let n = 5;
let linhas;
let linhaColuna;
let saida = '';
let simbolo = "*";

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (linhas = 0; linhas <= midOfMatrix; linhas += 1) {
    for (linhaColuna =1; linhaColuna <= n; linhaColuna += 1){
        if (linhaColuna > controlRight && linhaColuna < controlLeft) {
            saida += simbolo;
        } else {
            saida = saida + ' ';
        }
    }
    console.log(saida);
    saida = '';
    controlRight -= 1;
    controlLeft += 1;
};