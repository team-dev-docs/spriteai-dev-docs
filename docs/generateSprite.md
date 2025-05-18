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
  - `iterations` (number): Number of sprite variations to generate.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.
  - `states` (array): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `style` (string): Art style of the sprite (default: 'pixel-art').
  - `padding` (number): Padding between frames (default: 1).
  - `direction` (string): Direction the character should face (default: 'right').

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed sprite sheet.
- `metadata`: Object containing information about the generated sprite sheet, including:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per state.
  - `totalFrames`: Total number of frames in the sprite sheet.
  - `dimensions`: Object with width and height of the sprite sheet.
  - `frameData`: Object containing information about each animation state's frames.

## Examples

1. Generate a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate a sprite sheet with custom options:
```javascript
const options = {
  states: ['idle', 'run', 'jump'],
  framesPerState: 8,
  style: 'vector',
  size: '2048x2048'
};
const result = await sprite.generateSprite("A cartoon cat", options);
console.log(result.metadata);
```

## New Functions

### fetchAvailableAnimationStates

This function retrieves a list of available animation states that can be used when generating sprites.

```javascript
import { fetchAvailableAnimationStates } from './path/to/sprite/module';

const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### fetchAvailableSpriteStyles

This function retrieves a list of available sprite styles that can be used when generating sprites.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

### generateEnvironmentSprites

This function generates environment sprites based on a given description.

```javascript
import { generateEnvironmentSprites } from './path/to/sprite/module';

const result = await generateEnvironmentSprites("A forest environment", {
  elements: 6,
  size: '2048x2048',
  style: 'pixel-art',
  theme: 'fantasy'
});

console.log(result.original); // URL of the original generated image
console.log(result.tileset); // Base64-encoded image data URL of the processed tileset
console.log(result.metadata); // Object containing information about the generated tileset
```

Parameters:
- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of environment elements to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style of the environment (default: 'pixel-art').
  - `padding` (number): Padding between elements (default: 1).
  - `theme` (string): Theme of the environment (default: 'fantasy').
  - `save` (boolean): Whether to save the generated image to disk.

## Notes or Considerations
- The function uses AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for various animation states and follow a specific layout based on the number of states and frames per state.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- The new functions provide additional flexibility in generating sprites and environment elements, allowing for more customized outputs.
