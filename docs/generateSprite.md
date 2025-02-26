# generateSprite Documentation

## Overview

The `generateSprite` function is a powerful tool for generating sprite sheet images based on textual descriptions using AI-powered image generation and analysis. This function has been optimized and now uses an improved prompt for DALL-E 3, resulting in enhanced output and behavior.

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

The function returns an object or an array of objects containing:

- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

## Examples

### Generate a single sprite sheet

```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log(result.messages);
console.log(result.image);
```

### Generate multiple variations

```javascript
const variations = await sprite.generateSprite("A cartoon cat", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

## Improved DALL-E 3 Prompt

The function now uses an enhanced prompt for DALL-E 3, which results in more consistent and higher-quality sprite sheets. The new prompt includes the following key instructions:

1. Generate 6 frames of a 24-bit character optimized for walking animations.
2. The top half of the image contains the frames, while the bottom half is a blank white background.
3. The style resembles Super Nintendo graphics.
4. The background of the image and frame is white, with no extra items, lines, text, or grids.
5. The frames are arranged in two rows with 3 columns each (2x3 table).

## Notes and Considerations

- The function uses AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid).
- The function converts images to grayscale, which may affect the final output.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- The improved DALL-E 3 prompt aims to produce more consistent and higher-quality sprite sheets, but results may still vary.