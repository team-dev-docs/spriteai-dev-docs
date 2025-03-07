# processSprite

## Overview

The `processSprite` function is a powerful tool for manipulating sprite images. It replaces the previous `createProcessor` method and provides a more streamlined approach to applying various operations to sprites.

## Usage

To use the `processSprite` function, import it from the sprite processing module:

```javascript
const { processSprite } = require('./path/to/sprite/module');
```

Then, call the function with an input sprite and optional processing options:

```javascript
const result = await processSprite(inputSprite, options);
```

## Parameters

- `inputSprite` (Buffer | string): The input sprite image. Can be either a Buffer containing the image data or a string representing the file path to the image.
- `options` (object, optional): An object containing various processing options.

### Options

The `options` object can include the following properties:

- `transform` (object): Applies transformations to the sprite.
  - `resize` (object): Resizes the sprite.
    - `width` (number): New width of the sprite.
    - `height` (number): New height of the sprite.
    - `fit` (string, optional): Resizing behavior. Default is 'contain'.
  - `flipHorizontal` (boolean): Flips the sprite horizontally.
  - `flipVertical` (boolean): Flips the sprite vertically.
  - `rotate` (number): Rotates the sprite by the specified angle in degrees.
  - `hsl` (object): Adjusts hue, saturation, and lightness.
    - `hue` (number): Hue adjustment.
    - `saturation` (number): Saturation adjustment.
    - `lightness` (number): Lightness adjustment.
  - `tint` (object): Applies a color tint to the sprite.
    - `r` (number): Red component (0-255).
    - `g` (number): Green component (0-255).
    - `b` (number): Blue component (0-255).
    - `alpha` (number, optional): Opacity of the tint (0-1). Default is 1.
  - `noise` (object): Adds noise to the sprite.
    - `type` (string): Type of noise ('grain', 'scanlines', or 'static').
    - `amount` (number): Intensity of the noise effect.
- `pixelArt` (object): Applies pixel art effects to the sprite.
  - `pixelation` (number | string): Pixelation level. Can be a number or preset ('low', 'medium', 'high').
  - `palette` (object): Reduces the color palette.
    - `preset` (string, optional): Predefined color palette ('gameboy', 'cga', or 'grayscale').
    - `colors` (number, optional): Number of colors to reduce to. Default is 16.
  - `dithering` (boolean): Enables dithering effect when reducing colors.
- `effects` (object): Applies visual effects to the sprite.
  - `outline` (object): Adds an outline to the sprite.
    - `width` (number): Width of the outline.
    - `color` (object): Color of the outline (r, g, b, alpha).
  - `shadow` (object): Adds a shadow effect.
    - `blur` (number): Blur radius of the shadow.
    - `offset` (object): Shadow offset (x, y).
    - `color` (object): Color of the shadow (r, g, b, alpha).
  - `glow` (object): Adds a glow effect.
    - `radius` (number): Radius of the glow.
    - `color` (object): Color of the glow (r, g, b, alpha).
- `output` (object, optional): Specifies output options.
  - `format` (string, optional): Output format (e.g., 'png', 'jpeg'). Default is 'png'.
  - `quality` (number, optional): Output quality (0-100). Default is 80.

## Return Value

The function returns a Promise that resolves to an object containing:

- `buffer` (Buffer): The processed sprite image data.
- `metadata` (object): Information about the processed image, including format and dimensions.

## Examples

1. Resize and rotate a sprite:

```javascript
const inputSprite = fs.readFileSync('input.png');
const result = await processSprite(inputSprite, {
  transform: {
    resize: { width: 64, height: 64 },
    rotate: 90
  }
});
fs.writeFileSync('output.png', result.buffer);
```

2. Apply pixel art effects:

```javascript
const result = await processSprite('input.png', {
  pixelArt: {
    pixelation: 'medium',
    palette: { preset: 'gameboy' },
    dithering: true
  }
});
```

3. Add visual effects:

```javascript
const result = await processSprite('input.png', {
  effects: {
    outline: { width: 2, color: { r: 255, g: 0, b: 0, alpha: 1 } },
    glow: { radius: 10, color: { r: 255, g: 255, b: 0, alpha: 0.5 } }
  }
});
```

## Notes

- The `processSprite` function uses the Sharp library internally for image processing, ensuring high performance and quality results.
- When applying multiple operations, they are processed in the order: transform, pixel art effects, and then visual effects.
- The function supports chaining of operations, allowing for complex sprite manipulations in a single call.
- For best results with pixel art effects, use PNG format to preserve transparency and avoid compression artifacts.