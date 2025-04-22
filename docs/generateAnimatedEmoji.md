# generateAnimatedEmoji

## Brief Description
`generateAnimatedEmoji` is a function that generates an animated emoji based on a given description using AI-powered image generation. The function provides customizable animation frames and styles.

## Usage
To use `generateAnimatedEmoji`, import it from the SpriteAI package and call it with a description of the emoji animation you want to generate.

```javascript
import { generateAnimatedEmoji } from 'spriteai';

const result = await generateAnimatedEmoji(description, options);
```

## Parameters
- `description` (string, required): A text description of the animated emoji to generate.
- `options` (object, optional):
  - `save` (boolean): Whether to save the generated image to disk.
  - `frames` (number): Number of frames for the animation. Default: 4.
  - `style` (string): Visual style for the emoji. Options include 'pixel-art', 'vector', '3d', 'hand-drawn', 'anime'. Default: 'pixel-art'.
  - `size` (string): Size of the output image in format 'widthxheight'. Default: '1024x1024'.
  - `padding` (number): Padding between frames in the spritesheet. Default: 1.
  - `background` (string): Background color for the emoji. Default: 'transparent'.

## Return Value
Returns an object containing:
- `original`: Direct URL to the original generated image.
- `spritesheet`: Base64-encoded image data URL of the generated animated emoji spritesheet.
- `metadata`: Object containing information about the generated spritesheet:
  - `frames`: Number of frames in the animation.
  - `style`: Style used for generation.
  - `dimensions`: Object containing width and height of the overall image.
  - `frameData`: Information about individual frames and their positions.

## Examples

1. Generate a basic animated emoji:
```javascript
const result = await generateAnimatedEmoji('A smiling face winking');
console.log(result.spritesheet); // Base64-encoded image data URL
```

2. Generate and save an animated emoji with custom options:
```javascript
const result = await generateAnimatedEmoji('A heart beating', {
  save: true,
  frames: 8,
  style: '3d',
  background: 'white'
});
console.log('Emoji saved with metadata:', result.metadata);
```

3. Generate an emoji with custom size and style:
```javascript
const result = await generateAnimatedEmoji('A star twinkling', {
  style: 'hand-drawn',
  size: '512x512',
  padding: 2
});
```

## Notes or Considerations
- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- When the `save` option is enabled, images are stored with a filename based on the description (spaces replaced with underscores).
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary API credentials and permissions to use the OpenAI image generation service.
- The returned spritesheet contains all frames of the animation in a grid layout that can be used with animation libraries or CSS animations.
