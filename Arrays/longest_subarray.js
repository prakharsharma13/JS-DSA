function longestSubarray(nums, k) {
    let map = new Map();

    let sum = 0;
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        // If total sum itself becomes k
        if (sum === k) {
            maxLen = i + 1;
        }

        // If (sum - k) existed before
        if (map.has(sum - k)) {
            let len = i - map.get(sum - k);
            maxLen = Math.max(maxLen, len);
        }

        // Store first occurrence of sum
        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }

    return maxLen;
}

// Example
console.log(longestSubarray([1, 2, 3, 1, 1, 1, 1], 6));