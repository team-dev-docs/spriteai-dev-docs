# Getting Started with SpriteAI

Welcome to SpriteAI! This guide will help you get started with using SpriteAI to generate character spritesheets, environment sprites, and item sprites for your game development projects.

## Installation

To begin using SpriteAI, you'll need to install it in your project directory. First, make sure you have Node.js installed, then run the following command:

```bash
npm install spriteai
```

start using its features in your project. Here's a quick example demonstrating how to generate a character spritesheet:

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

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
    console.log('Metadata:', result.metadata);
  })
  .catch(error => {
    console.error('Error generating spritesheet:', error);
  });
```

## Key Features

SpriteAI offers several powerful features to enhance your sprite creation:

1. **Character Spritesheet Generation**: Create animated character spritesheets with customizable states and frames.

2. **Environment Sprite Generation**: Generate tilesets for game environments.

3. **Item Sprite Generation**: Create sprites for game items and equipment.

4. **Background Removal**: Remove specific background colors from images.

## Generating a Character Spritesheet

To generate a character spritesheet, use the `generateCharacterSpritesheet` function:

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

const description = 'a brave knight';
const options = {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  direction: 'right',
  save: true
};

generateCharacterSpritesheet(description, options)
  .then(result => {
    console.log('Spritesheet URL:', result.spritesheet);
    console.log('Metadata:', result.metadata);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

## Generating Environment Sprites

To create environment sprites, use the `generateEnvironmentSprites` function:

```javascript
import { generateEnvironmentSprites } from 'spriteai';

const description = 'forest';
const options = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  theme: 'fantasy'
};

generateEnvironmentSprites(description, options)
  .then(result => {
    console.log('Tileset URL:', result.tileset);
    console.log('Metadata:', result.metadata);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

## Generating Item Sprites

To generate item sprites, use the `generateItemSprites` function:

```javascript
import { generateItemSprites } from 'spriteai';

const description = 'medieval weapons';
const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  itemType: 'equipment',
  background: 'transparent'
};

generateItemSprites(description, options)
  .then(result => {
    console.log('Item sheet URL:', result.itemSheet);
    console.log('Metadata:', result.metadata);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

## Removing Background Color

To remove a specific background color from an image, use the `removeBackgroundColor` function:

```javascript
import { removeBackgroundColor } from 'spriteai';

const inputPath = 'path/to/input/image.png';
const outputPath = 'path/to/output/image.png';
const targetColor = '#FFFFFF'; // Color to remove
const colorThreshold = 10; // Threshold for color matching

removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)
  .then(() => {
    console.log('Background color removed successfully.');
  })
  .catch(error => {
    console.error('Error removing background color:', error);
  });
```

## Advanced Usage

SpriteAI provides additional functions to enhance your sprite generation:

* `fetchAvailableAnimationStates()`: Retrieve a list of available animation states.

* `fetchAvailableSpriteStyles()`: Get a list of available sprite styles.

For more detailed information on these functions and advanced usage scenarios, please refer to our API documentation.

## Next Steps

To make the most of SpriteAI, we recommend:

1. Experimenting with different descriptions and options to generate diverse sprites.

2. Combining generated sprites to create complete game assets.

3. Exploring the API documentation for advanced features and customization options.

4. Joining our community forums for tips, inspiration, and support.

Thank you for choosing SpriteAI. We're excited to see the amazing game assets you'll create with our package!
