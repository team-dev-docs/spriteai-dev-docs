---
title: generateEnvironmentSprites
description: Generate environment sprites using AI-powered image generation
---

# generateEnvironmentSprites

The `generateEnvironmentSprites` function is part of the SpriteAI module, designed to generate environment sprites for game development using AI-powered image generation.

## Overview

This function creates a tileset of environment sprites based on a given description. It uses DALL-E 3 to generate the image and then processes it into a usable spritesheet format.

## Usage

```javascript
import { generateEnvironmentSprites } from 'spriteAI';

const result = await generateEnvironmentSprites(description, options);
```

## Parameters

- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of distinct environment pieces to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style of the sprites (default: "pixel-art").
  - `padding` (number): Padding between sprite elements (default: 1).
  - `theme` (string): Theme of the environment (default: "fantasy").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

The function returns a Promise that resolves to an object containing:

- `original` (string): URL of the original generated image.
- `tileset` (string): Base64-encoded image data URL of the processed tileset.
- `metadata` (object):
  - `elements` (number): Number of distinct elements in the tileset.
  - `theme` (string): Theme of the generated environment.
  - `dimensions` (object): Width and height of the generated image.
  - `tileData` (object): Information about the tile layout (rows, columns, total tiles).

## Examples

### Basic Usage

```javascript
const description = "A lush forest with ancient ruins";
const result = await generateEnvironmentSprites(description);

console.log(result.metadata);
console.log(result.tileset);
```

### Custom Options

```javascript
const description = "A sci-fi space station interior";
const options = {
  elements: 6,
  size: "1024x1024",
  style: "vector",
  theme: "futuristic",
  save: true
};

const result = await generateEnvironmentSprites(description, options);
```

## Notes and Considerations

- The function uses the DALL-E 3 model for image generation, which may result in varying outputs for the same input.
- Generated tilesets are optimized for game environments and follow a grid layout.
- The function converts the original image into a tileset format, which may affect the final output.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies (OpenAI, axios, sharp) installed and configured in your project.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md)
- [generateItemSprites](./generateItemSprites.md)
- [fetchAvailableSpriteStyles](./fetchAvailableSpriteStyles.md)