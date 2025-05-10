---
slug: /generateItemSprites
sidebar_position: 4
---

# generateItemSprites

## Brief Description
`generateItemSprites` is a function that generates a collection of item sprites for game development using AI-powered image generation. It creates a spritesheet containing multiple items based on a given description and customizable options.

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
  - `style` (string): Style of the generated sprites (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color of the spritesheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns a Promise that resolves to an object containing:
- `original`: URL of the originally generated image.
- `itemSheet`: Base64-encoded image data URL of the processed spritesheet.
- `metadata`: Object containing information about the generated items:
  - `itemCount`: Number of items generated.
  - `itemType`: Type of items generated.
  - `dimensions`: Width and height of the spritesheet.
  - `itemData`: Information about the layout of items in the spritesheet.

## Examples

1. Generate a basic item spritesheet:
```javascript
const result = await generateItemSprites("Medieval weapons and armor");
console.log(result.metadata);
console.log(result.itemSheet);
```

2. Generate a custom item spritesheet:
```javascript
const options = {
  itemCount: 6,
  size: "2048x2048",
  style: "hand-drawn",
  itemType: "potions",
  background: "transparent",
  save: true
};
const result = await generateItemSprites("Magical potions with glowing effects", options);
console.log(result.metadata);
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for game inventory or pickup icons.
- The function processes the AI-generated image to create a proper spritesheet layout.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies (OpenAI, axios, sharp) installed and properly configured.