module.exports.testCases = {
    // Each test case property name corresponds to a file in ./challenges folder
    char_count: [
        [['aaa', 'a'], 3],
        [['abc', 'c'], 1],
        [['abb', 'b'], 2],
        [['efg', 'z'], 0],
    ],
    remove_chars: [
        [['aaa', 'a'], ''],
        [['abc', 'c'], 'ab'],
        [['abb', 'b'], 'a'],
        [['efg', 'z'], 'efg'],
    ]
}