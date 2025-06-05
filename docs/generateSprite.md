---
title: Character Sprite Generation Documentation
description: >-
  Detailed guide on generating character sprite sheets using AI-powered image
  generation and analysis.
slug: /
sidebar_position: 1
---

# Character Sprite Generation Documentation

## Introduction

This documentation provides a comprehensive guide on how to generate character sprite sheets using our AI-powered image generation and analysis functions. With the expanded capabilities, you can now create detailed and customized sprite sheets for various character types and animation states.

## Prerequisites

Before you begin, ensure you have the following:

- Node.js installed
- Access to the spriteAI module
- Basic understanding of JavaScript and asynchronous functions

## Usage

To generate character sprite sheets, import the necessary functions from the `spriteAI` module and call them with the required parameters.

### Importing Functions

```javascript
import { generateCharacterSpritesheet, fetchAvailableAnimationStates, fetchAvailableSpriteStyles } from './path/to/spriteAI/module';
```

### Generating a Character Sprite Sheet

The `generateCharacterSpritesheet` function allows you to create a character sprite sheet based on a given description and options.

#### Basic Usage

```javascript
const result = await generateCharacterSpritesheet("A pixelated robot", {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  direction: 'right',
  save: true
});
console.log(result);
```

#### Parameters

- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array of strings): Animation states for the character (default: `['idle', 'walk', 'run', 'attack']`).
  - `framesPerState` (number): Number of frames per animation state (default: `6`).
  - `size` (string): Size of the generated image (default: `"1024x1024"`).
  - `style` (string): Art style of the sprite sheet (default: `"pixel-art"`).
  - `padding` (number): Padding between frames (default: `1`).
  - `direction` (string): Direction the character should face (default: `"right"`).
  - `save` (boolean): Whether to save the generated image to disk (default: `false`).

#### Return Value

Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the generated sprite sheet.
- `metadata`: Object with details about the generated sprite sheet, including animation states, frames per state, total frames, and dimensions.

## Fetching Available Animation States and Styles

You can fetch the available animation states and sprite styles using the following functions:

### Fetching Available Animation States

```javascript
const states = await fetchAvailableAnimationStates();
console.log(states); // Output: ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### Fetching Available Sprite Styles

```javascript
const styles = await fetchAvailableSpriteStyles();
console.log(styles); // Output: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Examples

### Generating a Single Sprite Sheet

```javascript
const result = await generateCharacterSpritesheet("A pixelated robot", {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  direction: 'right',
  save: true
});
console.log(result.original); // URL of the original image
console.log(result.spritesheet); // Base64-encoded sprite sheet
console.log(result.metadata); // Metadata about the sprite sheet
```

### Generating Multiple Variations

```javascript
const variations = await generateCharacterSpritesheet("A cartoon cat", {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  direction: 'right',
  save: true,
  iterations: 3
});
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.metadata);
});
```

## Notes or Considerations

- The function uses AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for the specified animation states and follow a specific layout based on the number of frames per state.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.

## Next Steps

- Explore how to generate environment sprites and item sprites using the `generateEnvironmentSprites` and `generateItemSprites` functions.
- Refer to the [Reference Documentation](/docs/reference) for detailed information on API parameters and return values.
- Check out our [How-To Guides](/docs/how-to) for specific use cases and advanced techniques.
