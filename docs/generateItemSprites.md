# Generate Item Sprites Documentation

## Brief Description
The `generateItemSprites` module provides functions to generate game sprites for characters and landscapes using AI-powered image generation (DALL-E 3) and processing.

## Functions

### generateCharacterSpritesheet

Generates a character spritesheet with multiple animation states.

```javascript
import { generateCharacterSpritesheet } from './path/to/module';

const result = await generateCharacterSpritesheet(description, options);
```

#### Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to generate (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Frames per animation state (default: 6)
  - `size` (string): Output size (default: '1024x1024')
  - `style` (string): Art style (default: 'pixel-art')
  - `padding` (number): Padding between sprites (default: 1)
  - `direction` (string): Base direction of character (default: 'right')
  - `save` (boolean): Whether to save the generated image to disk

#### Return Value
Returns an object containing:
- `original`: Direct URL to the generated image from DALL-E.
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet.
- `metadata`: Object containing information about the spritesheet:
  - `states`: Array of animation states
  - `framesPerState`: Number of frames per state
  - `totalFrames`: Total number of frames
  - `dimensions`: Width and height of the spritesheet
  - `frameData`: Object mapping each state to its row, frame count, and frame range

#### Example
```javascript
const result = await generateCharacterSpritesheet("A medieval knight with armor", {
  states: ['idle', 'walk', 'attack', 'death'],
  framesPerState: 8,
  save: true
});
console.log(result.metadata);
```

### generateLandscapeSprite

Generates a landscape sprite for game backgrounds.

```javascript
import { generateLandscapeSprite } from './path/to/module';

const result = await generateLandscapeSprite(description, options);
```

#### Parameters
- `description` (string, required): A text description of the landscape to generate.
- `options` (object, optional):
  - `size` (string): Output size (default: '1024x1024')
  - `style` (string): Art style (default: 'pixel-art')
  - `timeOfDay` (string): Time of day setting (default: 'day', options: 'day', 'night', 'sunset', 'dawn')
  - `weather` (string): Weather conditions (default: 'clear', options: 'clear', 'rainy', 'foggy', 'snowy')
  - `perspective` (string): View perspective (default: 'side-scrolling', options: 'side-scrolling', 'top-down', 'isometric')
  - `save` (boolean): Whether to save the generated image to disk (default: false)
  - `removeBackground` (boolean): Whether to remove the background (optional)
  - `backgroundColor` (string): Target background color to remove (default: '#FFFFFF')
  - `colorThreshold` (number): Threshold for color removal (default: 0.1)

#### Return Value
Returns an object containing:
- `original`: Direct URL to the generated image from DALL-E.
- `landscape`: Base64-encoded image data URL of the processed landscape.
- `metadata`: Object containing information about the landscape:
  - `description`: Original description
  - `style`: Art style used
  - `timeOfDay`: Time of day setting
  - `weather`: Weather conditions
  - `perspective`: View perspective
  - `dimensions`: Width and height of the image

#### Example
```javascript
const result = await generateLandscapeSprite("A forest with a flowing river", {
  timeOfDay: 'sunset',
  weather: 'foggy',
  perspective: 'isometric',
  save: true,
  removeBackground: true
});
console.log(result.metadata);
```

## Notes and Considerations
- The functions use OpenAI's DALL-E 3 API to generate images, which requires proper API authentication.
- When saving images, they are stored in an 'assets' directory in the current working directory.
- Image generation may take some time due to API calls and processing.
- The removeBackgroundColor function is used internally to process images when the removeBackground option is enabled.
- The generated spritesheets are optimized for game development with consistent frame sizes and animation states.
- For character spritesheets, each row represents a different animation state, and each column represents a frame in that animation.
