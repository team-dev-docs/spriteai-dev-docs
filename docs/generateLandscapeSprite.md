# generateLandscapeSprite Documentation

## Brief Description

`generateLandscapeSprite` is a function that generates a landscape sprite image based on a given description, using AI-powered image generation and analysis. This function is specifically designed for creating background or environmental sprites for games or applications.

## Usage

To use `generateLandscapeSprite`, import it from the sprite module and call it with a description of the landscape you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateLandscapeSprite(description, options);
```

## Parameters

- `description` (string, required): A text description of the landscape to generate.
- `options` (object, optional):
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the generated image (default: "pixel-art").
  - `save` (boolean): Whether to save the generated image to disk.
  - `padding` (number): Padding between sprite frames (default: 1).

## Return Value

Returns an object containing:

- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed sprite sheet.
- `metadata`: Object containing information about the generated sprite sheet, including:
  - `dimensions`: Width and height of the sprite sheet.
  - `frameData`: Information about individual frames in the sprite sheet.

## Examples

1. Generate a basic landscape sprite sheet:

```javascript
const result = await sprite.generateLandscapeSprite("A pixelated forest with mountains in the background");
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate a landscape sprite sheet with custom options:

```javascript
const options = {
  size: "2048x2048",
  style: "watercolor",
  save: true,
  padding: 2
};
const result = await sprite.generateLandscapeSprite("A serene beach at sunset", options);
console.log(result.metadata);
```

## Notes and Considerations

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for landscape or background use, typically consisting of a single large image or a set of seamlessly tileable sections.
- The `style` option allows you to specify the artistic style of the generated image (e.g., "pixel-art", "watercolor", "oil-painting").
- When `save` is set to true, images are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and API access to use the OpenAI image generation service.