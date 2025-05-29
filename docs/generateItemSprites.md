---
title: generateItemSprites
description: Generate item sprites for game inventory or pickup icons using AI-powered image generation.
---

# generateItemSprites

## Introduction

The `generateItemSprites` function is a powerful tool for game developers to create item sprites using AI-powered image generation. This function allows you to quickly generate a collection of item sprites based on a given description, which can be used for game inventory icons or pickup items.

## Usage

To use the `generateItemSprites` function, import it from the spriteAI module and call it with a description of the items you want to generate.

```javascript
import { generateItemSprites } from './path/to/spriteAI';

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
  - `background` (string): Background color of the generated image (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

The function returns a Promise that resolves to an object containing:

- `original`: URL of the original generated image.
- `itemSheet`: Base64-encoded image data URL of the processed item sheet.
- `metadata`: Object containing information about the generated items:
  - `itemCount`: Number of items generated.
  - `itemType`: Type of items generated.
  - `dimensions`: Object with width and height of the generated image.
  - `itemData`: Object with rows, columns, and total items information.

## Examples

### Generate a set of fantasy weapons

```javascript
const description = "fantasy weapons";
const options = {
  itemCount: 6,
  style: "pixel-art",
  itemType: "weapons",
  background: "transparent"
};

const result = await generateItemSprites(description, options);
console.log(result.metadata);
console.log(result.itemSheet);
```

### Generate potions with custom size and save to disk

```javascript
const description = "magical potions";
const options = {
  itemCount: 8,
  size: "2048x2048",
  style: "hand-drawn",
  itemType: "consumables",
  save: true
};

const result = await generateItemSprites(description, options);
console.log(`Generated ${result.metadata.itemCount} potion sprites`);
```

## Notes and Considerations

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are arranged in a grid layout, with a maximum of 2 columns.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies installed (`openai`, `axios`, `sharp`) before using this function.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md): Generate character spritesheets with multiple animation states.
- [generateEnvironmentSprites](./generateEnvironmentSprites.md): Generate environment sprites for game backgrounds and tilesets.
- [fetchAvailableSpriteStyles](./fetchAvailableSpriteStyles.md): Get a list of available sprite styles for use with sprite generation functions.