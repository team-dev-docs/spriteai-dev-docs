---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Brief Description
The `SpriteProcessor` class is a powerful tool for processing and manipulating sprite images. It provides various transformation and pixel art effects, making it ideal for game developers and graphic designers working with sprite sheets.

## Usage
To use the `SpriteProcessor`, import it from the module and create an instance with an input image:

```javascript
const SpriteProcessor = require('./path/to/SpriteProcessor');

const processor = new SpriteProcessor('path/to/your/image.png');
```

## Methods

### constructor(input)
Creates a new `SpriteProcessor` instance.

- `input` (string | Buffer): Path to the image file or a Buffer containing the image data.

### async process(options)
Processes the sprite image with the specified options.

- `options` (object):
  - `transform` (object, optional): Transformation options.
    - `resize` (object): Resizes the image.
      - `width` (number): New width.
      - `height` (number): New height.
      - `fit` (string, optional): Resize fit option (default: 'contain').
    - `flipHorizontal` (boolean): Flips the image horizontally.
    - `flipVertical` (boolean): Flips the image vertically.
    - `rotate` (number): Rotates the image by the specified degrees.
    - `hsl` (object): Adjusts HSL values.
      - `hue` (number): Hue adjustment.
      - `saturation` (number): Saturation adjustment.
      - `lightness` (number): Lightness adjustment.
    - `tint` (object): Applies a color tint.
      - `r` (number): Red component (0-255).
      - `g` (number): Green component (0-255).
      - `b` (number): Blue component (0-255).
      - `alpha` (number, optional): Alpha value (0-1, default: 1.0).
    - `blendMode` (string, optional): Blend mode for tint (default: 'multiply').
  - `pixelArt` (object, optional): Pixel art effect options.
    - `pixelation` (number | string): Pixelation factor or preset ('low', 'medium', 'high').
    - `palette` (object): Color palette options.
      - `preset` (string): Preset palette ('gameboy', 'cga', or 'grayscale').
      - `colors` (number): Number of colors for custom palette.
    - `dithering` (boolean): Enables dithering effect.
  - `output` (object, optional): Output options.
    - `format` (string): Output image format (default: 'png').
    - `quality` (number): Output image quality (0-100, default: 80).
    - `metadata` (boolean): Include metadata in the result.

Returns a Promise that resolves to:
- If `output.metadata` is true: An object with `buffer` (processed image data) and `metadata` (format and image info).
- Otherwise: A Buffer containing the processed image data.

### static processSprite(input, options)
A static method that creates a `SpriteProcessor` instance and processes the sprite in one step.

- `input` (string | Buffer): Path to the image file or a Buffer containing the image data.
- `options` (object): Same as the `process` method options.

Returns the same as the `process` method.

## Examples

1. Basic image processing:

```javascript
const SpriteProcessor = require('./SpriteProcessor');

async function processSprite() {
  try {
    const result = await SpriteProcessor.processSprite('input.png', {
      transform: {
        resize: { width: 64, height: 64 },
        flipHorizontal: true,
        rotate: 90
      },
      output: { format: 'png', quality: 90 }
    });
    
    // result is a Buffer containing the processed image data
    console.log('Sprite processed successfully');
  } catch (error) {
    console.error('Error processing sprite:', error.message);
  }
}

processSprite();
```

2. Applying pixel art effects:

```javascript
const SpriteProcessor = require('./SpriteProcessor');

async function createPixelArtSprite() {
  const processor = new SpriteProcessor('character.png');
  
  try {
    const result = await processor.process({
      pixelArt: {
        pixelation: 'medium',
        palette: { preset: 'gameboy' },
        dithering: true
      },
      output: { metadata: true }
    });
    
    console.log('Processed image info:', result.metadata);
    // Save the result.buffer to a file or use it as needed
  } catch (error) {
    console.error('Error creating pixel art:', error.message);
  }
}

createPixelArtSprite();
```

## Notes and Considerations
- The `SpriteProcessor` uses the `sharp` library internally for image processing, which provides fast and efficient operations.
- When using the `pixelArt` options, be mindful that extreme pixelation or limited color palettes may result in loss of detail.
- The `gameboy` and `cga` palette presets are fixed and cannot be modified. For custom palettes, use the `colors` option instead of `preset`.
- Error handling is important, as image processing operations may fail due to various reasons (e.g., invalid input, unsupported formats).
- Large images may require more processing time and memory. Consider resizing large sprites before applying complex effects.
