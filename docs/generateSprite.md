---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Overview

The `SpriteProcessor` class is a minimalist sprite processing library that allows you to apply various transformations and effects to sprite images. It provides a flexible and easy-to-use interface for manipulating sprites in game development or other image processing scenarios.

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

Then, create an instance of `SpriteProcessor` with an input image:

```javascript
const processor = new SpriteProcessor('path/to/your/sprite.png');
```

## Methods

### `process(options)`

The main method for processing a sprite image. It applies all specified transformations and effects.

#### Parameters

- `options` (Object): An object containing processing options.
  - `transform` (Object): Geometric and color transformation options.
  - `pixelArt` (Object): Pixel art effect options.
  - `output` (Object): Output format options.

#### Returns

- Promise<Buffer|Object>: Processed image buffer or object with metadata.

#### Example

```javascript
const options = {
  transform: {
    resize: { width: 64, height: 64 },
    flipHorizontal: true,
    hsl: { saturation: 1.5 }
  },
  pixelArt: {
    pixelation: 'medium',
    palette: { preset: 'gameboy' }
  },
  output: {
    format: 'png',
    metadata: true
  }
};

const result = await processor.process(options);
console.log(result.metadata);
```

### Static Method: `processSprite(input, options)`

A static helper method to quickly process a sprite without creating an instance.

#### Parameters

- `input` (Buffer|string): Image buffer or file path.
- `options` (Object): Processing options (same as `process` method).

#### Returns

- Promise<Buffer|Object>: Processed image.

#### Example

```javascript
const result = await SpriteProcessor.processSprite('sprite.png', options);
```

## Transformation Options

### Geometric Transformations

- `resize` (Object): Resize the image.
  - `width` (number): New width.
  - `height` (number): New height.
  - `fit` (string): Resize fit option (default: 'contain').
- `flipHorizontal` (boolean): Flip the image horizontally.
- `flipVertical` (boolean): Flip the image vertically.
- `rotate` (number): Rotate the image by specified degrees.

### Color Transformations

- `hsl` (Object): Adjust HSL values.
  - `hue` (number): Hue adjustment.
  - `saturation` (number): Saturation adjustment.
  - `lightness` (number): Lightness adjustment.
- `tint` (Object): Apply a color tint.
  - `r` (number): Red component (0-255).
  - `g` (number): Green component (0-255).
  - `b` (number): Blue component (0-255).
  - `alpha` (number): Tint opacity (0-1).
- `blendMode` (string): Blend mode for tinting (default: 'multiply').

## Pixel Art Options

- `pixelation` (number|string): Pixelation factor or preset ('low', 'medium', 'high').
- `palette` (Object): Color palette reduction options.
  - `preset` (string): Predefined palette ('gameboy', 'cga', 'grayscale').
  - `colors` (number): Number of colors for custom palette (default: 16).
- `dithering` (boolean): Enable dithering for palette reduction.

## Output Options

- `format` (string): Output image format (e.g., 'png', 'jpeg').
- `quality` (number): Output image quality (0-100).
- `metadata` (boolean): Include metadata in the output.

## Predefined Color Palettes

The `SpriteProcessor` class includes predefined color palettes:

- `gameboy`: Four-color palette resembling the original Game Boy.
- `cga`: Four-color CGA-inspired palette.

You can use these palettes in the `palette.preset` option for pixel art effects.

## Error Handling

The `process` method throws an error if processing fails. Make sure to handle these errors in your code:

```javascript
try {
  const result = await processor.process(options);
} catch (error) {
  console.error('Sprite processing failed:', error.message);
}
```

## Performance Considerations

- Large images may take longer to process, especially with complex transformations.
- Consider using lower quality settings or reducing image dimensions for faster processing.
- The `processSprite` static method is convenient for one-off processing, but creating a `SpriteProcessor` instance is more efficient for multiple operations on the same image.
