# generateAnimatedEmoji Documentation

## Brief Description
The `generateAnimatedEmoji` function creates animated emoji or stickers based on a text description using AI-powered image generation technology.

## Usage
To use `generateAnimatedEmoji`, import it from the sprite module and call it with a description of the emoji/sticker you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateAnimatedEmoji(description, options);
```

## Parameters
- `description` (string, required): A text description of the animated emoji to generate.
- `options` (object, optional):
  - `frames` (number): Number of frames for the animation (default: 8)
  - `size` (string): Output size of the image (default: '1024x1024')
  - `style` (string): Art style for the emoji (default: 'cartoon')
  - `backgroundRemoval` (boolean): Whether to remove the background (default: true)
  - `loop` (boolean): Whether the animation should loop (default: true)
  - `fps` (number): Frames per second for the animation (default: 12)
  - `save` (boolean): Whether to save the generated animation to disk (default: false)

## Return Value
Returns an object containing:
- `original`: Original URL of the generated image sequence.
- `animation`: Base64-encoded GIF data of the processed animation.
- `metadata`: Object containing details about the animation:
  - `frames`: Number of frames.
  - `fps`: Frames per second.
  - `loop`: Whether the animation loops.
  - `dimensions`: Object containing width and height of the animation.

## Examples

1. Generate a simple animated emoji:
```javascript
const result = await sprite.generateAnimatedEmoji("A happy bouncing cat face");
console.log(result.animation); // Base64 encoded GIF
```

2. Generate a custom animated emoji with specific options:
```javascript
const result = await sprite.generateAnimatedEmoji("A winking star", {
  frames: 10,
  size: '512x512',
  fps: 15,
  save: true
});
console.log("Animation created with metadata:", result.metadata);
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate image sequences which are then processed into animated GIFs.
- The quality and style of the animation depends on the description provided.
- When background removal is enabled, the function attempts to remove solid background colors for a cleaner animation.
- Animations are optimized for use as emojis or stickers in messaging platforms.
- When saving animations, they are stored with a descriptive filename based on the provided description.
- Processing time may vary depending on the number of frames and size requested.
- Ensure you have the necessary permissions and API keys set up for using the OpenAI image generation service.