function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {

        let current = arr[i];   // element to insert
        let prev = i - 1;       // previous index

        // move bigger elements one step right
        while (prev >= 0 && arr[prev] > current) {
            arr[prev + 1] = arr[prev];
            prev--;
        }

        // insert current element at correct position
        arr[prev + 1] = current;
    }

    return arr;
}

const arr = [5, 3, 8, 4, 2];

console.log(insertionSort(arr));