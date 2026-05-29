function rotateOne(arr) {
  let temp = arr[0];
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }

  arr[n - 1] = temp;

  return arr;
}

console.log(rotateOne([1, 2, 3, 4, 5]));
