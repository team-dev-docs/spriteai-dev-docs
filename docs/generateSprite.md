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
  - `states` (array): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `style` (string): Style of the generated sprite (default: 'pixel-art').
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
  - `frameData`: Object containing information about each animation state's frames.

## Examples, yo

1. Generate a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate a sprite sheet with custom options:
```javascript
const result = await sprite.generateSprite("A cartoon cat", {
  states: ['idle', 'jump', 'attack'],
  framesPerState: 8,
  style: 'hand-drawn',
  direction: 'left'
});
console.log(result.metadata);
```

## Additional Functions, yo

### fetchAvailableAnimationStates, yo
Retrieves a list of available animation states.

```javascript
import { fetchAvailableAnimationStates } from './path/to/sprite/module';

const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### fetchAvailableSpriteStyles, yo
Retrieves a list of available sprite styles.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

### generateEnvironmentSprites, yo
Generates a tileset of environment sprites.

```javascript
import { generateEnvironmentSprites } from './path/to/sprite/module';

const result = await generateEnvironmentSprites("fantasy forest", {
  elements: 6,
  size: "2048x2048",
  style: "pixel-art",
  theme: "fantasy"
});
console.log(result.tileset);
console.log(result.metadata);
```

### generateItemSprites, yo
Generates a collection of item sprites.

```javascript
import { generateItemSprites } from './path/to/sprite/module';

const result = await generateItemSprites("magical potions", {
  itemCount: 8,
  size: "1024x1024",
  style: "hand-drawn",
  itemType: "consumable"
});
console.log(result.itemSheet);
console.log(result.metadata);
```

## Notes or Considerations, yo
- The function uses AI models (DALL-E 3 and GPT) to generate and analyse images, which may result in varying outputs for the same input.
- Generated sprites are optimised for walking animations and follow a specific layout (6 frames in a 2x3 grid by default).
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- New functions allow for greater customisation and flexibility in generating various types of game assets.
