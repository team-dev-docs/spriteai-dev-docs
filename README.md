# SpriteAI Documentation

## Introduction

SpriteAI is a powerful library for programmatically generating and manipulating sprites for game development. This documentation provides comprehensive information on how to utilize SpriteAI effectively in your projects.

## Getting Started

To begin using SpriteAI, follow these steps:

1. Install the SpriteAI library using npm:
   ```
   npm install spriteai
   ```

2. Import SpriteAI into your project:
   ```javascript
   import SpriteAI from 'spriteai';
   ```

3. Initialize SpriteAI with your configuration:
   ```javascript
   const spriteAI = new SpriteAI({
     // Configuration options
   });
   ```

## Core Features

SpriteAI offers a range of powerful features to enhance your sprite creation and manipulation workflows:

1. **Sprite Generation**: Utilize `generateSprite(name, width, height)` to programmatically create new sprites.
2. **Sprite Loading**: Easily load existing sprites with `loadSprite(path)`.
3. **Sprite Saving**: Preserve your sprites using `saveSprite(sprite, path)`.
4. **Character Spritesheet Generation**: Create detailed character spritesheets with `generateCharacterSpritesheet(description, options)`.
5. **Environment Sprite Generation**: Generate environment sprites with `generateEnvironmentSprites(description, options)`.
6. **Item Sprite Generation**: Create item sprites for your game with `generateItemSprites(description, options)`.

## Convenience Functions

SpriteAI includes convenient functions for generating specific character types:

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

These functions come with preset options tailored for each character type, but you can customize them as needed.

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

For more complex sprite manipulation and generation techniques, refer to our Advanced Techniques guide.

## API Reference

For a complete list of SpriteAI's methods and their parameters, consult our API Reference documentation.

## Contributing

We welcome contributions to SpriteAI. Please read our Contributing Guidelines for more information on how to get involved.

## Support

If you encounter any issues or have questions about SpriteAI, please file an issue on our GitHub repository or contact our support team.

## License

SpriteAI is released under the MIT License. See the LICENSE file for more details.
