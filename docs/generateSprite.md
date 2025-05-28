---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis. The module also includes functions for generating environment sprites, item sprites, and fetching available animation states and sprite styles.

## Usage
To use the sprite generation functions, import them from the sprite module and call them with the appropriate parameters.

```javascript
import { generateCharacterSpritesheet, generateEnvironmentSprites, generateItemSprites, fetchAvailableAnimationStates, fetchAvailableSpriteStyles } from './path/to/sprite/module';

const characterResult = await generateCharacterSpritesheet(description, options);
const environmentResult = await generateEnvironmentSprites(description, options);
const itemResult = await generateItemSprites(description, options);
const animationStates = await fetchAvailableAnimationStates();
const spriteStyles = await fetchAvailableSpriteStyles();
```

## Parameters

### generateCharacterSpritesheet
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprite (default: "pixel-art").
  - `padding` (number): Padding between frames (default: 1).
  - `direction` (string): Direction the character faces (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.

### generateEnvironmentSprites
- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of environment elements to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprites (default: "pixel-art").
  - `padding` (number): Padding between elements (default: 1).
  - `theme` (string): Theme of the environment (default: "fantasy").
  - `save` (boolean): Whether to save the generated image to disk.

### generateItemSprites
- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprites (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
### generateCharacterSpritesheet
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed sprite sheet.
- `metadata`: Object with information about the sprite sheet, including states, frames, and dimensions.

### generateEnvironmentSprites
Returns an object containing:
- `original`: URL of the original generated image.
- `tileset`: Base64-encoded image data URL of the processed environment tileset.
- `metadata`: Object with information about the tileset, including elements, theme, and dimensions.

### generateItemSprites
Returns an object containing:
- `original`: URL of the original generated image.
- `itemSheet`: Base64-encoded image data URL of the processed item sheet.
- `metadata`: Object with information about the item sheet, including item count, type, and dimensions.

### fetchAvailableAnimationStates
Returns an array of available animation states.

### fetchAvailableSpriteStyles
Returns an array of available sprite styles.

## Examples

1. Generate a character sprite sheet:
```javascript
const result = await generateCharacterSpritesheet("A pixelated robot");
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate environment sprites:
```javascript
const environmentResult = await generateEnvironmentSprites("A mystical forest", { elements: 6, theme: "fantasy" });
console.log(environmentResult.metadata);
console.log(environmentResult.tileset);
```

3. Generate item sprites:
```javascript
const itemResult = await generateItemSprites("Medieval weapons", { itemCount: 8, itemType: "weapons" });
console.log(itemResult.metadata);
console.log(itemResult.itemSheet);
```

4. Fetch available animation states:
```javascript
const states = await fetchAvailableAnimationStates();
console.log(states);
```

5. Fetch available sprite styles:
```javascript
const styles = await fetchAvailableSpriteStyles();
console.log(styles);
```

## Notes or Considerations
- The functions use AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for the specified animation states and follow a specific layout based on the number of frames and states.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The functions may take some time to complete due to API calls and image processing.
- Consider using the `fetchAvailableAnimationStates` and `fetchAvailableSpriteStyles` functions to get up-to-date information on available options for character sprite generation.
- The `generateEnvironmentSprites` and `generateItemSprites` functions are useful for creating cohesive game assets alongside character sprites.
