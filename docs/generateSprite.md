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
  - `states` (array of strings): Animation states to generate (e.g., ['idle', 'walk', 'run']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `style` (string): Art style for the sprite (e.g., 'pixel-art').
  - `padding` (number): Padding between frames (default: 1).
  - `direction` (string): Direction the character should face (default: 'right').

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the generated sprite sheet.
- `metadata`: Object containing information about the generated sprite sheet:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per state.
  - `totalFrames`: Total number of frames in the sprite sheet.
  - `dimensions`: Object with width and height of the sprite sheet.
  - `frameData`: Object with information about each animation state.

## Examples

1. Generate a single sprite sheet:
```javascript
import { generateCharacterSpritesheet } from './index.js';

const description = 'A pixelated robot';
const options = {
  states: ['idle', 'walk', 'run'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art',
  save: true
};

const result = await generateCharacterSpritesheet(description, options);
console.log(result.spritesheet);
console.log(result.metadata);
```

2. Generate environment sprites:
```javascript
import { generateEnvironmentSprites } from './index.js';

const description = 'forest';
const options = {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy',
  save: true
};

const result = await generateEnvironmentSprites(description, options);
console.log(result.tileset);
console.log(result.metadata);
```

3. Generate item sprites:
```javascript
import { generateItemSprites } from './index.js';

const description = 'medieval weapons';
const options = {
  itemCount: 8,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment',
  save: true
};

const result = await generateItemSprites(description, options);
console.log(result.itemSheet);
console.log(result.metadata);
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for various animation states and follow a specific layout based on the number of states and frames.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Available animation states can be fetched using the `fetchAvailableAnimationStates()` function.
- Available sprite styles can be fetched using the `fetchAvailableSpriteStyles()` function.
- The `removeBackgroundColor` function can be used to remove specific background colors from generated images if needed.
