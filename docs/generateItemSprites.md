---
title: Generate Item Sprites
description: Learn how to use the generateItemSprites function to create game item sprites using AI.
---

# Generate Item Sprites

## Introduction

The `generateItemSprites` function is a powerful tool that allows you to generate game item sprites using AI. This function is particularly useful for creating consistent and visually appealing item icons for game inventories, pickups, or equipment displays.

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
  - `style` (string): Art style of the items (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color of the item sheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

The function returns a Promise that resolves to an object containing:

- `original`: URL of the original AI-generated image.
- `itemSheet`: Base64-encoded image data URL of the processed item sheet.
- `metadata`: Object containing information about the generated items.

## Examples

1. Generate a basic item sheet:

```javascript
const result = await generateItemSprites("fantasy weapons");
console.log(result.itemSheet);
console.log(result.metadata);
```

2. Generate custom items with specific options:

```javascript
const options = {
  itemCount: 6,
  size: "2048x2048",
  style: "hand-drawn",
  itemType: "potions",
  background: "transparent",
  save: true
};

const result = await generateItemSprites("magical potions with different effects", options);
console.log(result.metadata.itemData);
```

## Metadata

The `metadata` object in the result contains useful information about the generated items:

- `itemCount`: Total number of items generated.
- `itemType`: Type of items generated.
- `dimensions`: Width and height of the generated image.
- `itemData`: Information about the grid layout of items.

## Notes and Considerations

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated items are arranged in a grid layout, with a maximum of 2 columns.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and API access to use the OpenAI image generation service.

## See Also

- [Generate Character Spritesheet](./generateCharacterSpritesheet.md)
- [Generate Environment Sprites](./generateEnvironmentSprites.md)
- [Available Sprite Styles](./fetchAvailableSpriteStyles.md)