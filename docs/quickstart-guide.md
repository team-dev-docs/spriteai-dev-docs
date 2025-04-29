# SpriteAI Quickstart Guide

Welcome to the SpriteAI quickstart guide! This guide will help you get up and running with the main features of SpriteAI, a powerful tool for generating game assets using AI.

## Installation

First, install the SpriteAI package using npm:

```bash
npm install spriteai
```

## Basic Usage

To use SpriteAI in your project, import the necessary functions:

```javascript
import { generateCharacterSpritesheet, generateEnvironmentSprites, generateItemSprites } from 'spriteai';
```

## Generating a Character Spritesheet

To create a character spritesheet, use the `generateCharacterSpritesheet` function:

```javascript
const description = 'A heroic knight in shining armor';
const options = {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  direction: 'right',
  save: true
};

generateCharacterSpritesheet(description, options)
  .then(result => {
    console.log('Spritesheet generated:', result);
  })
  .catch(error => {
    console.error('Error generating spritesheet:', error);
  });
```

This will generate a pixel-art character spritesheet with idle, walk, run, and attack animations.

## Creating Environment Sprites

To generate environment sprites, use the `generateEnvironmentSprites` function:

```javascript
const description = 'Medieval castle';
const options = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy',
  save: true
};

generateEnvironmentSprites(description, options)
  .then(result => {
    console.log('Environment sprites generated:', result);
  })
  .catch(error => {
    console.error('Error generating environment sprites:', error);
  });
```

This will create a set of fantasy-themed environment sprites for a medieval castle.

## Generating Item Sprites

To create item sprites, use the `generateItemSprites` function:

```javascript
const description = 'Magic potions';
const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment',
  save: true
};

generateItemSprites(description, options)
  .then(result => {
    console.log('Item sprites generated:', result);
  })
  .catch(error => {
    console.error('Error generating item sprites:', error);
  });
```

This will generate a set of pixel-art magic potion item sprites.

## Additional Features

SpriteAI also provides functions to fetch available animation states and sprite styles:

```javascript
import { fetchAvailableAnimationStates, fetchAvailableSpriteStyles } from 'spriteai';

fetchAvailableAnimationStates()
  .then(states => {
    console.log('Available animation states:', states);
  });

fetchAvailableSpriteStyles()
  .then(styles => {
    console.log('Available sprite styles:', styles);
  });
```

## Saving Generated Assets

By default, generated assets are returned as base64-encoded strings. To save them as files, include the `save: true` option in your function calls. The assets will be saved in the `assets` folder of your current working directory.

## Next Steps

This quickstart guide covers the basic usage of SpriteAI. For more detailed information on configuration options and advanced features, please refer to the full API documentation.

Happy sprite generating!