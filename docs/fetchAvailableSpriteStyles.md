---
title: fetchAvailableSpriteStyles
description: API reference for the fetchAvailableSpriteStyles function
---

# fetchAvailableSpriteStyles

The `fetchAvailableSpriteStyles` function retrieves a list of available sprite styles that can be used when generating character spritesheets.

## Usage

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

const styles = await fetchAvailableSpriteStyles();
console.log(styles);
```

## Return Value

The function returns a Promise that resolves to an array of strings, where each string represents an available sprite style.

Example return value:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Description

The `fetchAvailableSpriteStyles` function is a utility function that provides a list of supported sprite styles for use with the `generateCharacterSpritesheet` function. This allows developers to programmatically access the available style options without having to hardcode them or refer to separate documentation.

The styles returned by this function can be used as values for the `style` option when calling `generateCharacterSpritesheet`.

## Example

Here's an example of how you might use `fetchAvailableSpriteStyles` in conjunction with `generateCharacterSpritesheet`:

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from 'spriteAI';

async function createSpritesheetWithRandomStyle(description) {
  const styles = await fetchAvailableSpriteStyles();
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];
  
  const spritesheet = await generateCharacterSpritesheet(description, {
    style: randomStyle
  });
  
  console.log(`Generated a ${randomStyle} style spritesheet`);
  return spritesheet;
}

createSpritesheetWithRandomStyle("A cute robot character");
```

## Notes

- The available styles may be updated over time as new options are added to the sprite generation system.
- Not all styles may be suitable for all types of characters or game aesthetics. It's recommended to experiment with different styles to find the best fit for your project.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - For creating character spritesheets using the styles returned by this function.
- [fetchAvailableAnimationStates](./fetchAvailableAnimationStates.md) - For retrieving available animation states for character sprites.