---
title: generateItemSprites
description: Generate item sprites for game assets using AI-powered image generation
---

# generateItemSprites

## Introduction

The `generateItemSprites` function is part of the SpriteAI module, designed to create item sprites for game development. This function uses AI-powered image generation to produce a collection of item sprites based on a given description and set of options.

## Usage

To use the `generateItemSprites` function, import it from the SpriteAI module and call it with a description and optional parameters.

```javascript
import { generateItemSprites } from 'spriteAI';

const result = await generateItemSprites('fantasy weapons', options);
```

## Parameters

- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style of the items (default: "pixel-art").
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

## Example

```javascript
import { generateItemSprites } from 'spriteAI';

async function createGameItems() {
  const options = {
    itemCount: 6,
    style: 'pixel-art',
    itemType: 'weapons',
    save: true
  };

  const result = await generateItemSprites('medieval fantasy weapons', options);
  
  console.log('Original image URL:', result.original);
  console.log('Item sheet data URL:', result.itemSheet);
  console.log('Item metadata:', result.metadata);
}

createGameItems();
```

## Notes and Considerations

- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- Generated items are arranged in a grid layout, with a maximum of 2 columns.
- When `save` is set to `true`, the generated image is stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and API access to use the OpenAI image generation service.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md): For generating character spritesheets
- [generateEnvironmentSprites](./generateEnvironmentSprites.md): For creating environment sprites
- [fetchAvailableSpriteStyles](./fetchAvailableSpriteStyles.md): To get a list of available sprite styles