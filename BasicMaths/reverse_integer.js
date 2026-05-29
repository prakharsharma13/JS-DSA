/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    // Store sign
    let sign = x < 0 ? -1 : 1;

    // Convert negative to positive
    x = Math.abs(x);

    let revNum = 0;

    while (x > 0) {
        let lastDigit = x % 10;

        revNum = (revNum * 10) + lastDigit;

        x = Math.floor(x / 10);
    }

    // Apply sign back
    revNum = revNum * sign;

    // 32-bit integer range check
    if (revNum < -(2 ** 31) || revNum > (2 ** 31) - 1) {
        return 0;
    }

    return revNum;
};