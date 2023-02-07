/**
 * @description - remove all instances of given character from a string
 * @difficulty - 3/5
 * 
 * @param {String} str
 * @param {String} char
 * @returns {String}
 * 
 * @example - removeChar('abc', 'a') // --> 'bc'
 * @example - removeChar('aaaa', 'a') // --> ''
 */

const removeChar = (str, char) => {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) continue;
        output += str[i];
    }

    return output;
}

module.exports = removeChar;