# SpriteAI Overview

SpriteAI is a powerful tool designed to generate and manipulate game assets using AI-powered image generation and processing techniques. This documentation provides an overview of SpriteAI's features and capabilities.

## Features

SpriteAI offers several key features for game developers and digital artists:

1. Character Spritesheet Generation
2. Environment Sprite Generation
3. Item Sprite Generation
4. Background Removal
5. Support for Various Art Styles

## Character Spritesheet Generation

The `generateCharacterSpritesheet` function allows you to create detailed character spritesheets based on text descriptions. It supports multiple animation states and customizable options.

### Usage Example

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

## Environment Sprite Generation

The `generateEnvironmentSprites` function creates tileset images for game environments based on your description and specified theme.

## Item Sprite Generation

Use the `generateItemSprites` function to create collections of item sprites for your game, perfect for inventory systems or pickups.

## Background Removal

SpriteAI includes a `removeBackgroundColor` function to easily remove specific background colors from your sprites, creating transparent backgrounds.

## Art Styles and Customization

SpriteAI supports various art styles, including pixel-art, vector, 3D, hand-drawn, and anime. You can customize the output size, number of frames, and other parameters to suit your game's needs.

## Getting Started

To get started with SpriteAI, install the package and its dependencies:

```bash
npm install spriteAI
```

Then, import the desired functions in your JavaScript code and start generating game assets!

For more detailed information on each function and its options, please refer to the specific documentation pages for each feature.

## License

SpriteAI is licensed under the MIT License. See the LICENSE file in the project repository for more details.