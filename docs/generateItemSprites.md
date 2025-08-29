---
title: generateItemSprites
description: Generate item sprites for your game using AI-powered image generation
---

# generateItemSprites

## Overview

The `generateItemSprites` function is part of the SpriteAI module, designed to create game item sprites using AI-powered image generation. This function allows you to quickly generate a collection of item sprites based on a given description, with customizable options for appearance and layout.

## Usage

To use `generateItemSprites`, import it from the SpriteAI module and call it with a description of the items you want to generate.

```javascript
import { generateItemSprites } from './path/to/spriteAI';

const result = await generateItemSprites(description, options);
```

## Parameters

- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style of the generated items (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color of the generated image (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

Returns a Promise that resolves to an object containing:

- `original` (string): URL of the original generated image.
- `itemSheet` (string): Base64-encoded image data URL of the processed item sheet.
- `metadata` (object): Information about the generated items, including:
  - `itemCount` (number): Number of items generated.
  - `itemType` (string): Type of items generated.
  - `dimensions` (object): Width and height of the generated image.
  - `itemData` (object): Information about the item layout in the sheet.

## Examples

### Generate a basic item sheet

```javascript
const description = "Fantasy RPG weapons";
const result = await generateItemSprites(description);
console.log(result.itemSheet); // Base64-encoded image data URL
console.log(result.metadata); // Item metadata
```

### Generate a custom item sheet

```javascript
const description = "Sci-fi gadgets";
const options = {
  itemCount: 6,
  size: "2048x2048",
  style: "vector",
  itemType: "technology",
  background: "black",
  save: true
};
const result = await generateItemSprites(description, options);
console.log(result.original); // URL of the original generated image
console.log(result.metadata.itemData); // Layout information for the items
```

## Notes and Considerations

- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- Generated items are arranged in a grid layout, with a maximum of 2 columns.
- The `save` option will store the generated image in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies installed (OpenAI, axios, sharp) before using this function.

## Related Functions

- `generateCharacterSpritesheet`: Generate character spritesheets with multiple animation states.
- `generateEnvironmentSprites`: Create environment sprites for game backgrounds and tilesets.

By using `generateItemSprites`, you can quickly create a variety of game items for your projects, saving time and resources in the asset creation process.