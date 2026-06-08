/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const map = new Map();
  const result = [];
  const limit = Math.floor(nums.length / 3);

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [num, count] of map) {
    if (count > limit) {
      result.push(num);
    }
  }

  return result;
};
