```markdown
---
slug: /generate-sprite-with-border
sidebar_position: 2
---

# generateSpriteWithBorder Documentation

## Brief Description
`generateSpriteWithBorder` is a function that generates a sprite sheet image with a border based on a given description, using AI-powered image generation and analysis.

## Usage
To use `generateSpriteWithBorder`, import it from the sprite module and call it with a description of the character you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSpriteWithBorder(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style of the sprite (default: "pixel-art").
  - `states` (array): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `padding` (number): Padding between sprites (default: 1).
  - `direction` (string): Base direction of the character (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.
  - `removeBackground` (boolean): Whether to remove the background of the generated image.
  - `backgroundColor` (string): Background color to remove (default: "#FFFFFF").
  - `colorThreshold` (number): Threshold for background color removal (default: 0.1).

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed sprite sheet.
- `metadata`: Object containing information about the generated sprite sheet, including:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per state.
  - `totalFrames`: Total number of frames in the sprite sheet.
  - `dimensions`: Object with width and height of the sprite sheet.
  - `frameData`: Object with information about each animation state's position in the sprite sheet.

## Examples

1. Generate a sprite sheet with default options:
```javascript
const result = await sprite.generateSpriteWithBorder("A pixelated robot");
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate a sprite sheet with custom options:
```javascript
const options = {
  size: "2048x2048",
  style: "cartoon",
  states: ['idle', 'jump', 'crouch'],
  framesPerState: 8,
  removeBackground: true,
  save: true
};
const result = await sprite.generateSpriteWithBorder("A cartoon cat", options);
console.log(result.metadata);
```

## Notes and Considerations
- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- The `removeBackground` option can be useful for creating sprites with transparent backgrounds.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies installed, including OpenAI, axios, sharp, and Jimp.
```