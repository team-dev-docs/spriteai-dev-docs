---
title: generateItemSprites
description: Generate item sprite sheets using AI-powered image generation
---

# generateItemSprites

The `generateItemSprites` function allows you to create sprite sheets for game items using AI-powered image generation. This function is part of the spriteAI module and can be used to generate a collection of item sprites based on a given description.

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
  - `style` (string): Style of the generated items (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color of the sprite sheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

Returns a Promise that resolves to an object containing:

- `original` (string): URL of the original generated image.
- `itemSheet` (string): Base64-encoded image data URL of the processed sprite sheet.
- `metadata` (object): Information about the generated sprites, including:
  - `itemCount` (number): Number of items generated.
  - `itemType` (string): Type of items generated.
  - `dimensions` (object): Width and height of the sprite sheet.
  - `itemData` (object): Information about the item layout in the sprite sheet.

## Examples

1. Generate a basic item sprite sheet:

```javascript
const result = await generateItemSprites("fantasy weapons");
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

## Notes and Considerations

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated items are arranged in a grid layout, with a maximum of 2 columns.
- The function may take some time to complete due to API calls and image processing.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The style of the generated items can be customized using the `style` option. Available styles can be fetched using the `fetchAvailableSpriteStyles` function from the same module.
- The `itemType` option can be used to specify the category of items to generate, such as "equipment", "consumables", or "treasures".
- The generated sprite sheet is optimized for game inventory or pickup icons.

By using `generateItemSprites`, you can quickly create a collection of item sprites for your game, saving time and effort in the asset creation process.