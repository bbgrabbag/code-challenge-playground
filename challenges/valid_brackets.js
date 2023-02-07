/**
 * @description - determine whether given string has valid placement of brackets
 * @difficulty - 4/5
 * 
 * @param {String} str
 * @returns {Boolean}
 * 
 * @example - validBrackets('[[[') // --> false
 * @example - validBrackets([]) // --> true
 * @example - validBrackets([[][]][]) // --> true
 */

const validBrackets = (str) => {
    const stack = [];
    for(let i = 0; i < str.length; i++){
        const last = stack[stack.length - 1];
        if(str[i] == '[') stack.push(str[i]);
        if(str[i] == ']'){
            if(!last) return false;
            stack.pop();
        }
    }

    return !stack.length
}

module.exports = validBrackets;