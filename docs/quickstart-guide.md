# Quickstart Guide for SpriteAI SDK

This guide will help you get started with the SpriteAI SDK, which allows you to generate character spritesheets, environment sprites, and item sprites for your game development projects.

## Installation

To use the SpriteAI SDK, you'll need to install it in your project. You can do this using npm:

```bash
npm install spriteai
```

## Setup

Before using the SDK, you need to import the necessary functions:

```javascript
import {
  generateCharacterSpritesheet,
  generateEnvironmentSprites,
  generateItemSprites,
  fetchAvailableAnimationStates,
  fetchAvailableSpriteStyles
} from 'spriteai';
```

## Generating Character Spritesheets

To generate a character spritesheet, use the `generateCharacterSpritesheet` function:

```javascript
const characterDescription = 'A brave knight in shining armor';
const options = {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  direction: 'right',
  save: true
};

const result = await generateCharacterSpritesheet(characterDescription, options);
console.log(result.spritesheet); // Base64 encoded spritesheet
console.log(result.metadata); // Metadata about the spritesheet
```

## Generating Environment Sprites

To generate environment sprites, use the `generateEnvironmentSprites` function:

```javascript
const environmentDescription = 'A lush forest with ancient ruins';
const options = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy',
  save: true
};

const result = await generateEnvironmentSprites(environmentDescription, options);
console.log(result.tileset); // Base64 encoded tileset
console.log(result.metadata); // Metadata about the environment sprites
```

## Generating Item Sprites

To generate item sprites, use the `generateItemSprites` function:

```javascript
const itemDescription = 'Medieval weapons and armor';
const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment',
  save: true
};

const result = await generateItemSprites(itemDescription, options);
console.log(result.itemSheet); // Base64 encoded item sheet
console.log(result.metadata); // Metadata about the item sprites
```

## Fetching Available Options

You can fetch available animation states and sprite styles using these functions:

```javascript
const animationStates = await fetchAvailableAnimationStates();
console.log(animationStates); // Array of available animation states

const spriteStyles = await fetchAvailableSpriteStyles();
console.log(spriteStyles); // Array of available sprite styles
```

## Saving Generated Sprites

By default, the generated sprites are returned as Base64 encoded strings. If you want to save them as files, set the `save` option to `true` in the options object. The files will be saved in the `assets` folder of your current working directory.

## Additional Options

Each generation function (`generateCharacterSpritesheet`, `generateEnvironmentSprites`, `generateItemSprites`) accepts various options to customize the output. Refer to the function definitions for detailed information on available options.

## Error Handling

It's recommended to wrap your API calls in try-catch blocks to handle any potential errors:

```javascript
try {
  const result = await generateCharacterSpritesheet(description, options);
  // Handle successful result
} catch (error) {
  console.error('Error generating spritesheet:', error);
}
```

This quickstart guide covers the basic usage of the SpriteAI SDK. For more detailed information on each function and its options, please refer to the full API documentation.