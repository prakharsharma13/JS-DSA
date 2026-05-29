function kadanesAlgo(arr){
    let currentSum = arr[i];
    let maxSum = arr[i];

    for(let i=1; i<arr.length; i++){
        currentSum = Math.max(arr[i], currentSum + nums[i]);

        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}