---
title: generateItemSprites
description: Generate item sprites for game assets using AI-powered image generation
---

# generateItemSprites

The `generateItemSprites` function is part of the SpriteAI module and allows you to generate item sprites for game assets using AI-powered image generation.

## Usage

To use `generateItemSprites`, import it from the SpriteAI module and call it with a description of the items you want to generate.

```javascript
import { generateItemSprites } from './path/to/spriteAI';

const result = await generateItemSprites(description, options);
```

## Parameters

- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style for the items (default: "pixel-art")
  - `padding` (number): Padding between items (default: 1)
  - `itemType` (string): Type of items to generate (default: "equipment")
  - `background` (string): Background color (default: "white")
  - `save` (boolean): Whether to save the generated image to disk

## Return Value

The function returns a Promise that resolves to an object containing:

- `original` (string): URL of the original AI-generated image
- `itemSheet` (string): Base64-encoded image data URL of the processed item sheet
- `metadata` (object): Information about the generated items
  - `itemCount` (number): Number of items generated
  - `itemType` (string): Type of items generated
  - `dimensions` (object): Width and height of the generated image
  - `itemData` (object): Information about the item layout in the sheet

## Examples

1. Generate a basic set of item sprites:

```javascript
const result = await generateItemSprites("medieval weapons and armor");
console.log(result.itemSheet); // Base64-encoded image data
console.log(result.metadata); // Item metadata
```

2. Generate custom item sprites with options:

```javascript
const options = {
  itemCount: 6,
  size: "512x512",
  style: "hand-drawn",
  itemType: "potions",
  background: "transparent",
  save: true
};

const result = await generateItemSprites("magical potions and elixirs", options);
console.log(result.metadata.itemData); // Item layout information
```

## Notes and Considerations

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated items are arranged in a grid layout, typically 2 columns wide.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Experiment with different descriptions and options to achieve the desired results for your game assets.