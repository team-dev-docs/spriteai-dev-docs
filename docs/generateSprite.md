---
title: Sprite Generation API
description: >-
  Learn how to generate character sprites, environment sprites, and item sprites
  using the Sprite Generation API.
slug: /
sidebar_position: 1
---

# Sprite Generation API

## Introduction

The Sprite Generation API allows you to create various types of sprites for your game or application using AI-powered image generation. This tutorial will guide you through generating character sprites, environment sprites, and item sprites, as well as fetching available animation states and sprite styles.

## Prerequisites

- Node.js installed on your system
- Basic knowledge of JavaScript and async/await syntax
- An OpenAI API key (for image generation)

## Getting Started

First, install the required dependencies:

```bash
npm install openai axios sharp jimp fs path
```

Then, import the necessary functions from the Sprite Generation API:

```javascript
import { 
  generateCharacterSpritesheet, 
  generateEnvironmentSprites, 
  generateItemSprites,
  fetchAvailableAnimationStates,
  fetchAvailableSpriteStyles
} from './spriteAI';
```

## Generating Character Sprites

Let's create a character spritesheet with custom options:

```javascript
async function createCharacterSprite() {
  const options = {
    states: ['idle', 'walk', 'run', 'attack'],
    framesPerState: 6,
    size: '1024x1024',
    style: 'pixel-art',
    padding: 1,
    direction: 'right',
    save: true
  };

  const result = await generateCharacterSpritesheet("A brave knight in shining armor", options);
  
  console.log("Spritesheet URL:", result.spritesheet);
  console.log("Metadata:", result.metadata);
}

createCharacterSprite();
```

This will generate a spritesheet for a knight character with idle, walk, run, and attack animations.

## Generating Environment Sprites

Create a set of environment sprites for your game:

```javascript
async function createEnvironmentSprites() {
  const options = {
    elements: 4,
    size: '1024x1024',
    style: 'pixel-art',
    padding: 1,
    theme: 'fantasy',
    save: true
  };

  const result = await generateEnvironmentSprites("Medieval castle elements", options);
  
  console.log("Environment tileset URL:", result.tileset);
  console.log("Metadata:", result.metadata);
}

createEnvironmentSprites();
```

This will generate a tileset of medieval castle elements for a fantasy-themed environment.

## Generating Item Sprites

Create a set of item sprites for your game inventory:

```javascript
async function createItemSprites() {
  const options = {
    itemCount: 4,
    size: '1024x1024',
    style: 'pixel-art',
    padding: 1,
    itemType: 'equipment',
    background: 'transparent',
    save: true
  };

  const result = await generateItemSprites("Medieval weapons and armor", options);
  
  console.log("Item spritesheet URL:", result.itemSheet);
  console.log("Metadata:", result.metadata);
}

createItemSprites();
```

This will generate a spritesheet of medieval weapons and armor items for your game's equipment system.

## Fetching Available Animation States

To get a list of available animation states for character sprites:

```javascript
async function getAnimationStates() {
  const states = await fetchAvailableAnimationStates();
  console.log("Available animation states:", states);
}

getAnimationStates();
```

## Fetching Available Sprite Styles

To get a list of available sprite styles:

```javascript
async function getSpriteStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log("Available sprite styles:", styles);
}

getSpriteStyles();
```

## Outcome

After running these functions, you'll have:

1. A character spritesheet with multiple animations
2. An environment tileset for your game world
3. An item spritesheet for your inventory system
4. Lists of available animation states and sprite styles

You can use these generated assets in your game engine or application to create a visually cohesive and animated game world.

## Next Steps

- Learn how to integrate these sprites into your game engine
- Explore advanced customization options for sprite generation
- Discover techniques for optimizing and compressing sprite assets

By mastering the Sprite Generation API, you'll be able to quickly create diverse and visually appealing assets for your game development projects.
