---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis. This module also includes functions for fetching available sprite styles and generating environment sprites.

## Usage
To use the sprite generation functions, import them from the sprite module and call them with the required parameters.

```javascript
import { generateCharacterSpritesheet, fetchAvailableSpriteStyles, generateEnvironmentSprites } from './path/to/sprite/module';

const characterResult = await generateCharacterSpritesheet(description, options);
const styles = await fetchAvailableSpriteStyles();
const environmentResult = await generateEnvironmentSprites(description, options);
```

## Functions

### generateCharacterSpritesheet

#### Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to include (default: ['idle', 'walk', 'run', 'attack']).
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
- `metadata`: Object with information about the generated sprite sheet.

### fetchAvailableSpriteStyles

#### Parameters
None

#### Return Value
Returns an array of available sprite styles as strings.

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
  `tileset`: Base64-encoded image data URL of the processed environment tileset.
- `metadata`: Object with information about the generated environment sprites.

## Examples

1. Generate a character sprite sheet:
```javascript
const result = await generateCharacterSpritesheet("A pixelated robot", {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 8,
  style: "pixel-art"
});
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Fetch available sprite styles:
```javascript
const styles = await fetchAvailableSpriteStyles();
console.log("Available styles:", styles);
```

3. Generate environment sprites:
```javascript
const environmentResult = await generateEnvironmentSprites("A lush forest", {
  elements: 6,
  theme: "nature",
  style: "pixel-art"
});
console.log(environmentResult.metadata);
console.log(environmentResult.tileset);
```

## Notes or Considerations
- The functions use AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for the specified animation states and follow a grid layout based on the number of frames and states.
- The `generateCharacterSpritesheet` function is designed for character animations, while `generateEnvironmentSprites` is for creating environment tilesets.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The functions may take some time to complete due to API calls and image processing.
- Available sprite styles and animation states are predefined but can be expanded in future updates.
- Consider using the `fetchAvailableSpriteStyles` function to ensure you're using a supported style before generating sprites.
