# SpriteAI SDK Quickstart Guide

Welcome to the SpriteAI SDK! This guide will help you get started with using our SDK to generate game assets programmatically.

## Installation

To use the SpriteAI SDK, you'll need to install it in your project. You can do this using npm:

```bash
npm install spriteai
```

## Basic Usage

Here's a quick overview of how to use the main functions of the SpriteAI SDK:

### Generating Character Spritesheets

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

async function createCharacter() {
  const result = await generateCharacterSpritesheet('a medieval knight', {
    states: ['idle', 'walk', 'run', 'attack'],
    framesPerState: 6,
    size: '1024x1024',
    style: 'pixel-art',
    direction: 'right',
    save: true
  });

  console.log(result.spritesheet); // Base64 encoded spritesheet
  console.log(result.metadata); // Metadata about the spritesheet
}

createCharacter();
```

### Generating Environment Sprites

```javascript
import { generateEnvironmentSprites } from 'spriteai';

async function createEnvironment() {
  const result = await generateEnvironmentSprites('forest', {
    elements: 4,
    size: '1024x1024',
    style: 'pixel-art',
    theme: 'fantasy',
    save: true
  });

  console.log(result.tileset); // Base64 encoded tileset
  console.log(result.metadata); // Metadata about the environment sprites
}

createEnvironment();
```

### Generating Item Sprites

```javascript
import { generateItemSprites } from 'spriteai';

async function createItems() {
  const result = await generateItemSprites('magic potions', {
    itemCount: 4,
    size: '1024x1024',
    style: 'pixel-art',
    itemType: 'equipment',
    save: true
  });

  console.log(result.itemSheet); // Base64 encoded item sheet
  console.log(result.metadata); // Metadata about the item sprites
}

createItems();
```

## Advanced Features

### Fetching Available Animation States

```javascript
import { fetchAvailableAnimationStates } from 'spriteai';

async function getAnimationStates() {
  const states = await fetchAvailableAnimationStates();
  console.log(states); // Array of available animation states
}

getAnimationStates();
```

### Fetching Available Sprite Styles

```javascript
import { fetchAvailableSpriteStyles } from 'spriteai';

async function getSpriteStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles); // Array of available sprite styles
}

getSpriteStyles();
```

## Notes

- The SDK uses OpenAI's DALL-E 3 model to generate images, so make sure you have the necessary API credentials set up.
- Generated assets are saved in the `assets` folder of your current working directory if the `save` option is set to `true`.
- The SDK provides metadata for each generated asset, which can be useful for integrating the assets into your game engine.

For more detailed information on each function and its options, please refer to the full API documentation.

Happy sprite generating!