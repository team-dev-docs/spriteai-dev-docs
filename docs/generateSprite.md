---
slug: /
sidebar_position: 1
---
# generateCharacterSpritesheet Documentation

## Brief Description
`generateCharacterSpritesheet` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis.

## Usage
To use `generateCharacterSpritesheet`, import it from the sprite module and call it with a description of the character you want to generate.

```javascript
import { generateCharacterSpritesheet } from './index.js';

const result = await generateCharacterSpritesheet(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style of the sprite (default: "pixel-art").
  - `padding` (number): Padding between frames (default: 1).
  - `direction` (string): Direction the character faces (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the generated sprite sheet.
- `metadata`: Object containing information about the generated sprite sheet:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per state.
  - `totalFrames`: Total number of frames in the sprite sheet.
  - `dimensions`: Object with width and height of the sprite sheet.
  - `frameData`: Object containing information about each animation state's frames.

## Examples

1. Generate a single sprite sheet:
```javascript
const description = 'a cute dragon';
const options = {
  states: ['idle', 'walk', 'run'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art',
  padding: 2,
  direction: 'left',
  save: true
};

generateCharacterSpritesheet(description, options)
  .then(result => {
    console.log('Spritesheet generated:', result.spritesheet);
    console.log('Metadata:', result.metadata);
  })
  .catch(error => {
    console.error('Error generating spritesheet:', error);
  });
```

## Additional Functions

### fetchAvailableAnimationStates
Retrieves a list of available animation states.

```javascript
import { fetchAvailableAnimationStates } from './index.js';

const states = await fetchAvailableAnimationStates();
console.log('Available animation states:', states);
```

### fetchAvailableSpriteStyles
Retrieves a list of available sprite styles.

```javascript
import { fetchAvailableSpriteStyles } from './index.js';

const styles = await fetchAvailableSpriteStyles();
console.log('Available sprite styles:', styles);
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for multiple animation states and follow a layout based on the specified options.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- The spritesheet generation supports various animation states, frame counts, and art styles, making it versatile for different game development needs.
