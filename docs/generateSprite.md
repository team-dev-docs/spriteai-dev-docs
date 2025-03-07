---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Overview

The `SpriteProcessor` class is a powerful tool for manipulating and transforming sprite images. It provides a range of features including image resizing, flipping, rotation, color adjustments, and pixel art effects.

## Installation

To use the `SpriteProcessor` class, make sure you have the following dependencies installed:

```bash
npm install fs sharp
```

## Usage

First, import the `SpriteProcessor` class:

```javascript
const SpriteProcessor = require('./path/to/SpriteProcessor');
```

### Creating a SpriteProcessor Instance

You can create a new `SpriteProcessor` instance by passing either a file path or a buffer:

```javascript
const processor = new SpriteProcessor('path/to/image.png');
// or
const imageBuffer = fs.readFileSync('path/to/image.png');
const processor = new SpriteProcessor(imageBuffer);
```

### Processing Images

Use the `process` method to apply transformations and effects to your image:

```javascript
const options = {
  transform: {
    resize: { width: 200, height: 200 },
    flipHorizontal: true,
    rotate: 90,
    hsl: { hue: 180, saturation: 1.5, lightness: 0.8 },
    tint: { r: 255, g: 0, b: 0, alpha: 0.5 }
  },
  pixelArt: {
    pixelation: 'medium',
    palette: { preset: 'gameboy' },
    dithering: true
  },
  output: {
    format: 'png',
    quality: 90
  }
};

const result = await processor.process(options);
```

### Static Method

You can also use the static `processSprite` method for a one-liner operation:

```javascript
const result = await SpriteProcessor.processSprite('path/to/image.png', options);
```

## Options

The `process` method accepts an options object with the following properties:

### transform

- `resize`: Object with `width` and `height` properties for resizing the image.
- `flipHorizontal`: Boolean to flip the image horizontally.
- `flipVertical`: Boolean to flip the image vertically.
- `rotate`: Number of degrees to rotate the image.
- `hsl`: Object with `hue`, `saturation`, and `lightness` properties for HSL adjustments.
- `tint`: Object with `r`, `g`, `b`, and `alpha` properties for applying a color tint.
- `blendMode`: String specifying the blend mode for the tint (default is 'multiply').

### pixelArt

- `pixelation`: Number or string ('low', 'medium', 'high') for pixelation effect.
- `palette`: Object with `preset` (string) or `colors` (number) for color quantization.
- `dithering`: Boolean to enable or disable dithering.

### output

- `format`: String specifying the output format (e.g., 'png', 'jpeg').
- `quality`: Number between 1-100 for output quality.
- `metadata`: Boolean to include metadata in the result.

## Presets

The `SpriteProcessor` includes two built-in color palette presets:

- `gameboy`: A 4-color palette mimicking the original Game Boy screen.
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

The `process` method returns a Promise that resolves to either:

- A Buffer containing the processed image data.
- An object with `buffer` and `metadata` properties if the `output.metadata` option is set to `true`.

## Error Handling

The `process` method throws an error if processing fails. It's recommended to use try-catch blocks or `.catch()` methods when working with `SpriteProcessor`:

```javascript
try {
  const result = await processor.process(options);
  // Handle successful processing
} catch (error) {
  console.error('Processing failed:', error.message);
}
```

## Examples

### Basic Resizing

```javascript
const processor = new SpriteProcessor('input.png');
const result = await processor.process({
  transform: {
    resize: { width: 100, height: 100 }
  }
});
fs.writeFileSync('output.png', result);
```

### Applying Pixel Art Effect

```javascript
const result = await SpriteProcessor.processSprite('input.png', {
  pixelArt: {
    pixelation: 'high',
    palette: { preset: 'gameboy' },
    dithering: true
  }
});
fs.writeFileSync('pixelart.png', result);
```

### Complex Transformation

```javascript
const result = await SpriteProcessor.processSprite('input.png', {
  transform: {
    resize: { width: 200, height: 200 },
    flipHorizontal: true,
    rotate: 45,
    hsl: { hue: 180, saturation: 1.2, lightness: 1.1 },
    tint: { r: 255, g: 200, b: 200, alpha: 0.3 }
  },
  pixelArt: {
    pixelation: 8,
    palette: { colors: 32 }
  },
  output: {
    format: 'jpeg',
    quality: 85,
    metadata: true
  }
});
fs.writeFileSync('output.jpg', result.buffer);
console.log(result.metadata);
```

## Performance Considerations

- Processing large images or applying multiple effects can be computationally intensive. Consider using smaller images or limiting the number of simultaneous operations in production environments.
- The `pixelation` effect can significantly reduce the image size, which may be beneficial for performance in some cases.

## Compatibility

The `SpriteProcessor` class uses the `sharp` library for image processing, which supports a wide range of input formats including JPEG, PNG, WebP, AVIF, TIFF, and raw image data. Output is limited to formats supported by `sharp`, with PNG and JPEG being the most commonly used.
