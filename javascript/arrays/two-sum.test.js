const assert = require('node:assert/strict');
const { twoSum } = require('./two-sum');

assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
assert.deepEqual(twoSum([1, 2, 3], 10), []);

console.log('two-sum tests passed');
