// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


// const eqObjects = (object1, object2) => {
//   if (Object.keys(object1).length !== Object.keys(object2).length) {
//     return false;
//   }
//   for (let i in object1) {
//     if (Array.isArray(object1[i])) {
//       return eqArrays(object1[i], object2[i]);
//     } else if (typeof object1[i] === 'object') {
//       if (!eqObjects(object1[i], object2[i])) {
//         return false;
//       }
//     } else {
//       if (object1[i] !== object2[i]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (actual, expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 node assertObjectsEqual.jsAssertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
// const eqArrays = require("./eqArrays");

// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log(`✅  Assertion passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
//   }
// };



// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);

module.exports = assertObjectsEqual;