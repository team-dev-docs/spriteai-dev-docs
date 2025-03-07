# SpriteProcessor

The `SpriteProcessor` class is a powerful and flexible tool for manipulating sprite images. It provides a chainable API for applying various transformations and effects to sprites, making it easy to create complex image processing pipelines.

## Overview

The `SpriteProcessor` class is designed to work with both Buffer and file path inputs, allowing you to process sprites from various sources. It uses the `sharp` library for high-performance image processing operations.

## Installation

To use the `SpriteProcessor` class, make sure you have the following dependencies installed:

```bash
npm install sharp fs
```

## Usage

To use the `SpriteProcessor` class, first import it from the module:

```javascript
const { createProcessor } = require('./path/to/sprite/module');
```

Then, create a new instance of the processor:

```javascript
const processor = createProcessor('path/to/sprite.png');
// or
const processor = createProcessor(bufferContainingImageData);
```

## Methods

### `apply(operation, params)`

Applies a custom operation to the sprite.

- `operation`: A function that takes the current image and parameters as arguments.
- `params`: An object containing parameters for the operation.

Returns: The processor instance for chaining.

### `transform(options)`

Applies various transformations to the sprite.

- `options`: An object containing transformation options:
  - `resize`: Object with `width`, `height`, and optional `fit` properties.
  - `tint`: Object with `r`, `g`, `b`, and optional `alpha` properties.
  - `hsl`: Object with optional `hue`, `saturation`, and `lightness` properties.
  - `flipHorizontal`: Boolean to flip the image horizontally.
  - `flipVertical`: Boolean to flip the image vertically.
  - `rotate`: Number of degrees to rotate the image.
  - `noise`: Object with `type` ('grain', 'scanlines', or 'static') and `amount` properties.

Returns: The processor instance for chaining.

### `pixelArt(options)`

Applies pixel art effects to the sprite.

- `options`: An object containing pixel art options:
  - `pixelation`: Number or string ('low', 'medium', 'high') for pixelation level.
  - `palette`: Object with `preset` ('grayscale', 'gameboy', or 'cga') or `colors` (number) property.
  - `dithering`: Boolean to enable dithering.

Returns: The processor instance for chaining.

### `effects(options)`

Applies visual effects to the sprite.

- `options`: An object containing effect options:
  - `outline`: Object with `width` and `color` properties.
  - `shadow`: Object with `blur`, `offset`, and `color` properties.
  - `glow`: Object with `radius` and `color` properties.

Returns: The processor instance for chaining.

### `output(options)`

Generates the output buffer and metadata for the processed sprite.

- `options`: An object containing output options:
  - `format`: Output format (default: 'png').
  - `quality`: Output quality (default: 80).

Returns: A promise that resolves to an object containing the output buffer and metadata.

## Example

Here's an example of how to use the `SpriteProcessor` class to apply various transformations and effects to a sprite:

```javascript
const { createProcessor } = require('./path/to/sprite/module');

async function processSprite() {
  const processor = createProcessor('path/to/input/sprite.png');
  
  const result = await processor
    .transform({
      resize: { width: 64, height: 64 },
      tint: { r: 255, g: 200, b: 100, alpha: 0.8 },
      flipHorizontal: true,
      rotate: 45
    })
    .pixelArt({
      pixelation: 'medium',
      palette: { preset: 'gameboy' },
      dithering: true
    })
    .effects({
      outline: { width: 2, color: { r: 0, g: 0, b: 0, alpha: 1 } },
      glow: { radius: 5, color: { r: 255, g: 255, b: 0, alpha: 0.5 } }
    })
    .output({ format: 'png', quality: 90 });

  console.log('Processed sprite metadata:', result.metadata);
  // Use result.buffer for the processed image data
}

processSprite().catch(console.error);
```

This example demonstrates how to chain multiple operations to resize, tint, flip, rotate, apply pixel art effects, and add visual effects to a sprite before outputting the result.