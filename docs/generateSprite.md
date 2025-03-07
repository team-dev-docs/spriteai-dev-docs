---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Overview

The `SpriteProcessor` class is a powerful tool for manipulating and transforming sprite images. It provides various methods to resize, flip, rotate, adjust colors, and apply pixel art effects to sprite images.

## Installation

To use the `SpriteProcessor` class, ensure you have the following dependencies installed:

```bash
npm install fs sharp
```

## Usage

First, import the `SpriteProcessor` class:

```javascript
const SpriteProcessor = require('./path/to/SpriteProcessor');
```

### Creating a SpriteProcessor instance

You can create a new `SpriteProcessor` instance by passing either a file path or a buffer:

```javascript
const processor = new SpriteProcessor('path/to/your/sprite.png');
// or
const imageBuffer = fs.readFileSync('path/to/your/sprite.png');
const processor = new SpriteProcessor(imageBuffer);
```

### Processing a sprite

To process a sprite, use the `process` method:

```javascript
const options = {
  transform: {
    resize: { width: 64, height: 64 },
    flipHorizontal: true,
    rotate: 90
  },
  pixelArt: {
    pixelation: 'medium',
    palette: { preset: 'gameboy' }
  },
  output: {
    format: 'png',
    quality: 90
  }
};

const result = await processor.process(options);
```

### Static method

You can also use the static `processSprite` method for a one-liner operation:

```javascript
const result = await SpriteProcessor.processSprite('path/to/your/sprite.png', options);
```

## Options

The `process` method accepts an options object with the following properties:

### transform

- `resize`: Object with `width` and `height` properties for resizing the image.
- `flipHorizontal`: Boolean to flip the image horizontally.
- `flipVertical`: Boolean to flip the image vertically.
- `rotate`: Number of degrees to rotate the image.
- `hsl`: Object with `hue`, `saturation`, and `lightness` properties for color adjustment.
- `tint`: Object with `r`, `g`, `b`, and optional `alpha` properties for applying a color tint.
- `blendMode`: String specifying the blend mode for tinting (default: 'multiply').

### pixelArt

- `pixelation`: Number or string ('low', 'medium', 'high') for pixelation effect.
- `palette`: Object with `preset` (string) or `colors` (number) for color quantization.
- `dithering`: Boolean to enable dithering during color quantization.

### output

- `format`: String specifying the output format (default: 'png').
- `quality`: Number between 1-100 for output quality (default: 80).
- `metadata`: Boolean to include metadata in the output (default: false).

## Preset Palettes

The `SpriteProcessor` class includes two preset palettes:

- `gameboy`: A 4-color palette mimicking the original Game Boy colors.
- `cga`: A 4-color palette inspired by CGA graphics.

You can use these presets in the `palette` option:

```javascript
const options = {
  pixelArt: {
    palette: { preset: 'gameboy' }
  }
};
```

## Return Value

The `process` method returns a Promise that resolves to:

- A Buffer containing the processed image data if `output.metadata` is false.
- An object with `buffer` and `metadata` properties if `output.metadata` is true.

## Example

Here's a complete example demonstrating various features of the `SpriteProcessor`:

```javascript
const SpriteProcessor = require('./SpriteProcessor');

async function processSpriteExample() {
  try {
    const result = await SpriteProcessor.processSprite('input-sprite.png', {
      transform: {
        resize: { width: 128, height: 128 },
        flipHorizontal: true,
        rotate: 45,
        hsl: { hue: 180, saturation: 1.2, lightness: 1.1 },
        tint: { r: 255, g: 200, b: 200, alpha: 0.5 }
      },
      pixelArt: {
        pixelation: 'high',
        palette: { preset: 'gameboy' },
        dithering: true
      },
      output: {
        format: 'png',
        quality: 95,
        metadata: true
      }
    });

    console.log('Sprite processed successfully');
    console.log('Metadata:', result.metadata);
    fs.writeFileSync('output-sprite.png', result.buffer);
  } catch (error) {
    console.error('Error processing sprite:', error.message);
  }
}

processSpriteExample();
```

This example demonstrates how to use various transformation and pixel art effects on a sprite, including resizing, flipping, rotating, color adjustments, and applying a Game Boy-style palette.
