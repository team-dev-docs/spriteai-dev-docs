---
slug: /generate-item-sprites
sidebar_position: 4
---

# generateItemSprites

## Brief Description

The `generateItemSprites` function is used to create a collection of item sprites for a game using AI-powered image generation. It produces a spritesheet containing multiple items based on a given description and customizable options.

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
  - `padding` (number): Padding between items in the spritesheet (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color of the spritesheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

Returns a Promise that resolves to an object containing:

- `original`: URL of the original generated image.
- `itemSheet`: Base64-encoded image data URL of the generated item spritesheet.
- `metadata`: Object containing information about the generated items:
  - `itemCount`: Number of items generated.
  - `itemType`: Type of items generated.
  - `dimensions`: Object with width and height of the spritesheet.
  - `itemData`: Object with information about the layout of items in the spritesheet.

## Examples

1. Generate a basic item spritesheet:

```javascript
const result = await generateItemSprites("Fantasy RPG weapons");
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

const result = await generateItemSprites("Colorful magic potions", options);
console.log(result.metadata);
```

## Notes and Considerations

- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- Generated items are arranged in a grid layout, with a maximum of 2 items per row.
- The `itemType` option helps guide the AI in generating appropriate items (e.g., "equipment", "potions", "food").
- When `save` is set to `true`, the generated spritesheet is saved in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.

## Customizing Item Generation

You can customize the item generation process by adjusting the `options` parameter. Here's a diagram showing how different options affect the output:

```mermaid
graph TD
    A[generateItemSprites] --> B{Options}
    B --> C[itemCount]
    B --> D[size]
    B --> E[style]
    B --> F[itemType]
    B --> G[background]
    C --> H[Determines number of items]
    D --> I[Sets spritesheet dimensions]
    E --> J[Defines visual style]
    F --> K[Guides AI for item type]
    G --> L[Sets background color]
    H --> M[Generated Spritesheet]
    I --> M
    J --> M
    K --> M
    L --> M
```

By adjusting these options, you can create a wide variety of item spritesheets tailored to your game's needs.