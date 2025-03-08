---
slug: /
sidebar_position: 1
---
# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis. It now utilizes the optimized `SpriteProcessor` class for improved performance and additional features.

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
  - `transform` (object): Transformation options for the sprite (see SpriteProcessor options).
  - `pixelArt` (object): Pixel art effect options for the sprite (see SpriteProcessor options).
  - `output` (object): Output format options for the sprite (see SpriteProcessor options).

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
    hsl: { hue: 180 }
  },
  pixelArt: {
    pixelation: 'medium',
    palette: { preset: 'gameboy' }
  }
});
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

## SpriteProcessor Options

The `SpriteProcessor` class now offers more advanced options for sprite manipulation:

### transform
- `resize` (object): { width, height, fit } for resizing the sprite.
- `flipHorizontal` (boolean): Flip the sprite horizontally.
- `flipVertical` (boolean): Flip the sprite vertically.
- `rotate` (number): Rotate the sprite by the specified degrees.
- `hsl` (object): { hue, saturation, lightness } for adjusting colors.
- `tint` (object): { r, g, b, alpha } for applying a color tint.
- `blendMode` (string): Blend mode for the tint (default: 'multiply').

### pixelArt
- `pixelation` (number | string): Pixelation factor or preset ('low', 'medium', 'high').
- `palette` (object): { preset, colors } for color palette reduction.
- `dithering` (boolean): Apply dithering effect.

### output
- `format` (string): Output image format (default: 'png').
- `quality` (number): Output image quality (1-100).
- `metadata` (boolean): Include metadata in the output.

## Notes or Considerations
- The function uses AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid).
- The SpriteProcessor now offers more advanced image manipulation options, allowing for greater customization of the generated sprites.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- The new SpriteProcessor features allow for more precise control over the final sprite output, including pixel art effects and color adjustments.
