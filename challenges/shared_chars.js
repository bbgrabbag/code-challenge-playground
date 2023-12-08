/**
 * @description - Given an array of strings, produce a single string that contains only the shared characters between all of them. Characters in output should be alphabetized
 * @constraints - Each string in the input array is equal length. Input array length is always >= 0. Input strings contain only lowercase alphabet letters [a-z].
 * @difficulty - 3/5
 * 
 * @param {Array<String>} arr
 * @returns {String}
 * 
 * @example - sharedChars(['abc','bcd','cde']) // --> 'c'
 * @example - sharedChars(['aaa','bbb','ccc']) // --> ''
 * @example - sharedChars(['xxx','xxx','xxx']) // --> 'x'
 * @example - sharedChars([]) // --> ''

 */

const sharedChars = (arr) => {
    if (!arr.length) return '';

    let shared = [];
    for (let i = 0; i < arr[0].length; i++) {
        const char = arr[0][i]
        if (arr.every(str => str.includes(char)) && shared.indexOf(char) < 0)
            shared.push(char)
    }

    return shared.sort().join('')
}

module.exports = sharedChars;