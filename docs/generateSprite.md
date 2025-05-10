---
slug: /
sidebar_position: 1
---
# generateSprite Documentation

## Brief Description
`generateSprite` is a jolly good function that generates a rather smashing sprite sheet image based on a given description, using AI-powered image generation and analysis.

## Usage
To use `generateSprite`, import it from the sprite module and give it a proper ring with a description of the character you fancy generating.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): A splendid text description of the character to generate.
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to cook up.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to pop the generated image onto your disk.

## Return Value
Returns a rather posh object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the brilliant sprite sheet.

## Examples

1. Generate a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log(result.messages);
console.log(result.image);
```

2. Generate multiple variations:
```javascript
const variations = await sprite.generateSprite("A cartoon cat", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

## Notes or Considerations
- The function uses AI models (DALL-E 3 and GPT) to generate and analyse images, which may result in varying outputs for the same input, innit.
- Generated sprites are optimised for walking animations and follow a specific layout (6 frames in a 2x3 grid), quite proper.
- The function converts images to grayscale, which might affect the final output, blimey.
- When saving images, they're stored in an 'assets' folder with a filename based on the description, rather cheeky.
- The function may take a spot of time to complete due to API calls and image processing, so brew yourself a cuppa while waiting.
