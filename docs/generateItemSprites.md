---
slug: /generate-item-sprites
sidebar_position: 4
---

# Generate Item Sprites, yo

## Brief Description, yo

The `generateItemSprites` function is a powerful tool for creating game item sprites using AI-powered image generation. It allows you to generate a collection of item sprites based on a given description and various customisable options.

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
  - `style` (string): Style of the generated sprites (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background colour of the sprite sheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value, yo

Returns a Promise that resolves to an object containing:
- `original`: URL of the original AI-generated image.
- `itemSheet`: Base64-encoded image data URL of the processed item sprite sheet.
- `metadata`: Object containing information about the generated sprites.

## Examples, yo

1. Generate a set of weapon sprites:
```javascript
const result = await generateItemSprites("medieval weapons", {
  itemCount: 6,
  itemType: "weapons",
  style: "hand-drawn"
});
console.log(result.metadata);
console.log(result.itemSheet);
```

2. Generate potion sprites and save the result:
```javascript
const potions = await generateItemSprites("magical potions", {
  itemCount: 8,
  style: "pixel-art",
  background: "transparent",
  save: true
});
console.log(`Sprite sheet saved as: ${potions.metadata.filename}`);
```

## Notes or Considerations, yo

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are arranged in a grid layout, with a maximum of 2 columns.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies (OpenAI, axios, sharp) installed and properly configured.

## Customisation Tips, yo

- Experiment with different `style` options to achieve the desired look for your game items.
- Adjust the `size` parameter to generate higher or lower resolution sprites.
- Use the `itemType` parameter to specify the category of items you're generating (e.g., "weapons", "armour", "consumables").
- Set `background` to "transparent" if you need sprites with transparent backgrounds for your game engine.

Remember to test the generated sprites in your game environment to ensure they meet your visual and technical requirements, yo.