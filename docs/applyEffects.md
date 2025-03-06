# applyEffects

The `applyEffects` function applies visual effects to a sprite, such as outlines, drop shadows, and glows. This function is part of the sprite manipulation toolkit and allows for enhancing the visual appearance of sprites.

## Usage

```javascript
const { applyEffects } = require('./path/to/sprite/module');

const result = await applyEffects(input, options);
```

## Parameters

- `input` (Buffer | string): The input sprite as a buffer or file path.
- `options` (Object): An object containing effect options.
  - `outline` (Object, optional): Outline effect options.
    - `width` (number, optional): Width of the outline.
    - `color` (Object, optional): Color of the outline (r, g, b, alpha).
  - `shadow` (Object, optional): Drop shadow effect options.
    - `blur` (number, optional): Blur radius of the shadow.
    - `offset` (Object, optional): Shadow offset (x, y).
    - `color` (Object, optional): Color of the shadow (r, g, b, alpha).
  - `glow` (Object, optional): Glow effect options.
    - `radius` (number, optional): Radius of the glow.
    - `color` (Object, optional): Color of the glow (r, g, b, alpha).
  - `preserveOriginal` (boolean, optional): Whether to composite the effect with the original sprite. Default is true.
  - `output` (Object, optional): Output options.
    - `format` (string, optional): Output image format.
    - `quality` (number, optional): Output image quality.

## Return Value

Returns a Promise that resolves to an object containing:

- `buffer` (Buffer): The processed image buffer.
- `metadata` (Object): Metadata of the processed image.
  - `format` (string): Image format.
  - `width` (number): Image width.
  - `height` (number): Image height.
  - `channels` (number): Number of color channels.
  - `size` (number): File size in bytes.

## Examples

### Adding an outline to a sprite

```javascript
const fs = require('fs');
const { applyEffects } = require('./path/to/sprite/module');

const inputBuffer = fs.readFileSync('input-sprite.png');
const options = {
  outline: {
    width: 2,
    color: { r: 255, g: 0, b: 0, alpha: 1 }
  }
};

const result = await applyEffects(inputBuffer, options);
fs.writeFileSync('output-sprite.png', result.buffer);
```

### Adding multiple effects

```javascript
const options = {
  outline: {
    width: 1,
    color: { r: 0, g: 0, b: 0, alpha: 1 }
  },
  shadow: {
    blur: 5,
    offset: { x: 3, y: 3 },
    color: { r: 0, g: 0, b: 0, alpha: 0.5 }
  },
  glow: {
    radius: 10,
    color: { r: 255, g: 255, b: 0, alpha: 0.7 }
  },
  output: {
    format: 'png',
    quality: 90
  }
};

const result = await applyEffects('input-sprite.png', options);
```

## Notes

- The function uses the `sharp` library for image processing, ensuring high-performance operations.
- Effects are applied in the following order: drop shadow, glow, outline, and original sprite (if preserved).
- The output image may be larger than the input due to the applied effects.
- If `preserveOriginal` is set to false, only the effects will be visible in the output.
- For best results, use PNG images with transparency as input.