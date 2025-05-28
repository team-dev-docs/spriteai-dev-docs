---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis. It is part of a suite of functions for generating game assets, including character sprites, environment sprites, and item sprites.

## Usage
To use the sprite generation functions, import them from the sprite module and call them with the appropriate parameters.

```javascript
import { generateCharacterSpritesheet, generateEnvironmentSprites, generateItemSprites, fetchAvailableAnimationStates, fetchAvailableSpriteStyles } from './path/to/sprite/module';

const characterResult = await generateCharacterSpritesheet(description, options);
const environmentResult = await generateEnvironmentSprites(description, options);
const itemResult = await generateItemSprites(description, options);
```

## Available Functions

### generateCharacterSpritesheet

Generates a character sprite sheet based on the given description and options.

#### Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to include (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Number of frames per animation state (default: 6)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style of the sprite (default: "pixel-art")
  - `padding` (number): Padding between frames (default: 1)
  - `direction` (string): Direction the character faces (default: "right")
  - `save` (boolean): Whether to save the generated image to disk

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded image data URL of the processed sprite sheet
- `metadata`: Object with information about the sprite sheet, including states, dimensions, and frame data

### generateEnvironmentSprites

Generates environment sprites based on the given description and options.

#### Parameters
- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of distinct environment pieces to generate (default: 4)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style of the sprites (default: "pixel-art")
  - `padding` (number): Padding between elements (default: 1)
  - `theme` (string): Theme of the environment (default: "fantasy")
  - `save` (boolean): Whether to save the generated image to disk

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image
- `tileset`: Base64-encoded image data URL of the processed tileset
- `metadata`: Object with information about the tileset, including dimensions and tile data

### generateItemSprites

Generates item sprites based on the given description and options.

#### Parameters
- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of distinct items to generate (default: 4)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style of the sprites (default: "pixel-art")
  - `padding` (number): Padding between items (default: 1)
  - `itemType` (string): Type of items to generate (default: "equipment")
  - `background` (string): Background color of the sprite sheet (default: "white")
  - `save` (boolean): Whether to save the generated image to disk

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image
- `itemSheet`: Base64-encoded image data URL of the processed item sheet
- `metadata`: Object with information about the item sheet, including dimensions and item data

### fetchAvailableAnimationStates

Fetches a list of available animation states for character sprites.

#### Return Value
Returns an array of strings representing available animation states.

### fetchAvailableSpriteStyles

Fetches a list of available sprite styles.

#### Return Value
Returns an array of strings representing available sprite styles.

## Examples

1. Generate a character sprite sheet:
```javascript
const result = await generateCharacterSpritesheet("A pixelated robot", {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 4,
  style: 'pixel-art'
});
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate environment sprites:
```javascript
const environmentResult = await generateEnvironmentSprites("A lush forest", {
  elements: 6,
  theme: 'nature',
  style: 'hand-drawn'
});
console.log(environmentResult.metadata);
console.log(environmentResult.tileset);
```

3. Generate item sprites:
```javascript
const itemResult = await generateItemSprites("Medieval weapons", {
  itemCount: 8,
  itemType: 'weapons',
  style: 'pixel-art'
});
console.log(itemResult.metadata);
console.log(itemResult.itemSheet);
```

4. Fetch available animation states and styles:
```javascript
const animationStates = await fetchAvailableAnimationStates();
console.log("Available animation states:", animationStates);

const spriteStyles = await fetchAvailableSpriteStyles();
console.log("Available sprite styles:", spriteStyles);
```

## Notes or Considerations
- The functions use AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for the specified animation states and follow the layout defined in the options.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The functions may take some time to complete due to API calls and image processing.
- Consider using the `fetchAvailableAnimationStates` and `fetchAvailableSpriteStyles` functions to get up-to-date information on supported options.
- Ensure you have the necessary dependencies installed, including OpenAI, axios, sharp, and Jimp.
