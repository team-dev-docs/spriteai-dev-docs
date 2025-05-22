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
import { generateCharacterSpritesheet, removeBackgroundColor } from 'spriteai';

// Generate a character spritesheet
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

// Remove background color from an image
const inputPath = 'path/to/image.png';
const outputPath = 'path/to/output.png';
const targetColor = '#FFFFFF';
const colorThreshold = 10;

removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)
  .then(() => {
    console.log('Background color removed successfully.');
  })
  .catch(error => {
    console.error('Error removing background color:', error);
  });
```

## Key Features

SpriteAI offers a range of powerful features to enhance your sprite creation and manipulation:

1. **Character Spritesheet Generation**: Use `generateCharacterSpritesheet(description, options)` to create detailed character spritesheets with various animation states.
2. **Environment Sprite Generation**: Generate environment tiles using `generateEnvironmentSprites(description, options)`.
3. **Item Sprite Generation**: Create game item sprites with `generateItemSprites(description, options)`.
4. **Background Color Removal**: Easily remove background colors from images using `removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)`.
5. **Fetch Available Animation States**: Get a list of available animation states with `fetchAvailableAnimationStates()`.
6. **Fetch Available Sprite Styles**: Retrieve available sprite styles using `fetchAvailableSpriteStyles()`.

## Advanced Techniques

SpriteAI is capable of much more than basic sprite operations. You can create intricate sprite animations, apply various transformations, and unlock a world of creative possibilities:

1. **Customizing Spritesheets**: Adjust parameters like `states`, `framesPerState`, `size`, and `style` to create unique character spritesheets.
2. **Environment Design**: Use `generateEnvironmentSprites` to create themed tilesets for game environments.
3. **Item Creation**: Generate game items and equipment using `generateItemSprites` with customizable options.
4. **Image Processing**: Utilize `removeBackgroundColor` for advanced image manipulation and transparent backgrounds.

## Next Steps

To truly master SpriteAI, we recommend:

1. Exploring the full API documentation
2. Experimenting with different sprite types (characters, environments, items)
3. Trying out various art styles and sizes
4. Joining our community forums for tips and inspiration

For in-depth information and advanced usage scenarios, please refer to our extensive API documentation.

Thank you for choosing SpriteAI. We're excited to see the amazing sprites and game assets you'll create with our package!
