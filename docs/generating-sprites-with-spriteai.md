# Generating Sprites with SpriteAI

SpriteAI is a powerful tool designed to streamline the process of creating character spritesheets and manipulating images for game development. This document will guide you through the process of generating sprites using SpriteAI, showcasing its features and providing practical examples.

## Introduction to SpriteAI

SpriteAI leverages the OpenAI API and various image processing libraries to generate pixel-art character animations with customizable states and frames. It's an ideal solution for game developers, artists, and hobbyists looking to create high-quality sprite assets efficiently.

## Key Features

- Generate character spritesheets based on textual descriptions
- Create animations with multiple states (e.g., idle, walk, run)
- Support for various art styles and output sizes
- Background color removal for transparent sprites
- Easy integration with OpenAI's DALL-E for image generation

## Getting Started

Before diving into sprite generation, ensure you have SpriteAI installed in your project:

```bash
git clone 
cd spriteAI
npm install
```

## Generating a Character Spritesheet

The main function for generating a character spritesheet is `generateCharacterSpritesheet`. Here's how to use it:

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

### Parameters Explained

- `description`: A string describing the character you want to generate.
- `options`: An object containing various customization options:
  - `states`: An array of animation states (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState`: Number of frames for each animation state (default: 6)
  - `size`: Output image size (default: '1024x1024')
  - `style`: Art style of the sprite (default: 'pixel-art')
  - `padding`: Padding between frames (default: 1)
  - `direction`: Direction the character faces (default: 'right')
  - `save`: Whether to save the generated spritesheet to disk (default: false)

### Output

The function returns a promise that resolves to an object containing:

- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded data URL of the processed spritesheet
- `metadata`: Object containing information about the generated spritesheet

## Advanced Features

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

### Generating Environment Sprites

In addition to character sprites, SpriteAI can generate environment sprites:

```javascript
import { generateEnvironmentSprites } from './index.js';

const description = 'forest tileset';
const options = {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  theme: 'fantasy'
};

generateEnvironmentSprites(description, options)
  .then(result => {
    console.log('Environment tileset generated:', result.tileset);
  })
  .catch(error => {
    console.error('Error generating environment sprites:', error);
  });
```

### Generating Item Sprites

SpriteAI also supports the generation of item sprites for game inventories:

```javascript
import { generateItemSprites } from './index.js';

const description = 'medieval weapons';
const options = {
  itemCount: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  itemType: 'equipment',
  background: 'transparent'
};

generateItemSprites(description, options)
  .then(result => {
    console.log('Item spritesheet generated:', result.itemSheet);
  })
  .catch(error => {
    console.error('Error generating item sprites:', error);
  });
```

## Conclusion

SpriteAI offers a comprehensive solution for generating various types of sprites for game development. By leveraging AI-powered image generation and processing techniques, it simplifies the creation of character animations, environment tilesets, and item sprites. Experiment with different descriptions and options to create unique and visually appealing assets for your games.

Remember to refer to the SpriteAI documentation for more detailed information on available functions and their parameters. Happy sprite generating!