# Getting Started with SpriteAI

Welcome to SpriteAI! This guide will walk you through the process of integrating the SpriteAI npm package into your projects.

## Installation

To begin using SpriteAI, you'll need to install it in your project directory. Clone the repository and install the necessary dependencies:

```bash
git clone 
cd spriteAI
npm install
```

## Basic Usage

Once SpriteAI is installed, you can start leveraging its powerful features in your project. Here's a quick example demonstrating the main functionalities:

```javascript
import { generateCharacterSpritesheet, removeBackgroundColor } from './index.js';

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

1. **Character Spritesheet Generation**: Utilize `generateCharacterSpritesheet(description, options)` to create pixel-art character animations with customizable states and frames.
2. **Environment Sprite Generation**: Use `generateEnvironmentSprites(description, options)` to create tilesets for game environments.
3. **Item Sprite Generation**: Generate game item sprites with `generateItemSprites(description, options)`.
4. **Background Color Removal**: Easily remove background colors from images using `removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)`.
5. **Fetch Available Animation States**: Get a list of available animation states with `fetchAvailableAnimationStates()`.
6. **Fetch Available Sprite Styles**: Retrieve available sprite styles using `fetchAvailableSpriteStyles()`.

## Advanced Techniques

SpriteAI is capable of much more than basic sprite operations. You can create intricate sprite animations, apply various transformations, and unlock a world of creative possibilities:

1. **Customizing Animation States**: Experiment with different combinations of animation states for your character spritesheets.
2. **Adjusting Sprite Styles**: Try different sprite styles like 'pixel-art', 'vector', '3d', 'hand-drawn', or 'anime' to suit your game's aesthetic.
3. **Environment Theming**: When generating environment sprites, explore various themes to create diverse game worlds.
4. **Item Type Customization**: For item sprites, experiment with different item types and backgrounds to create unique game assets.

## Next Steps

To truly master SpriteAI, we recommend:

1. Exploring the full API in the `index.js` file
2. Experimenting with different options for each sprite generation function
3. Combining generated assets to create complete game visual sets
4. Joining our community forums for tips and inspiration

For in-depth information and advanced usage scenarios, please refer to our extensive API documentation.

Thank you for choosing SpriteAI. We're excited to see the amazing sprites you'll create with our package!
