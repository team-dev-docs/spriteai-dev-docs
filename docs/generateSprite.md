---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Overview

The `SpriteProcessor` class is a minimalist sprite processing library that allows you to apply various transformations and effects to sprite images. It provides a flexible and easy-to-use interface for manipulating sprites in game development or other image processing applications.

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

Then, create a new instance of `SpriteProcessor` with an input image:

```javascript
const processor = new SpriteProcessor('path/to/your/sprite.png');
```

## Methods

### process(options)

The main method for applying all operations to the sprite.

```javascript
const result = await processor.process({
  transform: {
    resize: { width: 100, height: 100 },
    flipHorizontal: true,
    rotate: 90
  },
  pixelArt: {
    pixelation: 'medium',
    palette: { preset: 'gameboy' }
  },
  output: { format: 'png', quality: 90 }
});
```

#### Options

- `transform` (object): Geometric and color transformations
  - `resize` (object): Resize options (width, height, fit)
  - `flipHorizontal` (boolean): Flip the image horizontally
  - `flipVertical` (boolean): Flip the image vertically
  - `rotate` (number): Rotation angle in degrees
  - `hsl` (object): HSL adjustments (hue, saturation, lightness)
  - `tint` (object): Tint color (r, g, b, alpha)
  - `blendMode` (string): Blend mode for tint (default: 'multiply')

- `pixelArt` (object): Pixel art effects
  - `pixelation` (number|string): Pixelation factor or preset ('low', 'medium', 'high')
  - `palette` (object): Palette reduction options
    - `preset` (string): Preset palette ('gameboy', 'cga', 'grayscale')
    - `colors` (number): Number of colors (default: 16)
  - `dithering` (boolean): Apply dithering effect

- `output` (object): Output options
  - `format` (string): Output format (default: 'png')
  - `quality` (number): Output quality (0-100, default: 80)
  - `metadata` (boolean): Include metadata in the output

### Static Method: processSprite(input, options)

A static helper method to quickly process a sprite without creating a new instance.

```javascript
const result = await SpriteProcessor.processSprite('path/to/sprite.png', options);
```

## Examples

### Basic Usage

```javascript
const processor = new SpriteProcessor('input.png');
const result = await processor.process({
  transform: {
    resize: { width: 64, height: 64 },
    flipHorizontal: true
  },
  pixelArt: {
    pixelation: 'medium',
    palette: { preset: 'gameboy' }
  }
});
```

### Advanced Usage

```javascript
const result = await SpriteProcessor.processSprite('input.png', {
  transform: {
    resize: { width: 128, height: 128, fit: 'contain' },
    rotate: 45,
    hsl: { hue: 180, saturation: 1.2, lightness: 0.8 },
    tint: { r: 255, g: 0, b: 0, alpha: 0.5 }
  },
  pixelArt: {
    pixelation: 8,
    palette: { colors: 32 },
    dithering: true
  },
  output: {
    format: 'webp',
    quality: 85,
    metadata: true
  }
});

console.log(result.metadata);
// Use result.buffer for the processed image data
```

## Error Handling

The `SpriteProcessor` class includes error handling to catch and report issues during processing. If an error occurs, it will be thrown with a descriptive message.

```javascript
try {
  const result = await processor.process(options);
} catch (error) {
  console.error('Sprite processing failed:', error.message);
}
```

## Note

- The `SpriteProcessor` class uses the `sharp` library for image processing, which provides high-performance operations.
- When using preset palettes, the available options are 'gameboy' and 'cga'.
- The pixelation effect can significantly impact the image quality, so adjust the settings carefully to achieve the desired result.
