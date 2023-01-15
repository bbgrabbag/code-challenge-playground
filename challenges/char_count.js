/**
 * 
 * @param {String} str
 * @param {String} char
 * @description - calculate the number of times 'char' appears in 'str'
 * @returns {Number}
 * 
 * @example - charCount('abc', 'z') // --> 0
 * @example - charCount('aaaa', 'a') // --> 4
 */

const charCount = (str, char) => {
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) total++;
    }

    return total;
}

module.exports = charCount;