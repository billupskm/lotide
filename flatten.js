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


module.exports = flatten;