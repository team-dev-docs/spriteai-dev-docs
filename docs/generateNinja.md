# generateNinja

## Brief Description
`generateNinja` is a function that generates ninja-themed sprites based on a given description using AI-powered image generation.

## Usage
To use `generateNinja`, import it from the sprite module and call it with a description of the ninja character you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateNinja(description, options);
```

## Parameters
- `description` (string, required): A text description of the ninja character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to generate. Default: `['idle', 'walk', 'run', 'attack']`.
  - `framesPerState` (number): Number of frames for each animation state. Default: `6`.
  - `size` (string): Size of the generated image. Default: `'1024x1024'`.
  - `style` (string): Art style for the sprite. Default: `'pixel-art'`.
  - `padding` (number): Padding between frames. Default: `1`.
  - `direction` (string): Direction the character faces. Default: `'right'`.
  - `save` (boolean): Whether to save the generated spritesheet to disk.

## Return Value
Returns an object containing:
- `original`: Direct URL to the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet.
- `metadata`: Object containing details about the spritesheet:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per animation state.
  - `totalFrames`: Total number of frames in the spritesheet.
  - `dimensions`: Object with width and height of the original image.
  - `frameData`: Object containing details about each animation state's frames.

## Examples

1. Generate a basic ninja spritesheet:
```javascript
const result = await sprite.generateNinja("A stealthy black ninja");
console.log(result.spritesheet); // Base64-encoded spritesheet
```

2. Generate a ninja with custom options:
```javascript
const options = {
  states: ['idle', 'run', 'attack'],
  framesPerState: 8,
  style: 'anime',
  save: true
};
const result = await sprite.generateNinja("A female ninja with red outfit", options);
console.log("Ninja spritesheet metadata:", result.metadata);
```

## Notes or Considerations
- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- Generated spritesheets are organized with each row representing a different animation state.
- When saving images, they are stored in the assets directory with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary API credentials and permissions to use the OpenAI image generation service.