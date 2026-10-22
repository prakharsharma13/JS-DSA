var reverseStringBrute = function (s) {
    let revArr = [];

    for (let i = s.length - 1; i >= 0; i--) {
        revArr.push(s[i])
    }

    for (let i = 0; i < s.length; i++) {
        s[i] = revArr[i]
    }
};