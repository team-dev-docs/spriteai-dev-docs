---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates sprite sheets for characters, environments, and items based on given descriptions, using AI-powered image generation and analysis.

## Usage
To use the sprite generation functions, import them from the sprite module and call them with the appropriate descriptions and options.

```javascript
import { generateCharacterSpritesheet, generateEnvironmentSprites, generateItemSprites } from './path/to/sprite/module';

const characterResult = await generateCharacterSpritesheet(description, options);
const environmentResult = await generateEnvironmentSprites(description, options);
const itemResult = await generateItemSprites(description, options);
```

## Functions

### generateCharacterSpritesheet

#### Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array of strings): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprite (default: "pixel-art").
  - `padding` (number): Padding between frames (default: 1).
  - `direction` (string): Direction the character faces (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed sprite sheet.
- `metadata`: Object containing information about the sprite sheet, including states, dimensions, and frame data.

### generateEnvironmentSprites

#### Parameters
- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of environment elements to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprites (default: "pixel-art").
  - `padding` (number): Padding between elements (default: 1).
  - `theme` (string): Theme of the environment (default: "fantasy").
  - `save` (boolean): Whether to save the generated image to disk.

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `tileset`: Base64-encoded image data URL of the processed tileset.
- `metadata`: Object containing information about the tileset, including dimensions and tile data.

### generateItemSprites

#### Parameters
- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprites (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color of the sprite sheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `itemSheet`: Base64-encoded image data URL of the processed item sheet.
- `metadata`: Object containing information about the item sheet, including dimensions and item data.

## Examples

1. Generate a character sprite sheet:
```javascript
const characterResult = await generateCharacterSpritesheet("A pixelated robot", {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 8,
  style: "pixel-art"
});
console.log(characterResult.metadata);
console.log(characterResult.spritesheet);
```

2. Generate environment sprites:
```javascript
const environmentResult = await generateEnvironmentSprites("A lush forest", {
  elements: 6,
  theme: "nature",
  style: "pixel-art"
});
console.log(environmentResult.metadata);
console.log(environmentResult.tileset);
```

3. Generate item sprites:
```javascript
const itemResult = await generateItemSprites("Medieval weapons", {
  itemCount: 8,
  itemType: "weapons",
  style: "pixel-art"
});
console.log(itemResult.metadata);
console.log(itemResult.itemSheet);
```

## Notes or Considerations
- The functions use AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for their respective purposes (character animations, environment tiles, or item icons).
- The functions may take some time to complete due to API calls and image processing.
- When saving images, they are stored in an 'assets' folder with filenames based on the descriptions.
- Consider using the `fetchAvailableAnimationStates()` and `fetchAvailableSpriteStyles()` functions to get up-to-date lists of supported animation states and sprite styles.

## Additional Utility Functions

### fetchAvailableAnimationStates

Returns an array of available animation states for character sprites.

```javascript
const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### fetchAvailableSpriteStyles

Returns an array of available sprite styles.

```javascript
const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

These utility functions can be helpful when dynamically generating UI options or validating user inputs for sprite generation.
