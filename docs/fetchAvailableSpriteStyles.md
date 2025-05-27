---
title: fetchAvailableSpriteStyles
description: A function to retrieve available sprite styles for character generation.
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is part of the sprite generation module. It allows developers to retrieve a list of available sprite styles that can be used when generating character sprites.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the sprite module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

async function getStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles);
}
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

Here's an example of how to use the `fetchAvailableSpriteStyles` function in your application:

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from './path/to/sprite/module';

async function createCharacterWithStyle() {
  try {
    const availableStyles = await fetchAvailableSpriteStyles();
    console.log('Available styles:', availableStyles);

    // Use the first available style to generate a character
    if (availableStyles.length > 0) {
      const characterDescription = 'A heroic knight with shining armor';
      const result = await generateCharacterSpritesheet(characterDescription, {
        style: availableStyles[0]
      });
      console.log('Generated character spritesheet:', result);
    } else {
      console.log('No sprite styles available');
    }
  } catch (error) {
    console.error('Error fetching sprite styles:', error);
  }
}

createCharacterWithStyle();
```

## Notes

- The available styles may be updated or expanded in future versions of the sprite generation module.
- When using the `generateCharacterSpritesheet` function, you can pass one of these styles as an option to customize the appearance of the generated sprite.
- If an invalid style is provided to `generateCharacterSpritesheet`, it may default to a specific style or throw an error, depending on the implementation.

## Related Functions

- `generateCharacterSpritesheet`: Generates a character spritesheet based on a description and options, including the style.
- `fetchAvailableAnimationStates`: Retrieves available animation states for character sprites.

For more information on generating character sprites and using different styles, refer to the `generateCharacterSpritesheet` documentation.