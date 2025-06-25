---
title: Generate Environment Sprites
description: Learn how to use the generateEnvironmentSprites function to create custom environment sprites for your game.
---

# Generate Environment Sprites

## Introduction

The `generateEnvironmentSprites` function is a powerful tool for game developers to create custom environment sprites using AI-powered image generation. This tutorial will guide you through the process of using this function to generate a tileset for your game environment.

## Prerequisites

Before you begin, make sure you have:

- Node.js installed on your machine
- The `spriteAI` module installed in your project
- An OpenAI API key (the function uses DALL-E 3 for image generation)

## Getting Started

Let's create a set of environment sprites for a fantasy forest setting.

### Step 1: Import the function

First, import the `generateEnvironmentSprites` function from the `spriteAI` module:

```javascript
import { generateEnvironmentSprites } from './path/to/spriteAI';
```

### Step 2: Set up the function call

Now, let's call the function with a description of the environment we want to create:

```javascript
const description = "fantasy forest";
const options = {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  theme: 'fantasy',
  save: true
};

generateEnvironmentSprites(description, options)
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### Step 3: Run the code

Execute your script. The function will generate the environment sprites and save them to your project's `assets` folder.

## Understanding the Output

The `generateEnvironmentSprites` function returns an object with the following properties:

- `original`: URL of the original AI-generated image
- `tileset`: Base64-encoded string of the processed tileset image
- `metadata`: Object containing information about the generated tileset

Here's an example of what the metadata might look like:

```javascript
{
  elements: 6,
  theme: 'fantasy',
  dimensions: { width: '1024', height: '1024' },
  tileData: { rows: 3, columns: 2, totalTiles: 6 }
}
```

## Customizing Your Sprites

You can customize the generated sprites by adjusting the options passed to the function:

- `elements`: Number of distinct environment pieces to generate (default: 4)
- `size`: Size of the generated image (default: '1024x1024')
- `style`: Art style of the sprites (default: 'pixel-art')
- `padding`: Padding between tiles (default: 1)
- `theme`: Theme of the environment (default: 'fantasy')
- `save`: Whether to save the generated image to disk (default: false)

## Next Steps

Now that you've generated your environment sprites, you might want to:

- Learn how to integrate these sprites into your game engine
- Explore generating character sprites with the `generateCharacterSpritesheet` function
- Understand how to manipulate and optimize the generated images for better performance

Check out our other How-To Guides and Reference docs for more information on working with AI-generated game assets!