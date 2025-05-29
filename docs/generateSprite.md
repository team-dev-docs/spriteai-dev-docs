---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis.

## Usage
To use `generateSprite`, import it from the sprite module and call it with a description of the character you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array of strings): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprite (default: "pixel-art").
  - `padding` (number): Padding between frames (default: 1).
  - `direction` (string): Direction the character should face (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the generated sprite sheet.
- `metadata`: Object containing information about the generated sprite sheet, including:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per state.
  - `totalFrames`: Total number of frames in the sprite sheet.
  - `dimensions`: Object with width and height of the sprite sheet.
  - `frameData`: Object containing information about each animation state's position in the sprite sheet.

## Examples

1. Generate a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log(result.spritesheet);
console.log(result.metadata);
```

2. Generate a sprite sheet with custom options:
```javascript
const options = {
  states: ['idle', 'walk', 'jump'],
  framesPerState: 8,
  size: '2048x2048',
  style: 'vector',
  direction: 'left'
};
const result = await sprite.generateSprite("A cartoon cat", options);
console.log(result.metadata.frameData);
```

## Additional Functions

### fetchAvailableAnimationStates()

Retrieves a list of available animation states.

```javascript
const states = await sprite.fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### fetchAvailableSpriteStyles()

Retrieves a list of available sprite styles.

```javascript
const styles = await sprite.fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

### generateEnvironmentSprites(description, options)

Generates a tileset of environment sprites based on a given description.

Parameters:
- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of distinct environment elements to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprites (default: "pixel-art").
  - `padding` (number): Padding between elements (default: 1).
  - `theme` (string): Theme of the environment (default: "fantasy").
  - `save` (boolean): Whether to save the generated image to disk.

Returns an object containing:
- `original`: URL of the original generated image.
- `tileset`: Base64-encoded image data URL of the generated tileset.
- `metadata`: Object containing information about the generated tileset.

Example:
```javascript
const result = await sprite.generateEnvironmentSprites("A forest with magical elements", {
  elements: 6,
  theme: "magical forest"
});
console.log(result.tileset);
console.log(result.metadata);
```

### generateItemSprites(description, options)

Generates a collection of item sprites based on a given description.

Parameters:
- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of distinct items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprites (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

Returns an object containing:
- `original`: URL of the original generated image.
- `itemSheet`: Base64-encoded image data URL of the generated item sheet.
- `metadata`: Object containing information about the generated item sheet.

Example:
```javascript
const result = await sprite.generateItemSprites("Fantasy weapons and armor", {
  itemCount: 8,
  itemType: "weapons"
});
console.log(result.itemSheet);
console.log(result.metadata);
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for various animation states and follow a specific layout based on the `framesPerState` option.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Consider using the `fetchAvailableAnimationStates()` and `fetchAvailableSpriteStyles()` functions to get up-to-date information on available options.
- The `generateEnvironmentSprites()` and `generateItemSprites()` functions provide additional flexibility for creating game assets beyond character sprites.
