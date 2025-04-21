---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Brief Description
The `SpriteProcessor` class is a fire tool for processing and manipulating sprite images. It lets you create dope sprite sheets for your game dev projects or other visual apps with various transformations and pixel art effects.

## Usage
To use the `SpriteProcessor`, just import it and create an instance with your image, no cap:

```javascript
const SpriteProcessor = require('./path/to/SpriteProcessor');

const processor = new SpriteProcessor('path/to/your/image.png');
```

## Constructor
- `input` (string | Buffer): Path to the image file or a Buffer with the image data.

## Methods

### process(options)
Processes your image with the specified options. It's bussin'!

#### Parameters
- `options` (object, optional):
  - `transform` (object): Resize, flip, rotate, adjust HSL, apply tint
  - `pixelArt` (object): Add pixelation, palette reduction, dithering
  - `output` (object): Set format, quality, include metadata

#### Returns
- Promise: Processed image data + optional metadata

### Static Methods

#### processSprite(input, options)
Static method that creates a new instance and processes the image in one go. Super lit!

#### Parameters
- `input` (string | Buffer): Image path or Buffer
- `options` (object): Same as the `process` method options

#### Returns
- Promise: Processed image data + optional metadata

## Examples

1. Basic image processing:
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

    console.log('Sprite processed successfully');
  } catch (error) {
    console.error('Error processing sprite:', error.message);
  }
}
```

2. Applying pixel art effects:
```javascript
const processor = new SpriteProcessor('input.png');
const result = await processor.process({
  pixelArt: {
    pixelation: 'medium',
    palette: { preset: 'gameboy' },
    dithering: true
  },
  output: { format: 'png', metadata: true }
});
```

## Notes
- Uses the `sharp` library internally for high-key performance
- With `pixelArt` options, expect a reduced color palette and lower resolution
- `gameboy` and `cga` palette presets available for that retro vibe
- Error handling is essential—image processing can fail for sus inputs
- Experiment with different options to get the most based results
