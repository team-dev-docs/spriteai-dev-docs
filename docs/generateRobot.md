# generateRobot Documentation

## Brief Description
`generateRobot` provides functions to generate game character spritesheets and landscape backgrounds using AI-powered image generation and processing.

## Functions

### generateCharacterSpritesheet

Generates a character spritesheet with multiple animation states.

#### Usage
```javascript
import { generateCharacterSpritesheet } from './path/to/module';

const result = await generateCharacterSpritesheet("a medieval knight with armor", options);
```

#### Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to generate (default: ['idle', 'walk', 'run', 'attack'])
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

### generateLandscapeSprite

Generates a landscape or background sprite for games.

#### Usage
```javascript
import { generateLandscapeSprite } from './path/to/module';

const result = await generateLandscapeSprite("a lush forest with mountains", options);
```

#### Parameters
- `description` (string, required): A text description of the landscape to generate.
- `options` (object, optional):
  - `size` (string): Output image size (default: '1024x1024')
  - `style` (string): Art style (default: 'pixel-art')
  - `timeOfDay` (string): Time setting - day, night, sunset, dawn (default: 'day')
  - `weather` (string): Weather conditions - clear, rainy, foggy, snowy (default: 'clear')
  - `perspective` (string): Perspective style - side-scrolling, top-down, isometric (default: 'side-scrolling')
  - `save` (boolean): Whether to save the generated image to disk (default: false)
  - `removeBackground` (boolean): Whether to remove the background color
  - `backgroundColor` (string): The background color to remove (used with removeBackground)
  - `colorThreshold` (number): Threshold for background color removal

#### Return Value
Returns an object containing:
- `original`: Direct URL to the generated image from the AI service.
- `landscape`: Base64-encoded image data URL of the processed landscape.
- `metadata`: Object containing information about the landscape:
  - `description`: Original description text
  - `style`: Art style used
  - `timeOfDay`: Time of day setting
  - `weather`: Weather conditions
  - `perspective`: Perspective style
  - `dimensions`: Width and height of the image

## Examples

### Generate a Character Spritesheet
```javascript
const characterResult = await generateCharacterSpritesheet(
  "a space marine with futuristic armor", 
  {
    states: ['idle', 'walk', 'run', 'attack', 'jump'],
    framesPerState: 8,
    style: 'pixel-art',
    save: true
  }
);

console.log("Generated spritesheet with", characterResult.metadata.totalFrames, "frames");
```

### Generate a Landscape Sprite
```javascript
const landscapeResult = await generateLandscapeSprite(
  "a cyberpunk city skyline with neon signs", 
  {
    style: 'pixel-art',
    timeOfDay: 'night',
    weather: 'rainy',
    perspective: 'side-scrolling',
    save: true,
    removeBackground: true,
    backgroundColor: '#FFFFFF',
    colorThreshold: 0.1
  }
);

console.log("Generated landscape in", landscapeResult.metadata.style, "style");
```

## Notes and Considerations
- The functions use AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- When using `removeBackground`, be aware that the color detection has a threshold parameter that affects accuracy.
- When saving images, they are stored in an 'assets' directory with filenames based on the description.
- These functions may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and API keys set up for using the OpenAI image generation service.