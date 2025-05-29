---
title: generateItemSprites
description: Generate item sprites for game assets using AI-powered image generation
---

# generateItemSprites

The `generateItemSprites` function is part of the SpriteAI module and allows you to generate a collection of item sprites for game assets using AI-powered image generation.

## Usage

To use the `generateItemSprites` function, import it from the SpriteAI module and call it with a description of the items you want to generate.

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
  - `itemData` (object): Information about the layout of items in the sheet.

## Examples

### Generate a set of weapon sprites

```javascript
const result = await generateItemSprites("medieval weapons", {
  itemCount: 6,
  style: "pixel-art",
  itemType: "weapons"
});

console.log(result.metadata);
console.log(result.itemSheet); // Base64-encoded image data URL
```

### Generate equipment sprites and save to disk

```javascript
const result = await generateItemSprites("fantasy armor set", {
  itemCount: 8,
  style: "hand-drawn",
  itemType: "equipment",
  save: true
});

console.log(`Saved to: ${result.metadata.filename}`);
```

## Notes and Considerations

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated items are arranged in a grid layout, with a maximum of 2 columns.
- The `save` option will store the generated image in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies installed (OpenAI, axios, sharp) before using this function.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - For generating character spritesheets
- [generateEnvironmentSprites](./generateEnvironmentSprites.md) - For generating environment sprites
- [fetchAvailableSpriteStyles](./fetchAvailableSpriteStyles.md) - To get a list of available sprite styles