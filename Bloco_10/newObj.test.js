const { test, expect } = require("@jest/globals");

const obj1 = {
  city: "São Paulo",
  state: "São Paulo"
};

const obj2 = {
  city: "Campinas",
  state: "São Paulo"
};

const obj3 = {
  city: "São Paulo",
  state: "São Paulo"
};

test('comparing the objects is equal', () => {
  expect(obj3).toEqual(obj1);
  expect(obj3).not.toEqual(obj2);
})
