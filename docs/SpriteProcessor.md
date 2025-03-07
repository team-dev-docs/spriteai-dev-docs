# SpriteProcessor

The SpriteProcessor class provides a fluent API for performing various sprite operations and transformations. It allows you to chain multiple operations together to create complex sprite modifications.

## Usage

To use the SpriteProcessor, first import it from the sprite module:

```javascript
import { createProcessor } from './path/to/sprite/module';
```

Then create a new SpriteProcessor instance by passing in the input sprite (either as a file path or buffer):

```javascript
const processor = createProcessor('path/to/sprite.png');
```

## Methods

### transform(options)

Applies various transformations to the sprite.

Options:
- `resize`: Resizes the sprite. Takes an object with `width` and/or `height`.
- `tint`: Applies a color tint. Takes an object with `r`, `g`, `b` values.
- `hsl`: Adjusts hue, saturation, and lightness. Takes an object with `hue`, `saturation`, `lightness` values.
- `flipHorizontal`: Flips the sprite horizontally if true.
- `flipVertical`: Flips the sprite vertically if true.
- `rotate`: Rotates the sprite by the specified angle in degrees.
- `noise`: Applies a noise effect. Takes an object with `type` ('grain', 'scanlines', or 'static') and `amount`.

```javascript
await processor.transform({
  resize: { width: 100, height: 100 },
  tint: { r: 255, g: 0, b: 0 },
  flipHorizontal: true,
  rotate: 45
});
```

### pixelArt(options)

Applies pixel art effects to the sprite.

Options:
- `pixelation`: Applies pixelation effect. Can be 'low', 'medium', 'high', or a number.
- `palette`: Reduces the color palette. Takes an object with:
  - `colors`: Number of colors to reduce to.
  - `preset`: Can be 'gameboy', 'nes', 'cga', or 'grayscale'.
- `dithering`: Applies dithering when reducing colors if true.

```javascript
await processor.pixelArt({
  pixelation: 'medium',
  palette: { preset: 'nes' },
  dithering: true
});
```

### effects(options)

Applies visual effects to the sprite.

Options:
- `outline`: Adds an outline. Takes an object with `width` and `color`.
- `shadow`: Adds a drop shadow. Takes an object with `blur`, `offset`, and `color`.
- `glow`: Adds a glow effect. Takes an object with `radius` and `color`.

```javascript
await processor.effects({
  outline: { width: 2, color: { r: 0, g: 0, b: 0, alpha: 1 } },
  shadow: { blur: 5, offset: { x: 5, y: 5 }, color: { r: 0, g: 0, b: 0, alpha: 0.5 } }
});
```

### output(options)

Outputs the processed sprite.

Options:
- `format`: Output format ('png', 'jpeg', etc.)
- `quality`: Output quality (0-100)

```javascript
const result = await processor.output({ format: 'png', quality: 90 });
console.log(result.buffer); // Processed image buffer
console.log(result.metadata); // Image metadata
```

## Chaining Operations

You can chain multiple operations together:

```javascript
const result = await createProcessor('input.png')
  .transform({ resize: { width: 200 }, tint: { r: 255, g: 0, b: 0 } })
  .pixelArt({ pixelation: 'high' })
  .effects({ outline: { width: 1, color: { r: 0, g: 0, b: 0, alpha: 1 } } })
  .output();
```

This allows for complex sprite manipulations with a clean and readable API.