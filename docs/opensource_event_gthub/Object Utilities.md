
  
  # **Object Handling**

High Level

This is a set of utilities for working with JavaScript objects, exported from our Node.js SDK. You can import it like this:

```js
import { objectUtils } from 'sprite-sdk';
```

## Why should I use these utilities?

Working with objects is a fundamental part of JavaScript programming, and these utilities provide convenient methods for common object-related tasks, such as cloning, merging, and checking for deep equality. Using these utilities can help you write more concise and readable code, and can also improve performance by providing optimized implementations of common operations.

## What are the available utilities?

The `objectUtils` module exports the following functions:

- `clone(obj)`: Creates a deep clone of the given object.
- `merge(...objects)`: Deeply merges the given objects into a new object.
- `isEqual(obj1, obj2)`: Checks if two objects are deeply equal.
- `pick(obj, ...keys)`: Returns a new object with only the specified keys.
- `omit(obj, ...keys)`: Returns a new object with the specified keys omitted.

## Prerequisites

- A basic understanding of JavaScript objects and their properties.
- Familiarity with concepts like deep cloning, merging, and equality checking.

## How do I use these utilities?

Here are some examples of how to use the different utilities:

### Cloning an object

```js
const original = { a: 1, b: { c: 2 } };
const clone = objectUtils.clone(original);

// clone is now { a: 1, b: { c: 2 } }
// Modifying clone does not affect original
```

### Merging objects

```js
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

const merged = objectUtils.merge(obj1, obj2, obj3);
// merged is now { a: 1, b: 2, c: 3 }
```

### Checking deep equality

```js
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };

console.log(objectUtils.isEqual(obj1, obj2)); // true
console.log(objectUtils.isEqual(obj1, obj3)); // false
```

### Picking and omitting keys

```js
const obj = { a: 1, b: 2, c: 3, d: 4 };

const picked = objectUtils.pick(obj, 'a', 'c');
// picked is now { a: 1, c: 3 }

const omitted = objectUtils.omit(obj, 'b', 'd');
// omitted is now { a: 1, c: 3 }
```

These utilities can be particularly useful when working with complex object structures or when you need to perform operations on multiple objects at once. They can help you write more concise and readable code, and can also improve performance by providing optimized implementations of common operations.
  
  