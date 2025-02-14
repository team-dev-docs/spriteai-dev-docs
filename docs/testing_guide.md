# Testing Guide

This document provides guidelines for writing and running tests for the spriteAI project.

## Overview

The project uses Jest as the testing framework. Tests are located in the `tests` directory and follow the naming convention of `*.test.js`.

## Existing Test Files

Currently, there are two main test files:

1. `removeBackground.test.js`: Tests for the background removal functionality.
2. `sprite.test.js`: Tests for sprite generation functionality.

## Test Structure

Each test file typically follows this structure:

1. Import necessary modules and functions to be tested.
2. Describe block for the main functionality being tested.
3. Individual test cases using `it` or `test` blocks.
4. Setup and teardown using `beforeEach`, `afterEach`, `beforeAll`, or `afterAll` as needed.

## Writing New Tests

To add new tests:

1. Create a new file in the `tests` directory with the naming convention `*.test.js`.
2. Import the necessary modules and functions to be tested.
3. Use `describe` blocks to group related tests.
4. Write individual test cases using `it` or `test` blocks.
5. Use Jest's assertion functions (e.g., `expect`) to verify the expected behavior.

Example:

```javascript
const myFunction = require('./myModule').myFunction;

describe('myFunction', () => {
  it('should do something specific', () => {
    const result = myFunction(input);
    expect(result).toBe(expectedOutput);
  });
});
```

## Running Tests

To run the tests:

1. Ensure all dependencies are installed by running `npm install`.
2. Run `npm test` to execute all tests.
3. To run a specific test file, use `npm test -- path/to/test-file.js`.

## Mocking Strategies

The project uses Jest's built-in mocking capabilities. Some common mocking strategies include:

1. Mocking modules: Use `jest.mock()` to mock entire modules.
2. Mocking functions: Use `jest.fn()` to create mock functions.
3. Mocking file system: Use `jest.mock('fs')` to mock file system operations.

Example of mocking a module:

```javascript
jest.mock('fs', () => ({
  existsSync: jest.fn(() => true),
  unlinkSync: jest.fn(),
}));
```

## Best Practices

1. Keep tests independent and isolated.
2. Use descriptive test names that explain the expected behavior.
3. Test both positive and negative scenarios.
4. Use setup and teardown functions to maintain a clean test environment.
5. Mock external dependencies to ensure consistent test results.

## Continuous Integration

The project is set up with continuous integration (CI) that runs all tests automatically on each push or pull request. Ensure all tests pass locally before pushing changes to the repository.