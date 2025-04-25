---
slug: /generate-environment-sprites
sidebar_position: 4
---

# generateEnvironmentSprites

## Brief Description

The `generateEnvironmentSprites` function is used to create a tileset of environment sprites for game development. It utilizes AI-powered image generation to produce a set of distinct environmental elements based on a given description and theme.

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
  - `style` (string): Art style of the sprites (default: "pixel-art").
  - `padding` (number): Padding between sprite elements (default: 1).
  - `theme` (string): Theme of the environment (default: "fantasy").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

Returns a Promise that resolves to an object containing:

- `original` (string): URL of the original generated image.
- `tileset` (string): Base64-encoded image data URL of the processed tileset.
- `metadata` (object):
  - `elements` (number): Number of distinct environment pieces.
  - `theme` (string): Theme of the environment.
  - `dimensions` (object): Width and height of the generated image.
  - `tileData` (object): Information about rows, columns, and total tiles.

## Examples

1. Generate a basic forest environment tileset:

```javascript
const result = await generateEnvironmentSprites("dense forest with trees and bushes");
console.log(result.metadata);
console.log(result.tileset);
```

2. Generate a custom desert environment with specific options:

```javascript
const options = {
  elements: 6,
  size: "2048x2048",
  style: "hand-drawn",
  theme: "desert",
  save: true
};

const result = await generateEnvironmentSprites("sandy dunes with cacti and rock formations", options);
console.log(result.metadata);
```

## Notes and Considerations

- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- Generated tilesets are arranged in a grid, with the number of rows calculated based on the `elements` option.
- The `style` option allows for different art styles, such as "pixel-art", "vector", "3d", "hand-drawn", or "anime".
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and API access to use the OpenAI image generation service.