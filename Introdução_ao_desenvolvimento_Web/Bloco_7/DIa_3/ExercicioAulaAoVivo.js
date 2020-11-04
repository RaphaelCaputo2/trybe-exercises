const assert = require('assert');
const summationOf = (number) => {
  let sum = 0;
  for (let index = 1; index <= number; index += 1) {
    sum += index;
  }
  return sum;
};

assert.strictEqual(typeof (summationOf), "function");
assert.strictEqual(summationOf(1), 1);
assert.strictEqual(summationOf(6), 21);
assert.strictEqual(summationOf(5), 15);
assert.strictEqual(summationOf(7), 28);