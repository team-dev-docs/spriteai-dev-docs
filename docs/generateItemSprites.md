---
title: Generate Item Sprites
description: Learn how to generate item sprites using AI for your game or application.
---

# Generate Item Sprites

## Introduction

The `generateItemSprites` function is a powerful tool that allows you to create AI-generated item sprites for your game or application. This tutorial will guide you through the process of using this function to generate custom item sprites with various options.

## Prerequisites

- Node.js installed on your system
- Access to the `spriteAI` module
- An OpenAI API key (for image generation)

## Getting Started

First, let's import the necessary function from the `spriteAI` module:

```javascript
import { generateItemSprites } from './path/to/spriteAI';
```

## Basic Usage

To generate a set of item sprites, you can call the `generateItemSprites` function with a description and optional parameters:

```javascript
const result = await generateItemSprites("medieval weapons", {
  itemCount: 4,
  style: 'pixel-art',
  itemType: 'equipment'
});

console.log(result);
```

This will generate a set of 4 pixel-art style medieval weapon sprites.

## Function Parameters

The `generateItemSprites` function accepts two parameters:

1. `description` (string, required): A text description of the items to generate.
2. `options` (object, optional): An object containing various customization options.

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `itemCount` | number | 4 | The number of items to generate |
| `size` | string | '1024x1024' | The size of the generated image |
| `style` | string | 'pixel-art' | The visual style of the sprites |
| `padding` | number | 1 | Padding between items in the sprite sheet |
| `itemType` | string | 'equipment' | The type of items to generate |
| `background` | string | 'white' | The background color of the sprite sheet |
| `save` | boolean | false | Whether to save the generated image to disk |

## Advanced Usage

Here's an example of generating a larger set of potion sprites with custom options:

```javascript
const potionSprites = await generateItemSprites("magical potions", {
  itemCount: 8,
  size: '2048x2048',
  style: 'hand-drawn',
  itemType: 'consumable',
  background: 'transparent',
  save: true
});

console.log(potionSprites.metadata);
```

This will generate 8 hand-drawn potion sprites on a transparent background and save the image to disk.

## Return Value

The function returns an object containing:

- `original`: URL of the original AI-generated image
- `itemSheet`: Base64-encoded data URL of the processed sprite sheet
- `metadata`: Object containing information about the generated sprites

Example metadata:

```javascript
{
  itemCount: 8,
  itemType: 'consumable',
  dimensions: {
    width: '2048',
    height: '2048'
  },
  itemData: {
    rows: 4,
    columns: 2,
    totalItems: 8
  }
}
```

## Saving Generated Sprites

When the `save` option is set to `true`, the function will automatically save the generated sprite sheet to your project's `assets` folder. The filename will be based on the description you provided, with spaces replaced by underscores.

For example:
```
assets/magical_potions_items.png
```

## Next Steps

Now that you've learned how to generate item sprites, you might want to explore:

- [How to use generated sprites in your game engine](link-to-how-to-guide)
- [Customizing sprite generation with advanced prompts](link-to-explanation-doc)
- [API Reference for the spriteAI module](link-to-reference-doc)

By mastering the `generateItemSprites` function, you can quickly create diverse and unique items for your game or application, saving time and resources in the asset creation process.