const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, 1]);

eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);



eqArrays([1, 2, 3], [1, 2, 3]);
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

eqArrays([1, 2, 3], [3, 2, 1]);
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

eqArrays(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);

eqArrays(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);