---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Overview

The `SpriteProcessor` class is a minimalist sprite processing library that allows you to perform various operations on sprite images, including transformations, pixel art effects, and output formatting.

## Installation

To use the `SpriteProcessor` class, make sure you have the following dependencies installed:

```bash
npm install sharp fs
```

## Usage

First, import the `SpriteProcessor` class:

```javascript
const SpriteProcessor = require('./path/to/SpriteProcessor');
```

Then, create an instance of the `SpriteProcessor` class:

```javascript
const processor = new SpriteProcessor('path/to/your/image.png');
```

## Methods

### `process(options)`

This method processes the sprite with all specified operations.

#### Parameters

- `options` (Object): Processing options
  - `transform` (Object): Transformation options
    - `resize` (Object): Resize options (`width`, `height`, `fit`)
    - `flipHorizontal` (boolean): Flip the image horizontally
    - `flipVertical` (boolean): Flip the image vertically
    - `rotate` (number): Rotation angle in degrees
    - `hsl` (Object): HSL adjustments (`hue`, `saturation`, `lightness`)
    - `tint` (Object): Tint color (`r`, `g`, `b`, `alpha`)
    - `blendMode` (string): Blend mode for tinting (default: 'multiply')
  - `pixelArt` (Object): Pixel art effect options
    - `pixelation` (number|string): Pixelation factor or preset ('low', 'medium', 'high')
    - `palette` (Object): Color palette options
      - `preset` (string): Predefined palette ('gameboy', 'cga', 'grayscale')
      - `colors` (number): Number of colors for custom palette
    - `dithering` (boolean): Enable dithering
  - `output` (Object): Output options
    - `format` (string): Output format (default: 'png')
    - `quality` (number): Output quality (0-100, default: 80)
    - `metadata` (boolean): Include metadata in the output

#### Returns

- Promise<Buffer|Object>: Processed image buffer or object with buffer and metadata

#### Example

```javascript
const processor = new SpriteProcessor('input.png');
const result = await processor.process({
  transform: {
    resize: { width: 64, height: 64, fit: 'contain' },
    flipHorizontal: true,
    rotate: 90,
    hsl: { hue: 180, saturation: 1.5, lightness: 0.8 },
  },
  pixelArt: {
    pixelation: 'medium',
    palette: { preset: 'gameboy' },
    dithering: true,
  },
  output: {
    format: 'png',
    quality: 90,
    metadata: true,
  },
});

console.log(result.metadata);
// Save the processed image
require('fs').writeFileSync('output.png', result.buffer);
```

### Static Method: `processSprite(input, options)`

This static helper method allows you to quickly process a sprite without creating a separate instance.

#### Parameters

- `input` (Buffer|string): Image buffer or file path
- `options` (Object): Processing options (same as `process` method)

#### Returns

- Promise<Buffer|Object>: Processed image buffer or object with buffer and metadata

#### Example

```javascript
const result = await SpriteProcessor.processSprite('input.png', {
  transform: { resize: { width: 32, height: 32 } },
  pixelArt: { pixelation: 'high' },
});
```

## Predefined Color Palettes

The `SpriteProcessor` class includes two predefined color palettes:

1. `gameboy`: A 4-color palette resembling the original Game Boy display
2. `cga`: A 4-color palette inspired by CGA (Color Graphics Adapter) graphics

You can use these palettes in the `pixelArt.palette.preset` option.

## Notes

- The `sharp` library is used for image processing, which provides fast and efficient operations.
- When using the `pixelArt` options, the image is first downsized to create the pixelation effect and then scaled back up using nearest-neighbor interpolation.
- Error handling is implemented, and any processing errors will be thrown with a descriptive message.
