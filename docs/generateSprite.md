---
title: Generate Sprite Documentation
description: >-
  Learn how to use the generateSprite function to create character spritesheets,
  environment sprites, and item sprites using AI-powered image generation.
slug: /
sidebar_position: 1
---

# Generate Sprite Documentation

## Introduction

The `generateSprite` module provides powerful functions for creating game assets using AI-powered image generation. This tutorial will guide you through using these functions to generate character spritesheets, environment sprites, and item sprites for your game development projects.

## Prerequisites

- Node.js installed on your system
- Basic knowledge of JavaScript and async/await syntax
- An OpenAI API key (for DALL-E 3 image generation)

## Getting Started

First, install the required dependencies:

```bash
npm install openai axios sharp jimp fs path
```

Then, import the necessary functions from the sprite module:

```javascript
import { generateCharacterSpritesheet, generateEnvironmentSprites, generateItemSprites } from './path/to/sprite/module';
```

## Generating a Character Spritesheet

Let's create a character spritesheet with custom animation states and styles.

```javascript
const characterDescription = "A cute pixel art robot";
const options = {
  states: ['idle', 'walk', 'run', 'attack', 'jump'],
  framesPerState: 8,
  size: '1024x1024',
  style: 'pixel-art',
  direction: 'right',
  save: true
};

try {
  const result = await generateCharacterSpritesheet(characterDescription, options);
  console.log("Character spritesheet generated:", result);
} catch (error) {
  console.error("Error generating character spritesheet:", error);
}
```

This will generate a pixel art robot character spritesheet with 5 animation states and 8 frames per state.

## Creating Environment Sprites

Now, let's generate some environment sprites for our game world.

```javascript
const environmentDescription = "Forest tileset";
const envOptions = {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy',
  save: true
};

try {
  const envResult = await generateEnvironmentSprites(environmentDescription, envOptions);
  console.log("Environment sprites generated:", envResult);
} catch (error) {
  console.error("Error generating environment sprites:", error);
}
```

This will create a fantasy-themed forest tileset with 6 different elements in pixel art style.

## Designing Item Sprites

Finally, let's generate some item sprites for our game inventory.

```javascript
const itemDescription = "Medieval weapons and armor";
const itemOptions = {
  itemCount: 8,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment',
  background: 'transparent',
  save: true
};

try {
  const itemResult = await generateItemSprites(itemDescription, itemOptions);
  console.log("Item sprites generated:", itemResult);
} catch (error) {
  console.error("Error generating item sprites:", error);
}
```

This will create 8 different medieval weapons and armor item sprites in pixel art style with a transparent background.

## Customizing Sprite Generation

You can customize various aspects of sprite generation using the options parameter. Here are some key options:

- `states`: Array of animation states for character spritesheets
- `framesPerState`: Number of frames per animation state
- `size`: Size of the generated image (e.g., '1024x1024')
- `style`: Art style (e.g., 'pixel-art', 'vector', '3d')
- `theme`: Theme for environment sprites (e.g., 'fantasy', 'sci-fi')
- `itemType`: Type of items for item sprites (e.g., 'equipment', 'consumables')

## Fetching Available Options

To get the list of available animation states and sprite styles, you can use these helper functions:

```javascript
import { fetchAvailableAnimationStates, fetchAvailableSpriteStyles } from './path/to/sprite/module';

const animationStates = await fetchAvailableAnimationStates();
console.log("Available animation states:", animationStates);

const spriteStyles = await fetchAvailableSpriteStyles();
console.log("Available sprite styles:", spriteStyles);
```

## Outcome

After running these functions, you'll have:

1. A character spritesheet with multiple animation states
2. A set of environment sprites for your game world
3. A collection of item sprites for your game inventory

Each result includes:
- The original AI-generated image URL
- A base64-encoded spritesheet or tileset
- Metadata about the generated sprites

## Next Steps

- Learn how to integrate these sprites into your game engine
- Explore advanced customization options for sprite generation
- Check out our How-To guides for optimizing and processing generated sprites

By following this tutorial, you've learned how to use AI-powered sprite generation to create various game assets quickly and easily. Happy game development!
