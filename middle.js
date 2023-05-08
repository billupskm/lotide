// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   } else {
//     for (let i = 0; i < arr1.length; i++) {
//       if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
//         if (eqArrays(arr1[i], arr2[i]) === false) {
//           return false;
//         } else if (arr1[i] !== arr2[i]) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(arr1, arr2) {
//   if (arr1 === arr2) {
//     console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// };

const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice(array.length / 2 - 1, array.length / 2 + 1);
  } else {
    let newArray = [];
    let middleNum = Math.round(array.length / 2);
    newArray.push(array[middleNum - 1]);
    return newArray;
  }
};

module.exports = middle;


// middle([1]);// => []
// middle([1, 2]);// => []

// middle([1, 2, 3]);// => [2]
// eqArrays(middle([1, 2, 3, 4, 5]));// => [3]

// middle([1, 2, 3, 4]);// => [2, 3]
// middle([1, 2, 3, 4, 5, 6]);// => [3, 4]