# SpriteAI Quickstart Guide

SpriteAI is a powerful tool for generating character spritesheets, environment sprites, and item sprites using AI-powered image generation. This quickstart guide will help you get up and running with SpriteAI quickly.

## Installation

1. Clone the SpriteAI repository:
   ```bash
   git clone 
   cd spriteAI
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Ensure you have set up your OpenAI API credentials properly.

## Basic Usage

### Generating a Character Spritesheet

To generate a character spritesheet, use the `generateCharacterSpritesheet` function:

```javascript
import { generateCharacterSpritesheet } from './index.js';

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
import { generateEnvironmentSprites } from './index.js';

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
import { generateItemSprites } from './index.js';

const description = 'magic potions';
const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  itemType: 'equipment',
  background: 'transparent',
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

You can fetch the available animation states using:

```javascript
import { fetchAvailableAnimationStates } from './index.js';

fetchAvailableAnimationStates()
  .then(states => {
    console.log('Available animation states:', states);
  })
  .catch(error => {
    console.error('Error fetching animation states:', error);
  });
```

### Fetching Available Sprite Styles

To get the list of available sprite styles:

```javascript
import { fetchAvailableSpriteStyles } from './index.js';

fetchAvailableSpriteStyles()
  .then(styles => {
    console.log('Available sprite styles:', styles);
  })
  .catch(error => {
    console.error('Error fetching sprite styles:', error);
  });
```

## Tips for Best Results

1. Be specific in your descriptions for more accurate results.
2. Experiment with different styles and sizes to find what works best for your project.
3. Use the `save` option to automatically save generated sprites to the `assets` folder.
4. Check the returned metadata for information about the generated sprites, including frame data and dimensions.

## Next Steps

- Explore the full API documentation for more advanced usage and options.
- Integrate the generated sprites into your game or application.
- Experiment with different descriptions and options to create unique assets for your projects.

Happy sprite generating with SpriteAI!