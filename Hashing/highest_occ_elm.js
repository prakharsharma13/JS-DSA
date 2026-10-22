var maxFrequency = function(nums, k) {
    let maxFreq = 1;

    for (let i = 0; i < nums.length; i++) {
        let operations = k;
        let freq = 1;

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                let cost = nums[i] - nums[j];

                if (operations >= cost) {
                    operations -= cost;
                    freq++;
                }
            }
        }

        maxFreq = Math.max(maxFreq, freq);
    }

    return maxFreq;
};