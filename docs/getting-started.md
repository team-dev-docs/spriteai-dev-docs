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
4. **Character Spritesheet Generation**: Create detailed character spritesheets with `generateCharacterSpritesheet(description, options)`.
5. **Environment Sprite Generation**: Generate environment sprites with `generateEnvironmentSprites(description, options)`.
6. **Item Sprite Generation**: Create item sprites for your game with `generateItemSprites(description, options)`.

## New Convenience Functions

SpriteAI now includes convenient functions for generating specific character types:

```javascript
// Generate a ninja character
spriteAI.generateNinja(options)
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Generate a spaceman character
spriteAI.generateSpaceman(options)
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Generate a robot character
spriteAI.generateRobot(options)
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

These functions come with preset options tailored for each character type, but you can customize them as needed. Here's a brief overview of each function:

### generateNinja(options)

Generates a ninja character sprite with default states including idle, walk, run, attack, and sneak.

### generateSpaceman(options)

Creates a spaceman (astronaut) character sprite with default states including idle, walk, run, and float.

### generateRobot(options)

Produces a robot character sprite with default states including idle, walk, run, attack, and power-up.

Each of these functions uses the `generateCharacterSpritesheet` method internally with pre-configured options suitable for the specific character type. You can override these options by passing your own configuration object.

## Advanced Techniques

SpriteAI is capable of much more than basic sprite operations. You can create intricate sprite animations, apply various transformations, and unlock a world of creative possibilities. Dive into our comprehensive API documentation to explore the full potential of SpriteAI.

## Next Steps

To truly master SpriteAI, we recommend:

1. Exploring the full API documentation
2. Experimenting with complex sprite animations
3. Applying different transformations to your sprites
4. Joining our community forums for tips and inspiration

For in-depth information and advanced usage scenarios, please refer to our extensive API documentation.

Thank you for choosing SpriteAI. We're excited to see the amazing sprites you'll create with our package!
