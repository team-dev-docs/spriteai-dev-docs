# Getting Started with SpriteAI

Welcome to SpriteAI, a powerful tool for generating game assets using AI. This guide will help you get started with the main features of SpriteAI.

## Installation

To use SpriteAI, you'll need to have Node.js installed on your system. Once you have Node.js, you can install SpriteAI using npm:

```bash
npm install spriteai
```

## Basic Usage

Here's a quick overview of the main functions provided by SpriteAI:

### Generating Character Spritesheets

To generate a character spritesheet, use the `generateCharacterSpritesheet` function:

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

const result = await generateCharacterSpritesheet('a medieval knight', {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  direction: 'right',
  save: true
});

console.log(result.spritesheet); // Base64 encoded spritesheet
console.log(result.metadata); // Metadata about the generated spritesheet
```

### Generating Environment Sprites

For environment sprites, use the `generateEnvironmentSprites` function:

```javascript
import { generateEnvironmentSprites } from 'spriteai';

const result = await generateEnvironmentSprites('forest', {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy',
  save: true
});

console.log(result.tileset); // Base64 encoded tileset
console.log(result.metadata); // Metadata about the generated tileset
```

### Generating Item Sprites

To create item sprites, use the `generateItemSprites` function:

```javascript
import { generateItemSprites } from 'spriteai';

const result = await generateItemSprites('magical artifacts', {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment',
  save: true
});

console.log(result.itemSheet); // Base64 encoded item sheet
console.log(result.metadata); // Metadata about the generated items
```

## Additional Features

SpriteAI also provides utility functions to fetch available animation states and sprite styles:

```javascript
import { fetchAvailableAnimationStates, fetchAvailableSpriteStyles } from 'spriteai';

const animationStates = await fetchAvailableAnimationStates();
console.log(animationStates); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']

const spriteStyles = await fetchAvailableSpriteStyles();
console.log(spriteStyles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Saving Generated Assets

By default, the generated assets are returned as Base64 encoded strings. If you want to save the assets as files, set the `save` option to `true` when calling the generation functions. The assets will be saved in the `assets` folder in your current working directory.

## Next Steps

Explore the various options available for each generation function to customize your output. You can adjust parameters like size, style, number of frames, and more to suit your specific needs.

For more detailed information on each function and its options, please refer to the API documentation.