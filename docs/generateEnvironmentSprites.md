---
title: Generate Environment Sprites
description: Learn how to use the generateEnvironmentSprites function to create AI-generated environment sprites for your game.
---

# Generate Environment Sprites

## Introduction

The `generateEnvironmentSprites` function is a powerful tool that allows you to create AI-generated environment sprites for your game. This function uses advanced image generation techniques to produce a tileset of environment elements based on your description.

## Usage

To use the `generateEnvironmentSprites` function, import it from the spriteAI module and call it with a description of the environment you want to generate.

```javascript
import { generateEnvironmentSprites } from './spriteAI';

const result = await generateEnvironmentSprites(description, options);
```

## Parameters

- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of distinct environment pieces to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the generated sprites (default: "pixel-art").
  - `padding` (number): Padding between elements in the tileset (default: 1).
  - `theme` (string): Theme of the environment (default: "fantasy").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

The function returns a Promise that resolves to an object containing:

- `original`: URL of the original generated image.
- `tileset`: Base64-encoded image data URL of the processed tileset.
- `metadata`: Object containing information about the generated tileset:
  - `elements`: Number of distinct environment pieces.
  - `theme`: Theme of the environment.
  - `dimensions`: Width and height of the generated image.
  - `tileData`: Information about the tileset layout.

## Examples

1. Generate a basic fantasy forest tileset:

```javascript
const result = await generateEnvironmentSprites("forest with trees, bushes, and rocks");
console.log(result.tileset); // Base64-encoded tileset image
console.log(result.metadata); // Metadata about the generated tileset
```

2. Generate a sci-fi environment with custom options:

```javascript
const options = {
  elements: 6,
  size: "2048x2048",
  style: "vector",
  theme: "sci-fi",
  save: true
};

const result = await generateEnvironmentSprites("futuristic space station interior", options);
console.log(result.original); // URL of the original generated image
console.log(result.metadata.tileData); // Layout information for the tileset
```

## Notes and Considerations

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated tilesets are optimized for game environments and follow a grid layout.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies (OpenAI, axios, sharp) installed in your project.

## Related Functions

- `generateCharacterSpritesheet`: For generating character sprite sheets.
- `generateItemSprites`: For creating item sprite sheets.
- `fetchAvailableSpriteStyles`: To get a list of available sprite styles.

By using `generateEnvironmentSprites`, you can quickly create diverse and visually appealing environment assets for your game, saving time in the asset creation process and allowing for rapid prototyping and development.