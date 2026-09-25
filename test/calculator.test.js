import test from 'node:test';
import assert from 'node:assert/strict';
import { add, divide, multiply, subtract } from '../src/calculator.js';

test('performs basic calculations', () => {
  assert.equal(add(2, 3), 5);
  assert.equal(subtract(5, 3), 2);
  assert.equal(multiply(2, 3), 6);
  assert.equal(divide(6, 3), 2);
});

test('rejects division by zero', () => {
  assert.throws(() => divide(1, 0), /Cannot divide by zero/);
});
