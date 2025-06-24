---
title: Generate Sprite Documentation
description: >-
  Learn how to use the generateSprite function and related utilities to create
  game assets programmatically.
slug: /
sidebar_position: 1
---

# Generate Sprite Documentation

## Introduction

This documentation covers the `generateSprite` function and related utilities for creating game assets programmatically. These functions allow you to generate character spritesheets, environment sprites, and item sprites using AI-powered image generation.

## generateCharacterSpritesheet

The `generateCharacterSpritesheet` function creates a character spritesheet based on a given description.

### Usage

```javascript
import { generateCharacterSpritesheet } from 'spriteAI';

const result = await generateCharacterSpritesheet(description, options);
```

### Parameters

- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to include (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Number of frames per animation state (default: 6)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style of the sprite (default: "pixel-art")
  - `padding` (number): Padding between frames (default: 1)
  - `direction` (string): Direction the character faces (default: "right")
  - `save` (boolean): Whether to save the generated image to disk

### Return Value

Returns an object containing:
- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet
- `metadata`: Object with information about the spritesheet, including states, dimensions, and frame data

### Example

```javascript
const result = await generateCharacterSpritesheet("A pixelated robot warrior", {
  states: ['idle', 'walk', 'attack', 'die'],
  framesPerState: 8,
  style: 'pixel-art',
  save: true
});

console.log(result.metadata);
console.log(result.spritesheet);
```

## generateEnvironmentSprites

The `generateEnvironmentSprites` function creates a tileset of environment sprites based on a given description.

### Usage

```javascript
import { generateEnvironmentSprites } from 'spriteAI';

const result = await generateEnvironmentSprites(description, options);
```

### Parameters

- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of different elements to generate (default: 4)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style of the sprites (default: "pixel-art")
  - `padding` (number): Padding between elements (default: 1)
  - `theme` (string): Theme of the environment (default: "fantasy")
  - `save` (boolean): Whether to save the generated image to disk

### Return Value

Returns an object containing:
- `original`: URL of the original generated image
- `tileset`: Base64-encoded image data URL of the processed tileset
- `metadata`: Object with information about the tileset, including dimensions and tile data

### Example

```javascript
const result = await generateEnvironmentSprites("A lush forest with magical elements", {
  elements: 6,
  style: 'pixel-art',
  theme: 'fantasy',
  save: true
});

console.log(result.metadata);
console.log(result.tileset);
```

## generateItemSprites

The `generateItemSprites` function creates a collection of item sprites based on a given description.

### Usage

```javascript
import { generateItemSprites } from 'spriteAI';

const result = await generateItemSprites(description, options);
```

### Parameters

- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of different items to generate (default: 4)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style of the sprites (default: "pixel-art")
  - `padding` (number): Padding between items (default: 1)
  - `itemType` (string): Type of items to generate (default: "equipment")
  - `background` (string): Background color of the sprite sheet (default: "white")
  - `save` (boolean): Whether to save the generated image to disk

### Return Value

Returns an object containing:
- `original`: URL of the original generated image
- `itemSheet`: Base64-encoded image data URL of the processed item sheet
- `metadata`: Object with information about the item sheet, including dimensions and item data

### Example

```javascript
const result = await generateItemSprites("Medieval fantasy weapons and armor", {
  itemCount: 8,
  style: 'pixel-art',
  itemType: 'equipment',
  save: true
});

console.log(result.metadata);
console.log(result.itemSheet);
```

## Utility Functions

### fetchAvailableAnimationStates

Retrieves a list of available animation states for character sprites.

```javascript
import { fetchAvailableAnimationStates } from 'spriteAI';

const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### fetchAvailableSpriteStyles

Retrieves a list of available sprite styles.

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Notes and Considerations

- These functions use AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for game development and follow specific layouts based on the function used.
- When saving images, they are stored in an 'assets' folder with filenames based on the description.
- The functions may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies (OpenAI, axios, sharp, Jimp) installed in your project.

## Next Steps

- Explore the [How-To Guide](/docs/how-to/integrate-sprites) for integrating generated sprites into your game engine.
- Check out the [API Reference](/docs/api/spriteAI) for detailed information on all available functions and parameters.
- Read the [Explanation](/docs/explanation/ai-sprite-generation) to understand how AI-powered sprite generation works.
