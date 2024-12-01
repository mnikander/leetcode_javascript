/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let unigrams = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
    let bigrams  = {CM: 900, CD: 400, XC: 90, XL: 40, IX: 9, IV: 4};

    let sum = 0;
    let i = 0;

    while (i < s.length) {
        let oneChar  = s[i];
        let twoChars = "";
        if (i < s.length - 1) {
            twoChars = s[i] + s[i+1];
        }

        if (bigrams[twoChars] != undefined) {
            sum = sum + bigrams[twoChars];
            i = i + 2;
        }
        else {
            sum = sum + unigrams[oneChar];
            i = i + 1;
        }
    }

    // console.log(s + " = " + sum);
    return sum;
};

module.exports = { romanToInt };

// Notes:
// - since the input consists of valid roman numerals, we don't need to worry about things like VV == X or LL == C
