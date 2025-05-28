# generateAnimatedEmoji

## Brief Description
`generateAnimatedEmoji` is a function that generates a 4-frame animated emoji based on a given description using AI-powered image generation.

## Usage
To use `generateAnimatedEmoji`, import it from the sprite module and call it with a description of the emoji animation you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateAnimatedEmoji(description, options);
```

## Parameters
- `description` (string, required): A text description of the animated emoji to generate.
- `options` (object, optional):
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `image`: Base64-encoded image data URL of the generated animated emoji.
- `url`: Direct URL to the generated image.

## Examples

1. Generate an animated emoji:
```javascript
const result = await sprite.generateAnimatedEmoji("A smiling face winking");
console.log(result.image); // Base64-encoded image data URL
console.log(result.url); // Direct URL to the generated image
```

2. Generate and save an animated emoji:
```javascript
const result = await sprite.generateAnimatedEmoji("A heart beating", { save: true });
console.log("Emoji saved and accessible at:", result.url);
```

## Notes or Considerations
- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- Generated emojis are optimized for animation, with 4 frames arranged in a 2x2 grid.
- The function returns a single image containing all 4 frames of the animation.
- When saving images, they are stored with a timestamp-based filename.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary API credentials and permissions to use the OpenAI image generation service.

## Related Functions
- `generateCharacterSpritesheet`: For creating character spritesheets with multiple animation states.
- `generateEnvironmentSprites`: For generating environment tileset sprites.
- `generateItemSprites`: For creating item sprites for game inventories.

## See Also
- [Getting Started with spriteAI](./getting-started.md)
- [Generating Pixel Art](./generatePixelArt.md)
- [Generating Isometric Art](./generateIsometric.md)
