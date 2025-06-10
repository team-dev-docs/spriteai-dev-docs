---
title: Sprite Generation and Management
description: >-
  Learn how to generate character spritesheets, environment sprites, and item
  sprites using AI-powered tools.
slug: /
sidebar_position: 1
---

# Sprite Generation and Management

## Introduction

This guide will walk you through the process of generating and managing various types of sprites using our AI-powered tools. You'll learn how to create character spritesheets, environment sprites, and item sprites, as well as how to fetch available animation states and sprite styles.

## Prerequisites

- Node.js installed on your system
- Access to the sprite generation module
- OpenAI API key (for AI-powered image generation)

## Generating Character Spritesheets

The `generateCharacterSpritesheet` function allows you to create character spritesheets with multiple animation states.

### Usage

```javascript
import { generateCharacterSpritesheet } from './path/to/sprite/module';

const description = "A pixelated robot";
const options = {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  direction: 'right'
};

const result = await generateCharacterSpritesheet(description, options);
console.log(result);
```

### Parameters

- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to include (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Number of frames per animation state (default: 6)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style of the sprite (default: "pixel-art")
  - `direction` (string): Direction the character faces (default: "right")
  - `save` (boolean): Whether to save the generated image to disk

### Return Value

The function returns an object containing:

- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet
- `metadata`: Object containing information about the spritesheet, including states, dimensions, and frame data

## Generating Environment Sprites

The `generateEnvironmentSprites` function creates a tileset of environment elements.

### Usage

```javascript
import { generateEnvironmentSprites } from './path/to/sprite/module';

const description = "Forest landscape";
const options = {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy'
};

const result = await generateEnvironmentSprites(description, options);
console.log(result);
```

### Parameters

- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of distinct environment pieces to generate (default: 4)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style of the sprites (default: "pixel-art")
  - `theme` (string): Theme of the environment (default: "fantasy")
  - `save` (boolean): Whether to save the generated image to disk

### Return Value

The function returns an object containing:

- `original`: URL of the original generated image
- `tileset`: Base64-encoded image data URL of the processed tileset
- `metadata`: Object containing information about the tileset, including dimensions and tile data

## Generating Item Sprites

The `generateItemSprites` function creates a collection of item sprites for game inventories or pickups.

### Usage

```javascript
import { generateItemSprites } from './path/to/sprite/module';

const description = "Magic potions";
const options = {
  itemCount: 6,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'consumable'
};

const result = await generateItemSprites(description, options);
console.log(result);
```

### Parameters

- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of distinct items to generate (default: 4)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style of the sprites (default: "pixel-art")
  - `itemType` (string): Type of items to generate (default: "equipment")
  - `save` (boolean): Whether to save the generated image to disk

### Return Value

The function returns an object containing:

- `original`: URL of the original generated image
- `itemSheet`: Base64-encoded image data URL of the processed item sheet
- `metadata`: Object containing information about the item sheet, including dimensions and item data

## Fetching Available Animation States

The `fetchAvailableAnimationStates` function retrieves a list of supported animation states for character spritesheets.

### Usage

```javascript
import { fetchAvailableAnimationStates } from './path/to/sprite/module';

const states = await fetchAvailableAnimationStates();
console.log(states);
```

### Return Value

An array of strings representing available animation states (e.g., ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']).

## Fetching Available Sprite Styles

The `fetchAvailableSpriteStyles` function retrieves a list of supported art styles for sprite generation.

### Usage

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
console.log(styles);
```

### Return Value

An array of strings representing available sprite styles (e.g., ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']).

## Conclusion

With these powerful sprite generation tools, you can quickly create diverse and customized assets for your game or application. Experiment with different descriptions, styles, and options to achieve the perfect look for your project.

## Next Steps

- Learn how to integrate these sprites into your game engine
- Explore advanced customization options for sprite generation
- Discover best practices for optimizing sprite performance in your projects
