---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Overview

The `SpriteProcessor` class is a powerful tool for manipulating and processing sprite images. It provides various methods to transform, resize, and apply pixel art effects to images.

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

Then, create an instance of the `SpriteProcessor` class:

```javascript
const processor = new SpriteProcessor('path/to/your/image.png');
```

## Methods

### process(options)

The `process` method applies various transformations and effects to the sprite image.

#### Parameters

- `options` (object): An object containing the following properties:
  - `transform` (object, optional): Transformation options
    - `resize` (object, optional): Resize options
      - `width` (number): Target width
      - `height` (number): Target height
      - `fit` (string, optional): Resize fit option (default: 'contain')
    - `flipHorizontal` (boolean, optional): Flip the image horizontally
    - `flipVertical` (boolean, optional): Flip the image vertically
    - `rotate` (number, optional): Rotation angle in degrees
    - `hsl` (object, optional): HSL adjustment
      - `hue` (number, optional): Hue adjustment (0-360)
      - `saturation` (number, optional): Saturation adjustment (0-2)
      - `lightness` (number, optional): Lightness adjustment (0-2)
    - `tint` (object, optional): Tint color
      - `r` (number): Red component (0-255)
      - `g` (number): Green component (0-255)
      - `b` (number): Blue component (0-255)
      - `alpha` (number, optional): Alpha component (0-1)
    - `blendMode` (string, optional): Blend mode for tint (default: 'multiply')
  - `pixelArt` (object, optional): Pixel art effect options
    - `pixelation` (number or string, optional): Pixelation factor or preset ('low', 'medium', 'high')
    - `palette` (object, optional): Color palette options
      - `preset` (string, optional): Preset palette ('grayscale', 'gameboy', 'cga')
      - `colors` (number, optional): Number of colors (default: 16)
    - `dithering` (boolean, optional): Enable dithering
  - `output` (object, optional): Output options
    - `format` (string, optional): Output format (default: 'png')
    - `quality` (number, optional): Output quality (0-100, default: 80)
    - `metadata` (boolean, optional): Include metadata in the result

#### Returns

A Promise that resolves to:
- If `output.metadata` is true: An object containing `buffer` (processed image data) and `metadata` (format and image info)
- Otherwise: A Buffer containing the processed image data

#### Example

```javascript
const processor = new SpriteProcessor('input.png');

processor.process({
  transform: {
    resize: { width: 64, height: 64 },
    flipHorizontal: true,
    rotate: 90,
    hsl: { saturation: 1.5 }
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
})
.then(result => {
  console.log('Processed image:', result.buffer);
  console.log('Metadata:', result.metadata);
})
.catch(error => {
  console.error('Error processing image:', error);
});
```

### static processSprite(input, options)

A static method that creates a new `SpriteProcessor` instance and processes the sprite in one step.

#### Parameters

- `input` (string or Buffer): Path to the input image or a Buffer containing the image data
- `options` (object): Same as the `options` parameter for the `process` method

#### Returns

A Promise that resolves to the processed image data (same as the `process` method)

#### Example

```javascript
SpriteProcessor.processSprite('input.png', {
  transform: { resize: { width: 32, height: 32 } },
  pixelArt: { pixelation: 'low' },
  output: { format: 'png' }
})
.then(buffer => {
  console.log('Processed sprite:', buffer);
})
.catch(error => {
  console.error('Error processing sprite:', error);
});
```

## Predefined Palettes

The `SpriteProcessor` class includes two predefined color palettes:

1. `gameboy`: A 4-color palette mimicking the original Game Boy display
2. `cga`: A 4-color palette inspired by the CGA (Color Graphics Adapter) standard

These palettes can be used with the `palette.preset` option in the `pixelArt` settings.

## Notes

- The `SpriteProcessor` class uses the `sharp` library for image processing, which provides high-performance operations.
- When using the `pixelArt` options, be aware that applying a color palette will reduce the number of colors in the image, which may affect the overall appearance.
- The `tint` option allows you to add a color overlay to the image, which can be useful for creating variations or special effects.
- Error handling is implemented throughout the class, so be sure to catch any potential errors when using the `process` or `processSprite` methods.
