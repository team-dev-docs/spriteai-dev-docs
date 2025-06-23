---
title: Generate Item Sprites
description: Learn how to generate item sprites for your game using AI-powered image generation.
sidebar_position: 4
---

# Generate Item Sprites

## Introduction

The `generateItemSprites` function allows you to create a collection of item sprites for your game using AI-powered image generation. This tutorial will guide you through the process of generating a set of item sprites with customizable options.

## Prerequisites

- Node.js installed on your system
- The `spriteAI` module installed in your project

## Getting Started

First, import the `generateItemSprites` function from the `spriteAI` module:

```javascript
import { generateItemSprites } from 'spriteAI';
```

## Generating Item Sprites

To generate item sprites, call the `generateItemSprites` function with a description and optional parameters. Here's a basic example:

```javascript
const result = await generateItemSprites("medieval weapons", {
  itemCount: 6,
  style: 'pixel-art',
  itemType: 'equipment'
});

console.log(result);
```

This will generate a collection of 6 medieval weapon sprites in a pixel art style.

## Customizing Your Sprite Generation

The `generateItemSprites` function accepts several options to customize the output:

- `itemCount`: Number of items to generate (default: 4)
- `size`: Size of the generated image (default: "1024x1024")
- `style`: Art style of the sprites (default: "pixel-art")
- `padding`: Padding between sprites (default: 1)
- `itemType`: Type of items to generate (default: "equipment")
- `background`: Background color of the sprite sheet (default: "white")

Here's an example with custom options:

```javascript
const result = await generateItemSprites("magical potions", {
  itemCount: 8,
  size: "2048x2048",
  style: "hand-drawn",
  itemType: "consumable",
  background: "transparent"
});
```

## Understanding the Result

The `generateItemSprites` function returns an object containing:

- `original`: URL of the original generated image
- `itemSheet`: Base64-encoded image data of the processed sprite sheet
- `metadata`: Object containing information about the generated sprites

Example of accessing the metadata:

```javascript
const { metadata } = await generateItemSprites("space gadgets");

console.log(`Generated ${metadata.itemCount} items`);
console.log(`Image dimensions: ${metadata.dimensions.width}x${metadata.dimensions.height}`);
```

## Saving the Generated Sprites

To save the generated sprite sheet to disk, use the `save` option:

```javascript
await generateItemSprites("fantasy armor", {
  save: true
});
```

This will save the sprite sheet in your project's `assets` folder with a filename based on the description.

## Next Steps

Now that you've learned how to generate item sprites, you might want to explore:

- [How to use generated sprites in your game engine](/docs/using-sprites-in-game)
- [Customizing sprite generation with advanced prompts](/docs/advanced-sprite-prompts)
- [Integrating sprite generation into your asset pipeline](/docs/asset-pipeline-integration)

Remember, the AI-generated sprites are a starting point. You may want to refine them further or use them as inspiration for your final game assets.