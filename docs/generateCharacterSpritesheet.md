# generateCharacterSpritesheet

## Brief Description
`generateCharacterSpritesheet` is a function that generates a complete character spritesheet with multiple animation states using AI-powered image generation. It's designed to create pixel art character animations suitable for game development.

## Usage
To use `generateCharacterSpritesheet`, import it from the sprite module and call it with a description of the character you want to generate and any additional options.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateCharacterSpritesheet(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array of strings): Animation states to generate (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Number of frames per animation state (default: 6)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style for the spritesheet (default: 'pixel-art')
  - `padding` (number): Padding between sprites (default: 1)
  - `direction` (string): Base direction of the character (default: 'right')
  - `save` (boolean): Whether to save the generated image to disk

## Return Value
Returns an object containing:
- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet
- `metadata`: Object containing information about the spritesheet, including:
  - `states`: Array of animation state names
  - `framesPerState`: Number of frames per state
  - `totalFrames`: Total number of frames in the spritesheet
  - `dimensions`: Object with width and height of the spritesheet
  - `frameData`: Object with details for each animation state (row, frames, startFrame, endFrame)

## Examples

1. Generate a basic character spritesheet:
```javascript
const result = await sprite.generateCharacterSpritesheet("A pixelated warrior");
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate a spritesheet with custom options:
```javascript
const options = {
  states: ['idle', 'walk', 'attack', 'die'],
  framesPerState: 8,
  size: "2048x2048",
  style: 'pixel-art',
  direction: 'left',
  save: true
};
const result = await sprite.generateCharacterSpritesheet("A cartoon wizard", options);
console.log(result.metadata.frameData);
```

## Notes or Considerations
- The function uses DALL-E 3 for image generation, which may result in varying outputs for the same input.
- Generated spritesheets are optimized for game development, with each row representing a different animation state.
- The function converts the initial AI-generated image into a properly formatted spritesheet with padding between frames.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies (OpenAI, axios, sharp) installed and properly configured in your project.