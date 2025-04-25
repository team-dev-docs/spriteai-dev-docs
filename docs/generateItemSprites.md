---
slug: /generateItemSprites
sidebar_position: 4
---

# Generate Item Sprites, yo

## Brief Description, yo

The `generateItemSprites` function is a powerful tool that creates a collection of item sprites for your game using AI-powered image generation. It's perfect for quickly producing consistent and customisable item assets.

## Usage, yo

To use `generateItemSprites`, import it from the sprite module and call it with a description of the items you want to generate.

```javascript
import { generateItemSprites } from './path/to/sprite/module';

const result = await generateItemSprites(description, options);
```

## Parameters, yo

- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style of the items (default: "pixel-art").
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
const result = await generateItemSprites("Medieval weapons and armour");
console.log(result.itemSheet);
console.log(result.metadata);
```

2. Generate custom item sprites with specific options:
```javascript
const options = {
  itemCount: 6,
  size: "2048x2048",
  style: "hand-drawn",
  itemType: "potions",
  background: "transparent"
};
const result = await generateItemSprites("Magical potion bottles", options);
console.log(result.metadata.itemData);
```

## Notes or Considerations, yo

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated items are arranged in a grid layout, with a maximum of two columns.
- The function converts the original image to a sprite sheet format with individual item sprites.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies (OpenAI, axios, sharp) installed and configured in your project.

Cheerio, mate! Don't forget to give your sprites a proper British accent, yeah?