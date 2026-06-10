/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.split(" ").filter(Boolean);

  arr = arr.reverse();

  let reverseWords = arr.join(" ");
  return reverseWords;
};
