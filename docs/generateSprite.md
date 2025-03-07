---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Brief Description
The `SpriteProcessor` class is a powerful tool for manipulating sprite images, offering various transformations and pixel art effects. It utilizes the Sharp library for efficient image processing.

## Usage
To use the `SpriteProcessor`, import it from the module and create an instance with an input image:

```javascript
const SpriteProcessor = require('./path/to/SpriteProcessor');

const processor = new SpriteProcessor('./path/to/image.png');
```

## Constructor
- `input` (string | Buffer): Path to the image file or a Buffer containing the image data.

## Methods

### process(options)
Applies specified transformations and effects to the image.

#### Parameters
- `options` (object, optional):
  - `transform` (object, optional): Transformation options
    - `resize` (object, optional): Resize options
      - `width` (number): Target width
      - `height` (number): Target height
      - `fit` (string, default: 'contain'): Resize fit option
    - `flipHorizontal` (boolean): Flip the image horizontally
    - `flipVertical` (boolean): Flip the image vertically
    - `rotate` (number): Rotation angle in degrees
    - `hsl` (object, optional): HSL adjustment
      - `hue` (number): Hue adjustment
      - `saturation` (number): Saturation adjustment
      - `lightness` (number): Lightness adjustment
    - `tint` (object, optional): Tint color
      - `r` (number): Red component (0-255)
      - `g` (number): Green component (0-255)
      - `b` (number): Blue component (0-255)
      - `alpha` (number, default: 1.0): Alpha component (0-1)
    - `blendMode` (string, default: 'multiply'): Blend mode for tinting
  - `pixelArt` (object, optional): Pixel art effect options
    - `pixelation` (number | string): Pixelation factor or preset ('low', 'medium', 'high')
    - `palette` (object, optional): Color palette options
      - `preset` (string, optional): Preset palette ('gameboy', 'cga', 'grayscale')
      - `colors` (number, default: 16): Number of colors for custom palette
    - `dithering` (boolean): Enable dithering
  - `output` (object, optional): Output options
    - `format` (string, default: 'png'): Output format
    - `quality` (number, default: 80): Output quality
    - `metadata` (boolean): Include metadata in the result

#### Return Value
Returns a Promise that resolves to:
- If `output.metadata` is true: An object containing `buffer` (processed image data) and `metadata` (format and image info)
- Otherwise: A Buffer containing the processed image data

## Static Methods

### processSprite(input, options)
A convenience method that creates a `SpriteProcessor` instance and calls its `process` method.

#### Parameters
- `input` (string | Buffer): Path to the image file or a Buffer containing the image data
- `options` (object, optional): Same as the `process` method options

#### Return Value
Same as the `process` method

## Examples

1. Basic image resizing:
```javascript
const SpriteProcessor = require('./SpriteProcessor');

async function resizeSprite() {
  const processor = new SpriteProcessor('./input.png');
  const result = await processor.process({
    transform: {
      resize: { width: 64, height: 64 }
    }
  });
  
  // Save the result
  require('fs').writeFileSync('./output.png', result);
}

resizeSprite();
```

2. Applying pixel art effect with a preset palette:
```javascript
const SpriteProcessor = require('./SpriteProcessor');

async function createPixelArt() {
  const result = await SpriteProcessor.processSprite('./input.png', {
    pixelArt: {
      pixelation: 'medium',
      palette: { preset: 'gameboy' },
      dithering: true
    },
    output: { format: 'png', quality: 100 }
  });
  
  // Save the result
  require('fs').writeFileSync('./pixel_art.png', result);
}

createPixelArt();
```

## Notes and Considerations
- The `SpriteProcessor` class uses the Sharp library internally, which provides fast and efficient image processing.
- When using the `pixelArt` option, be mindful that extreme pixelation or limited color palettes may result in loss of detail.
- The `gameboy` and `cga` palette presets are fixed and cannot be modified.
- Error handling is implemented in the `process` method, which will throw an error with a descriptive message if processing fails.
- For best performance, consider reusing `SpriteProcessor` instances when processing multiple images with the same options.
