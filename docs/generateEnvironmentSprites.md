---
sidebar_position: 2
---

# generateEnvironmentSprites

## Brief Description
`generateEnvironmentSprites` is a function that generates a set of environment sprites based on a given description, using AI-powered image generation. This function is particularly useful for creating game assets or visual elements for environmental scenes.

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
  - `padding` (number): Padding between elements in the sprite sheet (default: 1).
  - `theme` (string): Theme of the environment (default: "fantasy").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `tileset`: Base64-encoded image data URL of the generated sprite sheet.
- `metadata`: Object containing information about the generated sprites:
  - `elements`: Number of elements generated.
  - `theme`: Theme of the environment.
  - `dimensions`: Object with width and height of the generated image.
  - `tileData`: Object with rows, columns, and total tiles information.

## Examples

1. Generate a basic set of environment sprites:
```javascript
const result = await generateEnvironmentSprites("A lush forest with ancient ruins");
console.log(result.tileset);
console.log(result.metadata);
```

2. Generate environment sprites with custom options:
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

## Notes or Considerations
- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- Generated sprites are arranged in a grid layout, with a maximum of 2 columns.
- The function converts the original image into a sprite sheet with clear separation between elements.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary API access and dependencies (OpenAI, axios, sharp) installed and configured.