# SpriteAI Documentation

SpriteAI is a powerful library for generating game assets using AI. This documentation covers the main functions and features of the SpriteAI library.

## Table of Contents

1. [Installation](#installation)
2. [Character Spritesheet Generation](#character-spritesheet-generation)
3. [Environment Sprites Generation](#environment-sprites-generation)
4. [Item Sprites Generation](#item-sprites-generation)
5. [Utility Functions](#utility-functions)

## Installation

To use SpriteAI, you need to install the following dependencies:

```bash
npm install openai axios sharp jimp
```

Then, import the necessary functions in your project:

```javascript
import {
  generateCharacterSpritesheet,
  generateEnvironmentSprites,
  generateItemSprites,
  fetchAvailableAnimationStates,
  fetchAvailableSpriteStyles
} from 'spriteAI';
```

## Character Spritesheet Generation

The `generateCharacterSpritesheet` function creates a character spritesheet based on a given description and options.

### Usage

```javascript
const result = await generateCharacterSpritesheet('medieval knight', {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  direction: 'right',
  save: true
});
```

### Parameters

- `description` (string): A description of the character to generate.
- `options` (object, optional):
  - `states` (array of strings): Animation states to include (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Image size (default: '1024x1024').
  - `style` (string): Art style (default: 'pixel-art').
  - `padding` (number): Padding between frames (default: 1).
  - `direction` (string): Character facing direction (default: 'right').
  - `save` (boolean): Whether to save the spritesheet to disk (default: false).

### Return Value

The function returns an object containing:

- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded PNG data of the processed spritesheet.
- `metadata`: Object containing information about the spritesheet, including states, dimensions, and frame data.

## Environment Sprites Generation

The `generateEnvironmentSprites` function creates environment sprites based on a given description and options.

### Usage

```javascript
const result = await generateEnvironmentSprites('forest clearing', {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  theme: 'fantasy',
  save: true
});
```

### Parameters

- `description` (string): A description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of distinct environment pieces (default: 4).
  - `size` (string): Image size (default: '1024x1024').
  - `style` (string): Art style (default: 'pixel-art').
  - `padding` (number): Padding between elements (default: 1).
  - `theme` (string): Theme of the environment (default: 'fantasy').
  - `save` (boolean): Whether to save the tileset to disk (default: false).

### Return Value

The function returns an object containing:

- `original`: URL of the original generated image.
- `tileset`: Base64-encoded PNG data of the processed tileset.
- `metadata`: Object containing information about the tileset, including elements, theme, dimensions, and tile data.

## Item Sprites Generation

The `generateItemSprites` function creates item sprites based on a given description and options.

### Usage

```javascript
const result = await generateItemSprites('magic potions', {
  itemCount: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  itemType: 'consumable',
  background: 'transparent',
  save: true
});
```

### Parameters

- `description` (string): A description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of distinct items (default: 4).
  - `size` (string): Image size (default: '1024x1024').
  - `style` (string): Art style (default: 'pixel-art').
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items (default: 'equipment').
  - `background` (string): Background color (default: 'white').
  - `save` (boolean): Whether to save the item sheet to disk (default: false).

### Return Value

The function returns an object containing:

- `original`: URL of the original generated image.
- `itemSheet`: Base64-encoded PNG data of the processed item sheet.
- `metadata`: Object containing information about the item sheet, including item count, type, dimensions, and item data.

## Utility Functions

### fetchAvailableAnimationStates

Retrieves a list of available animation states.

```javascript
const states = await fetchAvailableAnimationStates();
// Returns: ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### fetchAvailableSpriteStyles

Retrieves a list of available sprite styles.

```javascript
const styles = await fetchAvailableSpriteStyles();
// Returns: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

These utility functions can be used to get the supported animation states and sprite styles for use with the sprite generation functions.

---

This documentation provides an overview of the main functions in the SpriteAI library. For more detailed information about each function and its options, refer to the inline comments in the source code.