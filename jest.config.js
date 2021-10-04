/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // A set of global variables that need to be available in all test environments
  globals: {
    // If defined, jest will only run tests on the function exported from this file (omit file extension) as defined in the directory '/challenges':

    // testSingleChallenge: 'example',

    // If defined, jest will only run test on the specified test case index. Will do nothing if the above property 'testSingleChallenge' is not also defined.

    // testSingleTestCase: 0
  },

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

};
