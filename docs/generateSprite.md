---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Overview

The `SpriteProcessor` class is a minimalist sprite processing library that provides various operations for manipulating and transforming sprite images. It offers features such as resizing, flipping, rotating, color adjustments, pixelation, and palette reduction.

## Usage

To use the `SpriteProcessor` class, you need to import it and create an instance with an input image:

```javascript
const SpriteProcessor = require('./SpriteProcessor');

const processor = new SpriteProcessor('path/to/your/image.png');
```

## Methods

### process(options)

The main method for applying all sprite processing operations.

```javascript
const result = await processor.process({
  transform: {
    resize: { width: 64, height: 64 },
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

- `transform`: Object containing geometric and color transformation options.
- `pixelArt`: Object containing pixel art effect options.
- `output`: Object specifying output format and quality.

### Static Method: processSprite(input, options)

A static helper method to quickly process a sprite without creating a separate instance.

```javascript
const result = await SpriteProcessor.processSprite('path/to/image.png', options);
```

## Transformation Options

### Geometric Transformations

- `resize`: Object with `width`, `height`, and optional `fit` properties.
- `flipHorizontal`: Boolean to flip the image horizontally.
- `flipVertical`: Boolean to flip the image vertically.
- `rotate`: Number specifying rotation angle in degrees.

### Color Transformations

- `hsl`: Object with `hue`, `saturation`, and `lightness` properties for HSL adjustments.
- `tint`: Object with `r`, `g`, `b`, and optional `alpha` properties for tinting.
- `blendMode`: String specifying the blend mode for tinting (default: 'multiply').

## Pixel Art Effects

- `pixelation`: Number or string ('low', 'medium', 'high') for pixelation effect.
- `palette`: Object with `preset` (string) or `colors` (number) for palette reduction.
- `dithering`: Boolean to enable dithering during palette reduction.

## Output Options

- `format`: String specifying the output format (default: 'png').
- `quality`: Number between 0-100 for output quality (default: 80).
- `metadata`: Boolean to include metadata in the output.

## Examples

1. Basic image resizing:

```javascript
const processor = new SpriteProcessor('input.png');
const result = await processor.process({
  transform: {
    resize: { width: 128, height: 128 }
  }
});
```

2. Applying pixel art effects:

```javascript
const result = await processor.process({
  pixelArt: {
    pixelation: 'high',
    palette: { preset: 'gameboy' },
    dithering: true
  }
});
```

3. Combining multiple operations:

```javascript
const result = await processor.process({
  transform: {
    flipHorizontal: true,
    rotate: 45,
    hsl: { saturation: 1.5, lightness: 0.8 }
  },
  pixelArt: {
    pixelation: 6,
    palette: { colors: 16 }
  },
  output: {
    format: 'png',
    quality: 95,
    metadata: true
  }
});
```

## Notes

- The `SpriteProcessor` class uses the `sharp` library internally for image processing.
- When using palette presets, available options include 'gameboy' and 'cga'.
- The class supports both synchronous and asynchronous file reading, depending on the input type.
- Error handling is implemented, with specific error messages for processing failures.
