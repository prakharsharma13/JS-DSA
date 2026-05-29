function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array should have at least 2 elements";
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } 
        else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    if (secondLargest === -Infinity) {
        return "No second largest element";
    }

    return secondLargest;
}

// Example
const arr = [10, 5, 20, 8, 20, 15];

console.log(findSecondLargest(arr)); // 15