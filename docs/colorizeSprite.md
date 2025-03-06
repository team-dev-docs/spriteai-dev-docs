# colorizeSprite Documentation

## Brief Description

The `colorizeSprite` function applies color manipulation to a sprite image, allowing you to tint, adjust hue/saturation/lightness, and preserve alpha channels. This function is part of the sprite manipulation toolkit in our image processing module.

## Usage

To use `colorizeSprite`, import it from the sprite module and call it with an input sprite and options:

```javascript
import { colorizeSprite } from './path/to/sprite/module';

const result = await colorizeSprite(inputSprite, options);
```

## Parameters

- `input` (Buffer | string, required): The input sprite as a buffer or file path.
- `options` (object, optional):
  - `tint` (object): Tint color {r: number, g: number, b: number, alpha?: number}
  - `mode` (string): Blend mode for tinting (default: 'multiply')
  - `hsl` (object): HSL adjustments {hue?: number, saturation?: number, lightness?: number}
  - `preserveAlpha` (boolean): Whether to preserve the original alpha channel (default: true)
  - `output` (object): Output options {format?: string, quality?: number}

## Return Value

Returns a Promise that resolves to an object containing:
- `buffer`: The processed image as a Buffer
- `metadata`: Object with image metadata (format, width, height, channels, size)

## Examples

1. Basic tinting:
```javascript
const inputSprite = fs.readFileSync('path/to/sprite.png');
const result = await colorizeSprite(inputSprite, {
  tint: { r: 255, g: 0, b: 0 } // Apply red tint
});
console.log(result.metadata);
```

2. HSL adjustments:
```javascript
const result = await colorizeSprite('path/to/sprite.png', {
  hsl: { hue: 180, saturation: 1.5, lightness: 0.8 }
});
```

3. Tinting with custom blend mode and output format:
```javascript
const result = await colorizeSprite(spriteBuffer, {
  tint: { r: 0, g: 255, b: 0, alpha: 0.5 },
  mode: 'screen',
  output: { format: 'jpeg', quality: 90 }
});
```

## Notes and Considerations

- The function uses the Sharp library for image processing, ensuring high performance and quality output.
- When applying tint, you can adjust the alpha value to control the intensity of the tint effect.
- The `preserveAlpha` option is useful when you want to maintain transparency in sprites with an alpha channel.
- Supported blend modes include 'multiply', 'overlay', 'screen', and others provided by the Sharp library.
- HSL adjustments allow for fine-tuning of the sprite's colors without affecting its overall structure.
- The function handles both file paths and buffers as input, providing flexibility in usage.
- Error handling is implemented, so be sure to use try-catch blocks when calling the function.