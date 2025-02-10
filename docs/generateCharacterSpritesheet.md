# generateCharacterSpritesheet Documentation

## Brief Description
`generateCharacterSpritesheet` is a function that creates a character spritesheet with multiple animation states using AI-powered image generation. It's designed to produce pixel art style spritesheets suitable for game development.

## Usage
To use `generateCharacterSpritesheet`, import it from the sprite module and call it with a description of the character you want to generate and optional configuration parameters.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateCharacterSpritesheet(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array of strings): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style of the spritesheet (default: 'pixel-art').
  - `padding` (number): Padding between sprites (default: 1).
  - `direction` (string): Base direction of the character (default: 'right').
  - `save` (boolean): Whether to save the generated spritesheet to disk.

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet.
- `metadata`: Object containing information about the spritesheet, including:
  - `states`: Array of animation state names.
  - `framesPerState`: Number of frames per animation state.
  - `totalFrames`: Total number of frames in the spritesheet.
  - `dimensions`: Width and height of the spritesheet.
  - `frameData`: Object with details about each animation state's position in the spritesheet.

## Examples

1. Generate a basic character spritesheet:
```javascript
const result = await sprite.generateCharacterSpritesheet("A pixelated robot warrior");
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate a spritesheet with custom options:
```javascript
const options = {
  states: ['idle', 'walk', 'jump', 'attack', 'death'],
  framesPerState: 8,
  size: "2048x2048",
  style: 'pixel-art',
  direction: 'left',
  save: true
};
const result = await sprite.generateCharacterSpritesheet("A cartoon ninja cat", options);
console.log(result.metadata.frameData);
```

## Notes and Considerations
- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated spritesheets are optimized for pixel art style and game development use.
- The function processes the AI-generated image to create a properly formatted spritesheet with consistent frame sizes and padding.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and API access to use the OpenAI image generation service.
- The spritesheet layout is organized with each row representing a different animation state, making it easy to use in game engines.