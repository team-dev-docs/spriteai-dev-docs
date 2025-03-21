---
slug: /fetchAvailableSpriteStyles
sidebar_position: 2
---

# fetchAvailableSpriteStyles

## Brief Description

`fetchAvailableSpriteStyles` is an asynchronous function that retrieves a list of available sprite styles that can be used when generating character sprites.

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

## Examples

### Basic Usage

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

async function getStyles() {
  try {
    const availableStyles = await fetchAvailableSpriteStyles();
    console.log('Available sprite styles:', availableStyles);
  } catch (error) {
    console.error('Error fetching sprite styles:', error);
  }
}

getStyles();
```

### Using with generateCharacterSpritesheet

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from './path/to/sprite/module';

async function generateSprite(description) {
  const styles = await fetchAvailableSpriteStyles();
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];
  
  const spritesheet = await generateCharacterSpritesheet(description, { style: randomStyle });
  console.log(`Generated spritesheet using ${randomStyle} style:`, spritesheet);
}

generateSprite('A heroic knight');
```

## Notes or Considerations

- The available styles are predefined in the module and currently include: 'pixel-art', 'vector', '3d', 'hand-drawn', and 'anime'.
- This function is useful for providing users with a list of valid style options when generating sprites.
- The function is asynchronous to allow for potential future expansion, such as fetching styles from an external API or database.
- When using the returned styles with `generateCharacterSpritesheet`, ensure that the chosen style is supported by the image generation model (DALL-E 3 in this case).
- The order of styles in the returned array is not guaranteed to be consistent across calls, so if you need a specific order, consider sorting the array after retrieval.