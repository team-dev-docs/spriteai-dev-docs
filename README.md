# SpriteAI Documentation

## Overview

SpriteAI is a powerful library for programmatically generating and manipulating sprite sheets for game development. This documentation provides comprehensive guidance on integrating and utilizing SpriteAI in your projects.

## Installation

To incorporate SpriteAI into your project, execute the following command in your terminal:

```bash
npm install spriteai
```

## Basic Usage

After installation, you can begin leveraging SpriteAI's capabilities in your project. Here's a concise example demonstrating core functionalities:

```javascript
const spriteAI = require('spriteai');

// Initialize a new SpriteAI instance
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

1. **Sprite Generation**: Utilize `generateSprite(name, width, height)` to programmatically create new sprites.
2. **Sprite Loading**: Easily load existing sprites with `loadSprite(path)`.
3. **Sprite Saving**: Preserve your sprites using `saveSprite(sprite, path)`.
4. **Character Spritesheet Generation**: Create detailed character spritesheets with `generateCharacterSpritesheet(description, options)`.
5. **Environment Sprite Generation**: Generate environment sprites with `generateEnvironmentSprites(description, options)`.
6. **Item Sprite Generation**: Create item sprites for your game with `generateItemSprites(description, options)`.

## Convenience Functions

SpriteAI includes efficient functions for generating specific character types:

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

These functions come with preset options tailored for each character type, but can be customized as needed.

### Detailed Usage of Convenience Functions

#### generateNinja(options)

Generates a ninja character spritesheet with default states: idle, walk, run, attack, and sneak.

```javascript
const options = {
  style: 'pixel-art',
  framesPerState: 6
  // Add any custom options here
};

spriteAI.generateNinja(options)
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

#### generateSpaceman(options)

Creates an astronaut character spritesheet with default states: idle, walk, run, and float.

```javascript
const options = {
  style: 'pixel-art',
  framesPerState: 6
  // Add any custom options here
};

spriteAI.generateSpaceman(options)
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

#### generateRobot(options)

Produces a robot character spritesheet with default states: idle, walk, run, attack, and power-up.

```javascript
const options = {
  style: 'pixel-art',
  framesPerState: 6
  // Add any custom options here
};

spriteAI.generateRobot(options)
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

Each of these functions uses the `generateCharacterSpritesheet` method internally with predefined descriptions and states, while allowing for customization through the options parameter.

## Advanced Techniques

SpriteAI is capable of much more than basic sprite operations. You can create intricate sprite animations, apply various transformations, and unlock a world of creative possibilities. Dive into our comprehensive API documentation to explore the full potential of SpriteAI.

## Next Steps

To truly master SpriteAI, we recommend:

1. Exploring the full API documentation
2. Experimenting with complex sprite animations
3. Applying different transformations to your sprites
4. Joining our community forums for tips and inspiration

For in-depth information and advanced usage scenarios, please refer to our extensive API documentation.

We appreciate your choice of SpriteAI and look forward to seeing the innovative sprites you'll create with our package.
