# flipRotateSprite

The `flipRotateSprite` function allows you to flip and/or rotate a sprite image. This function is useful for creating different orientations of a sprite without the need for multiple image assets.

## Usage

```javascript
import { flipRotateSprite } from './path/to/sprite/module';

const result = await flipRotateSprite(input, options);
```

## Parameters

- `input` (Buffer | string, required): The input sprite as a buffer or file path.
- `options` (object, optional):
  - `flipHorizontal` (boolean): Whether to flip the sprite horizontally. Default is `false`.
  - `flipVertical` (boolean): Whether to flip the sprite vertically. Default is `false`.
  - `rotate` (number): Rotation angle in degrees. Valid values are 0, 90, 180, and 270. Default is 0.
  - `output` (object): Output options for the processed image.
    - `format` (string): Output image format (e.g., 'png', 'jpeg'). Default is 'png'.
    - `quality` (number): Output image quality (1-100). Default is 80.

## Return Value

Returns a Promise that resolves to an object containing:

- `buffer` (Buffer): The processed image as a buffer.
- `metadata` (object): Metadata of the processed image, including:
  - `format` (string): The output image format.
  - `width` (number): The width of the image in pixels.
  - `height` (number): The height of the image in pixels.
  - `channels` (number): The number of color channels in the image.
  - `size` (number): The size of the image in bytes.

## Examples

1. Flip a sprite horizontally:

```javascript
const input = './path/to/sprite.png';
const options = { flipHorizontal: true };
const result = await flipRotateSprite(input, options);
console.log(result.metadata);
```

2. Rotate a sprite by 90 degrees:

```javascript
const spriteBuffer = fs.readFileSync('./path/to/sprite.png');
const options = { rotate: 90 };
const result = await flipRotateSprite(spriteBuffer, options);
console.log(result.metadata);
```

3. Flip vertically and rotate by 180 degrees:

```javascript
const input = './path/to/sprite.png';
const options = {
  flipVertical: true,
  rotate: 180,
  output: { format: 'jpeg', quality: 90 }
};
const result = await flipRotateSprite(input, options);
console.log(result.metadata);
```

## Notes

- The function uses the Sharp library for image processing, which provides fast and efficient operations.
- When specifying a rotation angle, the function will normalize it to the nearest valid angle (0, 90, 180, or 270 degrees).
- If both flipping and rotation are specified, the flipping operations are applied before the rotation.
- The function supports various input image formats, but the output is limited to the formats supported by Sharp (typically PNG, JPEG, WebP, and TIFF).
- Error handling is implemented, so if the function encounters any issues during processing, it will throw an error with a descriptive message.