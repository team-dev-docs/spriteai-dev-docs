---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Overview

The `SpriteProcessor` class is a powerful tool for manipulating and transforming sprite images. It provides various options for resizing, flipping, rotating, adjusting colors, and applying pixel art effects to sprites.

## Usage

To use the `SpriteProcessor`, first import it from the module:

```javascript
const SpriteProcessor = require('./path/to/SpriteProcessor');
```

Then, create an instance of the `SpriteProcessor` with an input image:

```javascript
const processor = new SpriteProcessor('path/to/input/image.png');
```

## Methods

### process(options)

The main method for processing sprites. It applies various transformations and effects based on the provided options.

#### Parameters

- `options` (object): An object containing the following optional properties:
  - `transform` (object): Transformation options
    - `resize` (object): Resizing options
      - `width` (number): New width
      - `height` (number): New height
      - `fit` (string): Resizing fit mode (default: 'contain')
    - `flipHorizontal` (boolean): Flip the image horizontally
    - `flipVertical` (boolean): Flip the image vertically
    - `rotate` (number): Rotation angle in degrees
    - `hsl` (object): HSL adjustment options
      - `hue` (number): Hue adjustment
      - `saturation` (number): Saturation adjustment
      - `lightness` (number): Lightness adjustment
    - `tint` (object): Tint color options
      - `r` (number): Red component (0-255)
      - `g` (number): Green component (0-255)
      - `b` (number): Blue component (0-255)
      - `alpha` (number): Alpha component (0-1)
    - `blendMode` (string): Blend mode for tinting (default: 'multiply')
  - `pixelArt` (object): Pixel art effect options
    - `pixelation` (number|string): Pixelation factor or preset ('low', 'medium', 'high')
    - `palette` (object): Color palette options
      - `preset` (string): Preset palette ('gameboy', 'cga', 'grayscale')
      - `colors` (number): Number of colors for custom palette
    - `dithering` (boolean): Enable dithering
  - `output` (object): Output options
    - `format` (string): Output format (default: 'png')
    - `quality` (number): Output quality (0-100)
    - `metadata` (boolean): Include metadata in output

#### Returns

A Promise that resolves to:
- A Buffer containing the processed image data if `output.metadata` is false
- An object containing `buffer` (processed image data) and `metadata` (image information) if `output.metadata` is true

### Static Methods

#### processSprite(input, options)

A static method that creates a new `SpriteProcessor` instance and processes the input image with the given options.

#### Parameters

- `input` (string|Buffer): Path to the input image or a Buffer containing image data
- `options` (object): Same as the `process` method options

#### Returns

Same as the `process` method

## Examples

### Basic Usage

```javascript
const SpriteProcessor = require('./SpriteProcessor');

async function processMySprite() {
  try {
    const result = await SpriteProcessor.processSprite('input.png', {
      transform: {
        resize: { width: 64, height: 64 },
        flipHorizontal: true,
        rotate: 90
      },
      pixelArt: {
        pixelation: 'medium',
        palette: { preset: 'gameboy' }
      },
      output: { format: 'png', quality: 90 }
    });
    
    // result is a Buffer containing the processed image data
    console.log('Sprite processed successfully');
  } catch (error) {
    console.error('Error processing sprite:', error.message);
  }
}

processMySprite();
```

### Advanced Usage with Metadata

```javascript
const SpriteProcessor = require('./SpriteProcessor');

async function processAdvancedSprite() {
  const processor = new SpriteProcessor('input.png');
  
  try {
    const result = await processor.process({
      transform: {
        resize: { width: 128, height: 128, fit: 'fill' },
        hsl: { hue: 180, saturation: 1.2, lightness: 1.1 },
        tint: { r: 255, g: 200, b: 100, alpha: 0.5 },
        blendMode: 'overlay'
      },
      pixelArt: {
        pixelation: 8,
        palette: { colors: 16 },
        dithering: true
      },
      output: {
        format: 'jpeg',
        quality: 85,
        metadata: true
      }
    });
    
    console.log('Processed image buffer:', result.buffer);
    console.log('Image metadata:', result.metadata);
  } catch (error) {
    console.error('Error processing sprite:', error.message);
  }
}

processAdvancedSprite();
```

## Notes

- The `SpriteProcessor` uses the `sharp` library internally for image processing, which provides high-performance operations.
- When using the `pixelArt` options, be mindful that applying a preset palette will override any custom color settings.
- The `processSprite` static method is a convenient way to quickly process a sprite without manually creating a `SpriteProcessor` instance.
- Error handling is important, as image processing operations may fail due to various reasons such as invalid input or insufficient memory.
