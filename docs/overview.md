# Overview of SpriteAI

SpriteAI is a powerful tool designed for generating character spritesheets and manipulating images using the OpenAI API and various image processing libraries. This overview will introduce you to the main features and capabilities of SpriteAI.

## Key Features

1. **Character Spritesheet Generation**: Create pixel-art character animations with customizable states and frames.
2. **Environment Sprite Generation**: Generate tilesets for game environments with various themes and styles.
3. **Item Sprite Generation**: Create collections of item sprites for game inventories or pickups.
4. **Background Color Removal**: Remove specific background colors from images to create transparent backgrounds.
5. **Multiple Art Styles**: Support for various art styles including pixel-art, vector, 3D, hand-drawn, and anime.
6. **Customizable Output**: Control the size, style, and other parameters of generated sprites.
7. **OpenAI Integration**: Seamless integration with OpenAI's DALL-E for image generation.

## Core Functions

### 1. Generate Character Spritesheet

The `generateCharacterSpritesheet` function allows you to create character spritesheets with multiple animation states.

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

### 2. Generate Environment Sprites

The `generateEnvironmentSprites` function creates tilesets for game environments.

```javascript
import { generateEnvironmentSprites } from './index.js';

const description = 'forest';
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

### 3. Generate Item Sprites

The `generateItemSprites` function creates collections of item sprites for games.

```javascript
import { generateItemSprites } from './index.js';

const description = 'medieval weapons';
const options = {
  itemCount: 8,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  itemType: 'equipment',
  background: 'transparent'
};

generateItemSprites(description, options)
  .then(result => {
    console.log('Item sprites generated:', result.itemSheet);
  })
  .catch(error => {
    console.error('Error generating item sprites:', error);
  });
```

### 4. Remove Background Color

The `removeBackgroundColor` function allows you to remove specific background colors from images.

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

## Additional Utility Functions

- `fetchAvailableAnimationStates()`: Retrieves a list of available animation states.
- `fetchAvailableSpriteStyles()`: Retrieves a list of available sprite styles.

## Getting Started

To start using SpriteAI in your project, please refer to the [Getting Started](getting-started.md) guide for installation instructions and basic usage examples.

## Conclusion

SpriteAI offers a comprehensive set of tools for game developers and digital artists to create and manipulate sprites efficiently. By leveraging the power of AI and image processing, SpriteAI streamlines the sprite creation process, allowing you to focus on bringing your creative visions to life.