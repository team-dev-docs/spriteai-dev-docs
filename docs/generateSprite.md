---
slug: /
sidebar_position: 1
---
# generateSprite Documentation

## Brief Description

The `generateSprite` function generates a sprite sheet image based on a given description, using AI-powered image generation and analysis. It now utilizes the `SpriteProcessor` class for advanced image processing capabilities.

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
  - `transform` (object): Transformation options for the generated sprite.
  - `pixelArt` (object): Pixel art effect options for the generated sprite.

## Return Value

Returns an object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

## Examples

1. Generate a single sprite sheet:

```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log(result.messages);
console.log(result.image);
```

2. Generate multiple variations with transformations:

```javascript
const variations = await sprite.generateSprite("A cartoon cat", {
  iterations: 3,
  transform: {
    resize: { width: 64, height: 64 },
    flipHorizontal: true,
    hsl: { hue: 30, saturation: 1.2, lightness: 1.1 }
  },
  pixelArt: {
    pixelation: 'medium',
    palette: { preset: 'gameboy' },
    dithering: true
  }
});

variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

## New Features

The `generateSprite` function now supports advanced image processing capabilities through the `SpriteProcessor` class:

1. **Transformations**: 
   - Resize
   - Flip horizontal/vertical
   - Rotate
   - HSL adjustments
   - Tinting

2. **Pixel Art Effects**:
   - Pixelation
   - Color palette reduction
   - Dithering

3. **Output Customization**:
   - Format selection (e.g., PNG, JPEG)
   - Quality settings

## Notes and Considerations

- The function uses AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid).
- The new `SpriteProcessor` class allows for more advanced image manipulation, including pixel art effects and color palette adjustments.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Experiment with different transformation and pixel art options to achieve the desired visual style for your sprites.
