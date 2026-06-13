/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let start = 0;
  let maxLen = 1;

  const expand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLen) {
        maxLen = right - left + 1;
        start = left;
      }

      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expand(i, i);

    expand(i, i + 1);
  }

  return s.substring(start, start + maxLen);
};
