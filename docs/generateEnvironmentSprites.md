---
slug: /generateEnvironmentSprites
sidebar_position: 2
---

# generateEnvironmentSprites Documentation

## Brief Description
`generateEnvironmentSprites` is a function that generates a tileset of environment sprites based on a given description, using AI-powered image generation.

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
  - `padding` (number): Padding between elements (default: 1).
  - `theme` (string): Theme of the environment (default: "fantasy").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `tileset`: Base64-encoded image data URL of the generated tileset.
- `metadata`: Object containing information about the generated tileset.

## Examples

1. Generate a basic environment tileset:
```javascript
const result = await generateEnvironmentSprites("A lush forest with ancient ruins");
console.log(result.metadata);
console.log(result.tileset);
```

2. Generate a custom environment tileset:
```javascript
const options = {
  elements: 6,
  size: "2048x2048",
  style: "vector",
  theme: "sci-fi",
  save: true
};
const result = await generateEnvironmentSprites("A futuristic space station interior", options);
console.log(result.metadata);
```

## Notes or Considerations
- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- Generated tilesets are optimized for game environments and follow a grid layout.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Consider using the `fetchAvailableSpriteStyles()` function to get a list of available sprite styles.