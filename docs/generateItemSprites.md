---
slug: /generate-item-sprites
sidebar_position: 2
---

# Generate Item Sprites, yo

## Brief Description, yo

The `generateItemSprites` function is a powerful tool that creates sprite sheets for game items using AI-powered image generation. It's designed to produce consistent and customizable item sprites for various game development needs, yo.

## Usage, yo

To use `generateItemSprites`, import it from the sprite module and call it with a description of the items you want to generate, yo.

```javascript
import { generateItemSprites } from './path/to/sprite/module';

const result = await generateItemSprites(description, options);
```

## Parameters, yo

- `description` (string, required): A text description of the items to generate, yo.
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4), yo.
  - `size` (string): Size of the generated image (default: "1024x1024"), yo.
  - `style` (string): Style of the generated sprites (default: "pixel-art"), yo.
  - `padding` (number): Padding between items (default: 1), yo.
  - `itemType` (string): Type of items to generate (default: "equipment"), yo.
  - `background` (string): Background colour of the sprite sheet (default: "white"), yo.
  - `save` (boolean): Whether to save the generated image to disk, yo.

## Return Value, yo

Returns an object containing:
- `original`: URL of the original generated image, yo.
- `itemSheet`: Base64-encoded image data URL of the generated item sprite sheet, yo.
- `metadata`: Object containing information about the generated items, yo.

## Examples, yo

1. Generate a basic item sprite sheet, yo:
```javascript
const result = await generateItemSprites("Medieval weapons");
console.log(result.metadata);
console.log(result.itemSheet);
```

2. Generate custom item sprites, yo:
```javascript
const options = {
  itemCount: 6,
  style: "vector",
  itemType: "potions",
  background: "transparent"
};
const result = await generateItemSprites("Magical potion bottles", options);
console.log(result.metadata);
```

## Notes or Considerations, yo

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input, yo.
- Generated sprites are optimized for game inventory or pickup icons, yo.
- The function may take some time to complete due to API calls and image processing, yo.
- When saving images, they are stored in an 'assets' folder with a filename based on the description, yo.
- Ensure you have the necessary dependencies (OpenAI, axios, sharp) installed in your project, yo.