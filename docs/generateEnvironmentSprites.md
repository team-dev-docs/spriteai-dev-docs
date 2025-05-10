---
slug: /generate-environment-sprites
sidebar_position: 2
---

# Generate Environment Sprites, yo

## Brief Description, yo

The `generateEnvironmentSprites` function is a powerful tool for creating environment sprites using AI-powered image generation. It produces a tileset of environment elements based on a given description and various customisable options.

## Usage, yo

To use `generateEnvironmentSprites`, import it from the spriteAI module and call it with a description of the environment you want to generate.

```javascript
import { generateEnvironmentSprites } from './path/to/spriteAI';

const result = await generateEnvironmentSprites(description, options);
```

## Parameters, yo

- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of distinct environment elements to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the generated sprites (default: "pixel-art").
  - `padding` (number): Padding between elements (default: 1).
  - `theme` (string): Theme of the environment (default: "fantasy").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value, yo

Returns a Promise that resolves to an object containing:
- `original`: URL of the originally generated image.
- `tileset`: Base64-encoded image data URL of the processed tileset.
- `metadata`: Object containing information about the generated tileset.

## Examples, yo

1. Generate a basic forest environment tileset:

```javascript
const result = await generateEnvironmentSprites("A lush forest with trees and bushes");
console.log(result.tileset);
console.log(result.metadata);
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
const result = await generateEnvironmentSprites("A barren desert with cacti and sand dunes", options);
console.log(result.metadata.elements);
console.log(result.metadata.theme);
```

## Notes or Considerations, yo

- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- Generated tilesets are optimised for game environments and follow a specific layout (2 columns with rows based on the number of elements).
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary API credentials and permissions to use the OpenAI image generation service.

## Available Sprite Styles, yo

To fetch the available sprite styles, use the `fetchAvailableSpriteStyles` function:

```javascript
import { fetchAvailableSpriteStyles } from './path/to/spriteAI';

const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

Remember to choose an appropriate style that fits your game's aesthetic and the environment you're creating, yo!