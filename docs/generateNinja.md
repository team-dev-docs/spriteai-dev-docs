# generateNinja Documentation

## Brief Description
The `generateNinja` module provides functions for generating game assets using AI image generation. It offers several functions for creating character spritesheets, landscape sprites, and specific character types.

## Functions

### generateCharacterSpritesheet

#### Description
Generates a character spritesheet with multiple animation states using AI-powered image generation.

#### Syntax
```javascript
generateCharacterSpritesheet(description, options)
```

#### Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to generate. Default: `['idle', 'walk', 'run', 'attack']`
  - `framesPerState` (number): Number of frames per animation state. Default: `6`
  - `size` (string): Output size in format "widthxheight". Default: `'1024x1024'`
  - `style` (string): Art style for the sprite. Default: `'pixel-art'`
  - `padding` (number): Padding between sprites. Default: `1`
  - `direction` (string): Base direction of character. Default: `'right'`
  - `save` (boolean): Whether to save the generated spritesheet to disk.

#### Return Value
Returns an object containing:
- `original`: Direct URL to the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet.
- `metadata`: Object containing information about the spritesheet including:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per state.
  - `totalFrames`: Total number of frames in the spritesheet.
  - `dimensions`: Width and height of the spritesheet.
  - `frameData`: Object mapping each state to its row index and frame information.

#### Example
```javascript
import { generateCharacterSpritesheet } from './generateNinja';

const result = await generateCharacterSpritesheet("ninja warrior with katana", {
  states: ['idle', 'walk', 'attack', 'die'],
  framesPerState: 8,
  style: 'pixel-art',
  save: true
});

console.log(result.metadata);
// Use the spritesheet in your game
const spriteImage = result.spritesheet;
```

### generateLandscapeSprite

#### Description
Generates a landscape or background sprite for game environments using AI-powered image generation.

#### Syntax
```javascript
generateLandscapeSprite(description, options)
```

#### Parameters
- `description` (string, required): A text description of the landscape to generate.
- `options` (object, optional):
  - `size` (string): Output size in format "widthxheight". Default: `'1024x1024'`
  - `style` (string): Art style for the landscape. Default: `'pixel-art'`
  - `timeOfDay` (string): Time of day setting. Default: `'day'`. Options: `'day'`, `'night'`, `'sunset'`, `'dawn'`
  - `weather` (string): Weather conditions. Default: `'clear'`. Options: `'clear'`, `'rainy'`, `'foggy'`, `'snowy'`
  - `perspective` (string): Visual perspective. Default: `'side-scrolling'`. Options: `'side-scrolling'`, `'top-down'`, `'isometric'`
  - `save` (boolean): Whether to save the generated image to disk. Default: `false`
  - `removeBackground` (boolean): Whether to remove the background color. Default: `false`
  - `backgroundColor` (string): Background color to remove (CSS color). Only used if `removeBackground` is `true`.
  - `colorThreshold` (number): Threshold for color removal. Default: `0.1`. Only used if `removeBackground` is `true`.

#### Return Value
Returns an object containing:
- `original`: Direct URL to the original generated image.
- `landscape`: Base64-encoded image data URL of the processed landscape sprite.
- `metadata`: Object containing information about the landscape including:
  - `description`: Original description provided.
  - `style`: Art style used.
  - `timeOfDay`: Time of day setting.
  - `weather`: Weather conditions used.
  - `perspective`: Perspective used.
  - `dimensions`: Width and height of the generated image.

#### Example
```javascript
import { generateLandscapeSprite } from './generateNinja';

const result = await generateLandscapeSprite("japanese cherry blossom garden", {
  style: 'pixel-art',
  timeOfDay: 'sunset',
  weather: 'clear',
  perspective: 'side-scrolling',
  save: true,
  removeBackground: true,
  backgroundColor: '#FFFFFF'
});

console.log(result.metadata);
// Use the landscape in your game
const landscapeImage = result.landscape;
```

### generateNinja

#### Description
Generates a ninja character spritesheet using predefined options.

#### Syntax
```javascript
generateNinja(options)
```

#### Parameters
- `options` (object, optional):
  - `states` (array): Animation states to generate. Default: `['idle', 'walk', 'run', 'attack', 'sneak']`
  - `style` (string): Art style for the sprite. Default: `'pixel-art'`
  - `framesPerState` (number): Number of frames per animation state. Default: `6`

#### Return Value
Returns the same object structure as `generateCharacterSpritesheet`.

#### Example
```javascript
import { generateNinja } from './generateNinja';

const result = await generateNinja({
  framesPerState: 8,
  save: true
});

console.log(result.metadata);
// Use the ninja spritesheet in your game
const ninjaSprite = result.spritesheet;
```

### generateSpaceman

#### Description
Generates a spaceman character spritesheet using predefined options.

#### Syntax
```javascript
generateSpaceman(options)
```

#### Parameters
- `options` (object, optional):
  - `states` (array): Animation states to generate. Default: `['idle', 'walk', 'run', 'float']`
  - `style` (string): Art style for the sprite. Default: `'pixel-art'`
  - `framesPerState` (number): Number of frames per animation state. Default: `6`

#### Return Value
Returns the same object structure as `generateCharacterSpritesheet`.

#### Example
```javascript
import { generateSpaceman } from './generateNinja';

const result = await generateSpaceman({
  framesPerState: 8,
  save: true
});

console.log(result.metadata);
// Use the spaceman spritesheet in your game
const spacemanSprite = result.spritesheet;
```

### generateRobot

#### Description
Generates a robot character spritesheet using predefined options.

#### Syntax
```javascript
generateRobot(options)
```

#### Parameters
- `options` (object, optional):
  - `states` (array): Animation states to generate. Default: `['idle', 'walk', 'run', 'attack', 'power-up']`
  - `style` (string): Art style for the sprite. Default: `'pixel-art'`
  - `framesPerState` (number): Number of frames per animation state. Default: `6`

#### Return Value
Returns the same object structure as `generateCharacterSpritesheet`.

#### Example
```javascript
import { generateRobot } from './generateNinja';

const result = await generateRobot({
  framesPerState: 8,
  save: true
});

console.log(result.metadata);
// Use the robot spritesheet in your game
const robotSprite = result.spritesheet;
```

## Notes and Considerations
- These functions use OpenAI's DALL-E 3 model for image generation, which may result in varying outputs for the same input.
- When saving images, they are stored in an `assets` directory in your current working directory.
- Image generation and processing may take some time due to API calls and image processing operations.
- Ensure you have the necessary OpenAI API keys and permissions set up.
- For removing backgrounds, the function uses color tolerance to determine which pixels to make transparent.
- The new character-specific functions (`generateNinja`, `generateSpaceman`, `generateRobot`) provide convenient shortcuts for generating common character types with predefined options.
