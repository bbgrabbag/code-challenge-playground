module.exports.testCases = {
    // Each test case property name corresponds to a file in ./challenges folder
    example: [
        // Each index is a tuple representing an individual test case
        [
            // Index 0 is array of function input values
            [true],
            // Index 1 is expected function output value
            true
        ],
        [[false], false],
        [['hello'], 'hello']
    ]
}