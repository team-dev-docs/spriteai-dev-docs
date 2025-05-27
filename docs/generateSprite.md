---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis. It now includes additional functions for fetching available animation states and sprite styles, generating environment sprites, and creating item sprites.

## Usage
To use `generateSprite` and its related functions, import them from the sprite module and call them with the required parameters.

```javascript
import { generateCharacterSpritesheet, fetchAvailableAnimationStates, fetchAvailableSpriteStyles, generateEnvironmentSprites, generateItemSprites } from './path/to/sprite/module';
```

## Functions

### generateCharacterSpritesheet

Generates a character spritesheet based on the given description and options.

#### Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to include (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Number of frames per animation state (default: 6)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Style of the sprite (default: "pixel-art")
  - `padding` (number): Padding between frames (default: 1)
  - `direction` (string): Direction the character faces (default: "right")
  - `save` (boolean): Whether to save the generated image to disk

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded image data URL of the generated sprite sheet
- `metadata`: Object with information about the spritesheet, including states, frames, and dimensions

### fetchAvailableAnimationStates

Fetches the available animation states for character sprites.

#### Return Value
Returns an array of strings representing available animation states.

### fetchAvailableSpriteStyles

Fetches the available sprite styles.

#### Return Value
Returns an array of strings representing available sprite styles.

### generateEnvironmentSprites

Generates environment sprites based on the given description and options.

#### Parameters
- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of distinct environment elements to generate (default: 4)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Style of the sprites (default: "pixel-art")
  - `padding` (number): Padding between elements (default: 1)
  - `theme` (string): Theme of the environment (default: "fantasy")
  - `save` (boolean): Whether to save the generated image to disk

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image
- `tileset`: Base64-encoded image data URL of the generated tileset
- `metadata`: Object with information about the tileset, including dimensions and tile data

### generateItemSprites

Generates item sprites based on the given description and options.

#### Parameters
- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of distinct items to generate (default: 4)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Style of the sprites (default: "pixel-art")
  - `padding` (number): Padding between items (default: 1)
  - `itemType` (string): Type of items to generate (default: "equipment")
  - `background` (string): Background color of the sprite sheet (default: "white")
  - `save` (boolean): Whether to save the generated image to disk

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image
- `itemSheet`: Base64-encoded image data URL of the generated item sheet
- `metadata`: Object with information about the item sheet, including dimensions and item data

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

2. Fetch available animation states:
```javascript
const states = await fetchAvailableAnimationStates();
console.log(states);
```

3. Generate environment sprites:
```javascript
const environment = await generateEnvironmentSprites("A fantasy forest", {
  elements: 6,
  theme: 'fantasy'
});
console.log(environment.metadata);
console.log(environment.tileset);
```

4. Generate item sprites:
```javascript
const items = await generateItemSprites("Medieval weapons", {
  itemCount: 8,
  itemType: 'weapons'
});
console.log(items.metadata);
console.log(items.itemSheet);
```

## Notes or Considerations
- The functions use AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for the specified animation states and follow a grid layout.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The functions may take some time to complete due to API calls and image processing.
- Consider using the `fetchAvailableAnimationStates` and `fetchAvailableSpriteStyles` functions to get up-to-date information on supported options.
- Environment and item sprite generation allows for creating cohesive game assets alongside character sprites.
