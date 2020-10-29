const { test, expect } = require('@jest/globals');

const myRemove = require('./myRemove');


describe('myRemove', () => {
  test('returns a new array without the item if the item belongs to it', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
})
