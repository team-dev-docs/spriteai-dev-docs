---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Brief Description
The `SpriteProcessor` class is a jolly good tool for processing and manipulating sprite images, innit? It provides various transformation and pixel art effects, allowing you chaps to create customized sprite sheets for game development or other graphical applications. Quite splendid!

## Usage
To use the `SpriteProcessor`, import it from the module and create an instance with an input image, as you do:

```javascript
const SpriteProcessor = require('./path/to/SpriteProcessor');

const processor = new SpriteProcessor('path/to/your/image.png');
```

## Constructor
- `input` (string | Buffer): Path to the image file or a Buffer containing the image data. Smashing!

## Methods

### process(options)
Processes the input image with the specified options. Proper job!

#### Parameters
- `options` (object, optional):
  - `transform` (object, optional): Transformation options, rather fancy
    - `resize` (object): `{ width, height, fit }` for resizing the image
    - `flipHorizontal` (boolean): Flip the image horizontally, like a right proper flip
    - `flipVertical` (boolean): Flip the image vertically, topsy-turvy style
    - `rotate` (number): Rotation angle in degrees, give it a good spin
    - `hsl` (object): `{ hue, saturation, lightness }` for HSL adjustments
    - `tint` (object): `{ r, g, b, alpha }` for applying a colour tint (mind the 'u'!)
    - `blendMode` (string): Blending mode for the tint (default: 'multiply')
  - `pixelArt` (object, optional): Pixel art effect options, absolutely brilliant
    - `pixelation` (number | string): Pixelation factor or preset ('low', 'medium', 'high')
    - `palette` (object): `{ preset, colors }` for colour palette reduction
    - `dithering` (boolean): Enable dithering for palette reduction, quite posh
  - `output` (object, optional): Output options, pip pip
    - `format` (string): Output format (default: 'png')
    - `quality` (number): Output quality (default: 80)
    - `metadata` (boolean): Include metadata in the result

#### Returns
- Promise: Processed image data and optional metadata. Bob's your uncle!

### Static Methods

#### processSprite(input, options)
A static method that creates a new `SpriteProcessor` instance and processes the input image. Bloody brilliant!

#### Parameters
- `input` (string | Buffer): Path to the image file or a Buffer containing the image data
- `options` (object): Same as the `process` method options

#### Returns
- Promise: Processed image data and optional metadata

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

    // result is a Buffer containing the processed image data
    console.log('Sprite processed successfully, old chap!');
  } catch (error) {
    console.error('Blimey! Error processing sprite:', error.message);
  }
}

processSpriteExample();
```

2. Applying pixel art effects:
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

    console.log('Processed image metadata, spot on:', result.metadata);
    // result.buffer contains the processed image data
  } catch (error) {
    console.error('Cor blimey! Error creating pixel art:', error.message);
  }
}

pixelArtExample();
```

## Notes and Considerations
- The `SpriteProcessor` uses the `sharp` library internally for image processing, ensuring high-performance operations. Quite the dog's bollocks!
- When using the `pixelArt` options, be aware that the resulting image may have a reduced colour palette and lower resolution. Mind how you go!
- The `gameboy` and `cga` palette presets are available for creating retro-style pixel art. Simply smashing!
- Error handling is important, as image processing operations may fail due to various reasons (e.g., invalid input, unsupported formats). Don't get your knickers in a twist!
- For best results, experiment with different combinations of transformation and pixel art options to achieve the desired effect. Go on, give it a cheeky try!
