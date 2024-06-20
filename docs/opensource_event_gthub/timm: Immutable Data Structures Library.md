
  
  # **timm**

High Level

`timm` is a third-party library that provides immutable data structures and functions for working with them. It is not a function exported from the Sprite SDK, but rather a dependency used within the project.

## Why should I use this library?

The `timm` library is useful for handling immutable data structures in JavaScript applications. Immutable data structures are objects or arrays that cannot be modified after they are created. Instead, any update operation creates a new object or array with the desired changes. This approach can simplify the management of state in applications, particularly in reactive programming paradigms.

## What is required?

No specific parameters or arguments are required to use the `timm` library. It is imported into the project as a dependency and can be used within the codebase as needed.

## Prerequisites

To use the `timm` library, you need to have it installed as a dependency in your project. This is typically done by running `npm install timm` or `yarn add timm` in your project directory.

## How do I use this library?

The `timm` library provides a set of functions for working with immutable data structures. Here are some common use cases:

1. **Creating immutable objects and arrays**:
   - `timm.addLevelNativeObject(object)`: Creates an immutable copy of the provided object.
   - `timm.addLevelNativeArray(array)`: Creates an immutable copy of the provided array.

2. **Updating immutable objects and arrays**:
   - `timm.setIn(object, path, value)`: Creates a new immutable object with the value at the specified path updated.
   - `timm.updateIn(object, path, updater)`: Creates a new immutable object with the value at the specified path updated by applying the provided updater function.
   - `timm.merge(object, ...sources)`: Creates a new immutable object by merging the provided objects.

3. **Working with immutable arrays**:
   - `timm.push(array, value)`: Creates a new immutable array by adding the value to the end of the provided array.
   - `timm.insert(array, index, value)`: Creates a new immutable array by inserting the value at the specified index.
   - `timm.remove(array, index)`: Creates a new immutable array by removing the value at the specified index.

These are just a few examples of the functions provided by the `timm` library. You can refer to the library's documentation for a complete list of available functions and their usage.
  
  