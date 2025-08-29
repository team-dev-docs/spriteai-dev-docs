---
title: fetchAvailableSpriteStyles
description: A function to fetch available sprite styles for character generation.
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is part of the SpriteAI module, which provides utilities for generating and manipulating game sprites. This function specifically retrieves a list of available sprite styles that can be used when generating character spritesheets.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the SpriteAI module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

async function getStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles);
}

getStyles();
```

## Parameters

This function does not take any parameters.

## Return Value

The function returns a Promise that resolves to an array of strings, where each string represents an available sprite style.

Example return value:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Example

Here's a complete example of how to use the `fetchAvailableSpriteStyles` function in combination with the `generateCharacterSpritesheet` function:

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from 'spriteAI';

async function generateCustomSprite() {
  // Fetch available styles
  const styles = await fetchAvailableSpriteStyles();
  console.log('Available styles:', styles);

  // Choose a style (for this example, we'll use the first available style)
  const chosenStyle = styles[0];

  // Generate a character spritesheet
  const result = await generateCharacterSpritesheet('A heroic knight', {
    style: chosenStyle,
    size: '512x512',
    save: true
  });

  console.log('Generated spritesheet:', result);
}

generateCustomSprite();
```

## Notes

- The available styles may be updated over time, so it's recommended to fetch the styles dynamically rather than hardcoding them in your application.
- The returned styles are compatible with the `style` option in the `generateCharacterSpritesheet` function.
- If you need to support a specific style, always check if it's available in the returned array before using it.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - Function to generate character spritesheets
- [fetchAvailableAnimationStates](./fetchAvailableAnimationStates.md) - Function to fetch available animation states for character spritesheets