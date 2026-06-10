/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  const doubled = s + s;

  return doubled.includes(goal);
};
