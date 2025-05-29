---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis. It now includes additional functions for fetching available animation states and sprite styles, as well as generating environment sprites and item sprites.

## Usage
To use `generateSprite` and its related functions, import them from the sprite module and call them with the required parameters.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateCharacterSpritesheet(description, options);
const styles = await sprite.fetchAvailableSpriteStyles();
const states = await sprite.fetchAvailableAnimationStates();
const environment = await sprite.generateEnvironmentSprites(description, options);
const items = await sprite.generateItemSprites(description, options);
```

## Parameters
### generateCharacterSpritesheet
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to include (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprite (default: "pixel-art").
  - `padding` (number): Padding between frames (default: 1).
  - `direction` (string): Direction the character should face (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.

### generateEnvironmentSprites
- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of different elements to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprites (default: "pixel-art").
  - `padding` (number): Padding between elements (default: 1).
  - `theme` (string): Theme of the environment (default: "fantasy").
  - `save` (boolean): Whether to save the generated image to disk.

### generateItemSprites
- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of different items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprites (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color for the sprite sheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
### generateCharacterSpritesheet
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed sprite sheet.
- `metadata`: JSON object with frameHeight, frameWidth, and other sprite information.

### generateEnvironmentSprites
Returns an object containing:
- `original`: URL of the original generated image.
- `tileset`: Base64-encoded image data URL of the processed environment tileset.
- `metadata`: JSON object with element count, theme, dimensions, and tile data.

### generateItemSprites
Returns an object containing:
- `original`: URL of the original generated image.
- `itemSheet`: Base64-encoded image data URL of the processed item sprite sheet.
- `metadata`: JSON object with item count, item type, dimensions, and item data.

### fetchAvailableAnimationStates
Returns an array of available animation states.

### fetchAvailableSpriteStyles
Returns an array of available sprite styles.

## Examples

1. Generate a character sprite sheet:
```javascript
const result = await sprite.generateCharacterSpritesheet("A pixelated robot");
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate environment sprites:
```javascript
const environment = await sprite.generateEnvironmentSprites("A forest clearing", { elements: 6, theme: "nature" });
console.log(environment.metadata);
console.log(environment.tileset);
```

3. Generate item sprites:
```javascript
const items = await sprite.generateItemSprites("Magic potions", { itemCount: 8, itemType: "consumable" });
console.log(items.metadata);
console.log(items.itemSheet);
```

4. Fetch available animation states and sprite styles:
```javascript
const states = await sprite.fetchAvailableAnimationStates();
console.log("Available animation states:", states);

const styles = await sprite.fetchAvailableSpriteStyles();
console.log("Available sprite styles:", styles);
```

## Notes or Considerations
- The functions use AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for the specified animation states and follow the layout defined in the options.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The functions may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies installed (OpenAI, axios, sharp, Jimp) to use these functions.
- The new functions provide more flexibility in generating different types of game assets, including characters, environments, and items.
- Consider using the `fetchAvailableAnimationStates` and `fetchAvailableSpriteStyles` functions to get up-to-date information on supported options.
