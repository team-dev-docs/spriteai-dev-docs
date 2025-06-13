# SpriteAI Overview

SpriteAI is a powerful tool for generating and manipulating game sprites and pixel art using AI-powered image generation and processing techniques. This document provides an overview of SpriteAI's features and capabilities.

## Key Features

1. Character Spritesheet Generation
2. Environment Sprite Creation
3. Item Sprite Generation
4. Background Color Removal
5. Support for Various Art Styles and Output Sizes

## Character Spritesheet Generation

SpriteAI can generate character spritesheets based on textual descriptions and animation states. This feature is particularly useful for game developers and digital artists looking to quickly create animated character assets.

### Usage Example

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
    console.log('Error generating spritesheet:', error);
  });
```

## Environment Sprite Creation

SpriteAI can generate environment sprites and tilesets, allowing for quick creation of game backgrounds and level elements.

### Usage Example

```javascript
import { generateEnvironmentSprites } from './index.js';

const description = 'forest';
const options = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy',
  save: true
};

generateEnvironmentSprites(description, options)
  .then(result => {
    console.log('Environment tileset generated:', result.tileset);
  })
  .catch(error => {
    console.log('Error generating environment sprites:', error);
  });
```

## Item Sprite Generation

SpriteAI can create item sprites for game inventories, pickups, and other in-game objects.

### Usage Example

```javascript
import { generateItemSprites } from './index.js';

const description = 'magical potions';
const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment',
  save: true
};

generateItemSprites(description, options)
  .then(result => {
    console.log('Item sprites generated:', result.itemSheet);
  })
  .catch(error => {
    console.log('Error generating item sprites:', error);
  });
```

## Background Color Removal

SpriteAI includes functionality to remove specific background colors from images, useful for creating transparent sprites.

### Usage Example

```javascript
import { removeBackgroundColor } from './index.js';

const inputPath = 'path/to/image.png';
const outputPath = 'path/to/output.png';
const targetColor = '#FFFFFF';
const colorThreshold = 10;

removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)
  .then(() => {
    console.log('Background color removed successfully.');
  })
  .catch(error => {
    console.log('Error removing background color:', error);
  });
```

## Additional Features

- Support for various art styles including pixel-art, vector, 3D, hand-drawn, and anime.
- Customizable output sizes to fit different project requirements.
- Option to save generated assets directly to the file system.
- Metadata generation for easy integration with game engines and asset management systems.

## Getting Started

To get started with SpriteAI, install the package via npm:

```bash
npm install spriteai
```

Then, import the desired functions in your JavaScript code and start generating sprites!

For more detailed information on each function and its options, please refer to the individual function documentation pages.

## Conclusion

SpriteAI offers a comprehensive suite of tools for game developers and digital artists to quickly generate and manipulate sprite assets. By leveraging AI-powered image generation, SpriteAI streamlines the asset creation process, allowing creators to focus on game design and development.