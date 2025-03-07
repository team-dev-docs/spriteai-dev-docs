# applyPixelArtFilters

## Overview

The `applyPixelArtFilters` function applies pixel art-specific filters and effects to a sprite image. This function is part of the sprite manipulation module and can be used to create retro-style graphics or enhance existing pixel art sprites.

## Usage

```javascript
const { applyPixelArtFilters } = require('./path/to/sprite/module');

const result = await applyPixelArtFilters(input, options);
```

## Parameters

- `input` (Buffer | string, required): The input sprite as a buffer or file path.
- `options` (Object, optional): Configuration options for the pixel art filters.
  - `pixelation` (string | number, optional): Pixelation effect level ('low', 'medium', 'high', or a custom number).
  - `dithering` (Object, optional): Dithering effect options.
    - `enabled` (boolean): Whether to enable dithering.
    - `pattern` (string): Dithering pattern ('bayer', 'floydSteinberg', or 'halftone').
  - `palette` (Object, optional): Color palette constraints.
    - `colors` (number): Number of colors in the palette.
    - `preset` (string): Predefined color palette ('gameboy', 'nes', 'grayscale', or 'cga').
  - `noise` (Object, optional): Retro noise effect options.
    - `amount` (number): Amount of noise to add.
    - `type` (string): Type of noise ('grain', 'static', or 'scanlines').
  - `output` (Object, optional): Output options.
    - `format` (string): Output image format.
    - `quality` (number): Output image quality (1-100).

## Return Value

Returns a Promise that resolves to an object containing:

- `buffer` (Buffer): The processed image buffer.
- `metadata` (Object): Metadata about the processed image, including format, width, height, channels, and size.

## Examples

### Basic Usage

```javascript
const fs = require('fs');
const { applyPixelArtFilters } = require('./sprite/module');

const inputBuffer = fs.readFileSync('input-sprite.png');

const result = await applyPixelArtFilters(inputBuffer, {
  pixelation: 'medium',
  palette: { colors: 16 },
  output: { format: 'png' }
});

fs.writeFileSync('pixel-art-sprite.png', result.buffer);
console.log('Sprite processed:', result.metadata);
```

### Advanced Usage

```javascript
const result = await applyPixelArtFilters('path/to/sprite.png', {
  pixelation: 8,
  dithering: { enabled: true, pattern: 'floydSteinberg' },
  palette: { preset: 'nes' },
  noise: { amount: 10, type: 'scanlines' },
  output: { format: 'webp', quality: 90 }
});

// Use the resulting buffer and metadata as needed
```

## Notes

- The function uses the Sharp library internally for image processing, ensuring high-performance operations.
- When using the `palette` option with a preset, the `colors` property is ignored in favor of the preset's defined colors.
- The `pixelation` effect is applied before other filters, which may affect the final appearance of dithering and noise effects.
- For best results, start with high-resolution sprites and experiment with different combinations of filters and options.
- The function may throw an error if the input image cannot be processed or if invalid options are provided.