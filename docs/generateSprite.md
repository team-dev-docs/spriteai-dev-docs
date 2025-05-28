---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis. It now includes additional functionality for generating environment and item sprites.

## Usage
To use `generateSprite`, import it from the sprite module and call it with a description of the character, environment, or item you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateCharacterSpritesheet(description, options);
const environmentResult = await sprite.generateEnvironmentSprites(description, options);
const itemResult = await sprite.generateItemSprites(description, options);
```

## Parameters
- `description` (string, required): A text description of the character, environment, or item to generate.
- `options` (object, optional):
  - `states` (array): Array of animation states for character sprites (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the generated sprite (default: "pixel-art").
  - `padding` (number): Padding between sprite frames (default: 1).
  - `direction` (string): Direction the character faces (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.
  - For environment sprites:
    - `elements` (number): Number of environment elements to generate (default: 4).
    - `theme` (string): Theme of the environment (default: "fantasy").
  - For item sprites:
    - `itemCount` (number): Number of items to generate (default: 4).
    - `itemType` (string): Type of items to generate (default: "equipment").
    - `background` (string): Background color for item sprites (default: "white").

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet` or `tileset` or `itemSheet`: Base64-encoded image data URL of the generated sprite sheet.
- `metadata`: JSON object with information about the generated sprites, including dimensions, frame data, and other relevant details.

## Examples

1. Generate a character sprite sheet:
```javascript
const result = await sprite.generateCharacterSpritesheet("A pixelated robot");
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate environment sprites:
```javascript
const environmentResult = await sprite.generateEnvironmentSprites("A forest scene", { elements: 6, theme: "fantasy" });
console.log(environmentResult.metadata);
console.log(environmentResult.tileset);
```

3. Generate item sprites:
```javascript
const itemResult = await sprite.generateItemSprites("Medieval weapons", { itemCount: 8, itemType: "weapons" });
console.log(itemResult.metadata);
console.log(itemResult.itemSheet);
```

## Additional Functions

### fetchAvailableAnimationStates
Retrieves a list of available animation states for character sprites.

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

## Notes or Considerations
- The functions use AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for various animation states and follow specific layouts based on the type of sprite (character, environment, or item).
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The functions may take some time to complete due to API calls and image processing.
- Consider using the `fetchAvailableAnimationStates` and `fetchAvailableSpriteStyles` functions to get up-to-date information on available options for customization.
