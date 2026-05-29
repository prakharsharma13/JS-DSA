function findMissingNumber(arr, n){
    const totalSum = n * (n+1) / 2;

    let arraySum = 0;

    for(let num of arr){
        arraySum += num;
    }

    return totalSum - arraySum;
}