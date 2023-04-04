const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
    }
  }
  return true;
};



eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, 1]);

eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);




eqArrays([1, 2, 3], [1, 2, 3]);


eqArrays([1, 2, 3], [3, 2, 1]);


eqArrays(["1", "2", "3"], ["1", "2", "3"]);


eqArrays(["1", "2", "3"], ["1", "2", 3]);
