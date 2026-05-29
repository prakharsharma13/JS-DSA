function findUnion(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    // Skip duplicates in arr1
    if (i > 0 && arr1[i] === arr1[i - 1]) {
      i++;
      continue;
    }

    // Skip duplicates in arr2
    if (j > 0 && arr2[j] === arr2[j - 1]) {
      j++;
      continue;
    }

    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
      j++;
    }
  }

  // Remaining elements of arr1
  while (i < arr1.length) {
    if (i === 0 || arr1[i] !== arr1[i - 1]) {
      result.push(arr1[i]);
    }
    i++;
  }

  // Remaining elements of arr2
  while (j < arr2.length) {
    if (j === 0 || arr2[j] !== arr2[j - 1]) {
      result.push(arr2[j]);
    }
    j++;
  }

  return result;
}

// Example
const arr1 = [1, 2, 2, 3, 4];
const arr2 = [2, 3, 5];

console.log(findUnion(arr1, arr2));
// Output: [1, 2, 3, 4, 5]