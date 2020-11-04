

function resultadoSomaTotal(arr) {
  let total = 0;
  for (let i = 1; i <= arr; i += 1) {
    total += i;
  }
  return total;
}
console.log(resultadoSomaTotal(5));