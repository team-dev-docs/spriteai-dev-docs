# generateRobot

## Brief Description
`generateRobot` is a function that creates a robot character with various animation states using AI-powered image generation.

## Usage
To use `generateRobot`, import it from the sprite module and call it with a description of the robot you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateCharacterSpritesheet(robotDescription, options);
```

## Parameters
- `description` (string, required): A text description of the robot character to generate.
- `options` (object, optional):
  - `states` (array of strings): Animation states to include in the spritesheet. Default: ['idle', 'walk', 'run', 'attack']
  - `framesPerState` (number): Number of frames for each animation state. Default: 6
  - `size` (string): Image size in format 'widthxheight'. Default: '1024x1024'
  - `style` (string): Art style for the generated robot. Default: 'pixel-art'
  - `padding` (number): Padding between frames in the spritesheet. Default: 1
  - `direction` (string): Direction the character should face. Default: 'right'
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `original`: Direct URL to the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet.
- `metadata`: Object containing:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per animation state.
  - `totalFrames`: Total number of frames in the spritesheet.
  - `dimensions`: Object with width and height of the image.
  - `frameData`: Object with detailed information about each animation state's position in the spritesheet.

## Examples

1. Generate a basic robot character:
```javascript
const result = await sprite.generateCharacterSpritesheet("A futuristic battle robot with glowing eyes");
console.log(result.spritesheet); // Base64-encoded spritesheet image
```

2. Generate a robot character with custom options:
```javascript
const result = await sprite.generateCharacterSpritesheet(
  "A steampunk mechanical robot with gears and pistons", 
  { 
    states: ['idle', 'walk', 'attack', 'die'],
    framesPerState: 8,
    style: 'pixel-art',
    save: true 
  }
);
console.log("Robot spritesheet metadata:", result.metadata);
```

3. Check available animation states:
```javascript
const states = await sprite.fetchAvailableAnimationStates();
// Returns: ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

4. Check available sprite styles:
```javascript
const styles = await sprite.fetchAvailableSpriteStyles();
// Returns: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Notes or Considerations
- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- Generated spritesheets are organized with each row representing a different animation state.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary API credentials and permissions to use the OpenAI image generation service.
- Use the `fetchAvailableAnimationStates` and `fetchAvailableSpriteStyles` helper functions to see supported options.