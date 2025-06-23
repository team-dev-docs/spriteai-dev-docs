---
title: Sprite Generation and Manipulation
description: Learn how to generate and manipulate game sprites using our AI-powered tools.
slug: /
sidebar_position: 1
---

# Sprite Generation and Manipulation

## Introduction

This guide will walk you through the process of generating and manipulating game sprites using our AI-powered tools. We'll cover character sprite generation, environment sprite creation, and item sprite generation, as well as how to fetch available animation states and sprite styles.

## Prerequisites

- Node.js installed on your machine
- Basic understanding of JavaScript and async/await syntax
- Familiarity with game development concepts

## Generating Character Sprites

The `generateCharacterSpritesheet` function allows you to create character spritesheets with various animation states.

```javascript
import { generateCharacterSpritesheet } from 'spriteAI';

const description = "A pixelated warrior with armor";
const options = {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art',
  direction: 'right'
};

const result = await generateCharacterSpritesheet(description, options);
console.log(result.spritesheet); // Base64-encoded spritesheet image
console.log(result.metadata); // Spritesheet metadata
```

### Options

- `states`: Array of animation states (default: ['idle', 'walk', 'run', 'attack'])
- `framesPerState`: Number of frames per animation state (default: 6)
- `size`: Size of the generated image (default: '1024x1024')
- `style`: Visual style of the sprite (default: 'pixel-art')
- `padding`: Padding between frames (default: 1)
- `direction`: Direction the character faces (default: 'right')

## Generating Environment Sprites

Use the `generateEnvironmentSprites` function to create environmental elements for your game.

```javascript
import { generateEnvironmentSprites } from 'spriteAI';

const description = "Forest tileset";
const options = {
  elements: 6,
  size: '512x512',
  style: 'pixel-art',
  theme: 'fantasy'
};

const result = await generateEnvironmentSprites(description, options);
console.log(result.tileset); // Base64-encoded tileset image
console.log(result.metadata); // Tileset metadata
```

### Options

- `elements`: Number of distinct environment pieces (default: 4)
- `size`: Size of the generated image (default: '1024x1024')
- `style`: Visual style of the sprites (default: 'pixel-art')
- `padding`: Padding between elements (default: 1)
- `theme`: Theme of the environment (default: 'fantasy')

## Generating Item Sprites

The `generateItemSprites` function helps you create item sprites for your game inventory or pickups.

```javascript
import { generateItemSprites } from 'spriteAI';

const description = "Magic potions and scrolls";
const options = {
  itemCount: 8,
  size: '512x512',
  style: 'pixel-art',
  itemType: 'consumable',
  background: 'transparent'
};

const result = await generateItemSprites(description, options);
console.log(result.itemSheet); // Base64-encoded item sheet image
console.log(result.metadata); // Item sheet metadata
```

### Options

- `itemCount`: Number of distinct items to generate (default: 4)
- `size`: Size of the generated image (default: '1024x1024')
- `style`: Visual style of the items (default: 'pixel-art')
- `padding`: Padding between items (default: 1)
- `itemType`: Type of items to generate (default: 'equipment')
- `background`: Background color of the item sheet (default: 'white')

## Fetching Available Animation States

To get a list of available animation states for character sprites, use the `fetchAvailableAnimationStates` function:

```javascript
import { fetchAvailableAnimationStates } from 'spriteAI';

const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

## Fetching Available Sprite Styles

To retrieve a list of available sprite styles, use the `fetchAvailableSpriteStyles` function:

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Conclusion

With these functions, you can easily generate and manipulate various types of sprites for your game development projects. Experiment with different descriptions, styles, and options to create unique and engaging game assets.

## Next Steps

- Learn how to integrate these sprites into your game engine
- Explore advanced sprite manipulation techniques
- Dive into our tutorials on game asset management and optimization
