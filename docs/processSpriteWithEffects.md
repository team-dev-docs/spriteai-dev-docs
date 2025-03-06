# processSpriteWithEffects

## Overview

The `processSpriteWithEffects` function is a powerful tool for applying multiple advanced effects and optimizations to sprite images. It provides a wide range of options for resizing, applying visual effects, removing backgrounds, and performing 2D transformations on sprites.

## Usage

```javascript
const { processSpriteWithEffects } = require('./path/to/sprite/module');

const result = await processSpriteWithEffects(input, options);
```

## Parameters

- `input` (Buffer | string): The input sprite as a buffer or file path.
- `options` (Object): An object containing various processing options.

### Options

- `resize` (Object, optional):
  - `width` (number): Target width for resizing.
  - `height` (number): Target height for resizing.

- `effects` (Object, optional):
  - `brightness` (number): Brightness adjustment (-100 to 100).
  - `contrast` (number): Contrast adjustment (-100 to 100).
  - `saturation` (number): Saturation adjustment (-100 to 100).

- `background` (Object, optional):
  - `color` (Object): Color to remove {r, g, b}.
  - `threshold` (number): Removal threshold (0-255).

- `transform` (Object, optional):
  - `rotation` (number): Rotation angle in degrees.
  - `flipX` (boolean): Horizontal flip.
  - `flipY` (boolean): Vertical flip.

- `output` (Object, optional):
  - `format` (string): Output format ('png' or 'jpeg', default: 'png').
  - `quality` (number): Output quality (1-100, default: 80).

## Return Value

Returns a Promise that resolves to an object containing:

- `buffer` (Buffer): The processed sprite image buffer.
- `metadata` (Object): Information about the processed image.
  - `format` (string): The output format.
  - `width` (number): The width of the processed image.
  - `height` (number): The height of the processed image.
  - `channels` (number): The number of color channels.
  - `size` (number): The size of the image in bytes.

## Examples

### Basic Usage

```javascript
const fs = require('fs');
const { processSpriteWithEffects } = require('./sprite-module');

const inputBuffer = fs.readFileSync('input-sprite.png');

const result = await processSpriteWithEffects(inputBuffer, {
  resize: { width: 64, height: 64 },
  effects: { brightness: 10, contrast: 5, saturation: -5 },
  output: { format: 'png', quality: 90 }
});

fs.writeFileSync('output-sprite.png', result.buffer);
console.log('Processed sprite metadata:', result.metadata);
```

### Advanced Usage

```javascript
const result = await processSpriteWithEffects('input-sprite.png', {
  resize: { width: 128 },
  effects: { brightness: 15, contrast: 10 },
  background: { color: { r: 255, g: 255, b: 255 }, threshold: 10 },
  transform: { rotation: 45, flipX: true },
  output: { format: 'jpeg', quality: 85 }
});

// Use the processed sprite...
```

## Notes

- The function uses the `sharp` library for image processing, ensuring high-performance operations.
- Background removal is performed before other transformations for optimal results.
- When using JPEG output for sprites with transparency, the alpha channel is removed and blended with a white background.
- The function handles both file paths and buffers as input, providing flexibility in usage.
- Error handling is implemented, with specific error messages for different failure scenarios.