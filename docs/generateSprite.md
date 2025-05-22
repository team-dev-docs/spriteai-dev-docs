---
slug: /
sidebar_position: 1
---

# generateCharacterSpritesheet Documentation

## Brief Description
`generateCharacterSpritesheet` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis. It creates character sprites with multiple animation states.

## Usage
To use `generateCharacterSpritesheet`, import it from the sprite module and call it with a description of the character you want to generate.

```javascript
import { generateCharacterSpritesheet } from './path/to/sprite/module';

const result = await generateCharacterSpritesheet(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array of strings): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprite (default: "pixel-art").
  - `padding` (number): Padding between sprite frames (default: 1).
  - `direction` (string): Direction the character faces (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed sprite sheet.
- `metadata`: Object containing information about the sprite sheet, including:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per state.
  - `totalFrames`: Total number of frames in the sprite sheet.
  - `dimensions`: Object with width and height of the sprite sheet.
  - `frameData`: Object with details about each animation state's frames.

## Examples

1. Generate a character sprite sheet with default options:
```javascript
const result = await generateCharacterSpritesheet("A pixelated robot");
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate a character sprite sheet with custom options:
```javascript
const options = {
  states: ['idle', 'walk', 'jump'],
  framesPerState: 8,
  size: '2048x2048',
  style: 'vector',
  direction: 'left',
  save: true
};
const result = await generateCharacterSpritesheet("A cartoon cat", options);
console.log(result.metadata);
```

## Additional Functions

### fetchAvailableAnimationStates
Retrieves a list of available animation states.

```javascript
import { fetchAvailableAnimationStates } from './path/to/sprite/module';

const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### fetchAvailableSpriteStyles
Retrieves a list of available sprite styles.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

### generateEnvironmentSprites
Generates a set of environment sprites based on a description.

```javascript
import { generateEnvironmentSprites } from './path/to/sprite/module';

const result = await generateEnvironmentSprites("Forest landscape", {
  elements: 6,
  size: '2048x2048',
  style: 'pixel-art',
  theme: 'fantasy',
  save: true
});
console.log(result.metadata);
console.log(result.tileset);
```

### generateItemSprites
Generates a set of item sprites based on a description.

```javascript
import { generateItemSprites } from './path/to/sprite/module';

const result = await generateItemSprites("Medieval weapons", {
  itemCount: 8,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment',
  background: 'transparent',
  save: true
});
console.log(result.metadata);
console.log(result.itemSheet);
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for multiple animation states and follow a specific layout based on the number of states and frames.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Consider using the `fetchAvailableAnimationStates` and `fetchAvailableSpriteStyles` functions to get up-to-date information on available options.
- The `generateEnvironmentSprites` and `generateItemSprites` functions provide additional capabilities for creating complete game asset sets.
