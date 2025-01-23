# generateSprite Documentation

## Brief Description

`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis.

## Usage

To use `generateSprite`, you need to import it from the sprite object:

```javascript
import { sprite } from './path/to/sprite/file';

const result = await sprite.generateSprite(description, options);
```

## Parameters

- `description` (string, required): A text description of the character or object you want to generate as a sprite.
- `options` (object, optional): An object containing additional configuration options:
  - `iterations` (number, optional): Number of sprite variations to generate.
  - `size` (string, optional): Size of the generated image (default: "1024x1024").
  - `save` (boolean, optional): If true, saves the generated image to the local file system.

## Return Value

The function returns a Promise that resolves to an object (or array of objects if `iterations` is specified) containing:
- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded data URL of the generated sprite sheet image.

## Examples

1. Generate a single sprite sheet:

```javascript
const result = await sprite.generateSprite("A cartoon cat walking");
console.log(result.messages); // Frame size information
console.log(result.image); // Base64 image data
```

2. Generate multiple variations with custom options:

```javascript
const results = await sprite.generateSprite("A robot dancing", {
  iterations: 3,
  size: "512x512",
  save: true
});
results.forEach((result, index) => {
  console.log(`Variation ${index + 1}:`, result.messages);
});
```

## Notes or Considerations

- The function uses AI models (DALL-E 3 and GPT-4) to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid).
- The function converts the generated image to grayscale, which may affect the final output.
- When saving images locally, they are stored in an 'assets' folder within the current working directory.
- The function may take some time to complete due to the AI image generation and analysis process.
- Ensure you have the necessary API access and dependencies (OpenAI, axios, sharp) set up before using this function.