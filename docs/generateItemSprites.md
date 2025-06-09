---
title: Generate Item Sprites
description: Learn how to use the generateItemSprites function to create customized item sprite sheets for your game.
---

# Generate Item Sprites

## Introduction

The `generateItemSprites` function is a powerful tool that allows you to create customized item sprite sheets for your game using AI-generated images. This tutorial will guide you through the process of using this function to generate a collection of item sprites with various customization options.

## Prerequisites

Before you begin, make sure you have:

- Node.js installed on your system
- The `spriteAI` module imported in your project
- An OpenAI API key set up in your environment variables

## Getting Started

Let's dive into creating your first item sprite sheet!

### Basic Usage

Here's a simple example to get you started:

```javascript
import { generateItemSprites } from 'spriteAI';

const description = "medieval fantasy weapons";
const result = await generateItemSprites(description);

console.log(result.itemSheet); // Base64-encoded image data
console.log(result.metadata); // Sprite sheet metadata
```

This will generate a sprite sheet with 4 medieval fantasy weapon items by default.

## Customizing Your Sprite Sheet

The `generateItemSprites` function accepts an options object that allows you to customize various aspects of your sprite sheet.

### Available Options

- `itemCount`: Number of items to generate (default: 4)
- `size`: Size of the generated image (default: "1024x1024")
- `style`: Art style of the sprites (default: "pixel-art")
- `padding`: Padding between sprites (default: 1)
- `itemType`: Type of items to generate (default: "equipment")
- `background`: Background color of the sprite sheet (default: "white")
- `save`: Whether to save the generated image to disk (default: false)

### Example with Custom Options

Let's create a more customized sprite sheet:

```javascript
const description = "sci-fi gadgets";
const options = {
  itemCount: 6,
  size: "2048x2048",
  style: "vector",
  itemType: "technology",
  background: "transparent",
  save: true
};

const result = await generateItemSprites(description, options);
```

This will generate a 2048x2048 sprite sheet with 6 sci-fi gadgets in vector style with a transparent background, and save it to disk.

## Understanding the Result

The `generateItemSprites` function returns an object with the following properties:

- `original`: URL of the original AI-generated image
- `itemSheet`: Base64-encoded image data of the processed sprite sheet
- `metadata`: Object containing information about the sprite sheet

### Metadata Structure

```javascript
{
  itemCount: 6,
  itemType: "technology",
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

## Best Practices

1. **Be specific in your descriptions**: The more detailed your description, the better the AI can generate relevant items.
2. **Experiment with styles**: Try different art styles to find what works best for your game aesthetic.
3. **Optimize for performance**: Generate sprite sheets at the size you'll use in your game to avoid runtime scaling.
4. **Use consistent item types**: Grouping similar items in one sprite sheet can help with organization and theming.

## Troubleshooting

If you encounter issues:

1. Ensure your OpenAI API key is correctly set up.
2. Check that you have sufficient API credits.
3. Verify that your description is clear and doesn't violate OpenAI's content policies.

## Next Steps

Now that you've learned how to generate item sprites, you might want to explore:

- [Generating Character Spritesheets](/docs/generateCharacterSpritesheet)
- [Creating Environment Sprites](/docs/generateEnvironmentSprites)
- [Integrating Sprites in Your Game Engine](/docs/integratingSprites)

Happy sprite generating!