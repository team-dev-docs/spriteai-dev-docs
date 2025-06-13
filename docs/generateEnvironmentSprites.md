---
title: Generate Environment Sprites
description: Learn how to use the generateEnvironmentSprites function to create game environment assets using AI.
---

# Generate Environment Sprites

## Introduction

The `generateEnvironmentSprites` function is a powerful tool that allows you to generate environment sprites for your game using AI. This tutorial will guide you through the process of creating a tileset of environment elements, perfect for building diverse and visually appealing game worlds.

## Prerequisites

Before you begin, make sure you have:

- Node.js installed on your system
- The `spriteAI` module installed in your project
- An OpenAI API key set up in your environment variables

## Getting Started

Let's dive into creating your first set of environment sprites!

### Step 1: Import the Function

First, import the `generateEnvironmentSprites` function from the `spriteAI` module:

```javascript
import { generateEnvironmentSprites } from 'spriteAI';
```

### Step 2: Set Up Your Options

Define the options for your environment sprites:

```javascript
const options = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  theme: 'fantasy',
  save: true
};
```

These options will create a 1024x1024 pixel art tileset with 4 fantasy-themed elements.

### Step 3: Generate the Sprites

Now, let's generate the environment sprites:

```javascript
async function createEnvironment() {
  try {
    const result = await generateEnvironmentSprites("forest landscape", options);
    console.log("Environment sprites generated successfully!");
    console.log("Original image URL:", result.original);
    console.log("Tileset data URL:", result.tileset);
    console.log("Metadata:", result.metadata);
  } catch (error) {
    console.error("Error generating environment sprites:", error);
  }
}

createEnvironment();
```

This will create a set of forest landscape environment sprites.

### Step 4: Use the Generated Sprites

The function returns an object containing:

- `original`: URL of the AI-generated image
- `tileset`: Base64-encoded data URL of the processed tileset
- `metadata`: Information about the generated tileset

You can use the `tileset` data URL directly in your game or save it as an image file.

## Customizing Your Environment

The `generateEnvironmentSprites` function offers several options to customize your output:

- `elements`: Number of distinct environment pieces (default: 4)
- `size`: Size of the generated image (default: '1024x1024')
- `style`: Art style of the sprites (default: 'pixel-art')
- `padding`: Padding between elements (default: 1)
- `theme`: Theme of the environment (default: 'fantasy')
- `save`: Whether to save the generated image to disk (default: false)

Experiment with these options to create diverse environments for your game!

## Example: Creating a Desert Tileset

Let's create a desert-themed tileset with 6 elements:

```javascript
const desertOptions = {
  elements: 6,
  size: '2048x2048',
  style: 'pixel-art',
  theme: 'desert',
  save: true
};

async function createDesertEnvironment() {
  try {
    const result = await generateEnvironmentSprites("desert oasis", desertOptions);
    console.log("Desert environment sprites generated successfully!");
    console.log("Tileset saved at:", `${process.cwd()}/assets/desert_oasis_environment.png`);
  } catch (error) {
    console.error("Error generating desert environment sprites:", error);
  }
}

createDesertEnvironment();
```

This will create a larger tileset with desert-themed elements, perfect for a desert level in your game.

## Next Steps

Now that you've learned how to generate environment sprites, you might want to explore:

- [How to integrate generated sprites into your game engine](/docs/sprite-integration)
- [Advanced sprite customization techniques](/docs/advanced-sprite-customization)
- [Generating character sprites with AI](/docs/generate-character-sprites)

Happy sprite generating!