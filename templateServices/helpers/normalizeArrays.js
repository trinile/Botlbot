const normalizeArray = (array, n) => {
  if (array.length > n) return array.slice(0, n);
  if (array.length === 0) return new Array(n);
  if (array.length === n) return array;
  while (array.length < n) {
    array = array.concat(array);
  }
  return normalizeArray(array, n);
};

module.exports = normalizeArray;
