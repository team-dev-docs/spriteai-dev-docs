# flipRotateSprite

The `flipRotateSprite` function allows you to flip and/or rotate a sprite image. This function is part of the sprite manipulation toolkit and provides a simple way to transform sprite images for various visual effects or game development purposes.

## Usage

```javascript
import { flipRotateSprite } from './path/to/sprite/module';

const result = await flipRotateSprite(input, options);
```

## Parameters

- `input` (Buffer | string, required): The input sprite as a buffer or file path.
- `options` (Object, optional): An object containing flip and rotation options.
  - `flipHorizontal` (boolean, default: false): Whether to flip the sprite horizontally.
  - `flipVertical` (boolean, default: false): Whether to flip the sprite vertically.
  - `rotate` (number, default: 0): Rotation angle in degrees (0, 90, 180, 270).
  - `output` (Object, optional): Output options for the transformed sprite.
    - `format` (string, optional): Output image format (e.g., 'png', 'jpeg').
    - `quality` (number, optional): Output image quality (0-100).

## Return Value

Returns a Promise that resolves to an object containing:

- `buffer` (Buffer): The transformed sprite image as a buffer.
- `metadata` (Object): Metadata of the transformed image, including:
  - `format` (string): The output image format.
  - `width` (number): The width of the transformed image.
  - `height` (number): The height of the transformed image.
  - `channels` (number): The number of color channels.
  - `size` (number): The size of the image in bytes.

## Examples

### Flip a sprite horizontally

```javascript
const inputSprite = './path/to/sprite.png';
const options = {
  flipHorizontal: true
};

const result = await flipRotateSprite(inputSprite, options);
console.log(result.metadata);
// Use result.buffer for the flipped sprite
```

### Rotate a sprite by 90 degrees

```javascript
const inputBuffer = fs.readFileSync('./path/to/sprite.png');
const options = {
  rotate: 90,
  output: {
    format: 'png',
    quality: 90
  }
};

const result = await flipRotateSprite(inputBuffer, options);
console.log(result.metadata);
// Use result.buffer for the rotated sprite
```

### Flip vertically and rotate

```javascript
const inputSprite = './path/to/sprite.png';
const options = {
  flipVertical: true,
  rotate: 180
};

const result = await flipRotateSprite(inputSprite, options);
console.log(result.metadata);
// Use result.buffer for the flipped and rotated sprite
```

## Notes

- The function supports both file paths and buffers as input.
- Rotation angles are normalized to the nearest valid angle (0, 90, 180, 270).
- If no output format is specified, the function defaults to PNG.
- The function uses the `sharp` library for image processing, ensuring high-performance transformations.
- Error handling is implemented, and any issues during the transformation process will be thrown as errors.