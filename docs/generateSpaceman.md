# generateSpaceman Documentation

## Brief Description
`generateSpaceman` includes functions for generating game character spritesheets and landscape sprites using AI-powered image generation with DALL-E 3 and image processing capabilities.

## Character Spritesheet Generation

### Usage
To generate a character spritesheet based on a description:

```javascript
import { generateCharacterSpritesheet } from './path/to/sprite/module';

const result = await generateCharacterSpritesheet('a space astronaut warrior', options);
```

### Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to generate (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Number of frames per animation state (default: 6)
  - `size` (string): Output size of the image (default: '1024x1024')
  - `style` (string): Art style to generate (default: 'pixel-art')
  - `padding` (number): Padding between sprites (default: 1)
  - `direction` (string): Base direction of character (default: 'right')
  - `save` (boolean): Whether to save the spritesheet to disk

### Return Value
Returns an object containing:
- `original`: Direct URL to the generated image from DALL-E.
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet.
- `metadata`: Object containing information about the spritesheet:
  - `states`: Array of animation states
  - `framesPerState`: Number of frames per state
  - `totalFrames`: Total number of frames in the spritesheet
  - `dimensions`: Width and height of the spritesheet
  - `frameData`: Detailed information about each animation state's position in the spritesheet

## Landscape Sprite Generation

### Usage
To generate a landscape sprite based on a description:

```javascript
import { generateLandscapeSprite } from './path/to/sprite/module';

const result = await generateLandscapeSprite('a dystopian cityscape', options);
```

### Parameters
- `description` (string, required): A text description of the landscape to generate.
- `options` (object, optional):
  - `size` (string): Output size of the image (default: '1024x1024')
  - `style` (string): Art style to generate (default: 'pixel-art')
  - `timeOfDay` (string): Time setting - day, night, sunset, dawn (default: 'day')
  - `weather` (string): Weather conditions - clear, rainy, foggy, snowy (default: 'clear')
  - `perspective` (string): View perspective - side-scrolling, top-down, isometric (default: 'side-scrolling')
  - `save` (boolean): Whether to save the generated image (default: false)
  - `removeBackground` (boolean): Whether to remove the background color
  - `backgroundColor` (string): Background color to remove (default: '#FFFFFF')
  - `colorThreshold` (number): Threshold for background color detection (default: 0.1)

### Return Value
Returns an object containing:
- `original`: Direct URL to the generated image from DALL-E.
- `landscape`: Base64-encoded image data URL of the processed landscape sprite.
- `metadata`: Object containing information about the landscape:
  - `description`: Original description used
  - `style`: Art style used
  - `timeOfDay`: Time of day setting
  - `weather`: Weather conditions
  - `perspective`: View perspective
  - `dimensions`: Width and height of the image

## Examples

1. Generate a character spritesheet:
```javascript
const characterSprite = await generateCharacterSpritesheet('a ninja warrior with stealth abilities', {
  states: ['idle', 'walk', 'run', 'attack', 'stealth'],
  framesPerState: 8,
  save: true
});
console.log('Character sprite generated:', characterSprite.metadata);
```

2. Generate a landscape sprite:
```javascript
const landscapeSprite = await generateLandscapeSprite('an alien planet with floating islands', {
  timeOfDay: 'night',
  weather: 'foggy',
  perspective: 'side-scrolling',
  removeBackground: true,
  save: true
});
console.log('Landscape sprite generated:', landscapeSprite.metadata);
```

## Notes or Considerations
- The functions use OpenAI's DALL-E 3 API to generate images, so you'll need valid API credentials.
- Processing time varies based on the complexity of the description and chosen options.
- When saving images, they are stored in an 'assets' directory with filenames derived from the description.
- The spritesheet generation organizes animation frames in rows based on different states.
- Background removal functionality works best with clean, contrasting backgrounds.
- The quality and consistency of generated sprites depends on the clarity and specificity of your description.