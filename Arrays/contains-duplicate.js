var containsDuplicateBrute = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }

    return false;
};


var containsDuplicateBetter = function(nums) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }

    return false;
};

var containsDuplicateOptimal = function(nums) {
    let set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }

        set.add(num);
    }

    return false;
};