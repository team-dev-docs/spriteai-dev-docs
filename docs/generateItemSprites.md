```markdown
---
slug: /generateItemSprites
sidebar_position: 4
---

# generateItemSprites

## Brief Description

`generateItemSprites` is a function that generates a collection of item sprites for games using AI-powered image generation. It creates a spritesheet containing multiple items based on a given description and customizable options.

## Usage

To use `generateItemSprites`, import it from the sprite module and call it with a description of the items you want to generate.

```javascript
import { generateItemSprites } from './path/to/sprite/module';

const result = await generateItemSprites(description, options);
```

## Parameters

- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the generated items (default: "pixel-art").
  - `padding` (number): Padding between items in the spritesheet (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color of the spritesheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

Returns an object containing:
- `original`: URL of the original generated image.
- `itemSheet`: Base64-encoded image data URL of the generated item spritesheet.
- `metadata`: Object containing information about the generated items:
  - `itemCount`: Number of items generated.
  - `itemType`: Type of items generated.
  - `dimensions`: Width and height of the generated image.
  - `itemData`: Information about the layout of items in the spritesheet.

## Examples

1. Generate a basic item spritesheet:

```javascript
const result = await generateItemSprites("Fantasy RPG weapons");
console.log(result.itemSheet);
console.log(result.metadata);
```

2. Generate a customized item spritesheet:

```javascript
const options = {
  itemCount: 6,
  size: "2048x2048",
  style: "hand-drawn",
  itemType: "potions",
  background: "transparent",
  save: true
};
const result = await generateItemSprites("Magic potion bottles", options);
console.log(result.metadata.itemCount);
console.log(result.metadata.dimensions);
```

## Notes or Considerations

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated items are arranged in a grid layout within the spritesheet.
- The function may take some time to complete due to API calls and image processing.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The `style` option can be set to values like "pixel-art", "vector", "3d", "hand-drawn", or "anime" to influence the visual style of the generated items.
- The `itemType` option helps guide the AI in generating appropriate items (e.g., "equipment", "potions", "food", etc.).
- The generated spritesheet can be used directly in game development for item icons, inventory displays, or pickup objects.

```