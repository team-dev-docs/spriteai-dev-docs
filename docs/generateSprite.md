---
slug: /
sidebar_position: 1
---
# SpriteProcessor

## Overview

The `SpriteProcessor` class is a unified sprite processing library that provides various image manipulation and sprite sheet operations. It offers features such as image transformations, pixel art effects, visual effects, and sprite sheet creation and extraction.

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

## Class Methods

### Constructor

```javascript
new SpriteProcessor(input)
```

Creates a new `SpriteProcessor` instance.

- `input`: Buffer or string (required) - Image buffer or file path

### process

```javascript
async process(options)
```

Processes the sprite with all operations in a single call.

- `options`: Object (optional) - Processing options
  - `transform`: Object - Transformation options
  - `pixelArt`: Object - Pixel art effect options
  - `effects`: Object - Visual effect options
  - `output`: Object - Output format options

Returns a Promise that resolves to a Buffer or an Object with metadata.

### createSheet

```javascript
static async createSheet(sprites, options)
```

Creates a sprite sheet from multiple images.

- `sprites`: Array<Buffer|string> (required) - Array of image buffers or file paths
- `options`: Object (required) - Sheet creation options
  - `columns`: number (required) - Number of columns in the sheet
  - `spacing`: number (optional) - Spacing between sprites
  - `padding`: number (optional) - Padding around the sheet

Returns a Promise that resolves to an Object containing the sprite sheet buffer and metadata.

### extractFromSheet

```javascript
static async extractFromSheet(spriteSheet, options)
```

Extracts sprites from a sheet.

- `spriteSheet`: Buffer|string (required) - Sheet buffer or file path
- `options`: Object (required) - Extraction options
  - `columns`: number (required) - Number of columns in the sheet
  - `rows`: number (required) - Number of rows in the sheet
  - `padding`: number (optional) - Padding around the sheet
  - `spacing`: number (optional) - Spacing between sprites

Returns a Promise that resolves to an Array of Objects containing extracted sprite buffers and their positions.

### createAnimation

```javascript
static async createAnimation(frames, options)
```

Creates an animation from sprite frames.

- `frames`: Array<Buffer|string> (required) - Array of frame buffers or file paths
- `options`: Object (optional) - Animation options
  - `delay`: number (optional) - Delay between frames in milliseconds (default: 100)
  - `loop`: number (optional) - Number of times to loop the animation (default: 0, infinite)
  - `quality`: number (optional) - Output quality (default: 80)

Returns a Promise that resolves to a Buffer containing the animated WebP image.

## Examples

### Basic Image Processing

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
  },
  effects: {
    outline: { width: 1, color: { r: 0, g: 0, b: 0, alpha: 1 } }
  },
  output: { format: 'png', quality: 90 }
});
```

### Creating a Sprite Sheet

```javascript
const sprites = ['sprite1.png', 'sprite2.png', 'sprite3.png', 'sprite4.png'];
const sheetResult = await SpriteProcessor.createSheet(sprites, {
  columns: 2,
  spacing: 1,
  padding: 2
});
```

### Extracting Sprites from a Sheet

```javascript
const extractedSprites = await SpriteProcessor.extractFromSheet('sheet.png', {
  columns: 4,
  rows: 2,
  padding: 2,
  spacing: 1
});
```

### Creating an Animation

```javascript
const frames = ['frame1.png', 'frame2.png', 'frame3.png', 'frame4.png'];
const animationBuffer = await SpriteProcessor.createAnimation(frames, {
  delay: 200,
  loop: 3,
  quality: 85
});
```

## Notes

- The `SpriteProcessor` class uses the `sharp` library for image processing, which provides high-performance operations.
- When using pixel art effects, be mindful of the input image size and the pixelation factor to achieve the desired result.
- The `createAnimation` method outputs WebP animations, which may not be supported in all browsers. Consider providing fallback options for broader compatibility.
- For optimal performance, consider processing images in batches or using worker threads for parallel processing when dealing with large numbers of sprites.
