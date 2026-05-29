function singleNum(arr){
    for(let i=0; i<arr.length; i++){
        let num = arr[i];
        let cnt=0;

        for(let j=0; j < arr.length; j++){
            if(arr[j] = num){
                cnt++;
            }
        }
        if(cnt === 1) return num;
    }
}