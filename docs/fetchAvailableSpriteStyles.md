---
slug: /fetchAvailableSpriteStyles
sidebar_position: 4
---

# fetchAvailableSpriteStyles

## Brief Description

`fetchAvailableSpriteStyles` is a function that retrieves a list of available sprite styles that can be used when generating character sprites.

## Usage

To use `fetchAvailableSpriteStyles`, import it from the sprite module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
```

## Parameters

This function does not take any parameters.

## Return Value

Returns a Promise that resolves to an array of strings, where each string represents an available sprite style.

Example return value:
```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Examples

### Basic Usage

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

async function displayAvailableStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log('Available sprite styles:', styles);
}

displayAvailableStyles();
```

### Using with generateCharacterSpritesheet

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from './path/to/sprite/module';

async function generateCustomSprite() {
  const styles = await fetchAvailableSpriteStyles();
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];
  
  const spritesheet = await generateCharacterSpritesheet('A heroic warrior', {
    style: randomStyle,
    size: '512x512'
  });
  
  console.log(`Generated sprite in ${randomStyle} style:`, spritesheet);
}

generateCustomSprite();
```

## Notes or Considerations

- The available styles may be updated in future versions of the module, so it's recommended to use this function to get the most up-to-date list of styles.
- The returned styles are compatible with the `style` option in the `generateCharacterSpritesheet` function.
- If you need to support a specific style, always check if it's available in the returned array before using it.
- The function is asynchronous to allow for potential future implementations that might fetch the styles from an external source or configuration.