---
title: generateItemSprites
description: Generate item sprites for your game using AI-powered image generation
---

# generateItemSprites

## Introduction

The `generateItemSprites` function allows you to create a collection of item sprites for your game using AI-powered image generation. This function is particularly useful for quickly generating consistent and visually appealing item icons or pickup sprites for game inventories.

## Usage

To use the `generateItemSprites` function, import it from the spriteAI module and call it with a description of the items you want to generate.

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
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color of the sprite sheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

Returns a Promise that resolves to an object containing:

- `original`: URL of the original AI-generated image.
- `itemSheet`: Base64-encoded image data URL of the processed sprite sheet.
- `metadata`: Object containing information about the generated items.

## Examples

### Generate a set of weapon items

```javascript
const result = await generateItemSprites("medieval weapons", {
  itemCount: 6,
  style: "pixel-art",
  itemType: "weapons"
});

console.log(result.metadata);
console.log(result.itemSheet);
```

### Generate potion items and save to disk

```javascript
const result = await generateItemSprites("magic potions", {
  itemCount: 8,
  style: "vector",
  itemType: "consumables",
  save: true
});

console.log(`Saved to: ${result.metadata.filename}`);
```

## Metadata

The `metadata` object in the result contains useful information about the generated items:

- `itemCount`: Number of items generated
- `itemType`: Type of items generated
- `dimensions`: Width and height of the entire sprite sheet
- `itemData`: Object containing information about the item layout
  - `rows`: Number of rows in the sprite sheet
  - `columns`: Number of columns in the sprite sheet
  - `totalItems`: Total number of items generated

## Notes and Considerations

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for game inventory or pickup icons.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and credits to use the OpenAI API for image generation.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - For generating character sprite sheets
- [generateEnvironmentSprites](./generateEnvironmentSprites.md) - For generating environment sprite sets