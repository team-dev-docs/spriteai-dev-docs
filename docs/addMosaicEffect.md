# addMosaicEffect Documentation

## Brief Description
`addMosaicEffect` is a method of the `sprite` object that applies a mosaic effect to a generated pixel art sprite. This effect creates a tiled version of the original sprite, with options for customizing the layout and appearance of the tiles.

## Usage
To use `addMosaicEffect`, first import the `sprite` object from the module, then call the method with a description and optional parameters.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.addMosaicEffect(description, mosaicOptions, options);
```

## Parameters
- `description` (string, required): A text description of the sprite to generate and apply the mosaic effect to.
- `mosaicOptions` (object, optional):
  - `tileSize` (number): Size of each tile in pixels (default: 32).
  - `columns` (number): Number of columns in the mosaic grid (default: 3).
  - `rows` (number): Number of rows in the mosaic grid (default: 3).
  - `rotation` (boolean): Whether to randomly rotate tiles (default: true).
  - `scale` (boolean): Whether to randomly scale tiles (default: true).
  - `spacing` (number): Spacing between tiles in pixels (default: 0).
- `options` (object, optional): Additional options for sprite generation (see generatePixelArt documentation).

## Return Value
Returns an object containing:
- `original`: Base64-encoded image data URL of the original generated sprite.
- `mosaic`: Base64-encoded image data URL of the sprite with the mosaic effect applied.
- `settings`: Object containing the applied mosaic settings (tileSize, columns, rows).

## Examples

1. Basic usage with default options:
```javascript
const result = await sprite.addMosaicEffect("A pixelated robot");
console.log(result.original); // Original sprite image data URL
console.log(result.mosaic); // Mosaic effect applied sprite image data URL
console.log(result.settings); // Applied mosaic settings
```

2. Custom mosaic options:
```javascript
const mosaicOptions = {
  tileSize: 64,
  columns: 4,
  rows: 2,
  rotation: false,
  scale: true,
  spacing: 5
};
const result = await sprite.addMosaicEffect("A cartoon cat", mosaicOptions);
```

## Notes or Considerations
- The function first generates a pixel art sprite based on the given description before applying the mosaic effect.
- The mosaic effect creates a new image composed of multiple copies of the original sprite, arranged in a grid.
- Random rotation and scaling of tiles can create more varied and interesting mosaic effects.
- Adjusting the `tileSize`, `columns`, and `rows` parameters allows for fine-tuning of the mosaic grid layout.
- The `spacing` parameter can be used to add gaps between tiles for a different visual effect.
- This effect can be useful for creating decorative backgrounds or texture patterns based on a single sprite.