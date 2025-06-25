# SDK Quickstart Guide

## Overview

This quickstart guide will help you get started with the SpriteAI SDK, providing a step-by-step introduction to generating game sprites and assets.

## Prerequisites

- Node.js (version 12 or higher)
- npm package manager
- OpenAI API key (for AI-powered sprite generation)

## Installation

Install the SpriteAI SDK using npm:

```bash
npm install spriteai
```

## Basic Usage

### Character Sprite Generation

Generate a character spritesheet with different animation states:

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

async function createCharacterSprite() {
  const characterSprite = await generateCharacterSpritesheet('warrior hero', {
    states: ['idle', 'walk', 'run', 'attack'],
    style: 'pixel-art',
    framesPerState: 6
  });

  console.log(characterSprite.metadata);
}
```

### Available Animation States

Retrieve a list of available animation states:

```javascript
import { fetchAvailableAnimationStates } from 'spriteai';

async function getAnimationStates() {
  const states = await fetchAvailableAnimationStates();
  console.log('Available Animation States:', states);
}
```

### Sprite Styles

Get a list of available sprite styles:

```javascript
import { fetchAvailableSpriteStyles } from 'spriteai';

async function getSpriteStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log('Available Sprite Styles:', styles);
}
```

## Advanced Sprite Generation

### Environment Sprites

Generate environment sprites for your game:

```javascript
import { generateEnvironmentSprites } from 'spriteai';

async function createEnvironmentSprites() {
  const environmentSprites = await generateEnvironmentSprites('fantasy forest', {
    elements: 4,
    style: 'pixel-art',
    theme: 'fantasy'
  });

  console.log(environmentSprites.metadata);
}
```

### Item Sprites

Create game item sprites:

```javascript
import { generateItemSprites } from 'spriteai';

async function createItemSprites() {
  const itemSprites = await generateItemSprites('medieval weapons', {
    itemCount: 4,
    style: 'pixel-art',
    itemType: 'equipment'
  });

  console.log(itemSprites.metadata);
}
```

## Best Practices

- Always handle async operations with try/catch
- Check the metadata returned by sprite generation functions
- Use appropriate styles and state configurations for your game
- Consider saving generated sprites for reuse

## Next Steps

- Explore the full API documentation
- Join our community forums for tips and advanced techniques
- Experiment with different sprite generation options

## Troubleshooting

- Ensure you have a valid OpenAI API key
- Check your internet connection
- Verify the SDK is up to date
- Review the error messages for specific issues

Happy sprite creation!