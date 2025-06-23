---
title: Generate Environment Sprites
description: Learn how to use the generateEnvironmentSprites function to create tileset images for game environments.
---

# Generate Environment Sprites

## Introduction

The `generateEnvironmentSprites` function is a powerful tool that allows you to create tileset images for game environments using AI-generated imagery. This tutorial will guide you through the process of using this function to generate custom environment sprites for your game projects.

## Prerequisites

Before you begin, make sure you have:

- Node.js installed on your system
- The necessary dependencies installed (OpenAI, axios, sharp)
- An OpenAI API key set up in your environment

## Getting Started

First, let's import the required modules and the `generateEnvironmentSprites` function:

```javascript
import OpenAI from "openai";
import axios from "axios";
import sharp from "sharp";
import { generateEnvironmentSprites } from "./spriteAI";
```

## Using generateEnvironmentSprites

The `generateEnvironmentSprites` function takes two parameters:

1. `description`: A string describing the environment you want to generate
2. `options`: An object containing optional configuration settings

Here's a basic example of how to use the function:

```javascript
const description = "forest with trees and bushes";
const options = {
  elements: 4,
  size: "1024x1024",
  style: "pixel-art",
  padding: 1,
  theme: "fantasy"
};

const result = await generateEnvironmentSprites(description, options);
console.log(result);
```

## Function Parameters

Let's break down the options you can pass to the `generateEnvironmentSprites` function:

- `elements`: Number of different elements in the tileset (default: 4)
- `size`: Size of the generated image (default: "1024x1024")
- `style`: Art style of the sprites (default: "pixel-art")
- `padding`: Padding between elements in the tileset (default: 1)
- `theme`: Theme of the environment (default: "fantasy")

## Understanding the Output

The function returns an object with the following properties:

- `original`: URL of the original AI-generated image
- `tileset`: Base64-encoded string of the processed tileset image
- `metadata`: Object containing information about the generated tileset

Here's an example of how to use the returned data:

```javascript
const { original, tileset, metadata } = await generateEnvironmentSprites("desert oasis", {
  elements: 6,
  theme: "desert"
});

console.log("Original image URL:", original);
console.log("Tileset dimensions:", metadata.dimensions);
console.log("Number of tiles:", metadata.tileData.totalTiles);

// You can use the tileset string to create an image element
const img = document.createElement("img");
img.src = tileset;
document.body.appendChild(img);
```

## Saving the Generated Tileset

If you want to save the generated tileset to a file, you can use the `save` option:

```javascript
const result = await generateEnvironmentSprites("snowy mountain peaks", {
  elements: 8,
  theme: "winter",
  save: true
});
```

This will save the tileset image in the `assets` folder of your project with a filename based on the description.

## Customizing the Style

You can experiment with different styles and themes to get the desired look for your environment sprites:

```javascript
const pixelArtForest = await generateEnvironmentSprites("dense forest", {
  style: "pixel-art",
  theme: "fantasy"
});

const vectorSpaceStation = await generateEnvironmentSprites("futuristic space station", {
  style: "vector",
  theme: "sci-fi"
});

const handDrawnBeach = await generateEnvironmentSprites("tropical beach", {
  style: "hand-drawn",
  theme: "summer"
});
```

## Conclusion

The `generateEnvironmentSprites` function provides a quick and easy way to create custom environment tilesets for your games. By adjusting the description, style, and theme, you can generate a wide variety of sprites to suit your game's needs.

## Next Steps

- Check out the [Generate Character Spritesheet](/docs/generateCharacterSpritesheet) guide to learn how to create animated character sprites.
- Explore the [Generate Item Sprites](/docs/generateItemSprites) documentation to add items and equipment to your game.
- Read the [OpenAI Integration](/docs/openai-integration) explanation to understand how AI is used in sprite generation.