---
slug: /generateItemSprites
sidebar_position: 4
---

# generateItemSprites

## Brief Description

`generateItemSprites` is a function that generates a collection of item sprites for game assets using AI-powered image generation. It creates a spritesheet containing multiple items based on the provided description and options.

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
const result = await generateItemSprites("Fantasy RPG weapons");
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
  background: "transparent",
  save: true
};
const result = await generateItemSprites("Magical potion bottles", options);
console.log(result.metadata.itemData);
```

## Notes and Considerations

- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- Generated items are arranged in a grid layout, with a maximum of 2 columns.
- The function converts the original image into a spritesheet format with individual item sprites.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and API access to use the OpenAI image generation service.
- The style of generated items can be customized, but results may vary based on the AI model's interpretation.
- Consider using the `fetchAvailableSpriteStyles()` function to get a list of available sprite styles.