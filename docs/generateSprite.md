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
  - `framesPerState` (number): Frames per animation state (default: 6).
  - `style` (string): Art style (default: 'pixel-art').
  - `padding` (number): Padding between sprites (default: 1).
  - `direction` (string): Base direction of character (default: 'right').

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the generated sprite sheet.
- `metadata`: Object containing information about the generated sprite sheet, including:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per state.
  - `totalFrames`: Total number of frames in the sprite sheet.
  - `dimensions`: Object with width and height of the sprite sheet.
  - `frameData`: Object with information about each animation state, including row, frames, startFrame, and endFrame.

## Examples

1. Generate a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log(result.original);
console.log(result.spritesheet);
console.log(result.metadata);
```

2. Generate a sprite sheet with custom options:
```javascript
const options = {
  states: ['idle', 'jump', 'attack'],
  framesPerState: 8,
  style: 'cartoon',
  direction: 'left'
};
const result = await sprite.generateSprite("A cartoon cat", options);
console.log(result.metadata.frameData);
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for multiple animation states and follow a specific layout based on the provided options.
- The function generates a complete sprite sheet with multiple animation states, unlike the previous version which focused on walking animations.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- The spritesheet is returned as a base64-encoded data URL, making it easy to use directly in web applications or further processing.
- The metadata provided in the return value can be used to easily implement animations using the generated sprite sheet.
