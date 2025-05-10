# SpriteAI SDK Quickstart Guide

This guide will help you get started with the SpriteAI SDK, which allows you to generate game assets programmatically.

## Installation

First, install the SpriteAI SDK using npm:

```bash
npm install spriteai-sdk
```

## Basic Usage

To use the SpriteAI SDK, you'll need to import the required functions:

```javascript
import {
  generateCharacterSpritesheet,
  generateEnvironmentSprites,
  generateItemSprites,
  fetchAvailableAnimationStates,
  fetchAvailableSpriteStyles
} from 'spriteai-sdk';
```

## Generating a Character Spritesheet

To generate a character spritesheet:

```javascript
const characterDescription = 'a brave knight with shining armor';
const options = {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  direction: 'right',
  save: true
};

const result = await generateCharacterSpritesheet(characterDescription, options);
console.log(result.spritesheet); // Base64 encoded PNG
console.log(result.metadata); // Metadata about the generated spritesheet
```

## Generating Environment Sprites

To generate environment sprites:

```javascript
const environmentDescription = 'forest';
const options = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy',
  save: true
};

const result = await generateEnvironmentSprites(environmentDescription, options);
console.log(result.tileset); // Base64 encoded PNG
console.log(result.metadata); // Metadata about the generated environment sprites
```

## Generating Item Sprites

To generate item sprites:

```javascript
const itemDescription = 'magical artifacts';
const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment',
  save: true
};

const result = await generateItemSprites(itemDescription, options);
console.log(result.itemSheet); // Base64 encoded PNG
console.log(result.metadata); // Metadata about the generated item sprites
```

## Fetching Available Options

You can fetch available animation states and sprite styles:

```javascript
const animationStates = await fetchAvailableAnimationStates();
console.log(animationStates); // Array of available animation states

const spriteStyles = await fetchAvailableSpriteStyles();
console.log(spriteStyles); // Array of available sprite styles
```

## Saving Generated Assets

By default, the generated assets are returned as Base64 encoded strings. If you want to save them as files, set the `save` option to `true` in the options object. The files will be saved in the `assets` folder of your current working directory.

## Error Handling

It's recommended to use try-catch blocks when calling these functions to handle potential errors:

```javascript
try {
  const result = await generateCharacterSpritesheet(description, options);
  // Handle successful result
} catch (error) {
  console.error('Error generating character spritesheet:', error);
}
```

This quickstart guide covers the basic usage of the SpriteAI SDK. For more detailed information on each function and its options, please refer to the full API documentation.