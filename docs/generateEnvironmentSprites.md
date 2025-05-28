---
title: generateEnvironmentSprites
description: Generate environment sprites using AI-powered image generation
---

# generateEnvironmentSprites

## Introduction

The `generateEnvironmentSprites` function is part of the SpriteAI module and allows you to create environment sprites for your game or application using AI-powered image generation. This function generates a tileset of environment elements based on a given description and customizable options.

## Usage

To use `generateEnvironmentSprites`, import it from the SpriteAI module and call it with a description and optional parameters:

```javascript
import { generateEnvironmentSprites } from 'spriteAI';

const result = await generateEnvironmentSprites(description, options);
```

## Parameters

- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of distinct environment elements to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the generated sprites (default: "pixel-art").
  - `padding` (number): Padding between elements in the tileset (default: 1).
  - `theme` (string): Theme of the environment (default: "fantasy").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

Returns a Promise that resolves to an object containing:

- `original` (string): URL of the originally generated image.
- `tileset` (string): Base64-encoded image data URL of the processed tileset.
- `metadata` (object): Information about the generated tileset, including:
  - `elements` (number): Number of distinct elements in the tileset.
  - `theme` (string): Theme of the environment.
  - `dimensions` (object): Width and height of the generated image.
  - `tileData` (object): Information about the tileset layout.

## Examples

### Generate a basic environment tileset

```javascript
const description = "Forest environment with trees, bushes, and rocks";
const result = await generateEnvironmentSprites(description);
console.log(result.metadata);
console.log(result.tileset);
```

### Generate a custom environment with specific options

```javascript
const description = "Desert oasis with palm trees and water";
const options = {
  elements: 6,
  size: "2048x2048",
  style: "hand-drawn",
  theme: "desert",
  save: true
};
const result = await generateEnvironmentSprites(description, options);
console.log(result.metadata);
```

## Notes and Considerations

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated tilesets are optimized for game environments and follow a specific layout based on the number of elements.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies (OpenAI, axios, sharp) installed and properly configured in your project.

## See Also

- [generateCharacterSpritesheet](/docs/generateCharacterSpritesheet) - For generating character spritesheets
- [generateItemSprites](/docs/generateItemSprites) - For generating item sprites
- [fetchAvailableSpriteStyles](/docs/fetchAvailableSpriteStyles) - To get a list of available sprite styles