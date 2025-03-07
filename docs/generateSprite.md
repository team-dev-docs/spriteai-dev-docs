---
slug: /
sidebar_position: 1
---
# SpriteProcessor Documentation

## Overview

The `SpriteProcessor` class is a powerful and flexible tool for processing sprite images. It provides a range of features including geometric transformations, color adjustments, pixelation effects, and palette reduction.

## Usage

To use the `SpriteProcessor`, first import it from the module:

```javascript
const SpriteProcessor = require('./path/to/SpriteProcessor');
```

Then, create an instance with an image input:

```javascript
const processor = new SpriteProcessor('path/to/image.png');
```

## Processing Options

The `process` method accepts an options object with the following properties:

- `transform`: Object containing geometric and color transformation options
- `pixelArt`: Object containing pixel art effect options
- `output`: Object specifying output format options

### Transform Options

- `resize`: Object with `width`, `height`, and optional `fit` properties
- `flipHorizontal`: Boolean to flip the image horizontally
- `flipVertical`: Boolean to flip the image vertically
- `rotate`: Number specifying rotation angle in degrees
- `hsl`: Object with `hue`, `saturation`, and `lightness` adjustments
- `tint`: Object with `r`, `g`, `b`, and optional `alpha` values for tinting
- `blendMode`: String specifying the blend mode for tinting (default: 'multiply')

### Pixel Art Options

- `pixelation`: Number or string ('low', 'medium', 'high') for pixelation effect
- `palette`: Object with `preset` (string) or `colors` (number) for palette reduction
- `dithering`: Boolean to enable dithering in palette reduction

### Output Options

- `format`: String specifying output format (default: 'png')
- `quality`: Number specifying output quality (default: 80)
- `metadata`: Boolean to include metadata in output

## Examples

1. Basic usage:

```javascript
const processor = new SpriteProcessor('input.png');
const result = await processor.process();
```

2. Applying transformations:

```javascript
const options = {
  transform: {
    resize: { width: 200, height: 200 },
    flipHorizontal: true,
    rotate: 90,
    hsl: { saturation: 1.5 }
  }
};
const result = await processor.process(options);
```

3. Creating pixel art effect:

```javascript
const options = {
  pixelArt: {
    pixelation: 'medium',
    palette: { preset: 'gameboy' },
    dithering: true
  }
};
const result = await processor.process(options);
```

4. Static helper method:

```javascript
const result = await SpriteProcessor.processSprite('input.png', options);
```

## Notes

- The class uses the `sharp` library for image processing, ensuring high performance and quality results.
- Preset palettes include 'gameboy' and 'cga' color schemes.
- When using the `metadata` output option, the result will be an object containing both the processed image buffer and associated metadata.
