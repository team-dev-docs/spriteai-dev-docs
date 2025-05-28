# SpriteAI Overview

SpriteAI is a powerful tool designed to generate character spritesheets and manipulate images using the OpenAI API and image processing libraries. This overview will introduce you to the main features and usage of SpriteAI.

## Features

- Generate character spritesheets based on descriptions and animation states
- Remove background colors from images
- Support for various art styles and output sizes
- Easy integration with OpenAI's DALL-E for image generation
- Generate environment sprites and item sprites

## Installation

To get started with SpriteAI, clone the repository and install the necessary dependencies:

```bash
git clone 
cd spriteAI
npm install
```

## Main Functions

### generateCharacterSpritesheet

This function generates a character spritesheet based on a given description and options.

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

### removeBackgroundColor

This function removes a specific background color from an image.

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
    console.error('Error removing background color:', error);
  });
```

### generateEnvironmentSprites

This function generates environment sprites based on a given description and options.

```javascript
import { generateEnvironmentSprites } from './index.js';

const description = 'forest environment';
const options = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  theme: 'fantasy'
};

generateEnvironmentSprites(description, options)
  .then(result => {
    console.log('Environment sprites generated:', result.tileset);
  })
  .catch(error => {
    console.error('Error generating environment sprites:', error);
  });
```

### generateItemSprites

This function generates item sprites based on a given description and options.

```javascript
import { generateItemSprites } from './index.js';

const description = 'medieval weapons';
const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  itemType: 'equipment'
};

generateItemSprites(description, options)
  .then(result => {
    console.log('Item sprites generated:', result.itemSheet);
  })
  .catch(error => {
    console.error('Error generating item sprites:', error);
  });
```

## Additional Functions

- `fetchAvailableAnimationStates()`: Retrieves a list of available animation states.
- `fetchAvailableSpriteStyles()`: Retrieves a list of available sprite styles.

## Conclusion

SpriteAI provides a comprehensive set of tools for generating and manipulating game assets. By leveraging AI-powered image generation and processing techniques, it simplifies the creation of character spritesheets, environment tiles, and item sprites for game development.

For more detailed information on specific functions, please refer to the individual documentation pages for each feature.