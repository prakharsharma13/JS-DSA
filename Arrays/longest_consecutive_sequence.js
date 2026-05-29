var bruteSequence = function(nums){
    function linearSearch(arr, target){
        for(let num of arr){
            if(num === target) return true;
        }

        return false;
    }

    let longest = 0;

    for(let i =0; i< nums.length; i++){
        let x = nums[i];
        let cnt = 0;

        while(linearSearch(nums, x+1)){
            x = x + 1;
            count++;
        }

        longest = Math.max(longest, count);
    }

    return longest;
}

var betterSequence = function(nums){
    if(nums.length === 0) return 0;

    nums.sort((a,b) => a-b)

    let longest = 1;
    let currentStreak = 1;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i-1]){
            continue;
        }

        if(nums[i] === nums[i-1] + 1){
            currentStreak ++;
        }else{
            currentStreak = 1;
        }

        longest = Math.max(longest, currentStreak);
    }

    return longest;
}