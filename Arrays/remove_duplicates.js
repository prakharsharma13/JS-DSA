function removeDuplicates(arr){
    if(arr.length === 0) return 0;

    let i=1;

    for(let j=0; j <arr.length; j++){
        if(arr[j] !== arr[i-1]){
            arr[i] = arr[j]
        }
    }

    return i;
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))