const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error("Essa funçao só aceita numeros");
  }

  return a + b;
}

assert.equal(sum(4, 5), 9);
assert.equal(sum(0, 0), 0);
assert.throws(() => {
  sum('0');
});
