# applyPixelArtFilters

## Brief Description

The `applyPixelArtFilters` function applies pixel art-specific filters and effects to a sprite image. It allows you to create retro-style graphics by applying various transformations such as pixelation, dithering, color palette reduction, and noise effects.

## Usage

To use `applyPixelArtFilters`, import it from the sprite module and call it with the input image and desired options:

```javascript
import { applyPixelArtFilters } from './path/to/sprite/module';

const result = await applyPixelArtFilters(inputImageBuffer, options);
```

## Parameters

- `input` (Buffer | string, required): The input sprite as a buffer or file path.
- `options` (object, optional):
  - `pixelation` (string | number): Pixelation effect ('low', 'medium', 'high', or a custom number).
  - `dithering` (object): Dithering effect settings.
    - `enabled` (boolean): Whether to enable dithering.
    - `pattern` (string): Dithering pattern ('bayer', 'floydSteinberg', or 'halftone').
  - `palette` (object): Color palette constraints.
    - `colors` (number): Number of colors to reduce to.
    - `preset` (string): Predefined color palette ('gameboy', 'nes', 'grayscale', or 'cga').
  - `noise` (object): Retro noise effect settings.
    - `amount` (number): Intensity of the noise effect.
    - `type` (string): Type of noise ('grain', 'static', or 'scanlines').
  - `output` (object): Output options.
    - `format` (string): Output image format.
    - `quality` (number): Output image quality (1-100).

## Return Value

Returns a Promise that resolves to an object containing:
- `buffer` (Buffer): The processed image data.
- `metadata` (object): Information about the processed image, including format, width, height, channels, and size.

## Examples

1. Apply basic pixelation:

```javascript
const inputBuffer = fs.readFileSync('input.png');
const result = await applyPixelArtFilters(inputBuffer, {
  pixelation: 'medium'
});
fs.writeFileSync('output.png', result.buffer);
```

2. Apply dithering and color palette reduction:

```javascript
const result = await applyPixelArtFilters('input.png', {
  pixelation: 'low',
  dithering: { enabled: true, pattern: 'floydSteinberg' },
  palette: { colors: 16, preset: 'nes' }
});
console.log(result.metadata);
```

3. Add retro noise effect:

```javascript
const result = await applyPixelArtFilters(inputBuffer, {
  noise: { amount: 10, type: 'scanlines' },
  output: { format: 'png', quality: 90 }
});
```

## Notes and Considerations

- The function uses the Sharp library for image processing, ensuring high-performance operations.
- Pixelation levels can be fine-tuned by providing a custom number instead of preset levels.
- When using color palette reduction, consider the visual impact on your sprite and adjust the number of colors accordingly.
- Dithering can help create the illusion of more colors when working with a limited palette.
- Experiment with different combinations of effects to achieve the desired retro look for your sprites.
- The function may take longer to process larger images or when applying multiple effects.
- Always test the output with different options to find the best balance between visual quality and file size for your specific use case.