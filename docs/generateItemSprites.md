---
title: Generate Item Sprites
description: Learn how to generate item sprites using the generateItemSprites function
---

# Generate Item Sprites

## Introduction

The `generateItemSprites` function is a powerful tool for creating game item sprites using AI-powered image generation. This tutorial will guide you through the process of using this function to create customized item sprites for your game.

## Prerequisites

Before you begin, make sure you have:

- Node.js installed on your system
- The `spriteAI` module imported in your project
- An OpenAI API key set up in your environment

## Getting Started

To use the `generateItemSprites` function, you'll need to import it from the `spriteAI` module:

```javascript
import { generateItemSprites } from './path/to/spriteAI';
```

## Basic Usage

Here's a simple example of how to generate item sprites:

```javascript
const description = "medieval fantasy weapons";
const result = await generateItemSprites(description);
console.log(result);
```

This will generate a set of medieval fantasy weapon sprites and return an object containing the original image URL, the processed item sheet, and metadata about the generated sprites.

## Customizing Your Sprites

The `generateItemSprites` function accepts an options object that allows you to customize various aspects of the generated sprites. Here's an example with all available options:

```javascript
const options = {
  itemCount: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  itemType: 'weapon',
  background: 'transparent',
  save: true
};

const result = await generateItemSprites("sci-fi gadgets", options);
```

Let's break down these options:

- `itemCount`: The number of items to generate (default: 4)
- `size`: The size of the generated image (default: '1024x1024')
- `style`: The visual style of the sprites (default: 'pixel-art')
- `padding`: The padding between items in the sprite sheet (default: 1)
- `itemType`: The type of items to generate (default: 'equipment')
- `background`: The background color of the sprite sheet (default: 'white')
- `save`: Whether to save the generated image to disk (default: false)

## Understanding the Result

The function returns an object with the following properties:

```javascript
{
  original: "https://example.com/original-image-url.png",
  itemSheet: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
  metadata: {
    itemCount: 4,
    itemType: "weapon",
    dimensions: {
      width: "1024",
      height: "1024"
    },
    itemData: {
      rows: 2,
      columns: 2,
      totalItems: 4
    }
  }
}
```

- `original`: The URL of the original AI-generated image
- `itemSheet`: A base64-encoded data URL of the processed sprite sheet
- `metadata`: Information about the generated sprites, including dimensions and layout

## Saving Sprites to Disk

If you set the `save` option to `true`, the function will save the generated sprite sheet to your project's `assets` folder. The filename will be based on the description you provided, with spaces replaced by underscores.

## Next Steps

Now that you've learned how to generate item sprites, you might want to explore:

- [Generating Character Spritesheets](/docs/generateCharacterSpritesheet)
- [Customizing Sprite Styles](/docs/customizingSpriteStyles)
- [Integrating Sprites in Your Game Engine](/docs/integratingSpritesinGameEngine)

Remember, the AI-generated sprites are meant to be a starting point. Feel free to edit and refine them to perfectly fit your game's aesthetic!