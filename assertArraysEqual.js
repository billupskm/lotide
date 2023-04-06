const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
    
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
    
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (arr1 === arr2) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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