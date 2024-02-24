function filter(array, callback) {
  const result = [];
  for (let el of array) {
    if (callback(el)) {
      result.push(el);
    }
  }
  return result;
}

function clean(el) {
  return el < 5;
}

const array = [-1, 0, 1, 2, 3, 4, 5, 6];
console.log(filter(array, clean)); // [-1, 0, 1, 2, 3, 4]
