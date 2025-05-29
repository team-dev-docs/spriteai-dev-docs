---
title: fetchAvailableSpriteStyles
description: A function to fetch available sprite styles for character generation
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is part of the SpriteAI module and allows developers to retrieve a list of available sprite styles that can be used when generating character spritesheets. This function is useful for providing style options to users or for dynamically adjusting sprite generation parameters in your application.

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

## Return Value

The function returns a Promise that resolves to an array of strings, each representing an available sprite style. The current available styles are:

- 'pixel-art'
- 'vector'
- '3d'
- 'hand-drawn'
- 'anime'

## Example

Here's an example of how you might use `fetchAvailableSpriteStyles` in conjunction with the `generateCharacterSpritesheet` function:

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from 'spriteAI';

async function generateCharacterWithRandomStyle(description) {
  const styles = await fetchAvailableSpriteStyles();
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];

  const spritesheet = await generateCharacterSpritesheet(description, {
    style: randomStyle,
  });

  console.log(`Generated ${description} in ${randomStyle} style`);
  return spritesheet;
}

generateCharacterWithRandomStyle('A brave knight');
```

## Notes

- The list of available styles is predefined in the SpriteAI module and may be updated in future versions.
- When using the returned styles with `generateCharacterSpritesheet`, ensure you pass the style string exactly as received from `fetchAvailableSpriteStyles`.
- The function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it.

## Related Functions

- [generateCharacterSpritesheet](/docs/generateCharacterSpritesheet): Use this function to generate character spritesheets with the fetched styles.
- [fetchAvailableAnimationStates](/docs/fetchAvailableAnimationStates): Fetch available animation states for character generation.