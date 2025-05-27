---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis. The module also includes functions for fetching available animation states and sprite styles, generating environment sprites, and creating item sprites.

## Usage
To use the sprite generation functions, import them from the sprite module and call them with the appropriate parameters.

```javascript
import { generateCharacterSpritesheet, fetchAvailableAnimationStates, fetchAvailableSpriteStyles, generateEnvironmentSprites, generateItemSprites } from './path/to/sprite/module';

const characterResult = await generateCharacterSpritesheet(description, options);
const animationStates = await fetchAvailableAnimationStates();
const spriteStyles = await fetchAvailableSpriteStyles();
const environmentResult = await generateEnvironmentSprites(description, options);
const itemResult = await generateItemSprites(description, options);
```

## Parameters

### generateCharacterSpritesheet
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to include (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprite (default: "pixel-art").
  - `padding` (number): Padding between frames (default: 1).
  - `direction` (string): Direction the character faces (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.

### generateEnvironmentSprites
- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of environment elements to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprites (default: "pixel-art").
  - `padding` (number): Padding between elements (default: 1).
  - `theme` (string): Theme of the environment (default: "fantasy").
  - `save` (boolean): Whether to save the generated image to disk.

### generateItemSprites
- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprites (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color of the spritesheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Values

### generateCharacterSpritesheet
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet.
- `metadata`: Object containing information about the spritesheet, including states, frames, and dimensions.

### fetchAvailableAnimationStates
Returns an array of available animation states.

### fetchAvailableSpriteStyles
Returns an array of available sprite styles.

### generateEnvironmentSprites
Returns an object containing:
- `original`: URL of the original generated image.
- `tileset`: Base64-encoded image data URL of the processed tileset.
- `metadata`: Object containing information about the tileset, including elements, theme, and dimensions.

### generateItemSprites
Returns an object containing:
- `original`: URL of the original generated image.
- `itemSheet`: Base64-encoded image data URL of the processed item sheet.
- `metadata`: Object containing information about the item sheet, including item count, type, and dimensions.

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
console.log("Available animation states:", states);
```

3. Fetch available sprite styles:
```javascript
const styles = await fetchAvailableSpriteStyles();
console.log("Available sprite styles:", styles);
```

4. Generate environment sprites:
```javascript
const environment = await generateEnvironmentSprites("A lush forest", {
  elements: 6,
  theme: 'nature',
  style: 'vector'
});
console.log(environment.metadata);
console.log(environment.tileset);
```

5. Generate item sprites:
```javascript
const items = await generateItemSprites("Medieval weapons", {
  itemCount: 8,
  itemType: 'weapons',
  style: 'hand-drawn'
});
console.log(items.metadata);
console.log(items.itemSheet);
```

## Notes or Considerations
- The functions use AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for various animation states and follow specific layouts based on the function used.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The functions may take some time to complete due to API calls and image processing.
- Consider using the `fetchAvailableAnimationStates` and `fetchAvailableSpriteStyles` functions to get up-to-date information on available options for character sprite generation.
- Environment and item sprite generation allows for creating cohesive game assets alongside character sprites.
