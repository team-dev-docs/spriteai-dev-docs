---
title: fetchAvailableSpriteStyles
description: Learn how to retrieve available sprite styles using the fetchAvailableSpriteStyles function.
sidebar_position: 4
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is a part of the spriteAI module. It allows developers to retrieve a list of available sprite styles that can be used when generating character sprites. This function is useful for providing users with style options or for validating style inputs before sprite generation.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the spriteAI module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/spriteAI';

const styles = await fetchAvailableSpriteStyles();
console.log(styles);
```

## Function Signature

```javascript
async function fetchAvailableSpriteStyles(): Promise<string[]>
```

### Return Value

The function returns a Promise that resolves to an array of strings. Each string represents an available sprite style.

## Example

Here's a complete example of how to use the `fetchAvailableSpriteStyles` function:

```javascript
import { fetchAvailableSpriteStyles } from './path/to/spriteAI';

async function displayAvailableStyles() {
  try {
    const styles = await fetchAvailableSpriteStyles();
    console.log('Available sprite styles:');
    styles.forEach((style, index) => {
      console.log(`${index + 1}. ${style}`);
    });
  } catch (error) {
    console.error('Error fetching available styles:', error);
  }
}

displayAvailableStyles();
```

This example will fetch and display a list of all available sprite styles.

## Available Styles

As of the current implementation, the following styles are available:

- pixel-art
- vector
- 3d
- hand-drawn
- anime

Please note that this list may be updated in future versions of the spriteAI module.

## Use Cases

1. **Style Selection UI**: Use this function to populate a dropdown menu or radio button group, allowing users to select a style for sprite generation.

2. **Input Validation**: Before calling the sprite generation function, you can use the returned array to validate that the user-selected style is valid.

3. **Dynamic Feature Enabling**: Enable or disable certain features in your application based on the available styles.

## Notes

- The function is asynchronous and returns a Promise. Always use `await` or `.then()` when calling it.
- If the function fails to fetch the styles, it will throw an error. Make sure to implement proper error handling in your code.
- The list of available styles may change in future updates. It's recommended to always use this function to get the most up-to-date list rather than hardcoding style options in your application.

## Related Functions

- `generateCharacterSpritesheet`: Uses the styles returned by `fetchAvailableSpriteStyles` to generate character sprites.
- `fetchAvailableAnimationStates`: Retrieves available animation states for sprite generation.

By using `fetchAvailableSpriteStyles` in conjunction with other spriteAI functions, you can create a robust and flexible sprite generation system in your application.