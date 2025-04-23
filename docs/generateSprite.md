---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates sprite sheet images based on given descriptions, using AI-powered image generation and analysis. It now includes two main functions: `generateCharacterSpritesheet` for character sprites and `generateLandscapeSprite` for landscape backgrounds.

## Usage
To use the sprite generation functions, import them from the sprite module and call them with the appropriate descriptions and options.

```javascript
import { generateCharacterSpritesheet, generateLandscapeSprite } from './path/to/sprite/module';

const characterResult = await generateCharacterSpritesheet(description, options);
const landscapeResult = await generateLandscapeSprite(description, options);
```

## Parameters

### generateCharacterSpritesheet
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style of the sprite (default: "pixel-art").
  - `padding` (number): Padding between sprites (default: 1).
  - `direction` (string): Base direction of character (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.

### generateLandscapeSprite
- `description` (string, required): A text description of the landscape to generate.
- `options` (object, optional):
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style of the sprite (default: "pixel-art").
  - `timeOfDay` (string): Time of day setting (default: "day").
  - `weather` (string): Weather conditions (default: "clear").
  - `perspective` (string): Perspective of the landscape (default: "side-scrolling").
  - `save` (boolean): Whether to save the generated image to disk.
  - `removeBackground` (boolean): Whether to remove the background color.
  - `backgroundColor` (string): Background color to remove (if removeBackground is true).
  - `colorThreshold` (number): Threshold for color removal (if removeBackground is true).

## Return Value

### generateCharacterSpritesheet
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed sprite sheet.
- `metadata`: Object containing information about the sprite sheet, including states, frames, dimensions, and frame data.

### generateLandscapeSprite
Returns an object containing:
- `original`: URL of the original generated image.
- `landscape`: Base64-encoded image data URL of the processed landscape sprite.
- `metadata`: Object containing information about the landscape sprite, including description, style, time of day, weather, perspective, and dimensions.

## Examples

1. Generate a character sprite sheet:
```javascript
const result = await generateCharacterSpritesheet("A pixelated robot", {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 4,
  style: "pixel-art"
});
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate a landscape sprite:
```javascript
const landscape = await generateLandscapeSprite("A forest at sunset", {
  timeOfDay: "sunset",
  weather: "clear",
  perspective: "side-scrolling",
  removeBackground: true
});
console.log(landscape.metadata);
console.log(landscape.landscape);
```

## Notes or Considerations
- Both functions use AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- The `generateCharacterSpritesheet` function now supports multiple animation states and customizable frame counts.
- The `generateLandscapeSprite` function allows for various landscape settings, including time of day, weather, and perspective.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The functions may take some time to complete due to API calls and image processing.
- The `removeBackground` option in `generateLandscapeSprite` allows for transparency in the final output.
