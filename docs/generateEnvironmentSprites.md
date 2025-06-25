---
title: Generate Environment Sprites
description: Learn how to use the generateEnvironmentSprites function to create tileset images for game environments.
---

# Generate Environment Sprites

## Introduction

The `generateEnvironmentSprites` function is a powerful tool that allows you to generate tileset images for game environments using AI. This tutorial will guide you through the process of using this function to create custom environment sprites for your game projects.

## Prerequisites

Before you begin, make sure you have:

1. Installed the required dependencies (OpenAI, axios, sharp)
2. Set up your OpenAI API key
3. Basic knowledge of JavaScript and async/await syntax

## How to Use generateEnvironmentSprites

### Basic Usage

Here's a simple example of how to use the `generateEnvironmentSprites` function:

```javascript
import { generateEnvironmentSprites } from 'spriteAI';

const description = "forest environment";
const result = await generateEnvironmentSprites(description);

console.log(result.original); // URL of the original image
console.log(result.tileset); // Base64-encoded tileset image
console.log(result.metadata); // Metadata about the generated tileset
```

### Function Parameters

The `generateEnvironmentSprites` function accepts two parameters:

1. `description` (string, required): A text description of the environment you want to generate.
2. `options` (object, optional): An object containing additional configuration options.

### Available Options

You can customize the sprite generation by passing an options object:

```javascript
const options = {
  elements: 4, // Number of distinct environment pieces (default: 4)
  size: '1024x1024', // Size of the generated image (default: '1024x1024')
  style: 'pixel-art', // Art style of the sprites (default: 'pixel-art')
  padding: 1, // Padding between sprite elements (default: 1)
  theme: 'fantasy', // Theme of the environment (default: 'fantasy')
  save: true // Whether to save the generated image to disk (default: false)
};

const result = await generateEnvironmentSprites("desert oasis", options);
```

## Return Value

The function returns an object containing:

- `original`: URL of the original generated image
- `tileset`: Base64-encoded image data URL of the processed tileset
- `metadata`: Object containing information about the generated tileset

Example metadata:

```javascript
{
  elements: 4,
  theme: 'fantasy',
  dimensions: {
    width: '1024',
    height: '1024'
  },
  tileData: {
    rows: 2,
    columns: 2,
    totalTiles: 4
  }
}
```

## Example: Creating a Forest Environment

Let's create a forest environment tileset with 6 elements:

```javascript
import { generateEnvironmentSprites } from 'spriteAI';

async function createForestEnvironment() {
  const description = "lush forest with trees, bushes, and rocks";
  const options = {
    elements: 6,
    style: 'pixel-art',
    theme: 'fantasy',
    save: true
  };

  try {
    const result = await generateEnvironmentSprites(description, options);
    console.log("Forest environment generated successfully!");
    console.log("Tileset saved as:", `assets/${description.replace(/\s+/g, '_')}_environment.png`);
    console.log("Metadata:", result.metadata);
  } catch (error) {
    console.error("Error generating forest environment:", error);
  }
}

createForestEnvironment();
```

This example will generate a forest environment tileset with 6 distinct elements in a pixel art style, save it to the assets folder, and log the metadata.

## Best Practices

1. Be specific in your environment descriptions for better results.
2. Experiment with different styles and themes to find the best fit for your game.
3. Use the `save` option to keep a local copy of your generated tilesets.
4. Consider the number of elements based on your game's needs and the desired variety.

## Next Steps

Now that you've learned how to generate environment sprites, you might want to explore:

- [How to use generated sprites in your game engine](link-to-how-to-guide)
- [Customizing sprite generation with advanced options](link-to-advanced-options-doc)
- [Understanding the AI models behind sprite generation](link-to-explanation-doc)

Happy sprite generating!