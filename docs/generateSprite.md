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
- An OpenAI API key (for image generation)

## Generating Character Spritesheets

The `generateCharacterSpritesheet` function allows you to create a character spritesheet with multiple animation states.

### Basic Usage

```javascript
import { generateCharacterSpritesheet } from './path/to/spriteAI';

const description = "A pixelated robot character";
const result = await generateCharacterSpritesheet(description);

console.log(result.spritesheet); // Base64-encoded spritesheet image
console.log(result.metadata); // Metadata about the generated spritesheet
```

### Customizing the Spritesheet

You can customize various aspects of the generated spritesheet:

```javascript
const options = {
  states: ['idle', 'walk', 'run', 'attack', 'jump'],
  framesPerState: 8,
  size: '2048x2048',
  style: 'pixel-art',
  padding: 2,
  direction: 'left',
  save: true // Save the spritesheet to disk
};

const result = await generateCharacterSpritesheet(description, options);
```

### Available Animation States

To get a list of available animation states:

```javascript
import { fetchAvailableAnimationStates } from './path/to/spriteAI';

const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### Available Sprite Styles

To get a list of available sprite styles:

```javascript
import { fetchAvailableSpriteStyles } from './path/to/spriteAI';

const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Generating Environment Sprites

The `generateEnvironmentSprites` function creates a tileset of environment elements.

### Basic Usage

```javascript
import { generateEnvironmentSprites } from './path/to/spriteAI';

const description = "Forest environment";
const result = await generateEnvironmentSprites(description);

console.log(result.tileset); // Base64-encoded tileset image
console.log(result.metadata); // Metadata about the generated tileset
```

### Customizing Environment Sprites

You can customize the environment sprite generation:

```javascript
const options = {
  elements: 6,
  size: '2048x2048',
  style: 'pixel-art',
  padding: 2,
  theme: 'fantasy',
  save: true // Save the tileset to disk
};

const result = await generateEnvironmentSprites(description, options);
```

## Generating Item Sprites

The `generateItemSprites` function creates a collection of item sprites for your game.

### Basic Usage

```javascript
import { generateItemSprites } from './path/to/spriteAI';

const description = "Medieval weapons and armor";
const result = await generateItemSprites(description);

console.log(result.itemSheet); // Base64-encoded item sheet image
console.log(result.metadata); // Metadata about the generated items
```

### Customizing Item Sprites

You can customize the item sprite generation:

```javascript
const options = {
  itemCount: 8,
  size: '2048x2048',
  style: 'pixel-art',
  padding: 2,
  itemType: 'equipment',
  background: 'transparent',
  save: true // Save the item sheet to disk
};

const result = await generateItemSprites(description, options);
```

## Outcome

After following this tutorial, you'll be able to generate character spritesheets, environment tilesets, and item sprite collections using AI-powered image generation. These assets can be directly used in your game development projects.

## Next Steps

- Learn how to integrate these generated sprites into your game engine
- Explore advanced customization options for each sprite generation function
- Check out the Reference documentation for detailed API information
