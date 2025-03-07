# createProcessor

## Overview

The `createProcessor` function is a core utility in the sprite processing module. It creates a new `SpriteProcessor` instance, which provides a fluent API for applying various transformations and effects to sprite images.

## Usage

```javascript
import { createProcessor } from './path/to/sprite/module';

const processor = createProcessor(input);
```

## Parameters

- `input` (Buffer | string): The input sprite image. This can be either a Buffer containing the image data or a string representing the file path to the image.

## Return Value

Returns a new `SpriteProcessor` instance that can be used to chain multiple operations on the sprite.

## Examples

### Basic Usage

```javascript
const processor = createProcessor('path/to/sprite.png');
const result = await processor
  .transform({ resize: { width: 100, height: 100 } })
  .output();

console.log(result.buffer); // Processed image buffer
console.log(result.metadata); // Image metadata
```

### Chaining Multiple Operations

```javascript
const processor = createProcessor(spriteBuffer);
const result = await processor
  .transform({
    resize: { width: 64, height: 64 },
    tint: { r: 255, g: 0, b: 0, alpha: 0.5 },
    flipHorizontal: true
  })
  .pixelArt({ pixelation: 'medium', palette: { preset: 'nes' } })
  .effects({ outline: { width: 2, color: { r: 0, g: 0, b: 0, alpha: 1 } } })
  .output({ format: 'png', quality: 90 });
```

## Available Methods

The `SpriteProcessor` instance returned by `createProcessor` provides the following methods:

- `transform(options)`: Apply various transformations to the sprite.
- `pixelArt(options)`: Apply pixel art effects and palette reduction.
- `effects(options)`: Apply visual effects like outlines, shadows, and glows.
- `output(options)`: Generate the final processed image.

For detailed information on the options available for each method, refer to their respective documentation pages.

## Notes

- The `createProcessor` function is designed to work with both file paths and image buffers, providing flexibility in how you input your sprite images.
- All operations are performed asynchronously, so make sure to use `await` or Promise chaining when calling methods on the processor.
- The processor uses the Sharp image processing library internally, which provides high-performance operations on Node.js.