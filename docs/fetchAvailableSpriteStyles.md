---
title: fetchAvailableSpriteStyles
description: A function to retrieve available sprite styles for character generation.
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is a part of the SpriteAI module. It allows developers to retrieve a list of available sprite styles that can be used when generating character sprites.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the SpriteAI module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

async function getStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles);
}
```

## Return Value

The function returns a Promise that resolves to an array of strings, where each string represents an available sprite style.

Example return value:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Example

Here's a complete example of how to use the `fetchAvailableSpriteStyles` function in your application:

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

async function displayAvailableStyles() {
  try {
    const styles = await fetchAvailableSpriteStyles();
    console.log("Available sprite styles:");
    styles.forEach((style, index) => {
      console.log(`${index + 1}. ${style}`);
    });
  } catch (error) {
    console.error("Error fetching available styles:", error);
  }
}

displayAvailableStyles();
```

## Notes

- The available styles may be updated over time, so it's recommended to fetch the styles dynamically rather than hardcoding them in your application.
- This function is useful when you want to provide users with a list of style options for character sprite generation.
- The returned styles can be used as input for the `style` option in the `generateCharacterSpritesheet` function.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - Function to generate character spritesheets
- [fetchAvailableAnimationStates](./fetchAvailableAnimationStates.md) - Function to fetch available animation states for sprites