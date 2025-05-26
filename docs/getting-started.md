# Getting Started with SpriteAI

Welcome to SpriteAI! This guide will walk you through the process of integrating the SpriteAI npm package into your projects.

## Installation

To begin using SpriteAI, you'll need to install it in your project directory. Simply run the following command:

```bash
npm install spriteai
```

## Basic Usage

Once SpriteAI is installed, you can start leveraging its powerful features in your project. Here's a quick example demonstrating the main functionalities:

```javascript
const spriteAI = require('spriteai');

// Initialise a new SpriteAI instance
const ai = new spriteAI.SpriteAI();

// Generate a sprite
ai.generateSprite('player', 32, 32)
  .then(sprite => {
    console.log('Sprite successfully generated:', sprite);
  })
  .catch(error => {
    console.error('Sprite generation encountered an error:', error);
  });

// Load an existing sprite
ai.loadSprite('path/to/sprite.png')
  .then(sprite => {
    console.log('Sprite successfully loaded:', sprite);
  })
  .catch(error => {
    console.error('Sprite loading encountered an error:', error);
  });

// Save a sprite
ai.saveSprite(sprite, 'path/to/save/sprite.png')
  .then(() => {
    console.log('Sprite saved successfully');
  })
  .catch(error => {
    console.error('Sprite saving encountered an error:', error);
  });
```

## Key Features

SpriteAI offers a range of powerful features to enhance your sprite creation and manipulation:

1. **Sprite Generation**: Utilise `generateSprite(name, width, height)` to programmatically create new sprites.
2. **Sprite Loading**: Easily load existing sprites with `loadSprite(path)`.
3. **Sprite Saving**: Preserve your sprites using `saveSprite(sprite, path)`.
4. **Environment Sprite Generation**: Create environment tilesets with `generateEnvironmentSprites(description, options)`.
5. **Item Sprite Generation**: Generate item collections using `generateItemSprites(description, options)`.
6. **Animation State Fetching**: Retrieve available animation states with `fetchAvailableAnimationStates()`.
7. **Sprite Style Fetching**: Get available sprite styles using `fetchAvailableSpriteStyles()`.

## Advanced Techniques

SpriteAI is capable of much more than basic sprite operations. You can create intricate sprite animations, apply various transformations, and unlock a world of creative possibilities. Dive into our comprehensive API documentation to explore the full potential of SpriteAI.

### Generating Environment Sprites

To generate environment tilesets, you can use the `generateEnvironmentSprites` function. Here's an example:

```javascript
import { generateEnvironmentSprites } from 'spriteai';

const description = 'a fantasy forest';
const options = {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  theme: 'fantasy',
  save: true
};

generateEnvironmentSprites(description, options)
  .then(result => {
    console.log('Environment sprites generated:', result.tileset);
  })
  .catch(error => {
    console.error('Error generating environment sprites:', error);
  });
```

### Generating Item Sprites

To generate item collections, you can use the `generateItemSprites` function. Here's an example:

```javascript
import { generateItemSprites } from 'spriteai';

const description = 'medieval weapons';
const options = {
  itemCount: 8,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  itemType: 'weapon',
  background: 'transparent',
  save: true
};

generateItemSprites(description, options)
  .then(result => {
    console.log('Item sprites generated:', result.itemSheet);
  })
  .catch(error => {
    console.error('Error generating item sprites:', error);
  });
```

## Next Steps

To truly master SpriteAI, we recommend:

1. Exploring the full API documentation
2. Experimenting with complex sprite animations
3. Applying different transformations to your sprites
4. Joining our community forums for tips and inspiration
5. Trying out the new environment and item sprite generation features
6. Exploring the available animation states and sprite styles

For in-depth information and advanced usage scenarios, please refer to our extensive API documentation.

Thank you for choosing SpriteAI. We're excited to see the amazing sprites you'll create with our package!
