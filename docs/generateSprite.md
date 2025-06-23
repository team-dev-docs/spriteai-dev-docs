---
title: generateSprite Documentation
description: >-
  Learn how to use the generateSprite function to create character spritesheets,
  environment sprites, and item sprites using AI-powered image generation.
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Introduction

The `generateSprite` function is a powerful tool that allows you to create various types of game assets using AI-powered image generation. This tutorial will guide you through the process of generating character spritesheets, environment sprites, and item sprites using the `generateSprite` function and its related utilities.

## Prerequisites

Before you begin, make sure you have:

- Node.js installed on your system
- The necessary dependencies installed (OpenAI, axios, sharp, Jimp)
- An OpenAI API key set up in your environment

## Generating a Character Spritesheet

Let's start by creating a character spritesheet using the `generateCharacterSpritesheet` function.

```javascript
import { generateCharacterSpritesheet } from './spriteAI';

const description = "A pixelated robot";
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
console.log(result.metadata);
```

This code will generate a spritesheet for a pixelated robot character with four animation states: idle, walk, run, and attack. The resulting spritesheet will be saved as an image file, and the metadata will be logged to the console.

## Generating Environment Sprites

Next, let's create some environment sprites using the `generateEnvironmentSprites` function.

```javascript
import { generateEnvironmentSprites } from './spriteAI';

const description = "Forest tileset";
const options = {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  theme: 'fantasy',
  save: true
};

const result = await generateEnvironmentSprites(description, options);
console.log(result.metadata);
```

This code will generate a set of forest environment sprites in a fantasy theme. The resulting tileset will be saved as an image file, and the metadata will be logged to the console.

## Generating Item Sprites

Finally, let's create some item sprites using the `generateItemSprites` function.

```javascript
import { generateItemSprites } from './spriteAI';

const description = "Magic potions";
const options = {
  itemCount: 8,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  itemType: 'consumable',
  background: 'transparent',
  save: true
};

const result = await generateItemSprites(description, options);
console.log(result.metadata);
```

This code will generate a set of magic potion item sprites. The resulting item sheet will be saved as an image file, and the metadata will be logged to the console.

## Fetching Available Options

You can use the following utility functions to fetch available animation states and sprite styles:

```javascript
import { fetchAvailableAnimationStates, fetchAvailableSpriteStyles } from './spriteAI';

const animationStates = await fetchAvailableAnimationStates();
console.log("Available animation states:", animationStates);

const spriteStyles = await fetchAvailableSpriteStyles();
console.log("Available sprite styles:", spriteStyles);
```

These functions will return arrays of available options that you can use when generating sprites.

## Outcome

After running these examples, you should have:

1. A character spritesheet with multiple animation states
2. An environment tileset with various elements
3. An item sprite sheet with multiple items
4. Lists of available animation states and sprite styles

You can now use these generated assets in your game development projects.

## Next Steps

- Learn how to integrate these sprites into your game engine
- Explore advanced customization options for sprite generation
- Discover techniques for optimizing and processing generated sprites

For more detailed information about the API and available options, check out the [generateSprite Reference Documentation](/docs/reference/generateSprite).
