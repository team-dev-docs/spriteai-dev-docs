# Generating Sprites with SpriteAI

SpriteAI is a powerful tool that allows you to generate character spritesheets and manipulate images using the OpenAI API and image processing libraries. This document will guide you through the process of generating sprites using SpriteAI.

## Introduction

SpriteAI simplifies the process of creating pixel-art character animations with customizable states and frames. It's particularly useful for game developers, digital artists, and anyone looking to create animated sprites programmatically.

## Key Features

- Generate character spritesheets based on descriptions and animation states
- Support for various art styles and output sizes
- Easy integration with OpenAI's DALL-E for image generation
- Background color removal for transparent sprites

## Generating a Character Spritesheet

To generate a character spritesheet, you can use the `generateCharacterSpritesheet` function. Here's an example of how to use it:

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
    console.error('Error generating spritesheet:', error);
  });
```

### Parameters

- `description`: A string describing the character you want to generate.
- `options`: An object containing various configuration options:
  - `states`: An array of animation states (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState`: Number of frames for each state (default: 6)
  - `size`: Output size of the spritesheet (default: '1024x1024')
  - `style`: Art style of the sprite (default: 'pixel-art')
  - `padding`: Padding between frames (default: 1)
  - `direction`: Direction the character faces (default: 'right')
  - `save`: Whether to save the spritesheet to disk (default: false)

### Return Value

The function returns a Promise that resolves to an object containing:

- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded image data of the processed spritesheet
- `metadata`: Object containing information about the spritesheet, including states, dimensions, and frame data

## Generating Environment Sprites

SpriteAI also allows you to generate environment sprites using the `generateEnvironmentSprites` function:

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
  })
  .catch(error => {
    console.error('Error generating environment sprites:', error);
  });
```

This function generates a tileset of environment elements based on the given description and options.

## Generating Item Sprites

For generating item sprites, you can use the `generateItemSprites` function:

```javascript
import { generateItemSprites } from './index.js';

const description = 'medieval weapons';
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
  })
  .catch(error => {
    console.error('Error generating item sprites:', error);
  });
```

This function creates a collection of item sprites arranged in a grid, suitable for game inventories or pickups.

## Additional Utilities

### Removing Background Color

SpriteAI provides a utility function to remove background colors from sprites:

```javascript
import { removeBackgroundColor } from './index.js';

const inputPath = 'path/to/image.png';
const outputPath = 'path/to/output.png';
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

This function is useful for creating sprites with transparent backgrounds.

## Conclusion

SpriteAI offers a comprehensive set of tools for generating and manipulating sprites programmatically. Whether you're creating character animations, environment tilesets, or item collections, SpriteAI can streamline your workflow and help you create high-quality pixel art assets for your projects.

Remember to refer to the API documentation for more detailed information on each function and its options. Happy sprite generating!