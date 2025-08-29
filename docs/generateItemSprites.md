---
title: Generate Item Sprites
description: Learn how to generate item sprites for your game using AI-powered image generation.
---

# Generate Item Sprites

## Introduction

The `generateItemSprites` function allows you to create customized item sprites for your game using AI-powered image generation. This tutorial will guide you through the process of generating a collection of item sprites with various customization options.

## Prerequisites

- Node.js installed on your system
- Access to the `spriteAI` module
- An OpenAI API key (for DALL-E 3 image generation)

## Getting Started

First, let's import the necessary function from the `spriteAI` module:

```javascript
import { generateItemSprites } from './path/to/spriteAI';
```

## Generating Item Sprites

To generate item sprites, you'll need to provide a description and some optional parameters. Here's a basic example:

```javascript
const description = "Medieval fantasy weapons";
const options = {
  itemCount: 6,
  size: "1024x1024",
  style: "pixel-art",
  itemType: "weapons",
  background: "transparent"
};

const result = await generateItemSprites(description, options);
```

Let's break down the parameters:

- `description`: A string describing the items you want to generate.
- `options`: An object containing customization parameters:
  - `itemCount`: Number of items to generate (default: 4)
  - `size`: Size of the generated image (default: "1024x1024")
  - `style`: Art style for the items (default: "pixel-art")
  - `itemType`: Type of items to generate (default: "equipment")
  - `background`: Background color or style (default: "white")

## Customizing Your Sprites

You can adjust the options to create different types of item collections. For example, to generate potion bottles:

```javascript
const potionOptions = {
  itemCount: 8,
  size: "512x512",
  style: "hand-drawn",
  itemType: "potions",
  background: "transparent"
};

const potions = await generateItemSprites("Magical potion bottles", potionOptions);
```

## Understanding the Result

The `generateItemSprites` function returns an object with the following properties:

```javascript
{
  original: "https://url-to-original-image.com",
  itemSheet: "data:image/png;base64,..."
  metadata: {
    itemCount: 8,
    itemType: "potions",
    dimensions: { width: "512", height: "512" },
    itemData: {
      rows: 4,
      columns: 2,
      totalItems: 8
    }
  }
}
```

- `original`: URL to the original generated image.
- `itemSheet`: Base64-encoded string of the processed item sheet.
- `metadata`: Object containing information about the generated items.

## Saving the Item Sheet

If you want to save the generated item sheet to disk, you can use the `save` option:

```javascript
const saveOptions = {
  ...options,
  save: true
};

const savedResult = await generateItemSprites("Treasure chest items", saveOptions);
```

This will save the item sheet in the `assets` folder of your project with a filename based on the description.

## Next Steps

Now that you've generated your item sprites, you might want to:

- Learn how to [integrate these sprites into your game engine](/docs/integrating-sprites)
- Explore [advanced customization options](/docs/advanced-sprite-customization)
- Check out the [API reference](/docs/api-reference#generateItemSprites) for a complete list of options

By following this tutorial, you should now be able to generate custom item sprites for your game using AI-powered image generation. Happy sprite creating!