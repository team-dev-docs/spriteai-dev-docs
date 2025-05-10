---
slug: /fetchAvailableSpriteStyles
sidebar_position: 3
---

# fetchAvailableSpriteStyles

## Brief Description

`fetchAvailableSpriteStyles` is a function that retrieves an array of available sprite styles that can be used when generating character spritesheets.

## Usage

To use `fetchAvailableSpriteStyles`, import it from the sprite module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const availableStyles = await fetchAvailableSpriteStyles();
```

## Parameters

This function does not take any parameters.

## Return Value

Returns a Promise that resolves to an array of strings, where each string represents an available sprite style.

## Examples

### Basic Usage

```javascript
import { fetchAvailableSpriteStyles } from './spriteAI';

async function displayAvailableStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log('Available sprite styles:', styles);
}

displayAvailableStyles();
```

### Using with generateCharacterSpritesheet

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from './spriteAI';

async function generateCustomSpritesheet(description) {
  const availableStyles = await fetchAvailableSpriteStyles();
  const randomStyle = availableStyles[Math.floor(Math.random() * availableStyles.length)];
  
  const spritesheet = await generateCharacterSpritesheet(description, {
    style: randomStyle
  });
  
  console.log(`Generated spritesheet using ${randomStyle} style:`, spritesheet);
}

generateCustomSpritesheet('A fierce warrior');
```

## Notes or Considerations

- The available styles are predefined in the `spriteAI/index.js` file and currently include: 'pixel-art', 'vector', '3d', 'hand-drawn', and 'anime'.
- This function is useful for providing users with options when generating spritesheets or for randomly selecting styles in automated processes.
- The list of available styles may be updated in future versions, so it's recommended to use this function to get the most up-to-date list rather than hardcoding style options.
- When using the returned styles with `generateCharacterSpritesheet`, ensure that the chosen style is passed in the `options` object with the `style` key.