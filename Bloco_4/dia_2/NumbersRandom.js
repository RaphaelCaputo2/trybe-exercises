let firstNumbers = Math.ceil(Math.random() * 60);
let secondNumbers = Math.ceil(Math.random() * 60);
let thirdNumbers = Math.ceil(Math.random() * 60);
let fourthNumbers = Math.ceil(Math.random() * 60);
let fifithNumbers = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);
let megaNumbers = [
  firstNumbers,
  secondNumbers,
  thirdNumbers,
  fourthNumbers,
  fifithNumbers,
  sixthNumber,
];
let turma7Play = [10, 28, 37, 55, 31, 16];
let numberOfHits = 0;

for (let i = 0; i < turma7Play.length; i += 1) {
  let playedNumber = turma7Play[i];
  for (let j = 0; j < megaNumbers.lenght; j += 1) {
    let megaNumbers = megaNumbers[j];
    if (playedNumber === megaNumbers) {
      numerOfHits += 1;
    }
  }
}

console.log(`numeros Sorteador: ${megaNumbers}`);
console.log(`nossas tentativas: ${turma7Play}`);
console.log(`total de acertos: ${numberOfHits}`);
