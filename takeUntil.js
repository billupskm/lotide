const takeUntil = function(array, callback) {
  let result = [];
  for (let i in array) {
    if (callback(array[i])) {
      result = array.slice(i);
      return result;
    }
  }
  return result;
};

module.exports = takeUntil;