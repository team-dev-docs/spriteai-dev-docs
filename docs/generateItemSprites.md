---
title: generateItemSprites
description: Generate item sprites for your game using AI-powered image generation.
---

# generateItemSprites

## Introduction

`generateItemSprites` is a powerful function that allows you to generate item sprites for your game using AI-powered image generation. This tutorial will guide you through the process of using this function to create custom item sprites quickly and easily.

## Prerequisites

- Node.js installed on your system
- Access to the spriteAI module
- OpenAI API key (for DALL-E 3 image generation)

## Usage

To use the `generateItemSprites` function, you need to import it from the spriteAI module and call it with a description of the items you want to generate.

```javascript
import { generateItemSprites } from './path/to/spriteAI';

const result = await generateItemSprites(description, options);
```

### Parameters

- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the generated items (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Step-by-Step Guide

1. Import the `generateItemSprites` function:

```javascript
import { generateItemSprites } from './path/to/spriteAI';
```

2. Define your item description and options:

```javascript
const description = "Medieval fantasy weapons";
const options = {
  itemCount: 6,
  style: "pixel-art",
  itemType: "weapons",
  background: "transparent"
};
```

3. Call the `generateItemSprites` function:

```javascript
const result = await generateItemSprites(description, options);
```

4. Use the generated sprites in your game:

```javascript
console.log(result.original); // URL of the original generated image
console.log(result.itemSheet); // Base64-encoded item spritesheet
console.log(result.metadata); // Metadata about the generated items
```

## Example

Here's a complete example of generating a set of medieval fantasy weapons:

```javascript
import { generateItemSprites } from './path/to/spriteAI';

async function generateWeapons() {
  const description = "Medieval fantasy weapons";
  const options = {
    itemCount: 6,
    style: "pixel-art",
    itemType: "weapons",
    background: "transparent",
    save: true
  };

  try {
    const result = await generateItemSprites(description, options);
    console.log("Item spritesheet generated successfully!");
    console.log("Metadata:", result.metadata);
    // Use result.itemSheet to display or further process the spritesheet
  } catch (error) {
    console.error("Error generating item sprites:", error);
  }
}

generateWeapons();
```

## Outcome

After running the function, you'll receive an object containing:

- `original`: URL of the original AI-generated image.
- `itemSheet`: Base64-encoded PNG image of the item spritesheet.
- `metadata`: Object containing information about the generated items, including dimensions and item data.

The generated spritesheet will be saved to your project's assets folder if the `save` option is set to `true`.

## Next Steps

- Learn how to [integrate generated sprites into your game engine](/docs/integrating-sprites).
- Explore [customizing sprite generation options](/docs/customizing-sprite-generation) for more control over the output.
- Check out the [generateEnvironmentSprites](/docs/generateEnvironmentSprites) function for creating environment tiles.

By following this tutorial, you should now be able to generate custom item sprites for your game using AI-powered image generation. Experiment with different descriptions and options to create unique and diverse item sets for your projects!