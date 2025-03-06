# createSpriteAnimation

## Brief Description

The `createSpriteAnimation` function generates an animated GIF from a sequence of sprite frames. It allows for customization of animation parameters and optional transformations to be applied to each frame.

## Usage

To use `createSpriteAnimation`, import it from the sprite module and call it with an array of sprite frames and options:

```javascript
import { createSpriteAnimation } from './path/to/sprite/module';

const animatedGif = await createSpriteAnimation(frames, options);
```

## Parameters

- `frames` (Array<Buffer|string>, required): An array of sprite frames as buffers or file paths.
- `options` (object, optional):
  - `delay` (number): Delay between frames in milliseconds (default: 100).
  - `loop` (number): Number of times to loop the animation (0 = infinite, default: 0).
  - `transform` (object): Transform options to apply to each frame (see `transformSprite` function for details).

## Return Value

Returns a Promise that resolves to a Buffer containing the animated GIF.

## Examples

1. Create a simple animation from frame files:

```javascript
const frameFiles = ['frame1.png', 'frame2.png', 'frame3.png', 'frame4.png'];
const animatedGif = await createSpriteAnimation(frameFiles);
```

2. Create an animation with custom delay and looping:

```javascript
const frames = [buffer1, buffer2, buffer3, buffer4];
const options = {
  delay: 200,
  loop: 3
};
const animatedGif = await createSpriteAnimation(frames, options);
```

3. Apply transformations to each frame:

```javascript
const frames = [buffer1, buffer2, buffer3, buffer4];
const options = {
  transform: {
    width: 64,
    height: 64,
    quality: 90,
    format: 'png'
  }
};
const animatedGif = await createSpriteAnimation(frames, options);
```

## Notes and Considerations

- The function uses the Sharp library to process images and create the animated GIF.
- All frames will be converted to the WebP format for the final animation.
- If providing file paths instead of buffers, ensure that the files exist and are readable.
- The function processes all frames in parallel, which may consume significant memory for large animations.
- Consider using lower quality settings or smaller dimensions for better performance and smaller file sizes.
- The resulting animated GIF uses the WebP format, which may not be supported in all browsers or image viewers.