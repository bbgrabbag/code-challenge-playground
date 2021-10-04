const { testCases } = require("./test-cases");
const functions = require("./main");

const testCaseKeys = Object.keys(testCases);
const functionKeys = Object.keys(functions);

try {
  for (const k of testCaseKeys) {
    if (!functionKeys.includes(k))
      throw Error(`No function found for test case '${k}'`);
  }
  for (const k of functionKeys) {
    if (!testCaseKeys.includes(k))
      throw Error(`No test case found for function '${k}()'`);
    const describer =
      global.testSingleChallenge === k
        ? fdescribe
        : describe;
    describer(`Unit testing function '${k}()'`, () => {
      testCases[k].forEach(([inputs, expected], i) => {
        const runner =
        global.testSingleChallenge === k && global.testSingleTestCase === i
            ? fit
            : it;
        runner(`Should output correct value for test case '${i}'`, () => {
          expect(functions[k](...inputs)).toEqual(expected);
        });
      });
    });
  }
} catch (e) {
  console.error(e.message);
}
