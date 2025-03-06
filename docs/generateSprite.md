# colorizeSprite

## Brief Description

The `colorizeSprite` function applies color manipulation effects to a sprite image, allowing you to tint, adjust HSL values, and preserve alpha channels.

## Usage

To use `colorizeSprite`, import it from the sprite module and call it with an input sprite and options:

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.colorizeSprite(inputSprite, options);
```

## Parameters

- `input` (Buffer | string, required): Input sprite as a buffer or file path.
- `options` (object, optional):
  - `tint` (object): Tint color {r: number, g: number, b: number, alpha?: number}
  - `mode` (string): Blend mode for tint ('multiply', 'overlay', 'screen', etc.). Default: 'multiply'
  - `hsl` (object): HSL adjustments {hue?: number, saturation?: number, lightness?: number}
  - `preserveAlpha` (boolean): Whether to preserve the original alpha channel. Default: true
  - `output` (object): Output options {format?: string, quality?: number}

## Return Value

Returns a Promise that resolves to an object containing:
- `buffer`: Buffer containing the processed image data
- `metadata`: Object with format, width, height, channels, and size information

## Examples

1. Apply a red tint to a sprite:

```javascript
const inputSprite = 'path/to/sprite.png';
const options = {
  tint: { r: 255, g: 0, b: 0, alpha: 0.5 },
  mode: 'multiply'
};

const result = await sprite.colorizeSprite(inputSprite, options);
console.log(result.metadata);
```

2. Adjust HSL values:

```javascript
const inputBuffer = fs.readFileSync('path/to/sprite.png');
const options = {
  hsl: { hue: 180, saturation: 1.2, lightness: 0.8 },
  preserveAlpha: true,
  output: { format: 'png', quality: 90 }
};

const result = await sprite.colorizeSprite(inputBuffer, options);
fs.writeFileSync('output.png', result.buffer);
```

## Notes or Considerations

- The function uses the Sharp library for image processing, ensuring high-performance operations.
- When applying a tint, you can adjust the alpha value to control the intensity of the effect.
- HSL adjustments allow for fine-tuning of the sprite's colors without affecting its overall structure.
- The `preserveAlpha` option is useful when you want to maintain the original transparency of the sprite.
- You can combine tinting and HSL adjustments in a single operation for more complex color manipulations.
- The function supports various input and output formats, defaulting to PNG if not specified.