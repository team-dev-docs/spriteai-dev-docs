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
import { generateCharacterSpritesheet } from './path/to/sprite/module';

const result = await generateCharacterSpritesheet(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to include (default: `['idle', 'walk', 'run', 'attack']`).
  - `framesPerState` (number): Number of frames per animation state (default: `6`).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style of the spritesheet (default: "pixel-art").
  - `padding` (number): Padding between frames (default: `1`).
  - `direction` (string): Direction the character should face (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the generated sprite sheet.
- `metadata`: Object with details about the generated spritesheet, including frame dimensions, animation states, and frame data.

## Examples

1. Generate a single sprite sheet:
```javascript
const result = await generateCharacterSpritesheet("A pixelated robot");
console.log(result.spritesheet);
console.log(result.metadata);
```

2. Generate a spritesheet with custom options:
```javascript
const result = await generateCharacterSpritesheet("A cartoon cat", {
  states: ['idle', 'walk', 'run', 'jump'],
  framesPerState: 8,
  size: '2048x2048',
  style: 'vector',
  padding: 2,
  save: true
});
console.log(result.spritesheet);
console.log(result.metadata);
```

## SDK Functions

### `fetchAvailableAnimationStates()`
Returns an array of available animation states that can be used with the `generateCharacterSpritesheet` function.

### `fetchAvailableSpriteStyles()`
Returns an array of available sprite styles that can be used with the `generateCharacterSpritesheet` function.

## Additional Features

### `generateEnvironmentSprites()`
This function generates a tileset of environment sprites based on a given description and options.

## Notes or Considerations
- The functions use AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for walking animations and follow a specific layout (a grid of frames).
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The functions may take some time to complete due to API calls and image processing.
