# generateSpaceman Documentation

## Brief Description
`generateSpaceman` is a convenience function for generating a spaceman character spritesheet using AI-powered image generation with DALL-E 3 and image processing capabilities.

## Usage
To generate a spaceman character spritesheet:

```javascript
import { generateSpaceman } from './path/to/sprite/module';

const result = await generateSpaceman(options);
```

## Parameters
- `options` (object, optional):
  - `states` (array): Animation states to generate (default: ['idle', 'walk', 'run', 'float'])
  - `framesPerState` (number): Number of frames per animation state (default: 6)
  - `size` (string): Output size of the image (default: '1024x1024')
  - `style` (string): Art style to generate (default: 'pixel-art')
  - `padding` (number): Padding between sprites (default: 1)
  - `direction` (string): Base direction of character (default: 'right')
  - `save` (boolean): Whether to save the spritesheet to disk

## Return Value
Returns an object containing:
- `original`: Direct URL to the generated image from DALL-E.
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet.
- `metadata`: Object containing information about the spritesheet:
  - `states`: Array of animation states
  - `framesPerState`: Number of frames per state
  - `totalFrames`: Total number of frames in the spritesheet
  - `dimensions`: Width and height of the spritesheet
  - `frameData`: Detailed information about each animation state's position in the spritesheet

## Example

```javascript
const spaceman = await generateSpaceman({
  states: ['idle', 'walk', 'run', 'float', 'attack'],
  framesPerState: 8,
  save: true
});
console.log('Spaceman sprite generated:', spaceman.metadata);
```

## Notes or Considerations
- This function is a specialized version of `generateCharacterSpritesheet` specifically for creating spaceman characters.
- The default description used is 'astronaut character with space suit and helmet'.
- The function uses OpenAI's DALL-E 3 API to generate images, so you'll need valid API credentials.
- Processing time varies based on the complexity of the options chosen.
- When saving images, they are stored in an 'assets' directory with filenames derived from the description.
- The spritesheet generation organizes animation frames in rows based on different states.
- The quality and consistency of generated sprites depends on the clarity and specificity of the default description and any additional options provided.

## Related Functions
- `generateCharacterSpritesheet`: For generating custom character spritesheets
- `generateNinja`: For generating ninja character spritesheets
- `generateRobot`: For generating robot character spritesheets

For more detailed information on the underlying sprite generation process, please refer to the `generateCharacterSpritesheet` documentation.
