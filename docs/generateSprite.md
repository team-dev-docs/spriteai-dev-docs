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
  - `states` (array): Animation states to include (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `style` (string): Style of the sprite (default: 'pixel-art').
  - `padding` (number): Padding between frames (default: 1).
  - `direction` (string): Direction the character should face (default: 'right').

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the generated sprite sheet.
- `metadata`: Object containing information about the sprite sheet, including:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per state.
  - `totalFrames`: Total number of frames in the sprite sheet.
  - `dimensions`: Object with width and height of the sprite sheet.
  - `frameData`: Object with information about each animation state's position in the sprite sheet.

## Examples

1. Generate a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate a sprite sheet with custom options:
```javascript
const result = await sprite.generateSprite("A cartoon cat", {
  states: ['idle', 'walk', 'jump'],
  framesPerState: 8,
  style: 'vector',
  direction: 'left'
});
console.log(result.metadata);
```

## Additional Functions

### fetchAvailableAnimationStates
Retrieves a list of available animation states.

```javascript
const states = await sprite.fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### fetchAvailableSpriteStyles
Retrieves a list of available sprite styles.

```javascript
const styles = await sprite.fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

### generateEnvironmentSprites
Generates a tileset of environment sprites.

```javascript
const result = await sprite.generateEnvironmentSprites("Forest", {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy'
});
console.log(result.tileset);
console.log(result.metadata);
```

### generateItemSprites
Generates a collection of item sprites.

```javascript
const result = await sprite.generateItemSprites("Magical artifacts", {
  itemCount: 8,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment'
});
console.log(result.itemSheet);
console.log(result.metadata);
```

## Notes or Considerations
- The function uses AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for the specified animation states and follow the layout defined by the `framesPerState` option.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- The new convenience functions allow for more specific generation of character types, environments, and items, providing greater flexibility in sprite creation.
