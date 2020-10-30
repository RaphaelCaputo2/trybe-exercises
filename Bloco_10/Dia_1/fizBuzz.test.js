const { test, expect } = require('@jest/globals');
const fizzBuzz = require('./fizzBuzz');

test('fizzBuzz is not defined', () => {
  expect(fizzBuzz).toBeDefined();
  })

  test('Calling fizzbuzz with `5` prints out 5 statements', () => {
    fizzBuzz(5);
  
    expect(console.log.mock.calls.length).toEqual(5);
  });// retirado do gabarito