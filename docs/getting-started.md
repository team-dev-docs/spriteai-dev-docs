# Getting Started with spriteAI

Welcome to spriteAI! This guide will help you get started with using the spriteAI npm package in your projects.

## Installation

To install spriteAI, run the following command in your project directory:

```bash
npm install spriteai
```

## Basic Usage

Once you've installed spriteAI, you can start using it in your project. Here's a quick example of how to use the main features:

```javascript
const spriteAI = require('spriteai');

// Create a new SpriteAI instance
const ai = new spriteAI.SpriteAI();

// Generate a sprite
ai.generateSprite('player', 32, 32)
  .then(sprite => {
    console.log('Sprite generated:', sprite);
  })
  .catch(error => {
    console.error('Error generating sprite:', error);
  });

// Load a sprite
ai.loadSprite('path/to/sprite.png')
  .then(sprite => {
    console.log('Sprite loaded:', sprite);
  })
  .catch(error => {
    console.error('Error loading sprite:', error);
  });

// Save a sprite
ai.saveSprite(sprite, 'path/to/save/sprite.png')
  .then(() => {
    console.log('Sprite saved successfully');
  })
  .catch(error => {
    console.error('Error saving sprite:', error);
  });
```

## Key Features

1. **Sprite Generation**: Use `generateSprite(name, width, height)` to create new sprites programmatically.
2. **Sprite Loading**: Load existing sprites with `loadSprite(path)`.
3. **Sprite Saving**: Save sprites to files using `saveSprite(sprite, path)`.

## Next Steps

Explore the full API documentation to learn about all the features spriteAI offers. You can create complex sprite animations, apply transformations, and much more!

For more detailed information and advanced usage, please refer to our comprehensive API documentation.

Thank you for choosing spriteAI, and we hope you enjoy creating sprites with our package!
