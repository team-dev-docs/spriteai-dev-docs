---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis. It now includes an additional function `generateSpriteWithBorder` for creating sprites with customizable borders.

## Usage
To use `generateSprite` or `generateSpriteWithBorder`, import them from the sprite module and call them with a description of the character you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
const resultWithBorder = await sprite.generateSpriteWithBorder(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Frames per animation state (default: 6).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style of the sprite (default: "pixel-art").
  - `padding` (number): Padding between sprites (default: 1).
  - `direction` (string): Base direction of character (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the generated sprite sheet.
- `metadata`: Object containing information about the generated sprite sheet, including states, frames per state, total frames, dimensions, and frame data.

## Examples

1. Generate a basic sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate a sprite sheet with custom options:
```javascript
const options = {
  states: ['idle', 'jump', 'attack'],
  framesPerState: 8,
  size: '2048x2048',
  style: 'cartoon',
  direction: 'left',
  save: true
};
const result = await sprite.generateSprite("A cartoon cat", options);
console.log(result.metadata);
```

3. Generate a sprite sheet with a border:
```javascript
const options = {
  padding: 2,
  backgroundColor: '#FFFFFF',
  colorThreshold: 0.1
};
const resultWithBorder = await sprite.generateSpriteWithBorder("A medieval knight", options);
console.log(resultWithBorder.metadata);
```

## Notes and Considerations
- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for the specified animation states and follow a layout based on the number of states and frames per state.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The `generateSpriteWithBorder` function allows for customization of the sprite's background and border.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies installed, including OpenAI, axios, sharp, and Jimp.
