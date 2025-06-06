# Getting Started with SpriteAI

## Installation

To integrate SpriteAI into your project, execute the following command in your project directory:

```bash
npm install spriteai
```

## Basic Usage

After installation, you can leverage SpriteAI's capabilities in your project. Here's an example demonstrating the core functionalities:

```javascript
const spriteAI = require('spriteai');

// Initialize a new SpriteAI instance
const ai = new spriteAI.SpriteAI();

// Generate a sprite
ai.generateSprite('player', 32, 32)
  .then(sprite => {
    console.log('Sprite generated successfully:', sprite);
  })
  .catch(error => {
    console.error('Error encountered during sprite generation:', error);
  });

// Load an existing sprite
ai.loadSprite('path/to/sprite.png')
  .then(sprite => {
    console.log('Sprite loaded successfully:', sprite);
  })
  .catch(error => {
    console.error('Error encountered during sprite loading:', error);
  });

// Save a sprite
ai.saveSprite(sprite, 'path/to/save/sprite.png')
  .then(() => {
    console.log('Sprite saved successfully');
  })
  .catch(error => {
    console.error('Error encountered during sprite saving:', error);
  });
```

## Key Features

SpriteAI offers a comprehensive set of features for sprite creation and manipulation:

1. **Sprite Generation**: Utilize `generateSprite(name, width, height)` to programmatically create new sprites.
2. **Sprite Loading**: Efficiently load existing sprites with `loadSprite(path)`.
3. **Sprite Saving**: Preserve your sprites using `saveSprite(sprite, path)`.
4. **Character Spritesheet Generation**: Create detailed character spritesheets with `generateCharacterSpritesheet(description, options)`.
5. **Environment Sprite Generation**: Generate environment sprites with `generateEnvironmentSprites(description, options)`.
6. **Item Sprite Generation**: Create item sprites for your game with `generateItemSprites(description, options)`.

## Convenience Functions

SpriteAI provides convenient functions for generating specific character types:

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

These functions come with preset options tailored for each character type, while allowing for customization through the `options` parameter.

### Detailed Usage of Convenience Functions

#### generateNinja(options)

Generates a ninja character spritesheet with default states: idle, walk, run, attack, and sneak.

```javascript
const options = {
  style: 'pixel-art',
  framesPerState: 6
  // Additional custom options can be specified here
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
  // Additional custom options can be specified here
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
  // Additional custom options can be specified here
};

spriteAI.generateRobot(options)
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

Each of these functions utilizes the `generateCharacterSpritesheet` method internally with predefined descriptions and states, while allowing for customization through the options parameter.

## Advanced Techniques

SpriteAI's capabilities extend beyond basic sprite operations. You can create intricate sprite animations, apply various transformations, and explore a multitude of creative possibilities. For in-depth information and advanced usage scenarios, please refer to our comprehensive API documentation.

## Next Steps

To maximize your proficiency with SpriteAI, we recommend:

1. Exploring the full API documentation
2. Experimenting with complex sprite animations
3. Applying different transformations to your sprites
4. Joining our community forums for tips and inspiration

For detailed information and advanced usage scenarios, please consult our extensive API documentation.

We appreciate your choice of SpriteAI and look forward to the innovative sprites you'll create with our package.
