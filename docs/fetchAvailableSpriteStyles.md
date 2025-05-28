---
title: fetchAvailableSpriteStyles
description: Retrieve available sprite styles for character generation
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is a part of the SpriteAI module, designed to retrieve a list of available sprite styles that can be used when generating character spritesheets. This function provides developers with options for customizing the visual style of their generated sprites.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the SpriteAI module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

async function getSpriteStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles);
}
```

## Return Value

The function returns a Promise that resolves to an array of strings, each representing an available sprite style. For example:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Example

Here's a complete example of how to use the `fetchAvailableSpriteStyles` function in your project:

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from 'spriteAI';

async function generateCustomSprite() {
  try {
    // Fetch available styles
    const styles = await fetchAvailableSpriteStyles();
    console.log('Available styles:', styles);

    // Choose a style (e.g., the first one in the list)
    const chosenStyle = styles[0];

    // Generate a character spritesheet with the chosen style
    const spritesheet = await generateCharacterSpritesheet('A cute robot', {
      style: chosenStyle,
      states: ['idle', 'walk', 'run'],
      framesPerState: 4
    });

    console.log('Generated spritesheet:', spritesheet);
  } catch (error) {
    console.error('Error:', error);
  }
}

generateCustomSprite();
```

## Notes

- The available styles may be updated over time, so it's recommended to fetch the styles dynamically rather than hardcoding them in your application.
- The styles returned by this function can be used as input for the `style` option in the `generateCharacterSpritesheet` function.
- If you need to support a specific style that isn't available, consider reaching out to the SpriteAI team for potential updates or custom solutions.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - Generate a character spritesheet using the available styles
- [fetchAvailableAnimationStates](./fetchAvailableAnimationStates.md) - Retrieve available animation states for character generation