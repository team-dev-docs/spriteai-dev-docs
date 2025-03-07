---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Overview

The `SpriteProcessor` class is a powerful tool for manipulating and transforming sprite images. It provides a range of features including resizing, flipping, rotating, color adjustments, and pixel art effects.

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

### Basic Usage

```javascript
const processor = new SpriteProcessor('path/to/your/image.png');
const result = await processor.process();
```

### Advanced Usage

```javascript
const processor = new SpriteProcessor('path/to/your/image.png');
const result = await processor.process({
  transform: {
    resize: { width: 200, height: 200 },
    flipHorizontal: true,
    rotate: 90,
    hsl: { hue: 180, saturation: 1.5, lightness: 0.8 }
  },
  pixelArt: {
    pixelation: 'medium',
    palette: { preset: 'gameboy' },
    dithering: true
  },
  output: {
    format: 'png',
    quality: 90,
    metadata: true
  }
});
```

## API Reference

### Constructor

```javascript
new SpriteProcessor(input)
```

- `input`: A string representing the path to the image file or a buffer containing the image data.

### Methods

#### `process(options)`

Processes the image with the specified options.

- `options` (optional): An object containing the following properties:
  - `transform` (optional): An object with transformation options.
  - `pixelArt` (optional): An object with pixel art effect options.
  - `output` (optional): An object with output format options.

Returns a Promise that resolves to the processed image buffer or an object containing the buffer and metadata.

### Transformation Options

- `resize`: An object with `width` and `height` properties for resizing the image.
- `flipHorizontal`: A boolean to flip the image horizontally.
- `flipVertical`: A boolean to flip the image vertically.
- `rotate`: A number representing the degrees to rotate the image.
- `hsl`: An object with `hue`, `saturation`, and `lightness` properties for color adjustment.
- `tint`: An object with `r`, `g`, `b`, and optional `alpha` properties for applying a color tint.
- `blendMode`: A string specifying the blend mode for the tint (default: 'multiply').

### Pixel Art Options

- `pixelation`: A number or string ('low', 'medium', 'high') specifying the pixelation level.
- `palette`: An object with `preset` (string) or `colors` (number) properties for color quantization.
- `dithering`: A boolean to enable or disable dithering during color quantization.

### Output Options

- `format`: A string specifying the output format (e.g., 'png', 'jpeg').
- `quality`: A number between 1-100 specifying the output quality.
- `metadata`: A boolean to include metadata in the output.

## Examples

### Resize and Rotate an Image

```javascript
const processor = new SpriteProcessor('input.png');
const result = await processor.process({
  transform: {
    resize: { width: 300, height: 300 },
    rotate: 45
  }
});
```

### Apply Pixel Art Effect

```javascript
const processor = new SpriteProcessor('input.png');
const result = await processor.process({
  pixelArt: {
    pixelation: 'high',
    palette: { preset: 'cga' },
    dithering: true
  }
});
```

### Tint and Save as JPEG

```javascript
const processor = new SpriteProcessor('input.png');
const result = await processor.process({
  transform: {
    tint: { r: 255, g: 0, b: 0, alpha: 0.5 }
  },
  output: {
    format: 'jpeg',
    quality: 85
  }
});
```

## Notes

- The `SpriteProcessor` class uses the Sharp library internally for image processing, which provides high-performance operations.
- When using the `pixelArt` options, be aware that the final image quality may vary depending on the original image and the chosen settings.
- The `generateSprite` function mentioned in the previous documentation is a higher-level function that uses `SpriteProcessor` internally. For more control over the sprite generation process, you can use the `SpriteProcessor` class directly as shown in this documentation.
