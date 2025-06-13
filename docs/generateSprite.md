---
title: Sprite Generation API
description: >-
  Learn how to generate character sprites, environment sprites, and fetch
  available styles using our Sprite Generation API.
slug: /
sidebar_position: 1
---

# Sprite Generation API

## Introduction

The Sprite Generation API allows you to create game assets programmatically, including character sprites, environment sprites, and item sprites. This documentation covers the main functions for generating these assets and fetching available options.

## Generate Character Spritesheet

The `generateCharacterSpritesheet` function creates a character spritesheet based on a given description and options.

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

- `original` (string): URL of the original generated image
- `spritesheet` (string): Base64-encoded image data URL of the processed spritesheet
- `metadata` (object): Information about the generated spritesheet, including states, dimensions, and frame data

### Example

```javascript
const description = "A brave knight in shining armor";
const options = {
  states: ['idle', 'walk', 'attack', 'defend'],
  framesPerState: 8,
  style: 'pixel-art',
  save: true
};

const result = await generateCharacterSpritesheet(description, options);
console.log(result.metadata);
```

## Generate Environment Sprites

The `generateEnvironmentSprites` function creates a tileset of environment sprites based on a given description and options.

### Usage

```javascript
import { generateEnvironmentSprites } from 'spriteAI';

const result = await generateEnvironmentSprites(description, options);
```

### Parameters

- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of distinct environment pieces to generate (default: 4)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style of the sprites (default: "pixel-art")
  - `padding` (number): Padding between elements (default: 1)
  - `theme` (string): Theme of the environment (default: "fantasy")
  - `save` (boolean): Whether to save the generated image to disk

### Return Value

Returns an object containing:

- `original` (string): URL of the original generated image
- `tileset` (string): Base64-encoded image data URL of the processed tileset
- `metadata` (object): Information about the generated tileset, including number of elements, theme, and dimensions

### Example

```javascript
const description = "A lush forest environment";
const options = {
  elements: 6,
  style: 'pixel-art',
  theme: 'fantasy',
  save: true
};

const result = await generateEnvironmentSprites(description, options);
console.log(result.metadata);
```

## Fetch Available Sprite Styles

The `fetchAvailableSpriteStyles` function retrieves a list of available art styles for sprite generation.

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
console.log(availableStyles);
// Output: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Fetch Available Animation States

The `fetchAvailableAnimationStates` function retrieves a list of available animation states for character sprites.

### Usage

```javascript
import { fetchAvailableAnimationStates } from 'spriteAI';

const states = await fetchAvailableAnimationStates();
```

### Return Value

Returns an array of strings representing available animation states.

### Example

```javascript
const availableStates = await fetchAvailableAnimationStates();
console.log(availableStates);
// Output: ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

## Notes and Considerations

- The functions use AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for game development and follow specific layouts (e.g., character spritesheets have multiple rows for different animation states).
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The functions may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and comply with usage limits when using these functions in your projects.

For more detailed information on specific use cases or advanced configurations, please refer to our How-To Guides or reach out to our support team.
