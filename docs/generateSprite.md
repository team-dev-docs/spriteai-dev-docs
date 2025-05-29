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

const result = await sprite.generateCharacterSpritesheet(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to generate (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Number of frames per animation state (default: 6)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Style of the sprite (default: "pixel-art")
  - `padding` (number): Padding between frames (default: 1)
  - `direction` (string): Direction the character faces (default: "right")
  - `save` (boolean): Whether to save the generated image to disk

## Return Value
Returns an object containing:
- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded image data URL of the generated sprite sheet
- `metadata`: Object containing information about the sprite sheet, including dimensions, states, and frame data

## Examples

1. Generate a single sprite sheet:
```javascript
const result = await sprite.generateCharacterSpritesheet("A pixelated robot");
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate a sprite sheet with custom options:
```javascript
const options = {
  states: ['idle', 'jump', 'attack'],
  framesPerState: 8,
  style: 'vector',
  direction: 'left'
};
const result = await sprite.generateCharacterSpritesheet("A cartoon cat", options);
console.log(result.metadata.frameData);
```

## New Functions

### fetchAvailableSpriteStyles

This function retrieves a list of available sprite styles that can be used when generating sprites.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
console.log(styles);
// Output: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

### generateEnvironmentSprites

This function generates a set of environment sprites based on a given description.

```javascript
import { generateEnvironmentSprites } from './path/to/sprite/module';

const description = "A forest clearing with a magical pond";
const options = {
  elements: 6,
  size: "1024x1024",
  style: "pixel-art",
  theme: "fantasy"
};

const result = await generateEnvironmentSprites(description, options);
console.log(result.metadata);
console.log(result.tileset);
```

Parameters:
- `description` (string, required): A text description of the environment to generate
- `options` (object, optional):
  - `elements` (number): Number of distinct environment pieces to generate (default: 4)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Style of the sprites (default: "pixel-art")
  - `padding` (number): Padding between elements (default: 1)
  - `theme` (string): Theme of the environment (default: "fantasy")

Return Value:
Returns an object containing:
- `original`: URL of the original generated image
- `tileset`: Base64-encoded image data URL of the generated environment tileset
- `metadata`: Object containing information about the tileset, including dimensions and tile data

## Notes or Considerations
- The functions use AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites and environments are optimized for game development and follow specific layouts based on the options provided.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The functions may take some time to complete due to API calls and image processing.
- Consider using the `fetchAvailableSpriteStyles` function to get the most up-to-date list of supported styles before generating sprites.
- The `generateEnvironmentSprites` function is particularly useful for creating consistent game environments that match the style of your character sprites.
