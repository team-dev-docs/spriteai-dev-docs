# SpriteAI Overview

SpriteAI is a powerful tool for generating game assets using AI-powered image generation. This overview will introduce you to the main features and functionalities of SpriteAI.

## What is SpriteAI?

SpriteAI is a JavaScript library that leverages OpenAI's DALL-E 3 model to create various types of game assets, including character spritesheets, environment tiles, and item icons. It's designed to streamline the asset creation process for game developers, allowing them to quickly generate high-quality, customizable game graphics.

## Main Features

### 1. Character Spritesheet Generation

The `generateCharacterSpritesheet` function allows you to create animated character spritesheets based on text descriptions. 

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

const result = await generateCharacterSpritesheet('a cute dragon', {
  states: ['idle', 'walk', 'run'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art'
});
```

This function generates a spritesheet with multiple animation states, making it easy to implement character animations in your game.

### 2. Environment Sprite Generation

Use the `generateEnvironmentSprites` function to create tileset-style environment elements:

```javascript
import { generateEnvironmentSprites } from 'spriteai';

const result = await generateEnvironmentSprites('forest', {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy'
});
```

This is perfect for creating diverse game environments and landscapes.

### 3. Item Sprite Generation

The `generateItemSprites` function helps you create collections of item icons:

```javascript
import { generateItemSprites } from 'spriteai';

const result = await generateItemSprites('medieval weapons', {
  itemCount: 4,
  size: '512x512',
  style: 'pixel-art',
  itemType: 'equipment'
});
```

This is ideal for generating inventory items, power-ups, or collectibles for your game.

## Customization Options

SpriteAI offers various customization options for each generation function, including:

- Art style (e.g., pixel-art, vector, 3D)
- Image size
- Number of frames or elements
- Specific themes or item types

## Utility Functions

SpriteAI also provides utility functions to enhance your workflow:

- `removeBackgroundColor`: Remove specific background colors from generated images
- `fetchAvailableAnimationStates`: Get a list of available animation states
- `fetchAvailableSpriteStyles`: Retrieve available sprite styles

## Getting Started

To start using SpriteAI, install it via npm:

```bash
npm install spriteai
```

Then, import the desired functions in your JavaScript code and start generating game assets!

For more detailed information on each function and advanced usage, please refer to the specific documentation pages for each feature.