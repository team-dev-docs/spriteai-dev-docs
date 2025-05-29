# SpriteAI Overview

SpriteAI is a powerful tool designed to generate and manipulate character spritesheets, pixel art, and other game-related graphics using AI-powered image generation and processing techniques. This overview will introduce you to the main features and functionalities of SpriteAI.

## Features

SpriteAI offers several key features for game developers and digital artists:

1. Character Spritesheet Generation
2. Environment Sprite Generation
3. Item Sprite Generation
4. Pixel Art Creation
5. Isometric Sprite Generation
6. Animated Emoji Creation

## Character Spritesheet Generation

The `generateCharacterSpritesheet` function is the core feature of SpriteAI. It allows you to create complete character spritesheets based on text descriptions.

```javascript
import { generateCharacterSpritesheet } from './index.js';

const description = 'a cute dragon';
const options = {
  states: ['idle', 'walk', 'run'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art',
  padding: 2,
  direction: 'left',
  save: true
};

generateCharacterSpritesheet(description, options)
  .then(result => {
    console.log('Spritesheet generated:', result.spritesheet);
  })
  .catch(error => {
    console.error('Error generating spritesheet:', error);
  });
```

This function generates a spritesheet with multiple animation states and frames for each state, providing a complete set of character animations for your game.

## Environment and Item Sprite Generation

SpriteAI also offers functions to generate environment tiles and item sprites:

- `generateEnvironmentSprites`: Creates a tileset of environment elements.
- `generateItemSprites`: Produces a collection of item sprites for game inventories or pickups.

These functions follow a similar pattern to the character spritesheet generation, allowing you to specify the number of elements, style, and other options.

## Specialized Sprite Generation

SpriteAI includes specialized functions for different types of sprites:

- `generatePixelArt`: Creates individual pixel art sprites.
- `generateIsometric`: Generates isometric-style sprites for 3D-like 2D games.
- `generateAnimatedEmoji`: Produces 4-frame animated emojis.

Each of these functions is tailored to create specific types of game assets, giving you a wide range of options for your game development needs.

## Utility Functions

SpriteAI also provides utility functions to enhance your workflow:

- `removeBackgroundColor`: Removes a specific background color from an image, useful for creating transparent sprites.
- `fetchAvailableAnimationStates`: Retrieves a list of available animation states for character sprites.
- `fetchAvailableSpriteStyles`: Provides a list of available sprite styles that can be used in generation.

## Getting Started

To get started with SpriteAI, clone the repository and install the necessary dependencies:

```bash
git clone 
cd spriteAI
npm install
```

Make sure you have the required API keys and permissions set up for the OpenAI services used by SpriteAI.

## Conclusion

SpriteAI offers a comprehensive suite of tools for generating game-ready graphics using AI. Whether you're creating character animations, environment tiles, or individual sprites, SpriteAI provides the functionality to streamline your asset creation process. Explore the specific documentation for each function to learn more about their capabilities and how to integrate them into your game development workflow.