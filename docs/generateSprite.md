---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Brief Description
The `SpriteProcessor` class is a rather smashing tool for processing and manipulating sprite images. It provides various transformation and pixel art effects, allowing developers to create customized sprite sheets for game development or other graphical applications. Quite brilliant, isn't it?

## Usage
To use the `SpriteProcessor`, import it from the module and create an instance with an input image, easy-peasy:

```javascript
const SpriteProcessor = require('./path/to/SpriteProcessor');

const processor = new SpriteProcessor('path/to/your/image.png');
```

## Constructor
- `input` (string | Buffer): Path to the image file or a Buffer containing the image data. Splendid!

## Methods

### process(options)
Processes the input image with the specified options. Rather clever, this one.

#### Parameters
- `options` (object, optional):
  - `transform` (object, optional): Transformation options, quite posh
    - `resize` (object): `{ width, height, fit }` for resizing the image
    - `flipHorizontal` (boolean): Flip the image horizontally, like a proper English pancake
    - `flipVertical` (boolean): Flip the image vertically
    - `rotate` (number): Rotation angle in degrees, a right proper spin
    - `hsl` (object): `{ hue, saturation, lightness }` for HSL adjustments
    - `tint` (object): `{ r, g, b, alpha }` for applying a colour tint (mind the spelling, chaps)
    - `blendMode` (string): Blending mode for the tint (default: 'multiply')
  - `pixelArt` (object, optional): Pixel art effect options, jolly good stuff
    - `pixelation` (number | string): Pixelation factor or preset ('low', 'medium', 'high')
    - `palette` (object): `{ preset, colors }` for colour palette reduction
    - `dithering` (boolean): Enable dithering for palette reduction, rather fancy
  - `output` (object, optional): Output options
    - `format` (string): Output format (default: 'png')
    - `quality` (number): Output quality (default: 80)
    - `metadata` (boolean): Include metadata in the result, for the keen beans

#### Returns
- Promise: Processed image data and optional metadata. Smashing result!

### Static Methods

#### processSprite(input, options)
A static method that creates a new `SpriteProcessor` instance and processes the input image. Bob's your uncle!

#### Parameters
- `input` (string | Buffer): Path to the image file or a Buffer containing the image data
- `options` (object): Same as the `process` method options

#### Returns
- Promise: Processed image data and optional metadata

## Examples

1. Basic image processing, nothing too dodgy:
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
    console.log('Sprite processed successfully, innit!');
  } catch (error) {
    console.error('Blimey! Error processing sprite:', error.message);
  }
}

processSpriteExample();
```

2. Applying pixel art effects, quite the cracking result:
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

    console.log('Processed image metadata, spot on!:', result.metadata);
    // result.buffer contains the processed image data
  } catch (error) {
    console.error('Cor blimey! Error creating pixel art:', error.message);
  }
}

pixelArtExample();
```

## Notes and Considerations
- The `SpriteProcessor` uses the `sharp` library internally for image processing, ensuring high-performance operations. Proper chuffed with that!
- When using the `pixelArt` options, be aware that the resulting image may have a reduced colour palette and lower resolution. Mind how you go!
- The `gameboy` and `cga` palette presets are available for creating retro-style pixel art. Ace!
- Error handling is important, as image processing operations may fail due to various reasons (e.g., invalid input, unsupported formats). Don't be daft, handle your errors!
- For best results, experiment with different combinations of transformation and pixel art options to achieve the desired effect. Have a bash at it!
