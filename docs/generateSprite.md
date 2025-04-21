---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Overview
The `SpriteProcessor` class is a comprehensive utility for processing and manipulating sprite images. It provides a robust set of transformation options and pixel art effects, enabling developers to generate customized sprite sheets for game development and graphical applications.

## Installation
To use the `SpriteProcessor` in your project, install it via npm:

```bash
npm install sprite-processor
```

## Basic Usage
Import the `SpriteProcessor` class and create an instance with your source image:

```javascript
const SpriteProcessor = require('./path/to/SpriteProcessor');

const processor = new SpriteProcessor('path/to/your/image.png');
```

## API Reference

### Constructor
- `input` (string | Buffer): Path to the image file or a Buffer containing the image data.

### Methods

#### process(options)
Processes the input image with the specified configuration options.

##### Parameters
- `options` (object, optional):
  - `transform` (object, optional): Transformation options
    - `resize` (object): `{ width, height, fit }` for resizing the image
    - `flipHorizontal` (boolean): Flip the image horizontally
    - `flipVertical` (boolean): Flip the image vertically
    - `rotate` (number): Rotation angle in degrees
    - `hsl` (object): `{ hue, saturation, lightness }` for HSL adjustments
    - `tint` (object): `{ r, g, b, alpha }` for applying a color tint
    - `blendMode` (string): Blending mode for the tint (default: 'multiply')
  - `pixelArt` (object, optional): Pixel art effect options
    - `pixelation` (number | string): Pixelation factor or preset ('low', 'medium', 'high')
    - `palette` (object): `{ preset, colors }` for color palette reduction
    - `dithering` (boolean): Enable dithering for palette reduction
  - `output` (object, optional): Output options
    - `format` (string): Output format (default: 'png')
    - `quality` (number): Output quality (default: 80)
    - `metadata` (boolean): Include metadata in the result

##### Returns
- Promise: Processed image data and optional metadata

### Static Methods

#### processSprite(input, options)
A static utility method that creates a new `SpriteProcessor` instance and processes the input image in one step.

##### Parameters
- `input` (string | Buffer): Path to the image file or a Buffer containing the image data
- `options` (object): Same as the `process` method options

##### Returns
- Promise: Processed image data and optional metadata

## Implementation Examples

### Example 1: Basic Image Transformations
```javascript
const SpriteProcessor = require('./SpriteProcessor');

async function processSpriteExample() {
  try {
    const result = await SpriteProcessor.processSprite('input.png', {
      transform: {
        resize: { width: 64, height: 64, fit: 'contain' },
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

processSpriteExample();
```

### Example 2: Applying Pixel Art Effects
```javascript
const SpriteProcessor = require('./SpriteProcessor');

async function pixelArtExample() {
  try {
    const processor = new SpriteProcessor('input.png');
    const result = await processor.process({
      pixelArt: {
        pixelation: 'medium',
        palette: { preset: 'gameboy' },
        dithering: true
      },
      output: { format: 'png', metadata: true }
    });

    console.log('Processed image metadata:', result.metadata);
    // result.buffer contains the processed image data
  } catch (error) {
    console.error('Error creating pixel art:', error.message);
  }
}

pixelArtExample();
```

## Technical Considerations
- `SpriteProcessor` leverages the high-performance `sharp` library for efficient image processing operations.
- When implementing pixel art effects, consider that the output will have reduced color depth and potentially altered resolution characteristics.
- Predefined palette presets (`gameboy`, `cga`) are optimized for retro-style visual aesthetics.
- Implement proper error handling in production code, as image processing operations may encounter issues with invalid inputs or unsupported formats.
- Performance optimization: For batch processing of multiple sprites, consider using a processing queue to manage memory utilization.

## Best Practices
- Test transformations with sample images before applying to production assets.
- For web applications, consider generating multiple resolution variants for responsive design.
- When working with pixelation effects, start with conservative settings and adjust based on visual feedback.
- Store transformation parameters separately from the processing code to enable easy tweaking and version control.
