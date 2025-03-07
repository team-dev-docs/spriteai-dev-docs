---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Brief Description
The `SpriteProcessor` class is a minimalist sprite processing library that allows you to apply various transformations and pixel art effects to images.

## Usage
To use the `SpriteProcessor`, import it from the module and create an instance with an image buffer or file path.

```javascript
import SpriteProcessor from './path/to/sprite/module';

const processor = new SpriteProcessor('./path/to/image.png');
```

## Constructor
- `input` (Buffer|string, required): Image buffer or file path

## Methods

### process(options)
Process the sprite with all operations in a single call.

#### Parameters
- `options` (object, optional): Processing options
  - `transform` (object): Transformation options
    - `resize` (object): Resize options (width, height, fit)
    - `flipHorizontal` (boolean): Flip the image horizontally
    - `flipVertical` (boolean): Flip the image vertically
    - `rotate` (number): Rotation angle in degrees
    - `hsl` (object): HSL adjustments (hue, saturation, lightness)
    - `tint` (object): Tint color (r, g, b, alpha)
  - `pixelArt` (object): Pixel art effect options
    - `pixelation` (number|string): Pixelation factor or preset ('low', 'medium', 'high')
    - `palette` (object): Color palette reduction options
      - `preset` (string): Predefined palette ('grayscale', 'gameboy', 'cga')
      - `colors` (number): Number of colors (default: 16)
    - `dithering` (boolean): Enable dithering
  - `output` (object): Output options
    - `format` (string): Output format (default: 'png')
    - `quality` (number): Output quality (default: 80)
    - `metadata` (boolean): Include metadata in the result

#### Returns
- Promise<Buffer|Object>: Processed image buffer or object with metadata

## Static Methods

### processSprite(input, options)
Static helper to quickly process a sprite.

#### Parameters
- `input` (Buffer|string, required): Image buffer or file path
- `options` (object, optional): Processing options (same as `process` method)

#### Returns
- Promise<Buffer|Object>: Processed image

## Examples

1. Basic image processing:
```javascript
const processor = new SpriteProcessor('./input.png');
const result = await processor.process({
  transform: {
    resize: { width: 64, height: 64 },
    flipHorizontal: true
  },
  pixelArt: {
    pixelation: 'medium',
    palette: { preset: 'gameboy' }
  },
  output: { format: 'png', quality: 90 }
});
```

2. Using the static helper method:
```javascript
const result = await SpriteProcessor.processSprite('./input.png', {
  transform: { rotate: 90 },
  pixelArt: { pixelation: 4 },
  output: { metadata: true }
});
console.log(result.metadata);
```

## Notes
- The `SpriteProcessor` uses the Sharp library for image processing, which provides fast and efficient operations.
- Pixel art effects can significantly reduce the color palette and image quality, which is often desirable for retro-style graphics.
- When using the `gameboy` or `cga` palette presets, the image will be limited to 4 colors.
- Error handling is implemented, and processing failures will throw an error with a descriptive message.
