function bubbleSort(arr) {
  let n = arr.length;

  for (let i = n - 1; i >= 1; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log(bubbleSort([64, 25, 12, 22, 11]))