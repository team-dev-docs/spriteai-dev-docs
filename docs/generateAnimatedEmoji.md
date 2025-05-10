# generateAnimatedEmoji

## Brief Description
`generateAnimatedEmoji` is a function that creates animated emoji in a 2x2 grid layout, generating all frames for a smooth animation using AI-powered image generation.

## Usage
To use `generateAnimatedEmoji`, import it from the sprite module and call it with a description of the animated emoji you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateAnimatedEmoji(description, options);
```

## Parameters
- `description` (string, required): A text description of the animated emoji to generate.
- `options` (object, optional):
  - `save` (boolean): Whether to save the generated image to disk.
  - Other options inherited from the base generate function.

## Return Value
Returns an object containing:
- `image`: Base64-encoded image data URL of the generated animated emoji.
- `url`: Direct URL to the generated image.

## Examples

1. Generate a simple animated emoji:
```javascript
const result = await sprite.generateAnimatedEmoji("A smiling sun with rays that pulse");
console.log(result.image);
console.log(result.url);
```

2. Generate and save an animated emoji:
```javascript
const result = await sprite.generateAnimatedEmoji("A cat winking", { save: true });
console.log("Saved animated emoji:", result.url);
```

## Technical Details
- The function uses OpenAI's DALL-E 3 model to generate a 2x2 grid of images.
- The prompt specifically requests a sequence that forms a smooth animation when viewed in order.
- The generated image is organized in a 2x2 grid layout containing all frames of the animation.
- The animation is designed to be short and loopable for emoji-style usage.

## Notes or Considerations
- The function uses AI models to generate animations, which may result in varying outputs for the same input.
- Generated emojis are optimized for a simple, recognizable style suitable for emoji usage.
- When saving images, they are stored with a timestamp-based filename.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and API keys set up for using the OpenAI image generation service.