const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let i in object1) {
    if (Array.isArray(object1[i])) {
      return (object1[i], object2[i]);
    } else if (typeof object1[i] === 'object') {
      if (!eqObjects(object1[i], object2[i])) {
        return false;
      }
    } else {
      if (object1[i] !== object2[i]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
