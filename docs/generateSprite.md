# generateCharacterSpritesheet

## Brief Description
The `generateCharacterSpritesheet` function creates a character spritesheet using AI-powered image generation. It produces a single image containing multiple animation frames for different character states.

## Usage
To use `generateCharacterSpritesheet`, import it from the spriteAI module and call it with a description of the character you want to generate.

```javascript
import { generateCharacterSpritesheet } from './path/to/spriteAI';

const result = await generateCharacterSpritesheet(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array of strings): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames for each animation state (default: 6).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the generated sprite (default: "pixel-art").
  - `padding` (number): Padding between frames (default: 1).
  - `direction` (string): Direction the character faces (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet.
- `metadata`: Object containing information about the generated spritesheet, including:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per animation state.
  - `totalFrames`: Total number of frames in the spritesheet.
  - `dimensions`: Width and height of the spritesheet.
  - `frameData`: Object with details about each animation state's position in the spritesheet.

## Examples

1. Generate a basic character spritesheet:
```javascript
const result = await generateCharacterSpritesheet("A pixelated robot");
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate a spritesheet with custom options:
```javascript
const options = {
  states: ['idle', 'walk', 'jump'],
  framesPerState: 8,
  size: '2048x2048',
  style: 'cartoon',
  direction: 'left',
  save: true
};
const result = await generateCharacterSpritesheet("A cartoon cat", options);
console.log(result.metadata.frameData);
```

## Notes and Considerations
- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated spritesheets are optimized for the specified animation states and follow a grid layout.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies (OpenAI, axios, sharp, Jimp) installed and properly configured.

## Available Animation States
To fetch the list of available animation states, you can use the `fetchAvailableAnimationStates` function:

```javascript
import { fetchAvailableAnimationStates } from './path/to/spriteAI';

const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

This function returns an array of strings representing the available animation states that can be used when generating character spritesheets.