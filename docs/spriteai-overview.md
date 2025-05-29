# SpriteAI Overview

SpriteAI is a powerful tool designed to generate and manipulate character spritesheets and other game-related assets using AI-powered image generation and processing techniques. This overview will introduce you to the main features and capabilities of SpriteAI.

## Key Features

- Generate character spritesheets with customizable animation states
- Create environment sprites and tilesets
- Produce item sprites for game inventories
- Generate animated emojis
- Remove background colors from images

## Main Components

### Character Spritesheet Generation

The `generateCharacterSpritesheet` function is the core feature of SpriteAI. It allows you to create detailed character spritesheets based on text descriptions.

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

This function generates a spritesheet with multiple animation states, allowing for easy integration into game development workflows.

### Environment Sprite Generation

The `generateEnvironmentSprites` function creates tilesets for game environments:

```javascript
const environmentDescription = 'forest landscape';
const environmentOptions = {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy'
};

const environmentResult = await generateEnvironmentSprites(environmentDescription, environmentOptions);
```

### Item Sprite Generation

For creating game items and inventory icons, use the `generateItemSprites` function:

```javascript
const itemDescription = 'medieval weapons';
const itemOptions = {
  itemCount: 4,
  size: '512x512',
  style: 'pixel-art',
  itemType: 'equipment'
};

const itemResult = await generateItemSprites(itemDescription, itemOptions);
```

### Background Removal

SpriteAI also provides a utility function to remove background colors from images:

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

## Additional Features

- **Fetch Available Animation States**: Use `fetchAvailableAnimationStates()` to get a list of supported animation states.
- **Fetch Available Sprite Styles**: Use `fetchAvailableSpriteStyles()` to retrieve the list of available art styles for sprite generation.

## Getting Started

To begin using SpriteAI, install the necessary dependencies and import the required functions from the main module. Ensure you have the appropriate API keys and permissions set up for the AI image generation services.

For more detailed information on each function and its usage, please refer to the specific documentation pages for each feature.

## Conclusion

SpriteAI offers a comprehensive suite of tools for game developers and digital artists to quickly generate high-quality sprites and game assets. By leveraging AI-powered image generation, SpriteAI streamlines the asset creation process, allowing for rapid prototyping and development of game graphics.