# Getting Started with SpriteAI

SpriteAI is a powerful tool for generating game assets using AI-powered image generation. This guide will help you get started with using SpriteAI in your projects.

## Installation

To get started with SpriteAI, follow these steps:

1. Clone the SpriteAI repository:
   ```bash
   git clone 
   cd spriteAI
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Basic Usage

SpriteAI provides several functions for generating different types of game assets. Here are the main functions you can use:

### Generating Character Spritesheets

To generate a character spritesheet, use the `generateCharacterSpritesheet` function:

```javascript
import { generateCharacterSpritesheet } from './spriteAI';

const description = 'a cute dragon';
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
    console.log('Spritesheet generated:', result.spritesheet);
    console.log('Metadata:', result.metadata);
  })
  .catch(error => {
    console.error('Error generating spritesheet:', error);
  });
```

### Generating Environment Sprites

To generate environment sprites, use the `generateEnvironmentSprites` function:

```javascript
import { generateEnvironmentSprites } from './spriteAI';

const description = 'forest';
const options = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  theme: 'fantasy',
  save: true
};

generateEnvironmentSprites(description, options)
  .then(result => {
    console.log('Environment tileset generated:', result.tileset);
    console.log('Metadata:', result.metadata);
  })
  .catch(error => {
    console.error('Error generating environment sprites:', error);
  });
```

### Generating Item Sprites

To generate item sprites, use the `generateItemSprites` function:

```javascript
import { generateItemSprites } from './spriteAI';

const description = 'magical artifacts';
const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  itemType: 'equipment',
  background: 'white',
  save: true
};

generateItemSprites(description, options)
  .then(result => {
    console.log('Item spritesheet generated:', result.itemSheet);
    console.log('Metadata:', result.metadata);
  })
  .catch(error => {
    console.error('Error generating item sprites:', error);
  });
```

## Additional Features

### Fetching Available Animation States

You can fetch the available animation states using the `fetchAvailableAnimationStates` function:

```javascript
import { fetchAvailableAnimationStates } from './spriteAI';

fetchAvailableAnimationStates()
  .then(states => {
    console.log('Available animation states:', states);
  })
  .catch(error => {
    console.error('Error fetching animation states:', error);
  });
```

### Fetching Available Sprite Styles

To get the list of available sprite styles, use the `fetchAvailableSpriteStyles` function:

```javascript
import { fetchAvailableSpriteStyles } from './spriteAI';

fetchAvailableSpriteStyles()
  .then(styles => {
    console.log('Available sprite styles:', styles);
  })
  .catch(error => {
    console.error('Error fetching sprite styles:', error);
  });
```

## Notes and Considerations

- SpriteAI uses the OpenAI API (specifically DALL-E 3) for image generation, so make sure you have the necessary API credentials set up.
- Generated images are returned as base64-encoded data URLs and can optionally be saved to disk.
- The quality and style of generated sprites may vary due to the nature of AI-based image generation.
- Processing time may vary depending on the complexity of the request and the current load on the OpenAI API.

By following this guide, you should be able to start using SpriteAI to generate various game assets for your projects. Experiment with different descriptions and options to create unique and exciting sprites for your games!