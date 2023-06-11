const findKeyByValue = function(obj, value) {
  for (let key of Object.keys(obj)) {
    if (value === obj[key]) {
      return key;
    }
  }
};

module.exports = findKeyByValue;