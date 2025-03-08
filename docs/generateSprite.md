---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Overview

The `SpriteProcessor` class is a powerful tool for manipulating and transforming sprite images. It provides various methods to resize, flip, rotate, adjust colors, apply pixel art effects, and more.

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

Create a new instance of `SpriteProcessor` by passing either a file path or a buffer:

```javascript
const processor = new SpriteProcessor('path/to/your/image.png');
// or
const processor = new SpriteProcessor(imageBuffer);
```

Then, use the `process` method to apply transformations and generate the output:

```javascript
const result = await processor.process({
  transform: {
    resize: { width: 200, height: 200 },
    flipHorizontal: true,
    rotate: 90
  },
  pixelArt: {
    pixelation: 'medium',
    palette: { preset: 'gameboy' }
  },
  output: {
    format: 'png',
    quality: 80
  }
});
```

## API Reference

### Constructor

```javascript
new SpriteProcessor(input)
```

- `input`: A string representing the file path or a buffer containing the image data.

### Methods

#### `process(options)`

Applies transformations and pixel art effects to the sprite image.

Parameters:
- `options` (object): An object containing the following properties:
  - `transform` (object, optional): Transformation options
    - `resize` (object, optional): { width, height, fit }
    - `flipHorizontal` (boolean, optional)
    - `flipVertical` (boolean, optional)
    - `rotate` (number, optional): Rotation angle in degrees
    - `hsl` (object, optional): { hue, saturation, lightness }
    - `tint` (object, optional): { r, g, b, alpha }
    - `blendMode` (string, optional): Blend mode for tinting
  - `pixelArt` (object, optional): Pixel art effect options
    - `pixelation` (number or string, optional): Pixelation factor or preset ('low', 'medium', 'high')
    - `palette` (object, optional): { preset, colors }
    - `dithering` (boolean, optional)
  - `output` (object, optional): Output options
    - `format` (string, optional): Output format (default: 'png')
    - `quality` (number, optional): Output quality (default: 80)
    - `metadata` (boolean, optional): Include metadata in the result

Returns: A Promise that resolves to a buffer containing the processed image data, or an object with `buffer` and `metadata` properties if `output.metadata` is true.

### Static Methods

#### `processSprite(input, options)`

A static method that creates a new `SpriteProcessor` instance and calls its `process` method.

Parameters:
- `input`: A string representing the file path or a buffer containing the image data.
- `options`: The same options object as the `process` method.

Returns: A Promise that resolves to the processed image data or metadata.

## Examples

### Basic Usage

```javascript
const SpriteProcessor = require('./SpriteProcessor');

async function processSprite() {
  const result = await SpriteProcessor.processSprite('input.png', {
    transform: {
      resize: { width: 64, height: 64 },
      flipHorizontal: true
    },
    output: { format: 'png' }
  });

  // Save the result to a file
  require('fs').writeFileSync('output.png', result);
}

processSprite();
```

### Advanced Usage with Pixel Art Effects

```javascript
const SpriteProcessor = require('./SpriteProcessor');

async function createPixelArtSprite() {
  const processor = new SpriteProcessor('character.png');
  const result = await processor.process({
    transform: {
      resize: { width: 32, height: 32, fit: 'contain' },
      hsl: { saturation: 1.5, lightness: 0.8 }
    },
    pixelArt: {
      pixelation: 'high',
      palette: { preset: 'gameboy' },
      dithering: true
    },
    output: {
      format: 'png',
      metadata: true
    }
  });

  console.log('Image metadata:', result.metadata);
  require('fs').writeFileSync('pixel_art_character.png', result.buffer);
}

createPixelArtSprite();
```

## Notes

- The `SpriteProcessor` class uses the `sharp` library internally for image processing, which provides high-performance operations.
- When using the `gameboy` or `cga` palette presets, the image will be automatically quantized to the respective color palette.
- The `pixelation` effect is applied before palette quantization, allowing for more authentic pixel art results.
- Error handling is implemented in the `process` method, so be sure to use try-catch blocks or `.catch()` when working with Promises.
