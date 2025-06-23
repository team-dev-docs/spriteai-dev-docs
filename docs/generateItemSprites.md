---
title: Generate Item Sprites
description: Learn how to use the generateItemSprites function to create customized item sprites for your game.
---

# Generate Item Sprites

## Introduction

The `generateItemSprites` function is a powerful tool that allows you to create customized item sprites for your game using AI-generated images. This tutorial will guide you through the process of using this function to generate a collection of item sprites with various customization options.

## Prerequisites

Before you begin, make sure you have:

- Node.js installed on your machine
- The necessary dependencies installed (OpenAI, axios, sharp)
- An OpenAI API key set up in your environment

## Getting Started

First, let's import the required function:

```javascript
import { generateItemSprites } from './path/to/spriteAI';
```

## Basic Usage

Here's a simple example of how to use the `generateItemSprites` function:

```javascript
const description = "medieval weapons";
const result = await generateItemSprites(description);
console.log(result);
```

This will generate a collection of medieval weapon sprites using default settings.

## Customizing Your Sprites

The `generateItemSprites` function accepts an options object as its second parameter, allowing you to customize various aspects of the generated sprites.

### Available Options

- `itemCount`: Number of items to generate (default: 4)
- `size`: Size of the generated image (default: "1024x1024")
- `style`: Art style of the sprites (default: "pixel-art")
- `padding`: Padding between sprites (default: 1)
- `itemType`: Type of items to generate (default: "equipment")
- `background`: Background color of the sprite sheet (default: "white")

### Example with Custom Options

```javascript
const description = "space exploration tools";
const options = {
  itemCount: 6,
  size: "2048x2048",
  style: "vector",
  itemType: "gadgets",
  background: "transparent"
};

const result = await generateItemSprites(description, options);
console.log(result);
```

This will generate 6 vector-style space exploration gadgets on a transparent background.

## Understanding the Result

The `generateItemSprites` function returns an object with the following properties:

- `original`: URL of the original AI-generated image
- `itemSheet`: Base64-encoded image data URL of the processed sprite sheet
- `metadata`: Object containing information about the generated sprites

### Example Metadata

```javascript
{
  itemCount: 6,
  itemType: "gadgets",
  dimensions: {
    width: 2048,
    height: 2048
  },
  itemData: {
    rows: 3,
    columns: 2,
    totalItems: 6
  }
}
```

## Saving the Sprite Sheet

If you want to save the generated sprite sheet to disk, you can use the `save` option:

```javascript
const options = {
  // ... other options ...
  save: true
};

const result = await generateItemSprites("fantasy potions", options);
```

This will save the sprite sheet as a PNG file in the `assets` folder of your project, with a filename based on the description.

## Next Steps

Now that you've learned how to generate item sprites, you might want to explore:

- [How to use sprite sheets in your game engine](link-to-how-to-guide)
- [Advanced sprite customization techniques](link-to-explanation-doc)
- [API Reference for the spriteAI module](link-to-reference-doc)

Happy sprite generating!