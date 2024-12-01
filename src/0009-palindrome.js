/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = "" + x;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(22));
console.log(isPalindrome(242));
console.log(isPalindrome(13));
console.log(isPalindrome(133));
