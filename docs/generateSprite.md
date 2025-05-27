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

## New Functions

### fetchAvailableSpriteStyles

This function retrieves a list of available sprite styles that can be used when generating sprites.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
console.log(styles);
// Output: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

### generateEnvironmentSprites

This function generates a tileset of environment sprites based on a given description.

```javascript
import { generateEnvironmentSprites } from './path/to/sprite/module';

const result = await generateEnvironmentSprites("forest", {
  elements: 4,
  size: "1024x1024",
  style: "pixel-art",
  padding: 1,
  theme: "fantasy",
  save: true
});

console.log(result.original); // URL of the original generated image
console.log(result.tileset); // Base64-encoded tileset image
console.log(result.metadata); // Metadata about the generated tileset
```

#### Parameters
- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of different elements to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprites (default: "pixel-art").
  - `padding` (number): Padding between elements (default: 1).
  - `theme` (string): Theme of the environment (default: "fantasy").
  - `save` (boolean): Whether to save the generated image to disk.

### generateItemSprites

This function generates a collection of item sprites based on a given description.

```javascript
import { generateItemSprites } from './path/to/sprite/module';

const result = await generateItemSprites("medieval weapons", {
  itemCount: 6,
  size: "1024x1024",
  style: "pixel-art",
  padding: 1,
  itemType: "equipment",
  background: "transparent",
  save: true
});

console.log(result.original); // URL of the original generated image
console.log(result.itemSheet); // Base64-encoded item sheet image
console.log(result.metadata); // Metadata about the generated items
```

#### Parameters
- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprites (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items (default: "equipment").
  - `background` (string): Background color (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

These new functions expand the capabilities of the sprite generation module, allowing for more diverse and specialized sprite creation for game development and other visual applications.
