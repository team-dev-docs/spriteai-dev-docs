---
title: fetchAvailableSpriteStyles
description: Function to fetch available sprite styles for character generation
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is a utility that retrieves a list of available sprite styles that can be used when generating character sprites. This function is part of the SpriteAI module and is useful for developers who want to provide style options to users or programmatically select styles for sprite generation.

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

async function generateRandomStyledSprite(description) {
  const styles = await fetchAvailableSpriteStyles();
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];

  const spritesheet = await generateCharacterSpritesheet(description, {
    style: randomStyle
  });

  return spritesheet;
}

// Usage
generateRandomStyledSprite("A heroic knight")
  .then(spritesheet => console.log(spritesheet))
  .catch(error => console.error(error));
```

## Notes

- The available styles may be updated over time, so it's recommended to fetch the styles dynamically rather than hardcoding them.
- The function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it.
- If you're using this function in a user interface, consider caching the results to avoid unnecessary API calls.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - For generating character spritesheets using the available styles.
- [fetchAvailableAnimationStates](./fetchAvailableAnimationStates.md) - For fetching available animation states for character sprites.