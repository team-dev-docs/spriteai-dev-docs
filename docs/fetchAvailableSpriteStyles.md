---
title: fetchAvailableSpriteStyles
description: A function to retrieve available sprite styles for character generation.
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is part of the SpriteAI module, designed to provide developers with a list of available sprite styles that can be used when generating character spritesheets. This function is useful for applications or games that allow users to customize the visual style of their characters.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the SpriteAI module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from './spriteAI';

async function getStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles);
}

getStyles();
```

## Parameters

This function does not take any parameters.

## Return Value

The function returns a Promise that resolves to an array of strings, where each string represents an available sprite style. The current available styles are:

- 'pixel-art'
- 'vector'
- '3d'
- 'hand-drawn'
- 'anime'

Example return value:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Examples

### Displaying Available Styles to Users

You can use this function to populate a dropdown menu or list of options for users to choose from when customizing their character's appearance:

```javascript
import { fetchAvailableSpriteStyles } from './spriteAI';

async function populateStyleOptions() {
  const styleSelect = document.getElementById('style-select');
  const styles = await fetchAvailableSpriteStyles();
  
  styles.forEach(style => {
    const option = document.createElement('option');
    option.value = style;
    option.textContent = style.charAt(0).toUpperCase() + style.slice(1);
    styleSelect.appendChild(option);
  });
}

populateStyleOptions();
```

### Using with generateCharacterSpritesheet

You can combine this function with the `generateCharacterSpritesheet` function to ensure users only select valid styles:

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from './spriteAI';

async function createCharacter(description) {
  const availableStyles = await fetchAvailableSpriteStyles();
  const selectedStyle = promptUserForStyle(availableStyles); // Implement this function to get user input

  const spritesheet = await generateCharacterSpritesheet(description, {
    style: selectedStyle
  });

  // Use the generated spritesheet...
}

createCharacter('A brave knight with shining armor');
```

## Notes and Considerations

- The list of available styles is subject to change. Always use this function to get the most up-to-date list of styles rather than hardcoding them in your application.
- The function is asynchronous and returns a Promise. Make sure to use `await` or `.then()` when calling it.
- If you're using this function in a browser environment, ensure that you have the necessary CORS settings to make requests to the SpriteAI service.
- The available styles may impact the visual output of the `generateCharacterSpritesheet` function, so it's important to communicate the style differences to your users.

## Related Functions

- `generateCharacterSpritesheet`: Uses the styles provided by `fetchAvailableSpriteStyles` to generate character spritesheets.
- `fetchAvailableAnimationStates`: Retrieves available animation states for character spritesheets.

By using `fetchAvailableSpriteStyles` in conjunction with other SpriteAI functions, you can create a robust and flexible character customization system for your game or application.