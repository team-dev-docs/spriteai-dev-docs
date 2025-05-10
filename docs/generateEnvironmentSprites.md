---
slug: /generate-environment-sprites
sidebar_position: 2
---

# Generate Environment Sprites, yo

## Brief Description, yo

The `generateEnvironmentSprites` function is a powerful tool for creating environment sprite sheets using AI-powered image generation. It allows you to quickly generate tileset images for game environments based on textual descriptions.

## Usage, yo

To use `generateEnvironmentSprites`, import it from the spriteAI module and call it with a description of the environment you want to generate.

```javascript
import { generateEnvironmentSprites } from './path/to/spriteAI';

const result = await generateEnvironmentSprites(description, options);
```

## Parameters, yo

- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of distinct environment pieces to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style of the generated sprites (default: "pixel-art").
  - `padding` (number): Padding between sprite elements (default: 1).
  - `theme` (string): Theme of the environment (default: "fantasy").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value, yo

Returns an object containing:
- `original`: URL of the original generated image.
- `tileset`: Base64-encoded image data URL of the processed tileset.
- `metadata`: Object containing information about the generated tileset.

## Examples, yo

1. Generate a basic forest tileset:

```javascript
const result = await generateEnvironmentSprites("A lush forest with trees, bushes, and rocks");
console.log(result.metadata);
console.log(result.tileset);
```

2. Generate a desert environment with custom options:

```javascript
const options = {
  elements: 6,
  style: "hand-drawn",
  theme: "desert",
  save: true
};
const result = await generateEnvironmentSprites("A vast desert with sand dunes and oases", options);
console.log(result.metadata);
```

## Notes or Considerations, yo

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated tilesets are optimized for game environments and follow a specific layout (2 columns with rows based on the number of elements).
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies (OpenAI, axios, sharp) installed and configured properly.