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

var maxFreqOptimal = function(nums, k) {
    nums.sort((a, b) => a - b);

    let left = 0;
    let sum = 0;
    let maxFreq = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (nums[right] * (right - left + 1) - sum > k) {
            sum -= nums[left];
            left++;
        }

        maxFreq = Math.max(maxFreq, right - left + 1);
    }

    return maxFreq;
}