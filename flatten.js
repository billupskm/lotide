const assertArraysEqual = function(arr1, arr2) {
  if (arr1 === arr2) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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

const flatten = function(arr) {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]))
      for (let j = 0; j < arr[i].length; j++)
        finalArr.push(arr[i][j]);
    else
      finalArr.push(arr[i]);
  }
  return finalArr;
};

