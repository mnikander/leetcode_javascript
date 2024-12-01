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

// Notes:
// - since the input consists of valid roman numerals, we don't need to worry about things like VV == X or LL == C

console.log(romanToInt("I")    ==    1);
console.log(romanToInt("II")   ==    2);
console.log(romanToInt("III")  ==    3);
console.log(romanToInt("IV")   ==    4);
console.log(romanToInt("V")    ==    5);
console.log(romanToInt("VI")   ==    6);
console.log(romanToInt("VII")  ==    7);
console.log(romanToInt("VIII") ==    8);
console.log(romanToInt("IX")   ==    9);
console.log(romanToInt("X")    ==   10);
console.log(romanToInt("XI")   ==   11);
console.log(romanToInt("XII")  ==   12);
console.log(romanToInt("XIII") ==   13);
console.log(romanToInt("XIV")  ==   14);
console.log(romanToInt("XV")   ==   15);
console.log(romanToInt("XVI")  ==   16);
console.log(romanToInt("XVII") ==   17);
console.log(romanToInt("XVIII")==   18);
console.log(romanToInt("XIX")  ==   19);
console.log(romanToInt("XX")   ==   20);

// bases
console.log(romanToInt("I")    ==    1);
console.log(romanToInt("V")    ==    5); // no repitition or prefixing of V is allowed
console.log(romanToInt("X")    ==   10);
console.log(romanToInt("L")    ==   50); // no repitition or prefixing of L is allowed
console.log(romanToInt("C")    ==  100);
console.log(romanToInt("D")    ==  500); // no repitition or prefixing of D is allowed
console.log(romanToInt("M")    == 1000);

// a few special cases
console.log(romanToInt("IV")   ==    4);
console.log(romanToInt("IX")   ==    9);
console.log(romanToInt("XL")   ==   40);
console.log(romanToInt("XC")   ==   90);
console.log(romanToInt("CD")   ==  400);
console.log(romanToInt("CM")   ==  900);
