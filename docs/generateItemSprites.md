---
slug: /generateItemSprites
sidebar_position: 4
---

# Generate Item Sprites, yo

## Brief Description, yo

The `generateItemSprites` function is a powerful tool for creating game item sprites using AI-powered image generation. It allows you to generate a collection of item sprites based on a description and various customization options.

## Usage, yo

To use `generateItemSprites`, import it from the spriteAI module and call it with a description of the items you want to generate.

```javascript
import { generateItemSprites } from './path/to/spriteAI';

const result = await generateItemSprites(description, options);
```

## Parameters, yo

- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the generated sprites (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background colour of the sprite sheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value, yo

Returns an object containing:
- `original`: URL of the original generated image.
- `itemSheet`: Base64-encoded image data URL of the processed item sprite sheet.
- `metadata`: Object containing information about the generated items.

## Examples, yo

1. Generate a basic item sprite sheet:
```javascript
const result = await generateItemSprites("Medieval weapons");
console.log(result.itemSheet);
console.log(result.metadata);
```

2. Generate custom item sprites:
```javascript
const options = {
  itemCount: 6,
  size: "2048x2048",
  style: "hand-drawn",
  itemType: "potions",
  background: "transparent"
};
const result = await generateItemSprites("Magical potions", options);
console.log(result.itemSheet);
```

## Notes or Considerations, yo

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are arranged in a grid layout, with a maximum of 2 columns.
- The function may take some time to complete due to API calls and image processing.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The `style` option can be customised to match your game's art style (e.g., "pixel-art", "vector", "3d", "hand-drawn").
- The `itemType` option helps guide the AI in generating appropriate items (e.g., "equipment", "potions", "food").
- Remember to handle potential errors and implement appropriate rate limiting when using this function in production.