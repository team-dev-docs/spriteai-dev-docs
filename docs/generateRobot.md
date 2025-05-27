# generateRobot Documentation

## Brief Description
`generateRobot` is a convenience function that generates a robot character spritesheet using AI-powered image generation and processing. It's part of a suite of functions designed to create game assets efficiently.

## Function

### generateRobot

Generates a robot character spritesheet with predefined animation states.

#### Usage
```javascript
import { generateRobot } from './path/to/module';

const result = await generateRobot(options);
```

#### Parameters
- `options` (object, optional):
  - `states` (array): Animation states to generate (default: ['idle', 'walk', 'run', 'attack', 'power-up'])
  - `framesPerState` (number): Number of frames per animation state (default: 6)
  - `size` (string): Output image size (default: '1024x1024')
  - `style` (string): Art style (default: 'pixel-art')
  - `padding` (number): Padding between sprites (default: 1)
  - `direction` (string): Base direction of character (default: 'right')
  - `save` (boolean): Whether to save the generated image to disk

#### Return Value
Returns an object containing:
- `original`: Direct URL to the generated image from the AI service.
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet.
- `metadata`: Object containing information about the spritesheet structure:
  - `states`: Array of animation states
  - `framesPerState`: Number of frames per state
  - `totalFrames`: Total number of frames in the spritesheet
  - `dimensions`: Width and height of the spritesheet
  - `frameData`: Object mapping each state to its position data

## Example

### Generate a Robot Character Spritesheet
```javascript
const robotResult = await generateRobot({
  states: ['idle', 'walk', 'run', 'attack', 'power-up', 'shutdown'],
  framesPerState: 8,
  style: 'pixel-art',
  save: true
});

console.log("Generated robot spritesheet with", robotResult.metadata.totalFrames, "frames");
```

## Notes and Considerations
- This function uses the `generateCharacterSpritesheet` function internally with predefined options suitable for a robot character.
- The default description used is "robot character with mechanical limbs and glowing eyes".
- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- When saving images, they are stored in an 'assets' directory with filenames based on the description.
- This function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and API keys set up for using the OpenAI image generation service.

## Related Functions
- `generateCharacterSpritesheet`: For generating custom character spritesheets
- `generateNinja`: For generating ninja character spritesheets
- `generateSpaceman`: For generating astronaut character spritesheets

For more detailed information on the underlying `generateCharacterSpritesheet` function and its options, please refer to the main documentation.
