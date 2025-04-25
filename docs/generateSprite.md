---
slug: /
sidebar_position: 1
---

# generateSprite Documentation, yo

## Brief Description, yo
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis.

## Usage, yo
To use `generateSprite`, import it from the sprite module and call it with a description of the character you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters, yo
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value, yo
Returns an object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

## Examples, yo

1. Generate a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log(result.messages);
console.log(result.image);
```

2. Generate multiple variations:
```javascript
const variations = await sprite.generateSprite("A cartoon cat", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

## Fetch Available Sprite Styles, yo

To retrieve the available sprite styles, use the `fetchAvailableSpriteStyles` function:

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
console.log(styles);
// Output: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Generate Environment Sprites, yo

To generate environment sprites, use the `generateEnvironmentSprites` function:

```javascript
import { generateEnvironmentSprites } from './path/to/sprite/module';

const result = await generateEnvironmentSprites("A forest scene", {
  elements: 6,
  size: "1024x1024",
  style: "pixel-art",
  theme: "fantasy"
});

console.log(result.original); // URL of the original generated image
console.log(result.tileset); // Base64-encoded tileset image
console.log(result.metadata); // Metadata about the generated tileset
```

## Notes or Considerations, yo
- The function uses AI models (DALL-E 3 and GPT) to generate and analyse images, which may result in varying outputs for the same input.
- Generated sprites are optimised for walking animations and follow a specific layout (6 frames in a 2x3 grid).
- The function converts images to greyscale, which may affect the final output.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- The `fetchAvailableSpriteStyles` function provides a list of supported sprite styles.
- The `generateEnvironmentSprites` function allows you to create tileset images for game environments.
