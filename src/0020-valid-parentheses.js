match = (leftChar, rightChar) => {
    return (leftChar == '(' && rightChar == ')')
        || (leftChar == '[' && rightChar == ']')
        || (leftChar == '{' && rightChar == '}');
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++)
    {
        let current = s.charAt(i);
        if(current == '(' || current == '[' || current == '{') {
            stack.push(current);
        }
        else {
            if (stack.length == 0) {
                return false;
            }
            else {
                let predecessor = stack.pop();
                if(!match(predecessor, current)) {
                    return false;
                }
            }
        }
    }
    return stack.length == 0;
};

module.exports = { isValid };
