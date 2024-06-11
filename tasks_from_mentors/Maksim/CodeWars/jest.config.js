export default {
    // Set the test environment to the browser
    testEnvironment: 'jsdom',
    // Configure the test runner to run tests on file change
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname',
    ],
    // Configure the test runner to run tests when the "отправить решение" button is clicked
    testRunner: 'jest-circus/runner',
    // Configure the test runner to run tests in a browser environment
    testRunnerOptions: {
      use: 'jsdom',
    },
  };