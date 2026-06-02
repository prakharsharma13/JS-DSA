/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function (
  landStartTime,
  landDuration,
  waterStartTime,
  waterDuration,
) {
  let ans = Infinity;

  for (let i = 0; i < landStartTime.length; i++) {
    for (let j = 0; j < waterStartTime.length; j++) {
      let ls = landStartTime[i];
      let ld = landDuration[i];

      let ws = waterStartTime[j];
      let wd = waterDuration[j];

      let finishL2W = Math.max(ls + ld, ws) + wd;
      let finishW2L = Math.max(ws + wd, ls) + ld;

      ans = Math.min(ans, finishL2W, finishW2L);
    }
  }

  return ans;
};
