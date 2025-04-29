---
slug: /
sidebar_position: 1
---

# generateSprite Documentation, yo

## Brief Description, yo

`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis.

## Usage, yo

To use `generateSprite`, import it from the sprite module and call it with a description of the character you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters, yo

- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.
  - `states` (array): Animation states to include (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `style` (string): Art style for the sprite (default: 'pixel-art').
  - `padding` (number): Padding between frames (default: 1).
  - `direction` (string): Direction the character should face (default: 'right').

## Return Value, yo

Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the generated sprite sheet.
- `metadata`: Object containing information about the generated sprite sheet, including:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per state.
  - `totalFrames`: Total number of frames in the sprite sheet.
  - `dimensions`: Object with width and height of the sprite sheet.
  - `frameData`: Object with information about each animation state's position in the sprite sheet.

## Examples, yo

1. Generate a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log(result.spritesheet);
console.log(result.metadata);
```

2. Generate a sprite sheet with custom options:
```javascript
const result = await sprite.generateSprite("A cartoon cat", {
  states: ['idle', 'walk', 'jump'],
  framesPerState: 8,
  style: 'hand-drawn'
});
console.log(result.metadata.frameData);
```

## Additional Functions, yo

### fetchAvailableAnimationStates, yo

This function returns an array of available animation states.

```javascript
import { fetchAvailableAnimationStates } from './path/to/sprite/module';

const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### fetchAvailableSpriteStyles, yo

This function returns an array of available sprite styles.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

### generateEnvironmentSprites, yo

This function generates environment sprites based on a given description.

```javascript
import { generateEnvironmentSprites } from './path/to/sprite/module';

const result = await generateEnvironmentSprites("Forest elements", {
  elements: 6,
  size: "1024x1024",
  style: "pixel-art",
  theme: "fantasy"
});
console.log(result.tileset);
console.log(result.metadata);
```

### generateItemSprites, yo

This function generates item sprites based on a given description.

```javascript
import { generateItemSprites } from './path/to/sprite/module';

const result = await generateItemSprites("Medieval weapons", {
  itemCount: 8,
  size: "1024x1024",
  style: "pixel-art",
  itemType: "equipment"
});
console.log(result.itemSheet);
console.log(result.metadata);
```

## Notes or Considerations, yo

- The function uses AI models (DALL-E 3 and GPT) to generate and analyse images, which may result in varying outputs for the same input.
- Generated sprites are optimised for walking animations and follow a specific layout (6 frames in a 2x3 grid by default).
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- The new functions provide additional flexibility for generating different types of game assets and retrieving available options.
