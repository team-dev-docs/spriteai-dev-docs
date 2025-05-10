---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Overview

The `SpriteProcessor` class is a powerful tool for manipulating and transforming sprite images. It provides various methods to apply effects, resize, and optimize sprites for use in game development or other graphical applications.

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

Then, create an instance of the `SpriteProcessor` class:

```javascript
const processor = new SpriteProcessor('path/to/your/image.png');
```

## Methods

### process(options)

The main method to apply transformations and effects to the sprite.

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
  output: {
    format: 'png',
    quality: 90
  }
});
```

#### Options

- `transform` (object): Apply transformations to the sprite
  - `resize` (object): Resize the image
    - `width` (number): New width
    - `height` (number): New height
    - `fit` (string, optional): Resizing behavior (default: 'contain')
  - `flipHorizontal` (boolean): Flip the image horizontally
  - `flipVertical` (boolean): Flip the image vertically
  - `rotate` (number): Rotate the image by degrees
  - `hsl` (object): Adjust hue, saturation, and lightness
    - `hue` (number): Hue adjustment
    - `saturation` (number): Saturation adjustment
    - `lightness` (number): Lightness adjustment
  - `tint` (object): Apply a color tint
    - `r` (number): Red component (0-255)
    - `g` (number): Green component (0-255)
    - `b` (number): Blue component (0-255)
    - `alpha` (number, optional): Opacity (0-1, default: 1)
  - `blendMode` (string, optional): Blending mode for tint (default: 'multiply')

- `pixelArt` (object): Apply pixel art effects
  - `pixelation` (number or string): Pixelation factor or preset ('low', 'medium', 'high')
  - `palette` (object): Color palette options
    - `preset` (string): Use a preset palette ('gameboy', 'cga', or 'grayscale')
    - `colors` (number): Number of colors for custom palette (default: 16)
  - `dithering` (boolean): Enable dithering effect

- `output` (object): Output options
  - `format` (string): Output format (e.g., 'png', 'jpeg')
  - `quality` (number): Output quality (0-100)
  - `metadata` (boolean): Include metadata in the result

### Static Methods

#### processSprite(input, options)

A static method to quickly process a sprite without creating an instance:

```javascript
const result = await SpriteProcessor.processSprite('path/to/image.png', {
  transform: { resize: { width: 32, height: 32 } },
  pixelArt: { pixelation: 'high' }
});
```

## Examples

### Resize and Apply Pixel Art Effect

```javascript
const processor = new SpriteProcessor('character.png');
const result = await processor.process({
  transform: { resize: { width: 64, height: 64 } },
  pixelArt: { pixelation: 'medium', palette: { preset: 'gameboy' } }
});
```

### Flip and Rotate

```javascript
const processor = new SpriteProcessor('sprite.png');
const result = await processor.process({
  transform: { flipHorizontal: true, rotate: 180 }
});
```

### Apply Color Tint

```javascript
const processor = new SpriteProcessor('item.png');
const result = await processor.process({
  transform: {
    tint: { r: 255, g: 0, b: 0, alpha: 0.5 },
    blendMode: 'screen'
  }
});
```

## Notes

- The `SpriteProcessor` class uses the `sharp` library for image processing, which provides high-performance operations.
- When using preset palettes, the number of colors is fixed (e.g., Gameboy palette has 4 colors).
- The `processSprite` static method is convenient for one-off sprite processing tasks.
- Remember to handle errors appropriately, as image processing operations may throw exceptions.
