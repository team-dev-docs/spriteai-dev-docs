# splitSpriteSheet

## Brief Description

The `splitSpriteSheet` function is a utility that splits a sprite sheet image into individual frames. It's part of the sprite module and is designed to work with sprite sheets generated or used in game development contexts.

## Usage

To use `splitSpriteSheet`, import it from the sprite module and call it with the necessary parameters:

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.splitSpriteSheet(imageBuffer, columns, rows, options);
```

## Parameters

- `imageBuffer` (Buffer, required): The image buffer of the sprite sheet to be split.
- `columns` (number, required): The number of columns in the sprite sheet.
- `rows` (number, required): The number of rows in the sprite sheet.
- `options` (object, optional): Additional options for processing (currently not used, but reserved for future extensions).

## Return Value

Returns an object containing:

- `frames` (Array<Buffer>): An array of image buffers, each representing a single frame from the sprite sheet.
- `metadata` (object): An object containing metadata about the split frames:
  - `frameWidth` (number): The width of each frame.
  - `frameHeight` (number): The height of each frame.
  - `totalFrames` (number): The total number of frames extracted.
  - `originalDimensions` (object): The dimensions of the original sprite sheet:
    - `width` (number): The width of the original sprite sheet.
    - `height` (number): The height of the original sprite sheet.

## Examples

### Basic Usage

```javascript
import { sprite } from './sprite';
import fs from 'fs';

const spriteSheetBuffer = fs.readFileSync('path/to/spritesheet.png');

const result = await sprite.splitSpriteSheet(spriteSheetBuffer, 4, 4);

console.log(`Total frames: ${result.metadata.totalFrames}`);
console.log(`Frame dimensions: ${result.metadata.frameWidth}x${result.metadata.frameHeight}`);

// Save each frame as a separate file
result.frames.forEach((frame, index) => {
  fs.writeFileSync(`frame_${index}.png`, frame);
});
```

## Notes or Considerations

- The function assumes that all frames in the sprite sheet are of equal size.
- The sprite sheet should be evenly divisible by the number of columns and rows specified.
- This function uses the `sharp` library for image processing, which provides high performance for large images.
- Error handling for invalid inputs or processing errors should be implemented in the calling code.
- The function returns image buffers, which can be further processed or saved as needed.
- Future versions may include additional options for frame extraction or processing.