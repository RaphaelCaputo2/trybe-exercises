const { describe } = require('yargs');
const objetos = require('./newObj');


describe('objetos', () => {
test('comparing the objects is equal', () => {
  expect(obj3).toEqual(obj1);
  expect(obj3).not.toEqual(obj2);
})
});