---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Overview

The `SpriteProcessor` class is a powerful tool for manipulating and processing sprite images. It provides functionality for transforming, pixelating, and applying color palettes to sprite images.

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

### Creating a SpriteProcessor instance

You can create a new `SpriteProcessor` instance by passing either a file path or a buffer:

```javascript
const processor = new SpriteProcessor('path/to/your/sprite.png');
// or
const buffer = fs.readFileSync('path/to/your/sprite.png');
const processor = new SpriteProcessor(buffer);
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

You can also use the static `processSprite` method for one-off processing:

```javascript
const result = await SpriteProcessor.processSprite('path/to/your/sprite.png', options);
```

## Options

The `process` method accepts an options object with the following properties:

### transform

- `resize`: Object with `width`, `height`, and optional `fit` (default: 'contain') properties
- `flipHorizontal`: Boolean to flip the image horizontally
- `flipVertical`: Boolean to flip the image vertically
- `rotate`: Number of degrees to rotate the image
- `hsl`: Object with `hue`, `saturation`, and `lightness` properties for color adjustment
- `tint`: Object with `r`, `g`, `b`, and optional `alpha` properties for tinting
- `blendMode`: String specifying the blend mode for tinting (default: 'multiply')

### pixelArt

- `pixelation`: Number or string ('low', 'medium', 'high') for pixelation effect
- `palette`: Object with `preset` (string) or `colors` (number) for color quantization
- `dithering`: Boolean to enable dithering during color quantization

### output

- `format`: String specifying the output format (default: 'png')
- `quality`: Number between 1-100 for output quality (default: 80)
- `metadata`: Boolean to include metadata in the result

## Return Value

The `process` method returns a Promise that resolves to:

- A buffer containing the processed image data
- If `output.metadata` is true, an object with `buffer` and `metadata` properties

## Examples

### Resize and pixelate an image

```javascript
const processor = new SpriteProcessor('input.png');
const result = await processor.process({
  transform: {
    resize: { width: 32, height: 32 }
  },
  pixelArt: {
    pixelation: 'high',
    palette: { colors: 16 }
  }
});

fs.writeFileSync('output.png', result);
```

### Apply a color palette and flip horizontally

```javascript
const result = await SpriteProcessor.processSprite('input.png', {
  transform: {
    flipHorizontal: true
  },
  pixelArt: {
    palette: { preset: 'gameboy' }
  }
});

fs.writeFileSync('output.png', result);
```

## Notes

- The `SpriteProcessor` class uses the `sharp` library internally for image processing.
- Preset palettes include 'gameboy' and 'cga'. You can also specify a custom number of colors.
- When using the `pixelation` option, the image is first resized to a smaller size and then scaled back up to create the pixelated effect.
- The `tint` option allows you to apply a color overlay to the image, with the `blendMode` determining how it's applied.
