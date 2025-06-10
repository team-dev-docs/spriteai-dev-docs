---
title: Generate Item Sprites
description: Learn how to generate item sprites using the generateItemSprites function.
---

# Generate Item Sprites

## Introduction

The `generateItemSprites` function is a powerful tool for creating customizable item sprites for your game or application. This tutorial will guide you through the process of using this function to generate a collection of item sprites with various customization options.

## Prerequisites

Before you begin, make sure you have:

- Node.js installed on your system
- The necessary dependencies installed (OpenAI, axios, sharp)
- An OpenAI API key set up in your environment

## Getting Started

First, let's import the required function:

```javascript
import { generateItemSprites } from './spriteAI';
```

## Basic Usage

Here's a simple example of how to use the `generateItemSprites` function:

```javascript
const description = "medieval weapons";
const options = {
  itemCount: 4,
  style: 'pixel-art',
  itemType: 'equipment'
};

const result = await generateItemSprites(description, options);
console.log(result);
```

This will generate a collection of 4 pixel-art style medieval weapon sprites.

## Customization Options

The `generateItemSprites` function accepts several options to customize the output:

- `itemCount`: Number of items to generate (default: 4)
- `size`: Size of the generated image (default: '1024x1024')
- `style`: Art style of the sprites (default: 'pixel-art')
- `padding`: Padding between sprites (default: 1)
- `itemType`: Type of items to generate (default: 'equipment')
- `background`: Background color of the sprite sheet (default: 'white')

## Example: Generating Fantasy Potions

Let's create a set of fantasy potion sprites:

```javascript
const result = await generateItemSprites("fantasy potions", {
  itemCount: 6,
  style: 'hand-drawn',
  itemType: 'consumable',
  background: 'transparent'
});

console.log(result.itemSheet); // Base64-encoded image data
console.log(result.metadata); // Sprite sheet metadata
```

## Understanding the Output

The function returns an object with the following properties:

- `original`: URL of the original generated image
- `itemSheet`: Base64-encoded image data of the processed sprite sheet
- `metadata`: Object containing information about the generated sprites

### Metadata Structure

```javascript
{
  itemCount: 6,
  itemType: 'consumable',
  dimensions: {
    width: 1024,
    height: 1024
  },
  itemData: {
    rows: 3,
    columns: 2,
    totalItems: 6
  }
}
```

## Saving the Sprite Sheet

To save the generated sprite sheet, set the `save` option to `true`:

```javascript
const result = await generateItemSprites("sci-fi gadgets", {
  itemCount: 8,
  style: 'vector',
  save: true
});
```

The sprite sheet will be saved in the `assets` folder with a filename based on the description.

## Next Steps

Now that you've learned how to generate item sprites, you might want to explore:

- [Generating Character Spritesheets](/docs/generateCharacterSpritesheet)
- [Generating Environment Sprites](/docs/generateEnvironmentSprites)
- [Customizing Sprite Styles](/docs/customizingSpriteStyles)

Happy sprite generating!