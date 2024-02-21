function sortLoop(arr, order) {
  for (let i in arr) {
    for (let j in arr) {
      if (order === "asc") {
        if (arr[j] > arr[i]) {
          let currentElement = arr[j];
          arr[j] = arr[i];
          arr[i] = currentElement;
        }
      }

      if (order === "desc") {
        if (arr[j] < arr[i]) {
          let currentElement = arr[j];
          arr[j] = arr[i];
          arr[i] = currentElement;
        }
      }
    }
  }

  return arr;
}

console.log(sortLoop([0, 2, 1, -1, 15, -23], "desc")); // [ 15, 2, 1, 0, -1, -23 ]
console.log(sortLoop([0, 2, 1, -1, 15, -23], "asc")); // [ -23, -1, 0, 1, 2, 15 ]
