---
title: fetchAvailableSpriteStyles
description: Fetch available sprite styles for character generation
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is part of the spriteAI module, designed to retrieve a list of available sprite styles that can be used when generating character sprites. This function is useful for developers who want to provide users with options for different visual styles in their game or application.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the spriteAI module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from './spriteAI';

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

The function returns a Promise that resolves to an array of strings, where each string represents an available sprite style.

## Example

Here's an example of how to use the `fetchAvailableSpriteStyles` function in your application:

```javascript
import { fetchAvailableSpriteStyles } from './spriteAI';

async function displayAvailableStyles() {
  try {
    const styles = await fetchAvailableSpriteStyles();
    console.log("Available sprite styles:", styles);
    
    // Example: Populate a dropdown menu with available styles
    const dropdown = document.getElementById('styleDropdown');
    styles.forEach(style => {
      const option = document.createElement('option');
      option.value = style;
      option.textContent = style;
      dropdown.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching available styles:", error);
  }
}

displayAvailableStyles();
```

## Available Styles

As of the current implementation, the following sprite styles are available:

- pixel-art
- vector
- 3d
- hand-drawn
- anime

Please note that this list may be updated in future versions of the spriteAI module.

## Notes

- The `fetchAvailableSpriteStyles` function is asynchronous and returns a Promise. Always use `await` or `.then()` when calling this function.
- The available styles are hardcoded in the current implementation. Future updates may fetch this data from an external source or configuration file.
- When using the returned styles, ensure that you pass them correctly to other functions in the spriteAI module, such as `generateCharacterSpritesheet`.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - For generating character spritesheets using the available styles.
- [fetchAvailableAnimationStates](./fetchAvailableAnimationStates.md) - To fetch available animation states for character sprites.