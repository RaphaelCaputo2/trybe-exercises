const { expect, test } = require('@jest/globals');
const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz', () => {
  test('number rest 0 for 3 and 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  })
  test('number for 3 rest 0', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  })
  test('number for 5 rest 0', () => {
    expect(myFizzBuzz(5)).toEqual('buzz')
  })
  test('not a number for 3 or 5', () => {
    expect(myFizzBuzz('7')).toBeFalsy();
  })
})