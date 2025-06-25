---
title: fetchAvailableSpriteStyles
description: A function to retrieve available sprite styles for character generation.
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is a part of the sprite generation module. It allows developers to retrieve a list of available sprite styles that can be used when generating character sprites. This function is useful for providing options to users or for dynamically adjusting sprite generation parameters in your application.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the sprite module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

async function getStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles);
}
```

## Function Signature

```javascript
async function fetchAvailableSpriteStyles(): Promise<string[]>
```

## Return Value

The function returns a Promise that resolves to an array of strings. Each string represents an available sprite style.

## Example

Here's a practical example of how to use `fetchAvailableSpriteStyles` in your application:

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from './path/to/sprite/module';

async function createCharacterWithRandomStyle(description) {
  try {
    const availableStyles = await fetchAvailableSpriteStyles();
    const randomStyle = availableStyles[Math.floor(Math.random() * availableStyles.length)];
    
    const spritesheet = await generateCharacterSpritesheet(description, {
      style: randomStyle
    });
    
    console.log(`Generated character with style: ${randomStyle}`);
    return spritesheet;
  } catch (error) {
    console.error('Error generating character:', error);
  }
}

// Usage
createCharacterWithRandomStyle('A brave knight with shining armor');
```

## Available Styles

The current implementation returns the following styles:

- pixel-art
- vector
- 3d
- hand-drawn
- anime

Please note that the available styles may be updated in future versions of the module.

## Notes and Considerations

- The function is asynchronous and returns a Promise. Always use `await` or `.then()` when calling it.
- The list of available styles is hardcoded in the current implementation. Future versions may fetch this data from an external source or configuration file.
- If you need to support a specific style, it's recommended to check if it's included in the returned array before using it in sprite generation.

## Related Functions

- `generateCharacterSpritesheet`: Uses the styles from `fetchAvailableSpriteStyles` to generate character spritesheets.
- `fetchAvailableAnimationStates`: Retrieves available animation states for sprite generation.

## Next Steps

Now that you know how to fetch available sprite styles, you might want to explore:

- [How to generate a character spritesheet](./generateCharacterSpritesheet.md)
- [Customizing sprite generation options](./customizingSpriteGeneration.md)
- [Working with different sprite styles](./workingWithSpriteStyles.md)