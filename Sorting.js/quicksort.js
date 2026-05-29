function quicksort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);

    quicksort(arr, low, pivotIndex - 1);
    quicksort(arr, low, pivotIndex + 1);
  }
}

function partition(arr, low, high) {
  let pivot = arr[low];

  let i = low + 1;
  let j = high;

  while (i <= high && arr[i] <= pivot) {
    i++;
  }

  while (arr[j] > pivot) {
    j--;
  }

  if (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  [arr[low], arr[j]] = [arr[j], arr[low]];

  return j;
}

const arr = [4, 6, 2, 5, 7, 9, 1, 3];

console.log(quickSort(arr));
