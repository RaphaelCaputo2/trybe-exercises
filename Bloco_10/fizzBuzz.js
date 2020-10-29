// fizzbuzz.js
const fizzBuzz = n => {
  for (let i = 1; i <= n; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
      continue;
    }
    if (i % 3 === 0) {
      console.log('fizz');
      continue;
    }
    if (i % 5 === 0) {
      console.log('buzz');
      continue;
    }
    console.log(i);
  }
}

module.exports = fizzBuzz;