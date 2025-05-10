---
slug: /generateItemSprites
sidebar_position: 4
---

# generateItemSprites Documentation

## Brief Description
`generateItemSprites` is a function that generates a collection of item sprites for game assets based on a given description, utilising AI-powered image generation.

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
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background colour of the generated image (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `itemSheet`: Base64-encoded image data URL of the generated item sheet.
- `metadata`: Object containing information about the generated items.

## Examples

1. Generate a basic item sheet:
```javascript
const result = await generateItemSprites("Medieval weapons");
console.log(result.itemSheet);
console.log(result.metadata);
```

2. Generate items with custom options:
```javascript
const options = {
  itemCount: 6,
  size: "2048x2048",
  style: "hand-drawn",
  itemType: "potions",
  background: "transparent"
};
const result = await generateItemSprites("Magical potions", options);
console.log(result.original);
console.log(result.metadata.itemCount);
```

## Notes or Considerations
- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- Generated items are arranged in a grid layout, with a maximum of 2 columns.
- The function saves generated images in an 'assets' folder with a filename based on the description when the `save` option is set to `true`.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies (OpenAI, axios, sharp) installed and properly configured in your project.