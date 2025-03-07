---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Overview

The `SpriteProcessor` class is a powerful tool for manipulating and processing sprite images. It provides a range of features including image transformation, pixel art effects, and palette manipulation.

## Installation

To use the `SpriteProcessor` class, make sure you have the following dependencies installed:

```bash
npm install sharp fs
```

## Usage

First, import the `SpriteProcessor` class:

```javascript
const SpriteProcessor = require('./path/to/SpriteProcessor');
```

Then, create an instance of the `SpriteProcessor` class:

```javascript
const processor = new SpriteProcessor('path/to/your/image.png');
```

## API

### Constructor

```javascript
new SpriteProcessor(input)
```

- `input`: Can be either a string (file path) or a buffer containing the image data.

### process(options)

The main method for processing the sprite image.

```javascript
processor.process(options)
```

#### Options

- `transform`: Object containing transformation options
  - `resize`: Object with `width`, `height`, and optional `fit` (default: 'contain')
  - `flipHorizontal`: Boolean
  - `flipVertical`: Boolean
  - `rotate`: Number (degrees)
  - `hsl`: Object with `hue`, `saturation`, and `lightness`
  - `tint`: Object with `r`, `g`, `b`, and optional `alpha`
  - `blendMode`: String (default: 'multiply')

- `pixelArt`: Object containing pixel art effect options
  - `pixelation`: Number or String ('low', 'medium', 'high')
  - `palette`: Object with `preset` (String) or `colors` (Number)
  - `dithering`: Boolean

- `output`: Object containing output options
  - `format`: String (default: 'png')
  - `quality`: Number (default: 80)
  - `metadata`: Boolean

### Static Methods

#### processSprite(input, options)

A convenience method that creates a `SpriteProcessor` instance and processes the sprite in one step.

```javascript
SpriteProcessor.processSprite(input, options)
```

## Examples

### Basic Usage

```javascript
const SpriteProcessor = require('./SpriteProcessor');

async function processSprite() {
  const processor = new SpriteProcessor('input.png');
  const result = await processor.process({
    transform: {
      resize: { width: 200, height: 200 },
      flipHorizontal: true,
      rotate: 90
    },
    pixelArt: {
      pixelation: 'medium',
      palette: { preset: 'gameboy' }
    },
    output: { format: 'png', quality: 90 }
  });

  // result is a buffer containing the processed image
  console.log('Processed image size:', result.length);
}

processSprite();
```

### Using Static Method

```javascript
const SpriteProcessor = require('./SpriteProcessor');

async function processMultipleSprites() {
  const inputs = ['sprite1.png', 'sprite2.png', 'sprite3.png'];
  const options = {
    pixelArt: { pixelation: 8, palette: { colors: 16 } },
    output: { format: 'jpeg', quality: 85 }
  };

  for (const input of inputs) {
    const result = await SpriteProcessor.processSprite(input, options);
    console.log(`Processed ${input}, size: ${result.length}`);
  }
}

processMultipleSprites();
```

## Notes

- The `SpriteProcessor` class uses the `sharp` library internally for image processing, which provides high performance and low memory usage.
- When using the `gameboy` or `cga` palette presets, the number of colors is fixed and the `colors` option in the palette settings will be ignored.
- The `pixelation` option can significantly affect the image quality and processing time. Use higher values for a more pronounced pixel art effect.
- For best results with pixel art effects, start with high-resolution source images.
