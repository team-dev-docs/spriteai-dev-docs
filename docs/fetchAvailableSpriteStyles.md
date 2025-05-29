---
title: fetchAvailableSpriteStyles
description: Retrieve available sprite styles for character generation
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is part of the SpriteAI module and allows developers to retrieve a list of available sprite styles that can be used when generating character spritesheets. This function is useful for providing options to users or for dynamically adjusting sprite generation parameters in your application.

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

The function returns a Promise that resolves to an array of strings, where each string represents an available sprite style.

Example return value:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Example

Here's an example of how you might use `fetchAvailableSpriteStyles` in conjunction with the `generateCharacterSpritesheet` function:

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from 'spriteAI';

async function createCharacterWithRandomStyle(description) {
  const styles = await fetchAvailableSpriteStyles();
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];

  const spritesheet = await generateCharacterSpritesheet(description, {
    style: randomStyle
  });

  console.log(`Generated a ${randomStyle} style character spritesheet`);
  return spritesheet;
}

createCharacterWithRandomStyle('A brave knight with shining armor');
```

## Notes

- The available styles may be updated over time, so it's recommended to fetch the styles dynamically rather than hardcoding them in your application.
- The `fetchAvailableSpriteStyles` function is asynchronous and returns a Promise. Make sure to use `await` or `.then()` when calling it.
- If you're using this function in a user interface, consider caching the results to avoid unnecessary API calls.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - Function for generating character spritesheets
- [Sprite Styles Guide](./sprite-styles-guide.md) - Detailed information about each available sprite style