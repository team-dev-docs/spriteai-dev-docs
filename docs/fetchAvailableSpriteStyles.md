---
title: fetchAvailableSpriteStyles
description: A function to retrieve available sprite styles for character generation.
---

# fetchAvailableSpriteStyles

The `fetchAvailableSpriteStyles` function is part of the SpriteAI module and allows developers to retrieve a list of available sprite styles that can be used when generating character spritesheets.

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

Here's a more detailed example of how you might use this function in your application:

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from 'spriteAI';

async function createCharacterWithStyle() {
  try {
    const availableStyles = await fetchAvailableSpriteStyles();
    console.log('Available styles:', availableStyles);

    // Choose a random style from the available options
    const randomStyle = availableStyles[Math.floor(Math.random() * availableStyles.length)];

    const characterDescription = 'A brave knight with shining armor';
    const spritesheet = await generateCharacterSpritesheet(characterDescription, {
      style: randomStyle,
      size: '512x512'
    });

    console.log(`Generated character spritesheet in ${randomStyle} style:`, spritesheet);
  } catch (error) {
    console.error('Error fetching styles or generating spritesheet:', error);
  }
}

createCharacterWithStyle();
```

## Notes

- The available styles may be updated over time, so it's recommended to use this function to get the most up-to-date list of styles rather than hardcoding them in your application.
- The returned styles are compatible with the `style` option in the `generateCharacterSpritesheet` function.
- If you encounter any issues with specific styles, ensure you're using the latest version of the SpriteAI module.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - Function to generate character spritesheets
- [fetchAvailableAnimationStates](./fetchAvailableAnimationStates.md) - Function to retrieve available animation states for characters