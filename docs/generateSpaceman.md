# generateSpaceman

## Brief Description
`generateSpaceman` is a function that generates a character sprite sheet for a spaceman or astronaut character with various animation states, using AI-powered image generation.

## Usage
To use `generateSpaceman`, import it from the sprite module and call it with optional customization parameters.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSpaceman(options);
```

## Parameters
- `options` (object, optional):
  - `states` (array of strings): Animation states to include in the sprite sheet. Default: `['idle', 'walk', 'run', 'attack']`.
  - `framesPerState` (number): Number of frames for each animation state. Default: `6`.
  - `size` (string): Size of the output image in format 'widthxheight'. Default: `'1024x1024'`.
  - `style` (string): Art style for the character. Default: `'pixel-art'`.
  - `padding` (number): Padding between frames. Default: `1`.
  - `direction` (string): Direction the character faces. Default: `'right'`.
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `original`: Direct URL to the originally generated image.
- `spritesheet`: Base64-encoded image data URL of the processed sprite sheet.
- `metadata`: An object containing information about the sprite sheet:
  - `states`: Array of animation state names.
  - `framesPerState`: Number of frames per animation state.
  - `totalFrames`: Total number of frames in the sprite sheet.
  - `dimensions`: Width and height of the sprite sheet.
  - `frameData`: Object with information about each animation state's position in the sprite sheet.

## Examples

1. Generate a default spaceman sprite sheet:
```javascript
const result = await sprite.generateSpaceman();
console.log(result.spritesheet); // Base64-encoded image data URL
```

2. Generate a custom spaceman sprite sheet:
```javascript
const result = await sprite.generateSpaceman({
  states: ['idle', 'walk', 'jump', 'die'],
  framesPerState: 8,
  style: '3d',
  save: true
});
console.log(result.metadata.frameData); // Access frame data for animations
```

## Notes or Considerations
- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs.
- Generated sprite sheets are organized with each row representing a different animation state.
- When saving images, they are stored in the assets directory with a filename based on the description.
- Available animation states can be retrieved using the `fetchAvailableAnimationStates()` function.
- Available sprite styles can be retrieved using the `fetchAvailableSpriteStyles()` function.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary API credentials and permissions to use the OpenAI image generation service.