# SpriteAI Overview

## Introduction

SpriteAI is a powerful tool designed to generate and manipulate game assets using AI-powered image generation and processing techniques. It provides a suite of functions for creating character spritesheets, environment sprites, item sprites, and animated emojis, making it an invaluable resource for game developers and digital artists.

## Key Features

- Generate character spritesheets with customizable animation states
- Create environment sprites for game world building
- Produce item sprites for game inventories and pickups
- Generate animated emojis for enhanced user interfaces
- Support for various art styles, including pixel art and isometric views

## Main Functions

### generateCharacterSpritesheet

This function creates a character spritesheet based on a given description and set of options. It supports multiple animation states and customizable frame counts.

```javascript
const result = await generateCharacterSpritesheet(description, options);
```

### generateEnvironmentSprites

Use this function to create a tileset of environment elements for your game world.

```javascript
const result = await generateEnvironmentSprites(description, options);
```

### generateItemSprites

This function generates a collection of item sprites suitable for game inventories or pickup icons.

```javascript
const result = await generateItemSprites(description, options);
```

### generateAnimatedEmoji

Create 4-frame animated emojis with this function, perfect for adding dynamic elements to your game's UI.

```javascript
const result = await generateAnimatedEmoji(description, options);
```

## Additional Utilities

- `removeBackgroundColor`: A utility function to remove specific background colors from images, creating transparent backgrounds.
- `fetchAvailableAnimationStates`: Retrieves a list of available animation states for character sprites.
- `fetchAvailableSpriteStyles`: Provides a list of available sprite styles that can be used in asset generation.

## Getting Started

To use SpriteAI, you'll need to have the necessary dependencies installed and set up your environment with the required API credentials. Refer to the installation guide in the project's README for detailed setup instructions.

## Usage Example

Here's a basic example of how to generate a character spritesheet:

```javascript
import { generateCharacterSpritesheet } from './spriteAI';

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

## Conclusion

SpriteAI offers a comprehensive set of tools for game asset generation, leveraging the power of AI to streamline the creation process. Whether you're working on a pixel art game, an isometric adventure, or just need some animated emojis, SpriteAI has you covered. Explore the individual function documentation for more detailed information on each feature.