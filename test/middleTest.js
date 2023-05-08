const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

const assert = require('chai').assert;

describe("#middle", () => {
  it("should return [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});

// middle([1]);// => []
// middle([1, 2]);// => []

// middle([1, 2, 3]);// => [2]
// eqArrays(middle([1, 2, 3, 4, 5]));// => [3]
// assertArraysEqual([1, 2, 3, 4, 5]);

// middle([1, 2, 3, 4]);// => [2, 3]
// middle([1, 2, 3, 4, 5, 6]);// => [3, 4]