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

Create a new instance of `SpriteProcessor`:

```javascript
const processor = new SpriteProcessor('path/to/your/image.png');
```

## Methods

### `process(options)`

The main method for processing sprites. It accepts an options object with the following properties:

- `transform`: Object containing transformation options
- `pixelArt`: Object containing pixel art effect options
- `output`: Object containing output format options

#### Transform Options

- `resize`: Object with `width`, `height`, and optional `fit` properties
- `flipHorizontal`: Boolean to flip the image horizontally
- `flipVertical`: Boolean to flip the image vertically
- `rotate`: Number of degrees to rotate the image
- `hsl`: Object with `hue`, `saturation`, and `lightness` properties
- `tint`: Object with `r`, `g`, `b`, and optional `alpha` properties
- `blendMode`: String specifying the blend mode for tinting (default: 'multiply')

#### Pixel Art Options

- `pixelation`: Number or string ('low', 'medium', 'high') for pixelation effect
- `palette`: Object with `preset` (string) or `colors` (number) properties
- `dithering`: Boolean to enable dithering

#### Output Options

- `format`: String specifying the output format (default: 'png')
- `quality`: Number specifying the output quality (default: 80)
- `metadata`: Boolean to include metadata in the output

### Example

```javascript
const processor = new SpriteProcessor('input.png');

processor.process({
  transform: {
    resize: { width: 64, height: 64 },
    flipHorizontal: true,
    rotate: 90,
    hsl: { hue: 180, saturation: 1.5, lightness: 0.8 },
    tint: { r: 255, g: 200, b: 100, alpha: 0.5 }
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
}).then(result => {
  // Handle the processed image
  console.log(result.metadata);
  // Save or use result.buffer
}).catch(error => {
  console.error('Error processing sprite:', error);
});
```

## Static Methods

### `processSprite(input, options)`

A static method that creates a new `SpriteProcessor` instance and processes the sprite in one step.

```javascript
SpriteProcessor.processSprite('input.png', options)
  .then(result => {
    // Handle the processed image
  })
  .catch(error => {
    console.error('Error processing sprite:', error);
  });
```

## Predefined Palettes

The `SpriteProcessor` class includes two predefined palettes:

- `gameboy`: A 4-color palette mimicking the original Game Boy display
- `cga`: A 4-color palette inspired by CGA graphics

You can use these palettes in the `pixelArt.palette.preset` option.

## Notes

- All image processing is done using the `sharp` library, which provides fast and efficient image manipulation.
- The `process` method returns a Promise that resolves with the processed image buffer and optional metadata.
- Error handling is implemented throughout the class to provide informative error messages.
