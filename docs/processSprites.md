# processSprites

The `processSprites` function is a utility for batch processing multiple sprite images with various operations. It allows you to apply transformations, pixel art effects, and visual effects to multiple sprites in a single operation.

## Usage

```javascript
import { processSprites } from './path/to/sprite/module';

const results = await processSprites(sprites, options);
```

## Parameters

- `sprites` (Array, required): An array of sprite inputs. Each input can be either:
  - A string representing the file path to the sprite image
  - A Buffer containing the image data

- `options` (Object, optional): An object containing processing options:
  - `transform` (Object): Transformation options (resize, flip, rotate, etc.)
  - `pixelArt` (Object): Pixel art effect options (pixelation, palette reduction)
  - `effects` (Object): Visual effect options (outline, shadow, glow)
  - `output` (Object): Output options (format, quality)

## Return Value

Returns a Promise that resolves to an array of Buffer objects, each containing the processed sprite image data.

## Examples

1. Basic usage with file paths:

```javascript
const sprites = ['path/to/sprite1.png', 'path/to/sprite2.png'];
const options = {
  transform: { resize: { width: 64, height: 64 } },
  pixelArt: { pixelation: 'medium' },
  output: { format: 'png', quality: 90 }
};

const processedSprites = await processSprites(sprites, options);
```

2. Using Buffer inputs with multiple effects:

```javascript
const spriteBuffers = [/* array of image buffers */];
const options = {
  transform: { flipHorizontal: true },
  pixelArt: { palette: { preset: 'gameboy' } },
  effects: { 
    outline: { width: 2, color: { r: 255, g: 0, b: 0, alpha: 1 } },
    glow: { radius: 5, color: { r: 255, g: 255, b: 0, alpha: 0.5 } }
  }
};

const processedSprites = await processSprites(spriteBuffers, options);
```

## Notes

- The function processes each sprite independently, allowing for parallel processing of multiple images.
- If an error occurs during the processing of any sprite, it will be caught and logged, but will not stop the processing of other sprites.
- The output format defaults to PNG if not specified in the options.
- When using file paths, ensure that the files exist and are readable.
- For large batches of sprites, consider processing in smaller chunks to manage memory usage.