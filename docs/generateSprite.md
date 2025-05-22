---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis.

## Usage
To use `generateSprite`, import it from the sprite module and call it with a description of the character you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.
  - `states` (array): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `style` (string): Style of the sprite (default: 'pixel-art').
  - `padding` (number): Padding between frames (default: 1).
  - `direction` (string): Direction the character should face (default: 'right').

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the generated sprite sheet.
- `metadata`: Object containing information about the generated sprite sheet, including:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per state.
  - `totalFrames`: Total number of frames in the sprite sheet.
  - `dimensions`: Object with width and height of the sprite sheet.
  - `frameData`: Object with information about each animation state's frames.

## Examples

1. Generate a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate a sprite sheet with custom options:
```javascript
const options = {
  states: ['idle', 'run', 'jump'],
  framesPerState: 8,
  style: 'vector',
  size: '2048x2048'
};
const result = await sprite.generateSprite("A cartoon cat", options);
console.log(result.metadata);
```

## Additional Functions

### fetchAvailableAnimationStates()

Fetches a list of available animation states that can be used in the `generateSprite` function.

```javascript
import { fetchAvailableAnimationStates } from './path/to/sprite/module';

const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### fetchAvailableSpriteStyles()

Fetches a list of available sprite styles that can be used in the `generateSprite` function.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

### generateEnvironmentSprites(description, options)

Generates a tileset of environment sprites based on the given description.

Parameters:
- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of distinct environment elements to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprites (default: 'pixel-art').
  - `padding` (number): Padding between elements (default: 1).
  - `theme` (string): Theme of the environment (default: 'fantasy').
  - `save` (boolean): Whether to save the generated image to disk.

Returns an object containing:
- `original`: URL of the original generated image.
- `tileset`: Base64-encoded image data URL of the generated tileset.
- `metadata`: Object containing information about the generated tileset.

Example:
```javascript
const options = {
  elements: 6,
  theme: 'sci-fi'
};
const result = await generateEnvironmentSprites("A futuristic space station", options);
console.log(result.metadata);
console.log(result.tileset);
```

### generateItemSprites(description, options)

Generates a collection of item sprites based on the given description.

Parameters:
- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of distinct items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprites (default: 'pixel-art').
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: 'equipment').
  - `background` (string): Background color (default: 'white').
  - `save` (boolean): Whether to save the generated image to disk.

Returns an object containing:
- `original`: URL of the original generated image.
- `itemSheet`: Base64-encoded image data URL of the generated item sheet.
- `metadata`: Object containing information about the generated item sheet.

Example:
```javascript
const options = {
  itemCount: 8,
  itemType: 'weapons',
  style: 'hand-drawn'
};
const result = await generateItemSprites("Medieval fantasy weapons", options);
console.log(result.metadata);
console.log(result.itemSheet);
```

## Notes or Considerations
- The functions use AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for various animation states and follow a specific layout based on the number of states and frames.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The functions may take some time to complete due to API calls and image processing.
- Consider using the `fetchAvailableAnimationStates()` and `fetchAvailableSpriteStyles()` functions to get up-to-date lists of supported options.
- The `generateEnvironmentSprites()` and `generateItemSprites()` functions provide additional capabilities for creating complete game asset sets.
