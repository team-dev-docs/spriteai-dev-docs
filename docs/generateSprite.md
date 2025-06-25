---
title: Sprite Generation and Environment Creation
description: >-
  Learn how to generate character sprites, fetch available styles, and create
  environment sprites using AI-powered image generation.
slug: /
sidebar_position: 1
---

# Sprite Generation and Environment Creation

## Introduction

This documentation covers the AI-powered sprite and environment generation functions available in our SDK. These tools allow you to create character sprites, environment assets, and fetch available sprite styles for your game development needs.

## Generate Character Spritesheet

The `generateCharacterSpritesheet` function creates a character spritesheet based on a given description using AI-powered image generation.

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
  - `direction` (string): Character facing direction (default: "right")
  - `save` (boolean): Whether to save the generated image to disk

### Return Value

Returns an object containing:

- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet
- `metadata`: Object containing information about the generated spritesheet

### Example

```javascript
const result = await generateCharacterSpritesheet("A pixelated robot warrior", {
  states: ['idle', 'attack', 'defend'],
  framesPerState: 4,
  style: 'pixel-art',
  save: true
});

console.log(result.metadata);
console.log(result.spritesheet);
```

## Fetch Available Sprite Styles

The `fetchAvailableSpriteStyles` function retrieves a list of available sprite styles that can be used with the sprite generation functions.

### Usage

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

const styles = await fetchAvailableSpriteStyles();
```

### Return Value

Returns an array of strings representing available sprite styles.

### Example

```javascript
const availableStyles = await fetchAvailableSpriteStyles();
console.log("Available styles:", availableStyles);
// Output: Available styles: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Generate Environment Sprites

The `generateEnvironmentSprites` function creates a set of environment sprites based on a given description using AI-powered image generation.

### Usage

```javascript
import { generateEnvironmentSprites } from 'spriteAI';

const result = await generateEnvironmentSprites(description, options);
```

### Parameters

- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of distinct environment elements to generate (default: 4)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style of the sprites (default: "pixel-art")
  - `padding` (number): Padding between elements (default: 1)
  - `theme` (string): Theme of the environment (default: "fantasy")
  - `save` (boolean): Whether to save the generated image to disk

### Return Value

Returns an object containing:

- `original`: URL of the original generated image
- `tileset`: Base64-encoded image data URL of the processed environment tileset
- `metadata`: Object containing information about the generated environment sprites

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

## Notes and Considerations

- The functions use AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for game development use, with clear separation between elements and consistent styling.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The functions may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and comply with usage limits when using these AI-powered generation functions.

## Next Steps

- Explore the [Image Processing Documentation](/docs/image-processing) to learn about additional image manipulation tools.
- Check out the [Game Integration Guide](/docs/game-integration) for tips on using generated sprites in your game engine.
