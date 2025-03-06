# createSpriteAnimation

The `createSpriteAnimation` function allows you to create an animated GIF from a sequence of sprite frames.

## Usage

```javascript
import { createSpriteAnimation } from './path/to/sprite/module';

const animatedGif = await createSpriteAnimation(frames, options);
```

## Parameters

- `frames` (Array<Buffer|string>, required): An array of sprite frames as buffers or file paths.
- `options` (Object, optional):
  - `delay` (number): Delay between frames in milliseconds. Default is 100ms.
  - `loop` (number): Number of times to loop the animation. 0 means infinite loop. Default is 0.
  - `transform` (Object): Transform options to apply to each frame. See the `transformSprite` function for available options.

## Return Value

Returns a Promise that resolves to a Buffer containing the animated GIF.

## Examples

### Basic Usage

```javascript
const frames = [
  './sprites/frame1.png',
  './sprites/frame2.png',
  './sprites/frame3.png'
];

const animatedGif = await createSpriteAnimation(frames);
```

### Custom Options

```javascript
const frames = [buffer1, buffer2, buffer3];

const options = {
  delay: 200,
  loop: 3,
  transform: {
    width: 64,
    height: 64,
    quality: 90
  }
};

const animatedGif = await createSpriteAnimation(frames, options);
```

## Notes

- The function uses the Sharp library to process images and create the animated GIF.
- All frames are converted to the WebP format for the animation.
- If using file paths, make sure they are valid and accessible.
- The `transform` option allows you to apply transformations to each frame before creating the animation. This can be useful for resizing, compressing, or applying other effects to the frames.
- The resulting animated GIF is returned as a buffer, which you can then save to a file or use as needed in your application.