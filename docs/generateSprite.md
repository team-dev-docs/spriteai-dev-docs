---
slug: /
sidebar_position: 1
---
# generateSprite Documentation

## Overview

The `generateSprite` function is part of the sprite processing module in our codebase. It allows developers to generate sprite sheets programmatically using AI-powered image generation and customizable transformations.

## Usage

To use `generateSprite`, import it from the sprite module:

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters

- `description` (string, required): A text description of the character or sprite to generate.
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.
  - `transform` (object): Transformation options for the sprite.
  - `pixelArt` (object): Pixel art effect options.
  - `output` (object): Output format options.

## Return Value

Returns an object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

## Examples

1. Generate a basic sprite:

```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log(result.messages);
console.log(result.image);
```

2. Generate multiple variations with transformations:

```javascript
const options = {
  iterations: 3,
  transform: {
    resize: { width: 64, height: 64 },
    flipHorizontal: true
  },
  pixelArt: {
    pixelation: 'medium',
    palette: { preset: 'gameboy' }
  }
};

const variations = await sprite.generateSprite("A cartoon cat", options);
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

## Sprite Processing Options

### Transform

- `resize`: Resize the sprite (e.g., `{ width: 64, height: 64 }`).
- `flipHorizontal`: Flip the sprite horizontally (boolean).
- `flipVertical`: Flip the sprite vertically (boolean).
- `rotate`: Rotate the sprite (number of degrees).
- `hsl`: Adjust hue, saturation, and lightness (e.g., `{ hue: 180, saturation: 1.5, lightness: 0.8 }`).
- `tint`: Apply a color tint (e.g., `{ r: 255, g: 0, b: 0, alpha: 0.5 }`).

### Pixel Art

- `pixelation`: Apply pixelation effect ('low', 'medium', 'high', or a number).
- `palette`: Reduce colors to a specific palette (e.g., `{ preset: 'gameboy' }` or `{ colors: 16 }`).
- `dithering`: Enable dithering for color reduction (boolean).

### Output

- `format`: Output image format (default: 'png').
- `quality`: Output image quality for lossy formats (0-100).

## Notes

- The function uses AI models to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid).
- The function may take some time to complete due to API calls and image processing.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The new sprite processing implementation may affect performance or behavior compared to previous versions.
