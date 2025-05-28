---
slug: /generateItemSprites
sidebar_position: 4
---

# generateItemSprites Documentation

## Brief Description
`generateItemSprites` is a function that generates a sprite sheet of item icons based on a given description, using AI-powered image generation.

## Usage
To use `generateItemSprites`, import it from the sprite module and call it with a description of the items you want to generate.

```javascript
import { generateItemSprites } from './path/to/sprite/module';

const result = await generateItemSprites(description, options);
```

## Parameters
- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the generated items (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color of the sprite sheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `itemSheet`: Base64-encoded image data URL of the generated item sprite sheet.
- `metadata`: Object containing information about the generated items.

## Examples

1. Generate a basic item sprite sheet:
```javascript
const result = await generateItemSprites("medieval weapons");
console.log(result.itemSheet);
console.log(result.metadata);
```

2. Generate a custom item sprite sheet:
```javascript
const options = {
  itemCount: 6,
  size: "2048x2048",
  style: "hand-drawn",
  itemType: "potions",
  background: "transparent"
};
const result = await generateItemSprites("magical potions", options);
console.log(result.itemSheet);
console.log(result.metadata);
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated items are arranged in a grid layout, with a maximum of 2 columns.
- The function may take some time to complete due to API calls and image processing.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The `style` parameter can be used to specify different art styles (e.g., "pixel-art", "vector", "3d", "hand-drawn").
- The `itemType` parameter helps guide the AI in generating appropriate items (e.g., "equipment", "potions", "food").
- The generated sprite sheet includes metadata about the items, which can be useful for implementing item systems in games or applications.