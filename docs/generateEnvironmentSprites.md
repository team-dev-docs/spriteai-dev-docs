---
slug: /generateEnvironmentSprites
sidebar_position: 2
---

# generateEnvironmentSprites

## Brief Description

The `generateEnvironmentSprites` function is part of the spriteAI module. It generates a tileset of environment sprites based on a given description using AI-powered image generation.

## Usage

To use `generateEnvironmentSprites`, import it from the spriteAI module and call it with a description of the environment you want to generate.

```javascript
import { generateEnvironmentSprites } from './path/to/spriteAI';

const result = await generateEnvironmentSprites(description, options);
```

## Parameters

- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of distinct environment pieces to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the generated sprites (default: "pixel-art").
  - `padding` (number): Padding between sprite elements (default: 1).
  - `theme` (string): Theme of the environment (default: "fantasy").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

Returns a Promise that resolves to an object containing:

- `original` (string): URL of the originally generated image.
- `tileset` (string): Base64-encoded image data URL of the processed tileset.
- `metadata` (object):
  - `elements` (number): Number of distinct environment pieces.
  - `theme` (string): Theme of the environment.
  - `dimensions` (object): Width and height of the generated image.
  - `tileData` (object): Information about the tileset layout.

## Examples

1. Generate a basic environment tileset:

```javascript
const result = await generateEnvironmentSprites("A lush forest with ancient ruins");
console.log(result.tileset);
console.log(result.metadata);
```

2. Generate a custom environment tileset with specific options:

```javascript
const options = {
  elements: 6,
  size: "2048x2048",
  style: "vector",
  theme: "sci-fi",
  save: true
};

const result = await generateEnvironmentSprites("A futuristic space station interior", options);
console.log(result.metadata.tileData);
```

## Notes and Considerations

- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- Generated tilesets are optimized for game environments and follow a grid layout.
- The `save` option stores the generated image in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies (OpenAI, axios, sharp) installed and configured in your project.

## See Also

- [generateCharacterSpritesheet](/generateCharacterSpritesheet)
- [fetchAvailableSpriteStyles](/fetchAvailableSpriteStyles)