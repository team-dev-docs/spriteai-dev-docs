---
slug: /generateAnimatedEmoji
sidebar_position: 9
---

# generateAnimatedEmoji Documentation

## Brief Description
`generateAnimatedEmoji` is a function that generates a 4-frame animated emoji based on a given description, using AI-powered image generation (DALL-E 3).

## Usage
To use `generateAnimatedEmoji`, import it from the sprite module and call it with a description of the emoji you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateAnimatedEmoji(description, options);
```

## Parameters
- `description` (string, required): A text description of the animated emoji to generate.
- `options` (object, optional):
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `image`: Base64-encoded image data URL of the generated emoji grid (2x2 layout).
- `url`: Original URL of the generated image (if available).

## Examples

1. Generate an animated emoji:
```javascript
const result = await sprite.generateAnimatedEmoji("A happy cat face winking");
console.log(result.image); // Base64-encoded data URL of the emoji grid
```

2. Generate and save an animated emoji:
```javascript
const result = await sprite.generateAnimatedEmoji("A bouncing basketball", { save: true });
// The emoji grid image will be saved to the assets folder
```

## Notes or Considerations
- The function uses OpenAI's DALL-E 3 model to generate images, which may result in varying outputs for the same input.
- Generated emojis follow a specific layout (4 frames in a 2x2 grid) designed to create a smooth animation loop.
- When saving images, they are stored in an 'assets' folder with a filename based on the current timestamp.
- The function may take some time to complete due to API calls and image processing.
- For optimal results, provide clear descriptions that specify the emoji style and the type of animation you want.
