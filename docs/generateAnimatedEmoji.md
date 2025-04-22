# generateAnimatedEmoji

## Brief Description
`generateAnimatedEmoji` is a function that creates a 4-frame animated emoji based on a given description using AI-powered image generation.

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
- `image`: Base64-encoded image data URL of the generated animated emoji (4-frame layout).
- `url`: Direct URL to the generated image.

## Examples

1. Generate a simple animated emoji:
```javascript
const result = await sprite.generateAnimatedEmoji("A happy face that blinks");
console.log(result.image);
console.log(result.url);
```

2. Generate and save an animated emoji:
```javascript
const result = await sprite.generateAnimatedEmoji("A laughing emoji", { save: true });
console.log("Saved animated emoji:", result.url);
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate a 2x2 grid layout of emoji-style images.
- The 4 frames are designed to form a smooth animation sequence when displayed in order.
- The emoji style is optimized for expressive facial features and simple animations.
- When saving images, they are stored with a timestamp-based filename.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and API keys set up for using the OpenAI image generation service.