---
slug: /
sidebar_position: 1
---
# SpriteProcessor

## Overview

The `SpriteProcessor` class is a minimalist sprite processing library that provides various operations for manipulating sprite images. It offers functionality for resizing, flipping, rotating, applying color adjustments, and creating pixel art effects.

## Installation

To use the `SpriteProcessor` class, make sure you have the following dependencies installed:

```bash
npm install sharp fs
```

## Usage

To use the `SpriteProcessor` class, import it into your project:

```javascript
const SpriteProcessor = require('./path/to/SpriteProcessor');
```

### Creating a SpriteProcessor instance

You can create a new `SpriteProcessor` instance by providing either a file path or a buffer:

```javascript
const processor = new SpriteProcessor('path/to/image.png');
// or
const imageBuffer = fs.readFileSync('path/to/image.png');
const processor = new SpriteProcessor(imageBuffer);
```

### Processing a sprite

To process a sprite, use the `process` method:

```javascript
const options = {
  transform: {
    resize: { width: 100, height: 100 },
    flipHorizontal: true,
    rotate: 90
  },
  pixelArt: {
    pixelation: 'medium',
    palette: { preset: 'gameboy' }
  },
  output: {
    format: 'png',
    quality: 80,
    metadata: true
  }
};

const result = await processor.process(options);
```

### Static helper method

For quick processing, you can use the static `processSprite` method:

```javascript
const result = await SpriteProcessor.processSprite('path/to/image.png', options);
```

## API Reference

### Constructor

```javascript
new SpriteProcessor(input)
```

- `input` (Buffer|string): Image buffer or file path

### Methods

#### `process(options)`

Process the sprite with all operations in a single call.

- `options` (Object): Processing options
  - `transform` (Object): Transformation options
    - `resize` (Object): Resize options (width, height, fit)
    - `flipHorizontal` (boolean): Flip the image horizontally
    - `flipVertical` (boolean): Flip the image vertically
    - `rotate` (number): Rotation angle in degrees
    - `hsl` (Object): HSL color adjustments (hue, saturation, lightness)
    - `tint` (Object): Tinting options (r, g, b, alpha)
  - `pixelArt` (Object): Pixel art effect options
    - `pixelation` (number|string): Pixelation factor or preset ('low', 'medium', 'high')
    - `palette` (Object): Color palette options (preset or number of colors)
    - `dithering` (boolean): Enable dithering for palette reduction
  - `output` (Object): Output options
    - `format` (string): Output format (default: 'png')
    - `quality` (number): Output quality (0-100, default: 80)
    - `metadata` (boolean): Include metadata in the output

Returns: Promise<Buffer|Object> - Processed image buffer or object with metadata

#### `static processSprite(input, options)`

Static helper to quickly process a sprite.

- `input` (Buffer|string): Image buffer or file path
- `options` (Object): Processing options (same as `process` method)

Returns: Promise<Buffer|Object> - Processed image

## Predefined Color Palettes

The `SpriteProcessor` class includes predefined color palettes:

- `gameboy`: Classic Game Boy color palette (4 colors)
- `cga`: CGA color palette (4 colors)

You can use these palettes in the `pixelArt.palette.preset` option.

## Performance Considerations

The recent refactoring of the `SpriteProcessor` class has improved its maintainability and readability. While the public API remains unchanged, the internal implementation now uses private methods for better organization. This modular approach may lead to slight performance improvements, especially for complex sprite processing tasks.

## Examples

### Resize and rotate an image

```javascript
const processor = new SpriteProcessor('input.png');
const result = await processor.process({
  transform: {
    resize: { width: 200, height: 200, fit: 'contain' },
    rotate: 45
  }
});
fs.writeFileSync('output.png', result);
```

### Create a pixel art effect

```javascript
const result = await SpriteProcessor.processSprite('input.png', {
  pixelArt: {
    pixelation: 'high',
    palette: { preset: 'gameboy' },
    dithering: true
  }
});
fs.writeFileSync('pixel_art.png', result);
```

### Apply color adjustments

```javascript
const processor = new SpriteProcessor('input.png');
const result = await processor.process({
  transform: {
    hsl: { hue: 180, saturation: 1.5, lightness: 0.8 },
    tint: { r: 255, g: 0, b: 0, alpha: 0.5 }
  }
});
fs.writeFileSync('color_adjusted.png', result);
```

## Conclusion

The `SpriteProcessor` class provides a powerful and flexible way to manipulate sprite images programmatically. With its various options for transformations, pixel art effects, and output customization, it can be used in a wide range of applications, from game development to image processing tools.
