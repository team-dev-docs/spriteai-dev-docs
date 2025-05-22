---
title: generateItemSprites
description: Generate sprite sheets for game items using AI-powered image generation
---

# generateItemSprites

The `generateItemSprites` function allows you to generate sprite sheets for game items using AI-powered image generation. This function is particularly useful for creating consistent and visually appealing item icons or pickups for your game.

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
  - `style` (string): Style of the generated items (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color of the sprite sheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

The function returns a Promise that resolves to an object containing:

- `original` (string): URL of the original generated image.
- `itemSheet` (string): Base64-encoded image data URL of the processed item sprite sheet.
- `metadata` (object): Metadata about the generated items, including:
  - `itemCount` (number): Number of items generated.
  - `itemType` (string): Type of items generated.
  - `dimensions` (object): Width and height of the sprite sheet.
  - `itemData` (object): Information about the layout of items in the sprite sheet.

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
  size: "512x512",
  style: "vector",
  itemType: "potion",
  background: "transparent"
};

const result = await generateItemSprites("magical potions", options);
console.log(result.itemSheet);
console.log(result.metadata);
```

## Notes and Considerations

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated items are arranged in a grid layout, with a maximum of 2 columns.
- The function processes the generated image to create a sprite sheet with individual items.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies (OpenAI, axios, sharp) installed and configured in your project.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md)
- [generateEnvironmentSprites](./generateEnvironmentSprites.md)
- [fetchAvailableSpriteStyles](./fetchAvailableSpriteStyles.md)