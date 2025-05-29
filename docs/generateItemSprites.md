---
title: generateItemSprites
description: Generate item sprites for your game using AI-powered image generation
---

# generateItemSprites

The `generateItemSprites` function allows you to create a collection of item sprites for your game using AI-powered image generation. This function is particularly useful for quickly generating consistent and visually appealing item icons or pickups for game inventories.

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
  - `style` (string): Visual style of the items (default: "pixel-art").
  - `padding` (number): Padding between items in the sprite sheet (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color of the sprite sheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

Returns a Promise that resolves to an object containing:

- `original` (string): URL of the original generated image.
- `itemSheet` (string): Base64-encoded image data URL of the processed item sprite sheet.
- `metadata` (object): Information about the generated items, including:
  - `itemCount` (number): Total number of items generated.
  - `itemType` (string): Type of items generated.
  - `dimensions` (object): Width and height of the sprite sheet.
  - `itemData` (object): Information about the layout of items in the sheet.

## Examples

1. Generate a basic set of item sprites:

```javascript
const result = await generateItemSprites("fantasy RPG weapons and armor");
console.log(result.itemSheet); // Base64-encoded sprite sheet
console.log(result.metadata); // Item metadata
```

2. Generate custom item sprites with specific options:

```javascript
const options = {
  itemCount: 8,
  size: "2048x2048",
  style: "hand-drawn",
  itemType: "potions",
  background: "transparent",
  save: true
};

const result = await generateItemSprites("magical potion bottles", options);
console.log(result.metadata.itemCount); // 8
console.log(result.metadata.itemData.rows); // 4
```

## Notes and Considerations

- The function uses OpenAI's DALL-E 3 model to generate images, which may result in varying outputs for the same input.
- Generated items are arranged in a grid layout, with a maximum of 2 columns.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and API keys set up for OpenAI image generation.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - For generating character sprite sheets
- [generateEnvironmentSprites](./generateEnvironmentSprites.md) - For generating environment sprites
- [fetchAvailableSpriteStyles](./fetchAvailableSpriteStyles.md) - To get a list of available sprite styles