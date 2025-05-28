---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis. This module also includes functions for generating environment sprites, item sprites, and fetching available animation states and sprite styles.

## Usage
To use the sprite generation functions, import them from the sprite module and call them with the appropriate parameters.

```javascript
import { generateCharacterSpritesheet, generateEnvironmentSprites, generateItemSprites, fetchAvailableAnimationStates, fetchAvailableSpriteStyles } from './path/to/sprite/module';

// Generate a character spritesheet
const characterResult = await generateCharacterSpritesheet(description, options);

// Generate environment sprites
const environmentResult = await generateEnvironmentSprites(description, options);

// Generate item sprites
const itemResult = await generateItemSprites(description, options);

// Fetch available animation states
const animationStates = await fetchAvailableAnimationStates();

// Fetch available sprite styles
const spriteStyles = await fetchAvailableSpriteStyles();
```

## Parameters

### generateCharacterSpritesheet
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Array of animation states (default: ['idle', 'walk', 'run', 'attack']).
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
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet.
- `metadata`: Object containing information about the spritesheet, including states, framesPerState, totalFrames, dimensions, and frameData.

### generateEnvironmentSprites
Returns an object containing:
- `original`: URL of the original generated image.
- `tileset`: Base64-encoded image data URL of the processed environment tileset.
- `metadata`: Object containing information about the tileset, including elements, theme, dimensions, and tileData.

### generateItemSprites
Returns an object containing:
- `original`: URL of the original generated image.
- `itemSheet`: Base64-encoded image data URL of the processed item sheet.
- `metadata`: Object containing information about the item sheet, including itemCount, itemType, dimensions, and itemData.

### fetchAvailableAnimationStates
Returns an array of strings representing available animation states.

### fetchAvailableSpriteStyles
Returns an array of strings representing available sprite styles.

## Examples

1. Generate a character spritesheet:
```javascript
const result = await generateCharacterSpritesheet("A pixelated robot", {
  states: ['idle', 'walk', 'run', 'jump'],
  framesPerState: 8,
  style: "pixel-art"
});
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate environment sprites:
```javascript
const environmentResult = await generateEnvironmentSprites("A lush forest with ancient ruins", {
  elements: 6,
  theme: "fantasy",
  style: "pixel-art"
});
console.log(environmentResult.metadata);
console.log(environmentResult.tileset);
```

3. Generate item sprites:
```javascript
const itemResult = await generateItemSprites("Magic potions and scrolls", {
  itemCount: 8,
  itemType: "consumables",
  style: "hand-drawn"
});
console.log(itemResult.metadata);
console.log(itemResult.itemSheet);
```

4. Fetch available animation states:
```javascript
const animationStates = await fetchAvailableAnimationStates();
console.log("Available animation states:", animationStates);
```

5. Fetch available sprite styles:
```javascript
const spriteStyles = await fetchAvailableSpriteStyles();
console.log("Available sprite styles:", spriteStyles);
```

## Notes or Considerations
- The functions use AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for specific layouts and animation states as defined in the options.
- The functions may take some time to complete due to API calls and image processing.
- When saving images, they are stored in an 'assets' folder with filenames based on the description.
- Consider using the `fetchAvailableAnimationStates` and `fetchAvailableSpriteStyles` functions to get up-to-date information on supported options.
- The `generateEnvironmentSprites` and `generateItemSprites` functions provide more specialized sprite generation for different use cases.
- Ensure you have the necessary dependencies (OpenAI, axios, sharp, Jimp) installed and properly configured in your project.
