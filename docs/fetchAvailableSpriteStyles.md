---
title: fetchAvailableSpriteStyles
description: A guide on how to use the fetchAvailableSpriteStyles function to retrieve available sprite styles.
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is a part of the spriteAI module, designed to retrieve a list of available sprite styles that can be used when generating character spritesheets. This function is useful for developers who want to provide style options to users or programmatically select styles for sprite generation.

## Usage

To use the `fetchAvailableSpriteStyles` function, you need to import it from the spriteAI module and call it as an asynchronous function.

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

The function returns a Promise that resolves to an array of strings, where each string represents an available sprite style.

## Example

Here's an example of how to use `fetchAvailableSpriteStyles` in your application:

```javascript
import { fetchAvailableSpriteStyles } from './path/to/spriteAI';

async function displayAvailableStyles() {
  try {
    const styles = await fetchAvailableSpriteStyles();
    console.log('Available sprite styles:', styles);
    
    // Example: Using the styles to populate a dropdown
    const dropdown = document.getElementById('style-dropdown');
    styles.forEach(style => {
      const option = document.createElement('option');
      option.value = style;
      option.textContent = style;
      dropdown.appendChild(option);
    });
  } catch (error) {
    console.error('Error fetching available styles:', error);
  }
}

displayAvailableStyles();
```

## Available Styles

As of the current implementation, the following styles are available:

- pixel-art
- vector
- 3d
- hand-drawn
- anime

Please note that this list may be updated in future versions of the spriteAI module.

## Notes

- The `fetchAvailableSpriteStyles` function is asynchronous and returns a Promise. Always use `await` or `.then()` when calling this function.
- The available styles are hardcoded in the current implementation. Future versions may fetch this data from an external source or configuration file.
- When using the returned styles with the `generateCharacterSpritesheet` function, ensure that you pass the style as a string in the options object.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - For generating character spritesheets using the available styles.
- [fetchAvailableAnimationStates](./fetchAvailableAnimationStates.md) - To retrieve available animation states for character sprites.