---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis.

## Usage
To use `generateSprite`, import it from the sprite module and call it with a description of the character you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

## Examples

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

## Notes or Considerations
- The function uses AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid).
- The function converts images to grayscale, which may affect the final output.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.

## Additional Functions

### fetchAvailableSpriteStyles

Retrieves a list of available sprite styles that can be used with the `generateSprite` function.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

### generateEnvironmentSprites

Generates environment sprites based on a given description and options.

```javascript
import { generateEnvironmentSprites } from './path/to/sprite/module';

const result = await generateEnvironmentSprites("forest", {
  elements: 4,
  size: "1024x1024",
  style: "pixel-art",
  padding: 1,
  theme: "fantasy"
});

console.log(result.original); // URL of the original generated image
console.log(result.tileset); // Base64-encoded tileset image
console.log(result.metadata); // Object containing metadata about the generated tileset
```

### generateItemSprites

Generates item sprites based on a given description and options.

```javascript
import { generateItemSprites } from './path/to/sprite/module';

const result = await generateItemSprites("medieval weapons", {
  itemCount: 4,
  size: "1024x1024",
  style: "pixel-art",
  padding: 1,
  itemType: "equipment",
  background: "white"
});

console.log(result.original); // URL of the original generated image
console.log(result.itemSheet); // Base64-encoded item sheet image
console.log(result.metadata); // Object containing metadata about the generated item sheet
```

These additional functions expand the capabilities of the sprite generation module, allowing for the creation of environment tiles and item sprites alongside character sprites.
