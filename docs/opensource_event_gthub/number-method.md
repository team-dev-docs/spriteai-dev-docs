
  
  # **`number` Method**

**High Level**

The `number` method is a utility function exported from our Node.js SDK that allows you to generate unique, sequential numbers. It is part of the `sprite` object, which you can import from the SDK like this:

```javascript
import { sprite } from 'sprite';
```

**Why should I use this function?**

You should use the `number` method when you need to generate unique, sequential numbers for various purposes in your application. This can be useful in scenarios such as:

- Generating unique identifiers for entities or resources
- Assigning sequential order numbers to items in a list or queue
- Creating unique tracking numbers or reference codes

**What are the parameters or arguments required?**

The `number` method accepts the following parameters:

- `options` (optional): An object that allows you to configure the behavior of the method. The available options are:
  - `start` (number): The starting value for the sequence. If not provided, the default value is `0`.
  - `step` (number): The increment value between consecutive numbers. If not provided, the default value is `1`.

**Prerequisites**

Before using the `number` method, make sure you have installed the Sprite SDK and imported the `sprite` object correctly in your Node.js project.

**How do I use this function?**

Using the `number` method is straightforward. Here's an example:

```javascript
import { sprite } from 'sprite';

// Generate sequential numbers starting from 0 (default)
const id1 = sprite.number();
const id2 = sprite.number();
console.log(id1); // Output: 0
console.log(id2); // Output: 1

// Generate sequential numbers starting from 100 with a step of 5
const options = { start: 100, step: 5 };
const id3 = sprite.number(options);
const id4 = sprite.number(options);
console.log(id3); // Output: 100
console.log(id4); // Output: 105
```

In the example above, we first import the `sprite` object from the SDK. We then use the `number` method to generate sequential numbers with different configurations.

The first two calls to `sprite.number()` generate numbers starting from 0 (the default) with a step of 1 (the default).

The next two calls to `sprite.number(options)` generate numbers starting from 100 with a step of 5, based on the `options` object we provided.

By providing different `options`, you can customize the behavior of the `number` method to suit your specific requirements.
  
  