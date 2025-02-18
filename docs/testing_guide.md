# Testing Guide

This document provides guidelines for writing and running tests for the SpriteAI project. We use Jest as our testing framework.

## Test Structure

Our tests are located in the `tests` directory. Each test file corresponds to a specific module or functionality in the project. Currently, we have the following test files:

1. `removeBackground.test.js`: Tests for the background removal functionality.
2. `sprite.test.js`: Tests for sprite generation functionality.

## Running Tests

To run the tests, use the following command in the project root directory:

```
npm test
```

This will run all test files in the `tests` directory.

## Writing New Tests

When adding new tests, follow these guidelines:

1. Create a new test file in the `tests` directory if you're testing a new module.
2. Use descriptive test names that clearly indicate what is being tested.
3. Group related tests using `describe` blocks.
4. Use `it` or `test` for individual test cases.
5. Use `expect` statements to make assertions about the code being tested.

## Mocking Strategies

We use Jest's built-in mocking capabilities. Here are some common mocking strategies:

1. For file system operations, use `jest.mock('fs')` to mock the `fs` module.
2. For external libraries like `sharp` or `Jimp`, consider mocking their methods if necessary.
3. Use `jest.spyOn()` to spy on method calls and verify they're called with the correct arguments.

## Example Test Structure

```javascript
const moduleToTest = require('./path-to-module');

describe('Module Name', () => {
  describe('Function Name', () => {
    it('should do something specific', () => {
      // Test code here
      expect(result).toBe(expectedValue);
    });

    it('should handle error cases', () => {
      // Test error handling
      expect(() => functionCall()).toThrow(ErrorType);
    });
  });
});
```

## Handling Asynchronous Tests

For asynchronous tests, use `async/await` or return a promise. For example:

```javascript
it('should handle async operations', async () => {
  const result = await asyncFunction();
  expect(result).toBe(expectedValue);
});
```

## Test Assets

Store any test assets (e.g., sample images) in a `test-assets` directory within the `tests` folder. This keeps your test files organized and separates test data from actual test code.

## Continuous Integration

Ensure that all tests pass before submitting a pull request. Our CI pipeline will run these tests automatically, but it's good practice to run them locally first.

Remember to update this testing guide as new testing strategies or requirements are introduced to the project.