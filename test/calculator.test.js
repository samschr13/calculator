const assert = require('assert');
const { add, divide, multiply, subtract } = require('../src/calculator');

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(subtract(5, 3), 2);
assert.strictEqual(multiply(2, 3), 6);
assert.strictEqual(divide(6, 3), 2);

assert.throws(() => divide(1, 0), /Cannot divide by zero/);
console.log('Tests passed');
