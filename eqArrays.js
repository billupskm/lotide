// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        if (eqArrays(arr1[i], arr2[i]) === false) {
          return false;
        } else if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
    }
  }
  return true;
};

module.exports = eqArrays;

// TEST CODE


// eqArrays([1, 2, 3], [1, 2, 3]);
// eqArrays([1, 2, 3], [3, 2, 1]);

// eqArrays(["1", "2", "3"], ["1", "2", "3"]);
// eqArrays(["1", "2", "3"], ["1", "2", 3]);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);



// eqArrays([1, 2, 3], [1, 2, 3]);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

// eqArrays([1, 2, 3], [3, 2, 1]);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// eqArrays(["1", "2", "3"], ["1", "2", "3"]);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);

// eqArrays(["1", "2", "3"], ["1", "2", 3]);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);