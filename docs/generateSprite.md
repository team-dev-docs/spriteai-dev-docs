---
title: Generate Sprite and Environment Assets
description: >-
  Learn how to generate character sprites, environment sprites, and item sprites
  using AI-powered functions.
slug: /
sidebar_position: 1
---

# Generate Sprite and Environment Assets

## Introduction

This tutorial will guide you through using our AI-powered sprite generation functions to create character sprites, environment sprites, and item sprites for your game development projects. These functions leverage advanced AI models to generate high-quality, customizable assets based on text descriptions.

## Prerequisites

- Node.js installed on your system
- Basic knowledge of JavaScript and async/await syntax
- Access to the `spriteAI` module

## Getting Started

First, let's import the necessary functions from the `spriteAI` module:

```javascript
import { 
  generateCharacterSpritesheet, 
  generateEnvironmentSprites, 
  generateItemSprites,
  fetchAvailableAnimationStates,
  fetchAvailableSpriteStyles
} from 'spriteAI';
```

## Generating Character Sprites

Let's start by creating a character spritesheet:

```javascript
async function createCharacterSprite() {
  const description = "A brave knight in shining armor";
  const options = {
    states: ['idle', 'walk', 'run', 'attack'],
    framesPerState: 6,
    size: '1024x1024',
    style: 'pixel-art',
    direction: 'right'
  };

  try {
    const result = await generateCharacterSpritesheet(description, options);
    console.log("Character spritesheet generated:", result);
    // You can now use result.spritesheet (base64 encoded image) and result.metadata
  } catch (error) {
    console.error("Error generating character spritesheet:", error);
  }
}

createCharacterSprite();
```

This will generate a spritesheet for a knight character with different animation states.

## Creating Environment Sprites

Next, let's generate some environment sprites:

```javascript
async function createEnvironmentSprites() {
  const description = "Medieval castle interior";
  const options = {
    elements: 6,
    size: '1024x1024',
    style: 'pixel-art',
    theme: 'fantasy'
  };

  try {
    const result = await generateEnvironmentSprites(description, options);
    console.log("Environment sprites generated:", result);
    // You can now use result.tileset (base64 encoded image) and result.metadata
  } catch (error) {
    console.error("Error generating environment sprites:", error);
  }
}

createEnvironmentSprites();
```

This will create a set of environment sprites for a medieval castle interior.

## Generating Item Sprites

Now, let's create some item sprites:

```javascript
async function createItemSprites() {
  const description = "Medieval weapons and armor";
  const options = {
    itemCount: 8,
    size: '1024x1024',
    style: 'pixel-art',
    itemType: 'equipment'
  };

  try {
    const result = await generateItemSprites(description, options);
    console.log("Item sprites generated:", result);
    // You can now use result.itemSheet (base64 encoded image) and result.metadata
  } catch (error) {
    console.error("Error generating item sprites:", error);
  }
}

createItemSprites();
```

This will generate a set of medieval weapon and armor item sprites.

## Customizing Your Sprites

You can customize your sprites by modifying the options passed to each function. Here are some key options:

- `size`: The dimensions of the generated image (e.g., '1024x1024')
- `style`: The visual style of the sprites (e.g., 'pixel-art', 'vector', '3d')
- `states` (for character sprites): The animation states to include
- `framesPerState` (for character sprites): The number of frames per animation state
- `elements` (for environment sprites): The number of distinct environment pieces to generate
- `itemCount` (for item sprites): The number of items to generate

## Fetching Available Options

You can retrieve the list of available animation states and sprite styles using these functions:

```javascript
async function fetchOptions() {
  try {
    const animationStates = await fetchAvailableAnimationStates();
    console.log("Available animation states:", animationStates);

    const spriteStyles = await fetchAvailableSpriteStyles();
    console.log("Available sprite styles:", spriteStyles);
  } catch (error) {
    console.error("Error fetching options:", error);
  }
}

fetchOptions();
```

## Conclusion

You've now learned how to generate character sprites, environment sprites, and item sprites using our AI-powered functions. These tools can significantly speed up your game asset creation process, allowing you to focus on game design and development.

## Next Steps

- Explore the [API Reference](/docs/api-reference) for detailed information on function parameters and return values.
- Check out our [How-To Guides](/docs/how-to-guides) for more advanced usage scenarios.
- Learn about [integrating generated sprites](/docs/integrating-sprites) into your game engine or framework.
