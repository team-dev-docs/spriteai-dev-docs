
  
  # **isBoolean**

**High Level**

This is a utility function that checks if a given value is a boolean or not. It is part of the `sprite` object, which is exported from the Sprite SDK installed via NPM.

**Why should I use this function?**

You should use this function when you need to validate if a value is a boolean or not before performing any operations that require a boolean value. This can help prevent type-related errors and ensure the correct behavior of your code.

**What are the parameters or arguments required?**

This function takes a single argument:

- `value`: The value you want to check if it is a boolean or not.

**Prerequisites**

To use this function, you need to have the Sprite SDK installed and imported into your project. You can install it via NPM:

```
npm install @spritehq/sprite-sdk
```

Then, import the `sprite` object from the SDK:

```javascript
import { sprite } from '@spritehq/sprite-sdk';
```

**How do I use this function?**

Using the `isBoolean` function is straightforward. You simply pass the value you want to check as an argument:

```javascript
const isTrue = sprite.isBoolean(true); // true
const isFalse = sprite.isBoolean(false); // true
const isNotBoolean = sprite.isBoolean(42); // false
```

The function returns `true` if the provided value is a boolean (`true` or `false`), and `false` otherwise.

This function can be particularly useful when you're dealing with user input or data from external sources, where you need to validate the type of the input before performing any operations on it.
  
  