---
title: Generate Character Spritesheet
description: >-
  Learn how to use the generateCharacterSpritesheet function to create
  customized character spritesheets for your game.
slug: /
sidebar_position: 1
---

# Generate Character Spritesheet

## Introduction

The `generateCharacterSpritesheet` function is a powerful tool that allows you to create customized character spritesheets for your game using AI-generated images. This tutorial will guide you through the process of using this function to generate a character spritesheet with various animation states.

## Prerequisites

Before you begin, make sure you have:

- Node.js installed on your system
- The `spriteAI` module installed in your project
- An OpenAI API key (for image generation)

## Steps

### 1. Import the function

First, import the `generateCharacterSpritesheet` function from the `spriteAI` module:

```javascript
import { generateCharacterSpritesheet } from 'spriteAI';
```

### 2. Set up the function call

Now, let's call the function with a description of the character you want to generate:

```javascript
const description = "A cute cartoon cat with a wizard hat";
const options = {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  direction: 'right',
  save: true
};

const result = await generateCharacterSpritesheet(description, options);
```

### 3. Handle the result

The function returns an object containing the original image URL, the spritesheet as a base64-encoded string, and metadata about the spritesheet:

```javascript
console.log(result.original); // URL of the original AI-generated image
console.log(result.spritesheet); // Base64-encoded spritesheet image
console.log(result.metadata); // Metadata about the spritesheet
```

### 4. Use the generated spritesheet

You can now use the generated spritesheet in your game. The metadata provides information about the layout and dimensions of the spritesheet:

```javascript
const { states, framesPerState, totalFrames, dimensions, frameData } = result.metadata;

// Example: Get the starting frame for the 'walk' animation
const walkStartFrame = frameData.walk.startFrame;
```

## Outcome

After running the function, you'll have a character spritesheet with multiple animation states, ready to be used in your game. The spritesheet will be saved in the `assets` folder of your project (if the `save` option is set to `true`).

## Next Steps

- Learn how to [Customize Spritesheet Generation](/docs/customize-spritesheet)
- Explore [Advanced Sprite Animation Techniques](/docs/advanced-animation)
- Check out the [API Reference](/docs/api-reference) for detailed information on all available options

By following this tutorial, you've learned how to generate a custom character spritesheet using AI. This powerful tool can save you time and resources in your game development process, allowing you to quickly create diverse and unique character animations.
