---
title: Generate Item Sprites
sidebar_position: 4
---

# Generate Item Sprites

The `generateItemSprites` function is part of the SpriteAI module and allows you to create sprite sheets for game items using AI-powered image generation.

## Overview

This function generates a collection of item sprites based on a given description. It's particularly useful for creating consistent and visually appealing item icons for games or other interactive applications.

## Usage

```javascript
import { generateItemSprites } from 'spriteAI';

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

The function returns a Promise that resolves to an object containing:

- `original` (string): URL of the original generated image.
- `itemSheet` (string): Base64-encoded image data URL of the processed item sheet.
- `metadata` (object): Information about the generated items, including:
  - `itemCount` (number): Total number of items generated.
  - `itemType` (string): Type of items generated.
  - `dimensions` (object): Width and height of the generated image.
  - `itemData` (object): Information about the item layout in the sheet.

## Examples

### Generate a basic item sprite sheet

```javascript
const description = "Fantasy RPG weapons";
const result = await generateItemSprites(description);

console.log(result.metadata);
console.log(result.itemSheet); // Base64-encoded image data
```

### Generate custom item sprites

```javascript
const description = "Sci-fi gadgets";
const options = {
  itemCount: 6,
  size: "2048x2048",
  style: "vector",
  itemType: "technology",
  background: "transparent"
};

const result = await generateItemSprites(description, options);

// Save the generated image
if (result.metadata.itemCount === 6) {
  const fs = require('fs');
  const imageData = result.itemSheet.split(',')[1];
  fs.writeFileSync('sci-fi-gadgets.png', imageData, 'base64');
}
```

## Notes and Considerations

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for game inventory or pickup icons.
- The function may take some time to complete due to API calls and image processing.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- Ensure you have the necessary permissions and API access to use the OpenAI image generation service.
- The style and quality of generated items can be influenced by the detail and specificity of the description provided.