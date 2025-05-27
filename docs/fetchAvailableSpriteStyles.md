---
title: fetchAvailableSpriteStyles
description: A function to retrieve available sprite styles for character generation
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is a part of the SpriteAI module, which allows developers to retrieve a list of available sprite styles that can be used when generating character sprites. This function is useful for providing users with options for customizing the visual style of their generated sprites.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the SpriteAI module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

async function getStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles);
}
```

## Parameters

This function does not take any parameters.

## Return Value

The function returns a Promise that resolves to an array of strings, where each string represents an available sprite style. The current available styles are:

- 'pixel-art'
- 'vector'
- '3d'
- 'hand-drawn'
- 'anime'

## Example

Here's an example of how to use `fetchAvailableSpriteStyles` in your application:

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

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

This example will output the list of available sprite styles to the console.

## Notes

- The list of available styles is subject to change in future updates. Always refer to the latest documentation or use this function to get the most up-to-date list of styles.
- When using the `generateCharacterSpritesheet` function, you can pass one of these style strings to the `style` option to specify the desired visual style for your generated sprite.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - For generating character spritesheets using the available styles.
- [fetchAvailableAnimationStates](./fetchAvailableAnimationStates.md) - To retrieve available animation states for character sprites.