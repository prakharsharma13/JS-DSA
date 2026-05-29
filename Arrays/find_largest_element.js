function findLargest(arr){
    let largest = arr[0];

    for(let i=0; i<arr.length; i++){
        if(largest < arr[i]){
            largest = arr[i]
        }
    }

    return largest;
}


console.log(findLargest([2,1,3,5,8,4]))