# extractSprites Documentation

## Brief Description
`extractSprites` is a function that extracts individual sprites from a sprite sheet image. It allows you to separate a single image containing multiple sprites into individual sprite images.

## Usage
To use `extractSprites`, import it from the sprite module and call it with a sprite sheet image and extraction options.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.extractSprites(spriteSheet, options);
```

## Parameters
- `spriteSheet` (Buffer | string, required): The input sprite sheet as a buffer or file path.
- `options` (object, required):
  - `columns` (number, required): Number of sprites per row in the sprite sheet.
  - `rows` (number, required): Number of sprites per column in the sprite sheet.
  - `padding` (number, optional): Pixels around the edge to ignore (default: 0).
  - `spacing` (number, optional): Pixels between sprites (default: 0).
  - `output` (object, optional): Output options for the extracted sprites.
    - `format` (string, optional): Output format for the sprites (default: 'png').
    - `quality` (number, optional): Quality of the output images (default: 80).

## Return Value
Returns a Promise that resolves to an array of objects, each containing:
- `buffer`: Buffer containing the extracted sprite image data.
- `position`: Object with `row` and `col` properties indicating the sprite's position in the original sheet.

## Examples

1. Extract sprites from a basic sprite sheet:
```javascript
const spriteSheet = './path/to/spritesheet.png';
const options = {
  columns: 4,
  rows: 3
};
const sprites = await sprite.extractSprites(spriteSheet, options);
console.log(`Extracted ${sprites.length} sprites`);
```

2. Extract sprites with padding and spacing:
```javascript
const spriteSheet = fs.readFileSync('./path/to/spritesheet.png');
const options = {
  columns: 5,
  rows: 2,
  padding: 2,
  spacing: 1,
  output: {
    format: 'jpeg',
    quality: 90
  }
};
const sprites = await sprite.extractSprites(spriteSheet, options);
sprites.forEach((sprite, index) => {
  console.log(`Sprite ${index}: Row ${sprite.position.row}, Column ${sprite.position.col}`);
});
```

## Notes or Considerations
- The function uses the Sharp library for image processing, ensuring high-performance extraction.
- Ensure that the `columns` and `rows` specified in the options match the actual layout of your sprite sheet.
- The `padding` and `spacing` options are useful for sprite sheets with gaps between sprites or a border around the entire sheet.
- You can save the extracted sprites to files using the `fs` module or process them further as needed.
- The function handles both file paths and buffers, allowing flexibility in how you provide the sprite sheet.
- If your sprite sheet is not evenly divided, the last row may contain empty or partial sprites.