# Testing Guide

This document provides guidelines for writing and running tests for the spriteAI project.

## Test Structure

The project uses Jest as the testing framework. Test files are located in the `tests` directory and follow the naming convention `*.test.js`. Currently, there are two main test files:

1. `removeBackground.test.js`: Tests for the background removal functionality.
2. `sprite.test.js`: Tests for sprite generation functionality.

## Writing Tests

When writing new tests, follow these guidelines:

1. Create a new test file in the `tests` directory if you're testing a new module.
2. Use descriptive test names that clearly indicate what is being tested.
3. Group related tests using `describe` blocks.
4. Use `it` or `test` functions to define individual test cases.
5. Use `expect` statements to make assertions about the code being tested.

### Example:

```javascript
describe('MyModule', () => {
  describe('myFunction', () => {
    it('should return expected result', () => {
      const result = myFunction(input);
      expect(result).toBe(expectedOutput);
    });
  });
});
```

## Running Tests

To run the tests, use the following command in the project root directory:

```
npm test
```

This will run all test files in the `tests` directory.

## Mocking Strategies

The project uses Jest's built-in mocking capabilities. Here are some common mocking strategies:

1. **File System Mocking**: For tests that interact with the file system, use `jest.mock('fs')` to mock the `fs` module.

2. **External API Mocking**: When testing functions that make API calls, use Jest's `jest.mock()` function to mock the API responses.

3. **Time-based Mocking**: For tests involving timeouts or dates, use Jest's timer mocks (`jest.useFakeTimers()`) to control time in your tests.

## Adding New Tests

When adding new tests:

1. Create a new test file if you're testing a new module, or add to an existing file for related functionality.
2. Import the necessary modules and functions at the top of the test file.
3. Use `describe` blocks to group related tests.
4. Write individual test cases using `it` or `test` functions.
5. Use `beforeEach` and `afterEach` hooks for setup and teardown if needed.
6. Make sure to clean up any resources (e.g., temporary files) after your tests.

## Best Practices

1. Aim for high test coverage, but focus on critical paths and edge cases.
2. Keep tests independent and isolated from each other.
3. Use meaningful test data and avoid hard-coding large datasets in your test files.
4. Regularly run your tests to catch regressions early.
5. Update tests when you change the corresponding code functionality.

Remember to keep your tests up to date with any changes in the main codebase to ensure the continued reliability of your test suite.