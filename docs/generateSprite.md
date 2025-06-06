---
title: Generate Sprite Documentation
description: >-
  Learn how to use the generateSprite function and related utilities to create
  game assets using AI.
sidebar_position: 1
slug: /
---

# Generate Sprite Documentation

## Introduction

The `generateSprite` module provides powerful functions for creating game assets using AI-powered image generation. This documentation covers the main `generateCharacterSpritesheet` function, as well as new utilities for generating environment sprites, item sprites, and fetching available animation states and sprite styles.

## generateCharacterSpritesheet

### Purpose

Generate a character spritesheet based on a text description using AI image generation.

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
- `metadata`: Object containing information about the spritesheet, including states, dimensions, and frame data

### Example

```javascript
const description = "A brave knight in shining armor";
const options = {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 8,
  style: 'pixel-art'
};

const result = await generateCharacterSpritesheet(description, options);
console.log(result.metadata);
```

## New Utility Functions

### fetchAvailableAnimationStates

Retrieves a list of available animation states for character sprites.

```javascript
import { fetchAvailableAnimationStates } from 'spriteAI';

const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### fetchAvailableSpriteStyles

Retrieves a list of available sprite styles for generation.

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

### generateEnvironmentSprites

Generates a tileset of environment sprites based on a description.

```javascript
import { generateEnvironmentSprites } from 'spriteAI';

const description = "A lush forest with ancient ruins";
const options = {
  elements: 6,
  style: 'pixel-art',
  theme: 'fantasy'
};

const result = await generateEnvironmentSprites(description, options);
console.log(result.metadata);
```

### generateItemSprites

Generates a collection of item sprites for game inventories or pickups.

```javascript
import { generateItemSprites } from 'spriteAI';

const description = "Medieval weapons and armor";
const options = {
  itemCount: 8,
  style: 'pixel-art',
  itemType: 'equipment'
};

const result = await generateItemSprites(description, options);
console.log(result.metadata);
```

## Notes and Considerations

- The functions use OpenAI's DALL-E 3 model for image generation, which may result in varying outputs for the same input.
- Generated images are optimized for game development, following specific layouts and styles.
- When using the `save` option, images are stored in an 'assets' folder with filenames based on the description.
- The functions may take some time to complete due to API calls and image processing.

## Next Steps

- Explore the [How-To Guide](/docs/how-to/customize-sprites) for customizing generated sprites
- Check out the [API Reference](/docs/api/spriteai) for detailed function parameters and return values
- Read the [Explanation](/docs/explanation/ai-sprite-generation) on how AI-powered sprite generation works
