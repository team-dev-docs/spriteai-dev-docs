---
slug: /generateItemSprites
sidebar_position: 4
---

# generateItemSprites

## Brief Description

`generateItemSprites` is a function that generates a sprite sheet of game items based on a given description using AI-powered image generation. This function is particularly useful for creating consistent and visually appealing item sprites for games or applications.

## Usage

To use `generateItemSprites`, import it from the spriteAI module and call it with a description of the items you want to generate.

```javascript
import { generateItemSprites } from './path/to/spriteAI';

const result = await generateItemSprites(description, options);
```

## Parameters

- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the generated sprites (default: "pixel-art").
  - `padding` (number): Padding between items in the sprite sheet (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color of the sprite sheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

Returns a Promise that resolves to an object containing:

- `original` (string): URL of the original generated image.
- `itemSheet` (string): Base64-encoded image data URL of the processed sprite sheet.
- `metadata` (object): Information about the generated items, including:
  - `itemCount` (number): Number of items generated.
  - `itemType` (string): Type of items generated.
  - `dimensions` (object): Width and height of the sprite sheet.
  - `itemData` (object): Information about the layout of items in the sprite sheet.

## Examples

1. Generate a basic item sprite sheet:

```javascript
const result = await generateItemSprites("Medieval weapons and armor");
console.log(result.itemSheet);
console.log(result.metadata);
```

2. Generate a custom item sprite sheet:

```javascript
const options = {
  itemCount: 6,
  size: "512x512",
  style: "hand-drawn",
  itemType: "potions",
  background: "transparent",
  save: true
};

const result = await generateItemSprites("Colorful magic potions", options);
console.log(result.metadata.itemCount);
console.log(result.metadata.itemData);
```

## Notes and Considerations

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated items are arranged in a grid layout, with a maximum of 2 columns.
- The `style` option allows for different art styles, such as "pixel-art", "vector", "3d", "hand-drawn", or "anime".
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies installed (OpenAI, axios, sharp) and proper API credentials set up.
- Consider implementing error handling when using this function in production code.