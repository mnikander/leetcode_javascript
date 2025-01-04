const test = require('node:test');
const assert = require('node:assert');
const { isValid } = require('../src/0020-valid-parentheses')

test('valid parenthesis, simple parenthesis', (t) => {
    assert.strictEqual(isValid("()"), true);
});

test('valid parenthesis, each kind', (t) => {
    assert.strictEqual(isValid("()[]{}"), true);
});

test('valid parenthesis, nested', (t) => {
    assert.strictEqual(isValid("([])"), true);
});

test('valid parenthesis, deeply nested', (t) => {
    assert.strictEqual(isValid("([](){()})"), true);
});

test('valid parenthesis, simple unclosed', (t) => {
    assert.strictEqual(isValid("("), false);
});

test('valid parenthesis, nested unclosed', (t) => {
    assert.strictEqual(isValid("{(}"), false);
});

test('valid parenthesis, mismatch', (t) => {
    assert.strictEqual(isValid("(]"), false);
});

test('valid parenthesis, nested mismatch', (t) => {
    assert.strictEqual(isValid("([](])"), false);
});

test('valid parenthesis, reversed order', (t) => {
    assert.strictEqual(isValid(")("), false);
});

test('valid parenthesis, interleaved order', (t) => {
    assert.strictEqual(isValid("([)]"), false);
});
