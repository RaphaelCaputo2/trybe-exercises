//Exercicio Parte 2 da primeira parte do conteudo do dia


const assert = require('assert');

function division(x, y) {
  return x / y;
}

const esperado = division(10, 2);

assert(esperado === 5, 'Mensagem customizada');