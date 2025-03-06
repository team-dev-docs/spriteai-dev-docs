# extractSprites

The `extractSprites` function allows you to extract individual sprites from a sprite sheet image.

## Usage

```javascript
const { extractSprites } = require('./sprite-utils');

const spriteSheet = 'path/to/spritesheet.png';
const options = {
  columns: 4,
  rows: 3,
  padding: 2,
  spacing: 1
};

const sprites = await extractSprites(spriteSheet, options);
```

## Parameters

- `spriteSheet` (Buffer | string): The input sprite sheet image as a buffer or file path.
- `options` (Object): Extraction options
  - `columns` (number): Number of sprites per row
  - `rows` (number): Number of sprites per column
  - `padding` (number, optional): Pixels around the edge to ignore. Default is 0.
  - `spacing` (number, optional): Pixels between sprites. Default is 0.
  - `output` (Object, optional): Output options
    - `format` (string, optional): Output image format. Default is 'png'.
    - `quality` (number, optional): Output image quality (1-100). Default is 80.

## Returns

A Promise that resolves to an array of objects, each containing:
- `buffer` (Buffer): The extracted sprite image data
- `position` (Object): The position of the sprite in the sheet
  - `row` (number): The row number
  - `col` (number): The column number

## Example

```javascript
const spriteSheet = 'characters.png';
const options = {
  columns: 4,
  rows: 2,
  padding: 1,
  spacing: 2,
  output: {
    format: 'webp',
    quality: 90
  }
};

try {
  const sprites = await extractSprites(spriteSheet, options);
  console.log(`Extracted ${sprites.length} sprites`);
  sprites.forEach((sprite, index) => {
    console.log(`Sprite ${index}: ${sprite.position.row},${sprite.position.col}`);
  });
} catch (error) {
  console.error('Failed to extract sprites:', error);
}
```

## Notes

- The function uses the Sharp library internally for image processing.
- Sprite dimensions are calculated based on the sprite sheet size, number of columns/rows, padding, and spacing.
- If the input is a file path, it will be read synchronously.
- The function will throw an error if the required options (columns and rows) are not provided.