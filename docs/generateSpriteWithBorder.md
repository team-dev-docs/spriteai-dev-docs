```markdown
---
slug: /generateSpriteWithBorder
sidebar_position: 2
---

# generateSpriteWithBorder Documentation

## Brief Description
`generateSpriteWithBorder` is a function that generates a character sprite sheet with a border, using AI-powered image generation and processing techniques.

## Usage
To use `generateSpriteWithBorder`, import it from the sprite module and call it with a description of the character you want to generate.

```javascript
import { generateSpriteWithBorder } from './path/to/sprite/module';

const result = await generateSpriteWithBorder(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array of strings): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style of the sprite (default: "pixel-art").
  - `padding` (number): Padding between sprites (default: 1).
  - `direction` (string): Base direction of the character (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.
  - `removeBackground` (boolean): Whether to remove the background color (default: false).
  - `backgroundColor` (string): Background color to remove (default: "#FFFFFF").
  - `colorThreshold` (number): Threshold for color removal (default: 0.1).

## Return Value
Returns an object containing:
- `original`: URL of the originally generated image.
- `spritesheet`: Base64-encoded image data URL of the processed sprite sheet.
- `metadata`: Object containing information about the generated sprite sheet, including:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per state.
  - `totalFrames`: Total number of frames in the sprite sheet.
  - `dimensions`: Object with width and height of the sprite sheet.
  - `frameData`: Object with detailed information about each animation state.

## Examples

1. Generate a basic sprite sheet with default options:
```javascript
const result = await generateSpriteWithBorder("A pixelated robot");
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate a sprite sheet with custom options:
```javascript
const result = await generateSpriteWithBorder("A cartoon cat", {
  states: ['idle', 'jump', 'fall'],
  framesPerState: 8,
  size: '2048x2048',
  style: 'cartoon',
  removeBackground: true,
  backgroundColor: '#00FF00',
  save: true
});
console.log(result.metadata);
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- The `removeBackground` option can be used to create sprites with transparent backgrounds.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies installed (OpenAI, axios, sharp, Jimp, fs, path).
```