---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis.

## Usage
To use `generateSprite`, import the necessary functions from the `spriteAI` module.

```javascript
import { generateCharacterSpritesheet, fetchAvailableAnimationStates, fetchAvailableSpriteStyles, generateEnvironmentSprites } from './spriteAI';

const result = await generateCharacterSpritesheet(description, options);
```

## Available Functions

### `generateCharacterSpritesheet`
Generates a character spritesheet based on a description and customizable options.

**Parameters**:
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (string[]): List of animation states to include (default: `['idle', 'walk', 'run', 'attack']`).
  - `framesPerState` (number): Number of frames per animation state (default: `6`).
  - `size` (string): Size of the generated image (default: `'1024x1024'`).
  - `style` (string): Art style of the generated sprite (default: `'pixel-art'`).
  - `padding` (number): Padding between frames in the spritesheet (default: `1`).
  - `direction` (string): Direction the character is facing (default: `'right'`).
  - `save` (boolean): Whether to save the generated image to disk (default: `false`).

**Returns**:
- An object containing the original image URL, the generated spritesheet as a data URL, and metadata about the spritesheet.

### `fetchAvailableAnimationStates`
Fetches the available animation states that can be used with the `generateCharacterSpritesheet` function.

**Returns**:
- An array of available animation state strings.

### `fetchAvailableSpriteStyles`
Fetches the available sprite styles that can be used with the `generateCharacterSpritesheet` function.

**Returns**:
- An array of available sprite style strings.

### `generateEnvironmentSprites`
Generates a tileset of environment sprites based on a description and customizable options.

**Parameters**:
- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of distinct environment pieces to generate (default: `4`).
  - `size` (string): Size of the generated image (default: `'1024x1024'`).
  - `style` (string): Art style of the generated sprites (default: `'pixel-art'`).
  - `padding` (number): Padding between elements in the tileset (default: `1`).
  - `theme` (string): Theme of the environment (default: `'fantasy'`).
  - `save` (boolean): Whether to save the generated image to disk (default: `false`).

**Returns**:
- An object containing the original image URL, the generated tileset as a data URL, and metadata about the tileset.

## Examples

1. Generate a character spritesheet:
```javascript
const description = 'a pixelated robot';
const options = {
  states: ['idle', 'walk', 'run'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art',
  padding: 2,
  direction: 'left',
  save: true
};

const result = await generateCharacterSpritesheet(description, options);
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate an environment tileset:
```javascript
const description = 'a fantasy landscape';
const options = {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  theme: 'fantasy',
  save: true
};

const result = await generateEnvironmentSprites(description, options);
console.log(result.metadata);
console.log(result.tileset);
```

## Notes or Considerations
- The functions use AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for walking animations and follow a specific layout (frames in a grid).
- The functions convert images to grayscale, which may affect the final output.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The functions may take some time to complete due to API calls and image processing.
- The available animation states and sprite styles can be fetched using the provided helper functions.
