function countNumberInArray(arr){
    
    const hash = {};

    for(let num of arr){
        hash[num] = (hash[num] || 0) + 1;
    }

    console.log(hash);
}

countNumberInArray([1,2,2,3]);