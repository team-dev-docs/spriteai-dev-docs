---
title: Environment Sprite Generation
description: Learn how to generate environment sprites using the SpriteAI module
---

# Environment Sprite Generation

## Introduction

This tutorial will guide you through the process of generating environment sprites using the SpriteAI module. Environment sprites are essential for creating diverse and visually appealing game worlds. With the `generateEnvironmentSprites` function, you can easily create customized tileset images for your game environments.

## Prerequisites

- Node.js installed on your system
- Basic knowledge of JavaScript and async/await syntax
- SpriteAI module installed in your project

## Generating Environment Sprites

Let's walk through the process of generating environment sprites step by step.

### Step 1: Import the necessary function

First, import the `generateEnvironmentSprites` function from the SpriteAI module:

```javascript
import { generateEnvironmentSprites } from 'spriteAI';
```

### Step 2: Set up the function call

Now, let's call the `generateEnvironmentSprites` function with a description and some options:

```javascript
const result = await generateEnvironmentSprites("forest landscape", {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  theme: 'fantasy',
  save: true
});
```

Let's break down the parameters:

- `"forest landscape"`: This is the description of the environment you want to generate.
- `options`: An object containing various customization options:
  - `elements`: The number of distinct environment pieces to generate (default is 4).
  - `size`: The size of the generated image (default is '1024x1024').
  - `style`: The visual style of the sprites (default is 'pixel-art').
  - `padding`: The padding between elements in the tileset (default is 1).
  - `theme`: The overall theme of the environment (default is 'fantasy').
  - `save`: Whether to save the generated image to disk (optional).

### Step 3: Handle the result

The function returns a Promise that resolves to an object containing the generated sprite information. Let's log the result:

```javascript
console.log(result.original); // URL of the original generated image
console.log(result.tileset); // Base64-encoded tileset image
console.log(result.metadata); // Metadata about the generated tileset
```

### Full Example

Here's a complete example that puts it all together:

```javascript
import { generateEnvironmentSprites } from 'spriteAI';

async function createForestEnvironment() {
  try {
    const result = await generateEnvironmentSprites("forest landscape", {
      elements: 6,
      size: '1024x1024',
      style: 'pixel-art',
      padding: 2,
      theme: 'fantasy',
      save: true
    });

    console.log("Original image URL:", result.original);
    console.log("Tileset (Base64):", result.tileset);
    console.log("Metadata:", JSON.stringify(result.metadata, null, 2));
  } catch (error) {
    console.error("Error generating environment sprites:", error);
  }
}

createForestEnvironment();
```

## Outcome

After running this code, you'll have:

1. A set of environment sprites generated based on your description.
2. The original image URL and a Base64-encoded tileset image.
3. Metadata about the generated tileset, including dimensions and tile information.
4. If `save` was set to `true`, a saved image file in your project's `assets` folder.

## Next Steps

- Learn how to integrate these generated sprites into your game engine.
- Explore the `generateCharacterSpritesheet` function to create character sprites.
- Check out the Reference documentation for a complete list of options and parameters for `generateEnvironmentSprites`.

By following this tutorial, you've learned how to generate custom environment sprites for your game projects using the SpriteAI module. Happy sprite creating!