/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const mapST = {};
  const mapTS = {};

  for (let i = 0; i < s.length; i++) {
    const ch1 = s[i];
    const ch2 = t[i];

    if (
      (mapST[ch1] && mapST[ch1] !== ch2) ||
      (mapTS[ch2] && mapTS[ch2] !== ch1)
    ) {
      return false;
    }

    mapST[ch1] = ch2;
    mapTS[ch2] = ch1;
  }

  return true;
};
