---
slug: /generate-environment-sprites
sidebar_position: 4
---

# generateEnvironmentSprites

## Brief Description

The `generateEnvironmentSprites` function is a powerful tool for creating environment sprite sheets using AI-powered image generation. It allows you to generate a tileset of environment elements based on a given description, suitable for use in game environments.

## Usage

To use `generateEnvironmentSprites`, import it from the sprite module and call it with a description of the environment you want to generate.

```javascript
import { generateEnvironmentSprites } from './path/to/sprite/module';

const result = await generateEnvironmentSprites(description, options);
```

## Parameters

- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of distinct environment pieces to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the generated sprites (default: "pixel-art").
  - `padding` (number): Padding between elements in the sprite sheet (default: 1).
  - `theme` (string): Theme of the environment (default: "fantasy").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

Returns a Promise that resolves to an object containing:

- `original` (string): URL of the original generated image.
- `tileset` (string): Base64-encoded image data URL of the processed tileset.
- `metadata` (object): Information about the generated tileset, including:
  - `elements` (number): Number of distinct elements in the tileset.
  - `theme` (string): Theme of the environment.
  - `dimensions` (object): Width and height of the generated image.
  - `tileData` (object): Information about the tileset layout.

## Examples

1. Generate a basic forest environment tileset:

```javascript
const result = await generateEnvironmentSprites("A lush forest with trees, bushes, and rocks");
console.log(result.metadata);
console.log(result.tileset);
```

2. Generate a desert environment with custom options:

```javascript
const options = {
  elements: 6,
  size: "2048x2048",
  style: "hand-drawn",
  theme: "desert",
  save: true
};

const result = await generateEnvironmentSprites("A barren desert with cacti, sand dunes, and oases", options);
console.log(result.metadata);
```

## Notes and Considerations

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated tilesets are optimised for game environments and follow a specific layout (grid of elements).
- The function processes the generated image to create a tileset with clear separation between elements.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies installed (OpenAI, axios, sharp) before using this function.
- The style and theme options can be used to fine-tune the appearance of the generated environment sprites.

## See Also

- [generateCharacterSpritesheet](./generate-character-spritesheet.md)
- [generateItemSprites](./generate-item-sprites.md)
- [fetchAvailableSpriteStyles](./fetch-available-sprite-styles.md)