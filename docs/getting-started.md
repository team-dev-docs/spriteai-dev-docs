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
import { generateCharacterSpritesheet, removeBackgroundColor, generateEnvironmentSprites, generateItemSprites } from 'spriteai';

// Generate a character spritesheet
const characterDescription = 'a cute dragon';
const characterOptions = {
  states: ['idle', 'walk', 'run'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art',
  padding: 2,
  direction: 'left',
  save: true
};

generateCharacterSpritesheet(characterDescription, characterOptions)
  .then(result => {
    console.log('Character spritesheet generated:', result.spritesheet);
  })
  .catch(error => {
    console.error('Character spritesheet generation encountered an error:', error);
  });

// Remove background color from an image
const inputPath = 'path/to/image.png';
const outputPath = 'path/to/output.png';
const targetColor = '#FFFFFF';
const colorThreshold = 10;

removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)
  .then(() => {
    console.log('Background color removed successfully');
  })
  .catch(error => {
    console.error('Background color removal encountered an error:', error);
  });

// Generate environment sprites
const environmentDescription = 'forest';
const environmentOptions = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  theme: 'fantasy'
};

generateEnvironmentSprites(environmentDescription, environmentOptions)
  .then(result => {
    console.log('Environment sprites generated:', result.tileset);
  })
  .catch(error => {
    console.error('Environment sprite generation encountered an error:', error);
  });

// Generate item sprites
const itemDescription = 'magic potions';
const itemOptions = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  itemType: 'equipment',
  background: 'white'
};

generateItemSprites(itemDescription, itemOptions)
  .then(result => {
    console.log('Item sprites generated:', result.itemSheet);
  })
  .catch(error => {
    console.error('Item sprite generation encountered an error:', error);
  });
```

## Key Features

SpriteAI offers a range of powerful features to enhance your sprite creation and manipulation:

1. **Character Spritesheet Generation**: Utilize `generateCharacterSpritesheet(description, options)` to create animated character spritesheets.
2. **Background Color Removal**: Easily remove background colors from images with `removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)`.
3. **Environment Sprite Generation**: Create environment tilesets using `generateEnvironmentSprites(description, options)`.
4. **Item Sprite Generation**: Generate item sprites for game inventories with `generateItemSprites(description, options)`.
5. **Customizable Options**: Each generation function accepts various options to tailor the output to your needs.

## Advanced Techniques

SpriteAI is capable of much more than basic sprite operations. You can create intricate sprite animations, apply various styles, and unlock a world of creative possibilities. Here are some advanced techniques:

1. **Custom Animation States**: Experiment with different animation states when generating character spritesheets.
2. **Art Style Variations**: Try different art styles like 'pixel-art', 'vector', '3d', 'hand-drawn', or 'anime' for varied visual outputs.
3. **Environment Theming**: Create diverse game environments by adjusting the theme option in `generateEnvironmentSprites`.
4. **Item Type Customization**: Generate various types of game items by modifying the itemType option in `generateItemSprites`.

## Next Steps

To truly master SpriteAI, we recommend:

1. Exploring the full API documentation for detailed information on each function and its options.
2. Experimenting with different descriptions and options to see the range of sprites you can generate.
3. Combining generated sprites to create complete game asset sets.
4. Joining our community forums for tips, inspiration, and sharing your creations.

For in-depth information and advanced usage scenarios, please refer to our extensive API documentation.

Thank you for choosing SpriteAI. We're excited to see the amazing sprites and game assets you'll create with our package!
