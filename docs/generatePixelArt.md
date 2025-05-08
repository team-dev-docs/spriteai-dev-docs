# generatePixelArt Documentation

## Brief Description
`generatePixelArt` is a function that generates a pixel art sprite based on a given description using AI-powered image generation and processing.

## Usage
To use `generatePixelArt`, import it from the sprite module and call it with a description of the pixel art sprite you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generatePixelArt(description, options);
```

## Parameters
- `description` (string, required): A text description of the pixel art sprite to generate.
- `options` (object, optional):
  - `save` (boolean): Whether to save the generated image to disk.
  - `size` (string): The size of the generated image (e.g., '1024x1024').
  - `style` (string): The style of the pixel art (default: 'pixel-art').
  - Other options inherited from the base generate function.

## Return Value
Returns an object containing:
- `original`: Direct URL to the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed pixel art sprite.
- `metadata`: Object containing information about the generated sprite, including dimensions and frame data.

## Examples

1. Generate a simple pixel art sprite:
```javascript
const result = await sprite.generatePixelArt("A pixelated robot");
console.log(result.spritesheet);
console.log(result.original);
```

2. Generate and save a pixel art sprite with custom options:
```javascript
const result = await sprite.generatePixelArt("A pixel art cat", { 
  save: true,
  size: '512x512',
  style: 'pixel-art'
});
console.log("Saved pixel art sprite:", result.metadata);
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate pixel art images, which may result in varying outputs for the same input.
- Generated sprites are optimized for a pixel art style, but the actual size can be specified in the options.
- The function uses the OpenAI API to generate images, so ensure you have the necessary permissions and API keys set up.
- When saving images, they are stored in an 'assets' directory with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- You can use the `fetchAvailableSpriteStyles()` function to get a list of available sprite styles.
- The generated spritesheet includes metadata about the sprite's dimensions and frame data, which can be useful for game development.
