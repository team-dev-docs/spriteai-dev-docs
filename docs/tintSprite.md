# tintSprite Documentation

## Brief Description
`tintSprite` is a function that applies a color tint to an image buffer, modifying the colors of the sprite while preserving its shape and transparency.

## Usage
To use `tintSprite`, you need to import it from the module where it's defined and call it with an image buffer and a color object.

```javascript
import { tintSprite } from './spriteUtils';
```

## Parameters
- `inputBuffer` (Buffer): The input image buffer to be tinted.
- `color` (Object): An object representing the tint color with `r`, `g`, and `b` properties (0-255 values).

## Return Value
Returns a Promise that resolves to a Buffer containing the tinted image data.

## Examples

Basic usage:
```javascript
const originalBuffer = // ... your image buffer
const tintColor = { r: 255, g: 0, b: 0 }; // Red tint
const tintedBuffer = await tintSprite(originalBuffer, tintColor);
```

Using with Sharp for further processing:
```javascript
import sharp from 'sharp';

const originalImage = await sharp('input.png').toBuffer();
const tintedBuffer = await tintSprite(originalImage, { r: 0, g: 255, b: 0 });
await sharp(tintedBuffer).toFile('tinted-output.png');
```

## Notes or Considerations
- The tint effect is applied uniformly across the entire image.
- Transparent areas of the sprite will remain transparent after tinting.
- The intensity of the tint effect may vary depending on the original colors of the sprite.
- For best results, use with PNG images that have transparency.