---
title: generateItemSprites
description: Generate item sprites for game assets using AI-powered image generation
---

# generateItemSprites

## Introduction

The `generateItemSprites` function is part of the SpriteAI module and allows you to generate item sprites for your game using AI-powered image generation. This function creates a collection of item sprites based on a given description and various customizable options.

## Usage

To use the `generateItemSprites` function, import it from the SpriteAI module and call it with a description and optional parameters:

```javascript
import { generateItemSprites } from 'spriteAI';

const result = await generateItemSprites(description, options);
```

## Parameters

- `description` (string, required): A text description of the items you want to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the items (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

The function returns a Promise that resolves to an object containing:

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
const description = "medieval fantasy weapons";
const result = await generateItemSprites(description);
console.log(result.metadata);
console.log(result.itemSheet);
```

### Generate custom item sprites

```javascript
const description = "sci-fi gadgets";
const options = {
  itemCount: 6,
  size: "2048x2048",
  style: "vector",
  itemType: "technology",
  background: "transparent",
  save: true
};
const result = await generateItemSprites(description, options);
console.log(result.metadata);
```

## Notes and Considerations

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for game inventory or pickup icons.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and credits to use the AI image generation service.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md)
- [generateEnvironmentSprites](./generateEnvironmentSprites.md)
- [fetchAvailableSpriteStyles](./fetchAvailableSpriteStyles.md)