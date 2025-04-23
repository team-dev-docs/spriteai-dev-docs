---
slug: /generateEnvironmentSprites
sidebar_position: 3
---

# generateEnvironmentSprites

## Brief Description

`generateEnvironmentSprites` is a function that generates a tileset of environment sprites based on a given description using AI-powered image generation. This function is particularly useful for creating game environments and background elements.

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
- `original`: URL of the original generated image.
- `tileset`: Base64-encoded image data URL of the processed tileset.
- `metadata`: Object containing information about the generated tileset.

## Examples

1. Generate a basic forest environment:
```javascript
const result = await generateEnvironmentSprites("forest with trees and bushes");
console.log(result.tileset);
console.log(result.metadata);
```

2. Generate a custom sci-fi environment:
```javascript
const options = {
  elements: 6,
  style: "vector",
  theme: "sci-fi",
  save: true
};
const result = await generateEnvironmentSprites("futuristic space station interior", options);
console.log(result.original);
console.log(result.metadata.tileData);
```

## Notes and Considerations

- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- Generated tilesets are optimized for game environments and follow a grid layout.
- The `save` option stores the generated tileset in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies (OpenAI, axios, sharp) installed and configured in your project.
- The generated tileset is returned as a Base64-encoded string, which can be easily used in web applications or further processed as needed.