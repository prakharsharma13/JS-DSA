var reverseStringBrute = function (s) {
    let revArr = [];

    for (let i = s.length - 1; i >= 0; i--) {
        revArr.push(s[i])
    }

    for (let i = 0; i < s.length; i++) {
        s[i] = revArr[i]
    }
};

var reverseStringOptimal = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--
    }
}