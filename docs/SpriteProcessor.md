# SpriteProcessor

The `SpriteProcessor` class is a smashing sprite processing library that provides various methods for manipulating and creating sprite images. It offers rather splendid functionality for resizing, transforming, applying pixel art effects, and creating sprite sheets. It's a proper brilliant tool for all your sprite needs, simply wicked cool! This masterpiece of programming wizardry will turn your dull sprites into proper dazzling works of art faster than you can say "blimey"!

## Installation

To use the `SpriteProcessor` class, make sure you have the required dependencies installed:

```bash
npm install fs sharp
```

## Usage

First, import the `SpriteProcessor` class:

```javascript
const SpriteProcessor = require('./path/to/SpriteProcessor');
```

## Constructor

Create a new `SpriteProcessor` instance:

```javascript
const processor = new SpriteProcessor(input);
```

- `input`: A `Buffer` containing the image data or a string representing the file path to the image.

## Methods

### process(options)

Process a sprite with all operations in a single call.

```javascript
const result = await processor.process(options);
```

#### Options

- `transform`: Object containing transformation options
  - `resize`: Object with `width`, `height`, and optional `fit` properties
  - `flipHorizontal`: Boolean
  - `flipVertical`: Boolean
  - `rotate`: Number (degrees)
  - `hsl`: Object with `hue`, `saturation`, and `lightness` properties
  - `tint`: Object with `r`, `g`, `b`, and optional `alpha` properties
- `pixelArt`: Object containing pixel art effect options
  - `pixelation`: Number or string ('low', 'medium', 'high')
  - `palette`: Object with `preset` or `colors` property
- `effects`: Object containing visual effect options
  - `outline`: Object with `width` and `color` properties
  - `shadow`: Object with `blur`, `offset`, and `color` properties
  - `glow`: Object with `radius` and `color` properties
- `output`: Object with `format`, `quality`, and `metadata` properties

#### Returns

A `Promise` that resolves to a `Buffer` containing the processed image data, or an object with `buffer` and `metadata` properties if `output.metadata` is set to `true`.

### createSheet(sprites, options)

Create a sprite sheet from multiple images.

```javascript
const result = await SpriteProcessor.createSheet(sprites, options);
```

#### Parameters

- `sprites`: Array of image buffers or file paths
- `options`: Object containing sheet creation options
  - `columns`: Number of columns in the sprite sheet
  - `spacing`: Pixel spacing between sprites (optional)
  - `padding`: Pixel padding around the sheet (optional)

#### Returns

A `Promise` that resolves to an object containing:
- `buffer`: The sprite sheet image data
- `width`: Total width of the sprite sheet
- `height`: Total height of the sprite sheet
- `spriteWidth`: Width of each individual sprite
- `spriteHeight`: Height of each individual sprite
- `rows`: Number of rows in the sprite sheet
- `columns`: Number of columns in the sprite sheet

### extractFromSheet(spriteSheet, options)

Extract individual sprites from a sprite sheet.

```javascript
const sprites = await SpriteProcessor.extractFromSheet(spriteSheet, options);
```

#### Parameters

- `spriteSheet`: Buffer containing the sprite sheet image data or a string representing the file path
- `options`: Object containing extraction options
  - `columns`: Number of columns in the sprite sheet
  - `rows`: Number of rows in the sprite sheet
  - `padding`: Pixel padding around the sheet (optional)
  - `spacing`: Pixel spacing between sprites (optional)

#### Returns

A `Promise` that resolves to an array of objects, each containing:
- `buffer`: The extracted sprite image data
- `position`: Object with `row` and `col` properties indicating the sprite's position in the sheet

### createAnimation(frames, options)

Create an animated WebP image from sprite frames.

```javascript
const animation = await SpriteProcessor.createAnimation(frames, options);
```

#### Parameters

- `frames`: Array of image buffers or file paths representing animation frames
- `options`: Object containing animation options
  - `delay`: Frame delay in milliseconds (default: 100)
  - `loop`: Number of times to loop the animation (default: 0, infinite)
  - `quality`: Output image quality (0-100, default: 80)

#### Returns

A `Promise` that resolves to a `Buffer` containing the animated WebP image data.

## Example

```javascript
const SpriteProcessor = require('./SpriteProcessor');

async function example() {
  // Process a single sprite
  const processor = new SpriteProcessor('path/to/sprite.png');
  const processedSprite = await processor.process({
    transform: { resize: { width: 64, height: 64 } },
    pixelArt: { pixelation: 'medium', palette: { preset: 'gameboy' } },
    effects: { outline: { width: 2, color: { r: 0, g: 0, b: 0, alpha: 1 } } }
  });

  // Create a sprite sheet
  const sprites = ['sprite1.png', 'sprite2.png', 'sprite3.png', 'sprite4.png'];
  const sheet = await SpriteProcessor.createSheet(sprites, { columns: 2 });

  // Extract sprites from a sheet
  const extractedSprites = await SpriteProcessor.extractFromSheet('sheet.png', { columns: 2, rows: 2 });

  // Create an animation
  const frames = ['frame1.png', 'frame2.png', 'frame3.png', 'frame4.png'];
  const animation = await SpriteProcessor.createAnimation(frames, { delay: 200, loop: 3 });
}

example();
```

This documentation provides an overview of the `SpriteProcessor` class and its main methods. For more detailed information on specific options and advanced usage, please refer to the inline comments in the source code.
