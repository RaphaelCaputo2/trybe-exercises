const { test, expect } = require('@jest/globals');
const { extractExpectedAssertionsErrors } = require('expect');

const myRemove = require('./myRemove');


describe('myRemove', () => {
  test('returns a new array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

test('return new array with not', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
})
test('array is not diferent', () => {
  const array = [1, 2, 3, 4];
  myRemove(array, 1);
  expect(array).toEqual([1, 2, 3, 4]);
})
test('Return the array waiting', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})
})


