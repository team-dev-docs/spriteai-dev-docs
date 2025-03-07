---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Overview

The `SpriteProcessor` class is a minimalist sprite processing library that allows you to manipulate and transform images, particularly for use in pixel art and game development scenarios. It provides a range of options for resizing, color adjustments, pixelation, and palette reduction.

## Installation

To use the SpriteProcessor class, make sure you have the following dependencies installed:

```bash
npm install sharp fs
```

## Usage

To use the SpriteProcessor class, first import it into your project:

```javascript
const SpriteProcessor = require('./path/to/SpriteProcessor');
```

You can then create a new instance of SpriteProcessor and process an image:

```javascript
const processor = new SpriteProcessor('path/to/your/image.png');
const processedImage = await processor.process(options);
```

Alternatively, you can use the static method:

```javascript
const processedImage = await SpriteProcessor.processSprite('path/to/your/image.png', options);
```

## Options

The `process` method accepts an options object with the following properties:

### Transform Options

- `resize`: Object with `width`, `height`, and optional `fit` properties for resizing the image.
- `flipHorizontal`: Boolean to flip the image horizontally.
- `flipVertical`: Boolean to flip the image vertically.
- `rotate`: Number of degrees to rotate the image.
- `hsl`: Object with `hue`, `saturation`, and `lightness` properties for color adjustments.
- `tint`: Object with `r`, `g`, `b`, and optional `alpha` properties to apply a color tint.
- `blendMode`: String specifying the blend mode for the tint (default: 'multiply').

### Pixel Art Options

- `pixelation`: Number or string ('low', 'medium', 'high') to apply pixelation effect.
- `palette`: Object with `preset` (string) or `colors` (number) to reduce the color palette.
- `dithering`: Boolean to enable dithering when reducing the color palette.

### Output Options

- `format`: String specifying the output format (default: 'png').
- `quality`: Number between 1-100 for output quality (default: 80).
- `metadata`: Boolean to include metadata in the output.

## Examples

1. Basic image resizing:

```javascript
const processor = new SpriteProcessor('input.png');
const resizedImage = await processor.process({
  transform: {
    resize: { width: 64, height: 64 }
  }
});
```

2. Applying pixelation and color palette reduction:

```javascript
const pixelArtImage = await SpriteProcessor.processSprite('input.png', {
  pixelArt: {
    pixelation: 'medium',
    palette: { preset: 'gameboy' },
    dithering: true
  }
});
```

3. Applying color adjustments and tint:

```javascript
const tintedImage = await SpriteProcessor.processSprite('input.png', {
  transform: {
    hsl: { hue: 180, saturation: 1.2, lightness: 0.8 },
    tint: { r: 255, g: 200, b: 100, alpha: 0.5 }
  }
});
```

## Notes

- The SpriteProcessor class uses the Sharp library for image processing, which provides high performance and a wide range of features.
- When using the `palette` option, you can choose from predefined presets like 'gameboy' and 'cga', or specify a custom number of colors.
- The `processSprite` static method is a convenient way to quickly process an image without creating a separate SpriteProcessor instance.
- All processing operations are performed asynchronously, so make sure to use `await` or handle the returned promises appropriately.
