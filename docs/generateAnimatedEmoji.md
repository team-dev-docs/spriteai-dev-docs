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
  - `model` (string): The model to use for image generation. Defaults to 'dall-e-3'.
  - `style` (string): The style of the generated emoji. Can be 'natural', 'vivid', or any other styles supported by the model. Defaults to 'natural'.
  - `quality` (string): The quality of the generated image. Can be 'standard' or 'hd'. Defaults to 'standard'.

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

3. Generate an animated emoji with specific model and style:
```javascript
const result = await sprite.generateAnimatedEmoji(
  "A cat dancing", 
  { 
    model: 'dall-e-3', 
    style: 'vivid',
    quality: 'hd'
  }
);
```

## Notes or Considerations
- The function uses AI models like DALL-E 3 to generate images, which may result in varying outputs for the same input.
- Generated emojis are optimized for animation, with 4 frames arranged in a 2x2 grid.
- The function returns a single image containing all 4 frames of the animation.
- When saving images, they are stored with a timestamp-based filename.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary API credentials and permissions to use the OpenAI image generation service.
- The 'vivid' style typically produces more colorful, vibrant results, while 'natural' produces more photorealistic results.
- HD quality images may take longer to generate and result in larger file sizes.