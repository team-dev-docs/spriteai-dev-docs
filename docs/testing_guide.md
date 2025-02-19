# Testing Guide

This document provides guidelines for writing and running tests for our project. We use Jest as our testing framework and employ various mocking strategies to ensure comprehensive test coverage.

## Table of Contents
1. [Test Structure](#test-structure)
2. [Running Tests](#running-tests)
3. [Writing New Tests](#writing-new-tests)
4. [Using Jest](#using-jest)
5. [Mocking Strategies](#mocking-strategies)

## Test Structure

Our test files are located in the `__tests__` directory, mirroring the structure of the `src` directory. Each test file is named with the format `[ComponentName].test.js` or `[UtilityName].test.js`.

Example:
```
project/
├── src/
│   ├── components/
│   │   └── Button.js
│   └── utils/
│       └── helpers.js
└── __tests__/
    ├── components/
    │   └── Button.test.js
    └── utils/
        └── helpers.test.js
```

## Running Tests

To run all tests:
```
npm test
```

To run tests in watch mode:
```
npm test -- --watch
```

To run a specific test file:
```
npm test -- path/to/test-file.test.js
```

## Writing New Tests

1. Create a new test file in the appropriate directory within `__tests__`.
2. Import the component or function you're testing.
3. Use Jest's `describe` and `it` functions to structure your tests.
4. Use Jest's assertion functions (e.g., `expect`) to make assertions about the behavior of your code.

Example:
```javascript
import { sum } from '../src/utils/math';

describe('sum function', () => {
  it('adds two numbers correctly', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
```

## Using Jest

Jest is our primary testing framework. Some key features include:

- Automatic mocking of dependencies
- Code coverage reports
- Snapshot testing
- Asynchronous testing support

To generate a coverage report:
```
npm test -- --coverage
```

## Mocking Strategies

We use various mocking strategies to isolate units of code:

1. **Manual mocks**: Create a `__mocks__` directory adjacent to the module you want to mock.

2. **jest.mock()**: Use this function to automatically mock modules.

3. **jest.spyOn()**: Use this to spy on specific functions within a module.

Example of mocking a module:
```javascript
jest.mock('../src/api');

import { fetchData } from '../src/api';

test('fetchData is called', () => {
  fetchData();
  expect(fetchData).toHaveBeenCalled();
});
```

Remember to clear or reset mocks between tests using `jest.clearAllMocks()` or `jest.resetAllMocks()` in the `afterEach` hook if necessary.