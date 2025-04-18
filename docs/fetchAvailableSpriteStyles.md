```markdown
---
slug: /fetchAvailableSpriteStyles
sidebar_position: 3
---

# fetchAvailableSpriteStyles

## Brief Description

`fetchAvailableSpriteStyles` is an asynchronous function that retrieves a list of available sprite styles supported by the sprite generation system.

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

### Using with Sprite Generation

```javascript
import { generateCharacterSpritesheet, fetchAvailableSpriteStyles } from './path/to/sprite/module';

async function generateCustomSprite(description) {
  const availableStyles = await fetchAvailableSpriteStyles();
  
  console.log('Available styles:', availableStyles);
  
  const selectedStyle = availableStyles[0]; // Choose the first available style
  
  const result = await generateCharacterSpritesheet(description, { style: selectedStyle });
  
  console.log('Generated sprite with style:', selectedStyle);
  console.log(result);
}

generateCustomSprite('A pixelated robot');
```

## Notes or Considerations

- The available styles are predefined in the system and may include options like 'pixel-art', 'vector', '3d', 'hand-drawn', and 'anime'.
- The returned array of styles is not guaranteed to be in any specific order.
- This function is useful for providing style options to users or for dynamically adjusting sprite generation parameters based on available styles.
- Always handle potential errors when calling this asynchronous function, as network issues or internal errors could occur.
- The available styles may be updated in future versions of the sprite generation system, so it's a good practice to always fetch the latest available styles rather than hardcoding them in your application.
```