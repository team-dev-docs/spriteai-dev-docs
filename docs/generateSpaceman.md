# Generate Spaceman

The `generateSpaceman` function is a specialized tool for creating pixel-art spritesheets of astronaut characters. This function is part of the spriteAI library and is designed to streamline the process of generating space-themed character assets for game development.

## Overview

`generateSpaceman` creates a character spritesheet of an astronaut with predefined animation states, optimized for use in pixel-art style games.

## Usage

```javascript
import { generateSpaceman } from 'spriteAI';

const spaceman = await generateSpaceman(options);
```

## Parameters

The function accepts an optional `options` object with the following properties:

- `states` (array): Animation states for the character. Default: `['idle', 'walk', 'run', 'float']`
- `framesPerState` (number): Number of frames for each animation state. Default: `6`
- `style` (string): Art style of the sprite. Default: `'pixel-art'`
- `size` (string): Size of the generated image. Default: `'1024x1024'`
- `padding` (number): Padding between sprite frames. Default: `1`
- `direction` (string): Direction the character faces. Default: `'right'`

## Return Value

The function returns a Promise that resolves to an object containing:

- `original` (string): URL of the original generated image
- `spritesheet` (string): Base64-encoded data URL of the processed spritesheet
- `metadata` (object): Detailed information about the spritesheet, including:
  - `states` (array): List of animation states
  - `framesPerState` (number): Number of frames per state
  - `totalFrames` (number): Total number of frames in the spritesheet
  - `dimensions` (object): Width and height of the spritesheet
  - `frameData` (object): Detailed frame information for each animation state

## Example

```javascript
const spaceman = await generateSpaceman({
  states: ['idle', 'walk', 'run', 'float', 'attack'],
  framesPerState: 8,
  size: '2048x2048'
});

console.log(spaceman.metadata);
// Use spaceman.spritesheet in your game engine
```

## Notes

- The function uses AI image generation to create the initial sprite image.
- The generated spaceman is described as an "astronaut character with space suit and helmet".
- The spritesheet is optimized for pixel-art style games but can be customized.
- Each row in the spritesheet represents a different animation state.
- The function handles the entire process from generation to spritesheet creation.

## See Also

- `generateCharacterSpritesheet`: The base function used by `generateSpaceman`
- `generateNinja`: Similar function for generating ninja character spritesheets
- `generateRobot`: Function for generating robot character spritesheets