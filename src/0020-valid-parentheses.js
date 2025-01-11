isMatch = (leftChar, rightChar) => {
    return (leftChar == '(' && rightChar == ')')
        || (leftChar == '[' && rightChar == ']')
        || (leftChar == '{' && rightChar == '}');
}

isOpening = (parenthesis) => {
    return parenthesis == '(' || parenthesis == '[' || parenthesis == '{';
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++)
    {
        let parenthesis = s.charAt(i);
        if(isOpening(parenthesis)) {
            stack.push(parenthesis);
        }
        else if (stack.length == 0) {
            return false;
        }
        else {
            let predecessor = stack.pop();
            if(!isMatch(predecessor, parenthesis)) {
                return false;
            }
        }
    }
    return stack.length == 0;
};

module.exports = { isValid };
