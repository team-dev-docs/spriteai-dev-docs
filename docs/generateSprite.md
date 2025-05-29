---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis. It now includes additional functions for generating character spritesheets, environment sprites, and item sprites.

## Usage
To use the sprite generation functions, import them from the sprite module and call them with the required parameters.

```javascript
import { generateCharacterSpritesheet, generateEnvironmentSprites, generateItemSprites } from './path/to/sprite/module';

const characterResult = await generateCharacterSpritesheet(description, options);
const environmentResult = await generateEnvironmentSprites(description, options);
const itemResult = await generateItemSprites(description, options);
```

## Functions

### generateCharacterSpritesheet

#### Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to include (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Number of frames per animation state (default: 6)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style of the sprite (default: 'pixel-art')
  - `padding` (number): Padding between frames (default: 1)
  - `direction` (string): Direction the character faces (default: 'right')
  - `save` (boolean): Whether to save the generated image to disk

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet
- `metadata`: Object with information about the spritesheet, including states, frames, and dimensions

### generateEnvironmentSprites

#### Parameters
- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of environment elements to generate (default: 4)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style of the sprites (default: 'pixel-art')
  - `padding` (number): Padding between elements (default: 1)
  - `theme` (string): Theme of the environment (default: 'fantasy')
  - `save` (boolean): Whether to save the generated image to disk

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image
- `tileset`: Base64-encoded image data URL of the processed tileset
- `metadata`: Object with information about the tileset, including number of elements, theme, and dimensions

### generateItemSprites

#### Parameters
- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style of the sprites (default: 'pixel-art')
  - `padding` (number): Padding between items (default: 1)
  - `itemType` (string): Type of items to generate (default: 'equipment')
  - `background` (string): Background color (default: 'white')
  - `save` (boolean): Whether to save the generated image to disk

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image
- `itemSheet`: Base64-encoded image data URL of the processed item sheet
- `metadata`: Object with information about the item sheet, including item count, type, and dimensions

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

2. Generate environment sprites:
```javascript
const environmentResult = await generateEnvironmentSprites("A lush forest", {
  elements: 6,
  theme: 'nature',
  style: 'vector'
});
console.log(environmentResult.metadata);
console.log(environmentResult.tileset);
```

3. Generate item sprites:
```javascript
const itemResult = await generateItemSprites("Medieval weapons", {
  itemCount: 8,
  itemType: 'weapons',
  style: 'hand-drawn'
});
console.log(itemResult.metadata);
console.log(itemResult.itemSheet);
```

## Additional Functions

### fetchAvailableAnimationStates
Returns an array of available animation states for character spritesheets.

```javascript
import { fetchAvailableAnimationStates } from './path/to/sprite/module';

const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### fetchAvailableSpriteStyles
Returns an array of available sprite styles.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Notes or Considerations
- The functions use AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for the specified animation states and follow the requested layout.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The functions may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies installed (OpenAI, axios, sharp, Jimp) to use these functions.
- The style and quality of the generated sprites may vary based on the AI model's capabilities and the provided descriptions.
