# generateSprite Documentation

## Overview

The `generateSprite` function is a powerful tool for generating sprite sheet images based on text descriptions using AI-powered image generation and analysis. It now includes caching functionality and additional image processing steps to improve performance and output quality.

## Usage

To use `generateSprite`, import it from the sprite module and call it with a description of the character you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters

- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

Returns an object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

## Caching

The function now implements caching to improve performance for repeated requests. It uses a cache key based on the description and options:

```javascript
const cacheKey = `sprite-${description}-${JSON.stringify(options)}`;
const cached = await checkCache(cacheKey);
```

If a cached result is found, it will be returned instead of generating a new sprite.

## Image Processing

The function includes several image processing steps to enhance the quality of the generated sprites:

1. Conversion to grayscale:
```javascript
let grayImageBuffer = await sharp(imgBuffer)
  .ensureAlpha()
  .greyscale()
  .toBuffer();
```

2. Multiple normalization and gamma correction passes:
```javascript
.normalize().gamma().normalize().gamma()
// ... (repeated multiple times)
```

These steps help improve the contrast and clarity of the generated sprites.

## Examples

1. Generate a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log(result.messages);
console.log(result.image);
```

2. Generate multiple variations with caching:
```javascript
const variations = await sprite.generateSprite("A cartoon cat", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

## Notes and Considerations

- The function uses AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid).
- The caching mechanism helps reduce API calls and processing time for repeated requests.
- The additional image processing steps (grayscale conversion, normalization, and gamma correction) may affect the final output appearance.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls, image processing, and potential cache misses.
- Ensure you have the required dependencies installed (OpenAI, axios, sharp, Jimp) before using this function.