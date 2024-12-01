const test = require('node:test');
const assert = require('node:assert');
const { romanToInt } = require('../src/0013-roman-to-integer')

test('roman to integer, 1-20', (t) => {
    assert.strictEqual(romanToInt("I")    ,  1);
    assert.strictEqual(romanToInt("II")   ,  2);
    assert.strictEqual(romanToInt("III")  ,  3);
    assert.strictEqual(romanToInt("IV")   ,  4);
    assert.strictEqual(romanToInt("V")    ,  5);
    assert.strictEqual(romanToInt("VI")   ,  6);
    assert.strictEqual(romanToInt("VII")  ,  7);
    assert.strictEqual(romanToInt("VIII") ,  8);
    assert.strictEqual(romanToInt("IX")   ,  9);
    assert.strictEqual(romanToInt("X")    , 10);
    assert.strictEqual(romanToInt("XI")   , 11);
    assert.strictEqual(romanToInt("XII")  , 12);
    assert.strictEqual(romanToInt("XIII") , 13);
    assert.strictEqual(romanToInt("XIV")  , 14);
    assert.strictEqual(romanToInt("XV")   , 15);
    assert.strictEqual(romanToInt("XVI")  , 16);
    assert.strictEqual(romanToInt("XVII") , 17);
    assert.strictEqual(romanToInt("XVIII"), 18);
    assert.strictEqual(romanToInt("XIX")  , 19);
    assert.strictEqual(romanToInt("XX")   , 20);
});

test('roman to integer, unigrams', (t) => {
    assert.strictEqual(romanToInt("I"),    1);
    assert.strictEqual(romanToInt("V"),    5); // no repitition or prefixing of V is allowed
    assert.strictEqual(romanToInt("X"),   10);
    assert.strictEqual(romanToInt("L"),   50); // no repitition or prefixing of L is allowed
    assert.strictEqual(romanToInt("C"),  100);
    assert.strictEqual(romanToInt("D"),  500); // no repitition or prefixing of D is allowed
    assert.strictEqual(romanToInt("M"), 1000);
});

test('roman to integer, bigrams', (t) => {
    assert.strictEqual(romanToInt("IV"),    4);
    assert.strictEqual(romanToInt("IX"),    9);
    assert.strictEqual(romanToInt("XL"),   40);
    assert.strictEqual(romanToInt("XC"),   90);
    assert.strictEqual(romanToInt("CD"),  400);
    assert.strictEqual(romanToInt("CM"),  900);
});
