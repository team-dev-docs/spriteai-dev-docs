---
slug: /generateItemSprites
sidebar_position: 5
---

# Generate Item Sprites Documentation, yo

## Brief Description, yo

The `generateItemSprites` function is a powerful tool for creating item sprites using AI-powered image generation. It allows you to quickly produce a collection of game items based on a given description and customizable options.

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
  - `style` (string): Art style for the items (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background colour of the item sheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value, yo

Returns an object containing:
- `original`: URL of the original AI-generated image.
- `itemSheet`: Base64-encoded image data URL of the processed item sheet.
- `metadata`: Object containing information about the generated items.

## Examples, yo

1. Generate a basic item sheet:
```javascript
const result = await generateItemSprites("medieval weapons");
console.log(result.itemSheet);
console.log(result.metadata);
```

2. Generate items with custom options:
```javascript
const options = {
  itemCount: 6,
  style: "hand-drawn",
  itemType: "potions",
  background: "transparent"
};
const result = await generateItemSprites("magical potions", options);
console.log(result.itemSheet);
```

## Notes or Considerations, yo

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated items are arranged in a grid layout, optimised for game inventory or pickup icons.
- The function may take some time to complete due to API calls and image processing.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- Ensure you have the necessary dependencies installed, including OpenAI, axios, and sharp libraries.