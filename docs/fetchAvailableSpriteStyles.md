---
title: fetchAvailableSpriteStyles
description: A function to fetch available sprite styles for character generation.
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is part of the spriteAI module and provides a list of available sprite styles that can be used when generating character spritesheets. This function is useful for developers who want to offer style options to their users or dynamically adjust the style of generated sprites in their applications.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the spriteAI module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/spriteAI';

async function getStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles);
}

getStyles();
```

## Function Signature

```javascript
async function fetchAvailableSpriteStyles(): Promise<string[]>
```

## Return Value

The function returns a Promise that resolves to an array of strings. Each string represents an available sprite style.

Example return value:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Available Styles

The current implementation includes the following sprite styles:

1. `pixel-art`: Retro-style pixelated graphics
2. `vector`: Clean, scalable vector graphics
3. `3d`: Three-dimensional rendered sprites
4. `hand-drawn`: Sketched or hand-drawn style
5. `anime`: Japanese animation-inspired style

## Example

Here's an example of how you might use the `fetchAvailableSpriteStyles` function in conjunction with the `generateCharacterSpritesheet` function:

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from './path/to/spriteAI';

async function createCharacterWithRandomStyle(description) {
  const styles = await fetchAvailableSpriteStyles();
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];
  
  const spritesheet = await generateCharacterSpritesheet(description, {
    style: randomStyle
  });
  
  console.log(`Generated a ${randomStyle} style character: ${description}`);
  return spritesheet;
}

createCharacterWithRandomStyle("A brave knight with shining armor");
```

## Notes

- The available styles may be updated in future versions of the spriteAI module. Always check the return value of `fetchAvailableSpriteStyles` for the most up-to-date list of styles.
- The style names returned by this function can be used directly in the `style` option of the `generateCharacterSpritesheet` function.
- If you're building a user interface, you can use this function to populate a dropdown menu or radio buttons for style selection.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md): Function for generating character spritesheets
- [fetchAvailableAnimationStates](./fetchAvailableAnimationStates.md): Function for fetching available animation states