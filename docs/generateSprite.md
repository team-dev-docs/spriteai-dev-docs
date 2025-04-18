---
slug: /
sidebar_position: 1
---
```markdown
---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
The `generateSprite` module provides functions for generating various types of sprite sheets and game assets using AI-powered image generation.

## Main Functions

### generateCharacterSpritesheet

Generates a character spritesheet based on a given description.

#### Usage
```javascript
import { generateCharacterSpritesheet } from './path/to/sprite/module';

const result = await generateCharacterSpritesheet(description, options);
```

#### Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to include (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Number of frames per animation state (default: 6)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style of the sprite (default: "pixel-art")
  - `padding` (number): Padding between frames (default: 1)
  - `direction` (string): Direction the character faces (default: "right")
  - `save` (boolean): Whether to save the generated image to disk

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet
- `metadata`: Object with information about the spritesheet, including dimensions, states, and frame data

### generateItemSprites

Generates a collection of item sprites based on a given description.

#### Usage
```javascript
import { generateItemSprites } from './path/to/sprite/module';

const result = await generateItemSprites(description, options);
```

#### Parameters
- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style of the sprites (default: "pixel-art")
  - `padding` (number): Padding between items (default: 1)
  - `itemType` (string): Type of items to generate (default: "equipment")
  - `background` (string): Background color (default: "white")
  - `save` (boolean): Whether to save the generated image to disk

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image
- `itemSheet`: Base64-encoded image data URL of the processed item sheet
- `metadata`: Object with information about the item sheet, including dimensions and item data

## Additional Functions

### fetchAvailableAnimationStates
Returns an array of available animation states for character spritesheets.

### fetchAvailableSpriteStyles
Returns an array of available sprite styles.

### generateEnvironmentSprites
Generates a tileset of environment sprites based on a given description.

## Examples

1. Generate a character spritesheet:
```javascript
const result = await generateCharacterSpritesheet("A pixelated robot", {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 4,
  style: 'pixel-art'
});
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate item sprites:
```javascript
const items = await generateItemSprites("Fantasy weapons", {
  itemCount: 6,
  itemType: 'weapons',
  style: 'hand-drawn'
});
console.log(items.metadata);
console.log(items.itemSheet);
```

## Notes and Considerations
- The functions use AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for game development and follow specific layouts based on the function used.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The functions may take some time to complete due to API calls and image processing.
- Consider using the `fetchAvailableAnimationStates` and `fetchAvailableSpriteStyles` functions to get up-to-date information on available options.
```
