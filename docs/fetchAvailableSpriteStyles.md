---
slug: /fetchAvailableSpriteStyles
sidebar_position: 3
---

# fetchAvailableSpriteStyles

## Brief Description

`fetchAvailableSpriteStyles` is a function that retrieves an array of available sprite styles supported by the sprite generation system.

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

async function generateCustomSprite(description) {
  const availableStyles = await fetchAvailableSpriteStyles();
  const randomStyle = availableStyles[Math.floor(Math.random() * availableStyles.length)];
  
  const result = await generateCharacterSpritesheet(description, { style: randomStyle });
  console.log(`Generated sprite in ${randomStyle} style:`, result);
}

generateCustomSprite('A heroic warrior');
```

## Notes or Considerations

- The available styles are predefined in the system and may include options like 'pixel-art', 'vector', '3d', 'hand-drawn', and 'anime'.
- This function is useful for providing style options to users or for randomly selecting a style when generating sprites.
- The list of available styles may be updated in future versions of the sprite generation system, so it's recommended to always fetch the latest available styles rather than hardcoding them.
- If no styles are available or an error occurs, the function will return an empty array.
- Consider caching the result of this function if you need to use it frequently, as the available styles are unlikely to change during a single session.