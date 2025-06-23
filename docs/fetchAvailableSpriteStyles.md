---
title: fetchAvailableSpriteStyles
description: A function to retrieve available sprite styles for character generation
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is part of the spriteAI module and allows developers to retrieve a list of available sprite styles that can be used when generating character sprites. This function is useful for providing users with options for customizing the visual style of generated sprites.

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

The function returns a Promise that resolves to an array of strings, where each string represents an available sprite style.

## Return Value

The function returns an array of strings containing the available sprite styles. Currently, the available styles are:

- `'pixel-art'`
- `'vector'`
- `'3d'`
- `'hand-drawn'`
- `'anime'`

Example return value:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Example

Here's an example of how to use the `fetchAvailableSpriteStyles` function in conjunction with the `generateCharacterSpritesheet` function to create a character sprite with a specific style:

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from './path/to/spriteAI';

async function createCustomStyledSprite() {
  // Get available styles
  const availableStyles = await fetchAvailableSpriteStyles();
  console.log('Available styles:', availableStyles);

  // Choose a style (for this example, we'll use 'pixel-art')
  const chosenStyle = 'pixel-art';

  // Generate a character sprite with the chosen style
  const characterSprite = await generateCharacterSpritesheet('A cute robot', {
    style: chosenStyle
  });

  console.log('Generated sprite:', characterSprite);
}

createCustomStyledSprite();
```

## Notes

- The list of available styles is predefined in the `fetchAvailableSpriteStyles` function and may be updated in future versions of the spriteAI module.
- When using the `generateCharacterSpritesheet` function, make sure to use one of the styles returned by `fetchAvailableSpriteStyles` to ensure compatibility.
- The function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - Function for generating character spritesheets
- [Sprite Style Guide](./sprite-style-guide.md) - Detailed information about each sprite style