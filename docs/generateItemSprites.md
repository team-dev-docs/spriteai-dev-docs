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
  - `style` (string): Style of the generated sprites (default: "pixel-art").
  - `padding` (number): Padding between sprites (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color of the sprite sheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `itemSheet`: Base64-encoded image data URL of the generated sprite sheet.
- `metadata`: Object containing information about the generated sprites.

## Examples

1. Generate a basic item sprite sheet:
```javascript
const result = await generateItemSprites("Fantasy RPG weapons");
console.log(result.metadata);
console.log(result.itemSheet);
```

2. Generate custom item sprites:
```javascript
const options = {
  itemCount: 6,
  style: "hand-drawn",
  itemType: "potions",
  background: "transparent"
};
const result = await generateItemSprites("Magical potion bottles", options);
console.log(result.metadata);
```

## Notes or Considerations
- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- Generated sprites are arranged in a grid layout, with a maximum of 2 columns.
- The function may take some time to complete due to API calls and image processing.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The `itemType` option can be used to specify the category of items (e.g., "weapons", "armor", "consumables").
- The `style` option allows for different visual styles, such as "pixel-art", "vector", "3d", "hand-drawn", or "anime".
- Ensure that the OpenAI API key is properly configured in your environment for the function to work.