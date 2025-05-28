---
title: generateItemSprites
description: Generate item sprites for game development using AI-powered image generation
---

# generateItemSprites

The `generateItemSprites` function is part of the SpriteAI module, which allows you to create game item sprites using AI-powered image generation. This function is particularly useful for rapidly prototyping or generating a variety of item icons for your game inventory or pickup systems.

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
  - `style` (string): Art style of the items (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color of the spritesheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

Returns a Promise that resolves to an object containing:

- `original` (string): URL of the original AI-generated image.
- `itemSheet` (string): Base64-encoded image data URL of the processed spritesheet.
- `metadata` (object): Information about the generated items, including:
  - `itemCount` (number): Number of items generated.
  - `itemType` (string): Type of items generated.
  - `dimensions` (object): Width and height of the spritesheet.
  - `itemData` (object): Information about the layout of items in the spritesheet.

## Examples

### Generate a set of fantasy weapons

```javascript
const description = "medieval fantasy weapons";
const options = {
  itemCount: 6,
  style: "pixel-art",
  itemType: "weapons",
  background: "transparent"
};

const result = await generateItemSprites(description, options);
console.log(result.metadata);
console.log(result.itemSheet); // Base64-encoded spritesheet
```

### Generate potion items and save to disk

```javascript
const description = "colorful magic potions";
const options = {
  itemCount: 8,
  style: "hand-drawn",
  itemType: "consumables",
  save: true
};

const result = await generateItemSprites(description, options);
console.log(`Spritesheet saved as: ${description.replace(/\s+/g, '_')}_items.png`);
```

## Notes and Considerations

- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- Generated items are arranged in a grid layout, with a maximum of 2 columns.
- The `save` option will store the spritesheet in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to AI image generation and processing.
- Ensure you have the necessary permissions and credits to use the AI image generation service.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - For generating character spritesheets
- [generateEnvironmentSprites](./generateEnvironmentSprites.md) - For creating environment and tileset sprites