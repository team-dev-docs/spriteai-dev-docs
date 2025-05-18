# Generating Sprites with SpriteAI

SpriteAI is a powerful tool for creating game assets, particularly character spritesheets and environmental elements. This document will guide you through the process of generating various types of sprites using SpriteAI.

## Overview

SpriteAI leverages advanced AI models to generate high-quality sprite assets based on text descriptions. It offers several key functions for creating different types of game sprites:

1. Character Spritesheets
2. Environmental Sprites
3. Item Sprites

## Generating Character Spritesheets

The `generateCharacterSpritesheet` function is the core feature for creating animated character sprites.

### Usage

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

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

### Parameters

- `description` (string): A text description of the character you want to generate.
- `options` (object):
  - `states` (array): Animation states to include (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Number of frames for each animation state (default: 6)
  - `size` (string): Size of the output image (default: '1024x1024')
  - `style` (string): Art style of the sprite (default: 'pixel-art')
  - `padding` (number): Padding between frames (default: 1)
  - `direction` (string): Direction the character faces (default: 'right')
  - `save` (boolean): Whether to save the spritesheet to disk (default: false)

### Return Value

The function returns a promise that resolves to an object containing:

- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded data URL of the processed spritesheet
- `metadata`: Object containing information about the spritesheet, including dimensions, states, and frame data

## Generating Environment Sprites

The `generateEnvironmentSprites` function creates tileset-style sprites for game environments.

### Usage

```javascript
import { generateEnvironmentSprites } from 'spriteai';

const description = 'forest environment';
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

### Parameters

- `description` (string): A text description of the environment you want to generate.
- `options` (object):
  - `elements` (number): Number of distinct environment pieces to generate (default: 4)
  - `size` (string): Size of the output image (default: '1024x1024')
  - `style` (string): Art style of the sprites (default: 'pixel-art')
  - `padding` (number): Padding between elements (default: 1)
  - `theme` (string): Theme of the environment (default: 'fantasy')
  - `save` (boolean): Whether to save the tileset to disk (default: false)

### Return Value

The function returns a promise that resolves to an object containing:

- `original`: URL of the original generated image
- `tileset`: Base64-encoded data URL of the processed tileset
- `metadata`: Object containing information about the tileset, including dimensions and tile data

## Generating Item Sprites

The `generateItemSprites` function creates sprites for game items or inventory objects.

### Usage

```javascript
import { generateItemSprites } from 'spriteai';

const description = 'medieval weapons';
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
    console.log('Item sprites generated:', result.itemSheet);
    console.log('Metadata:', result.metadata);
  })
  .catch(error => {
    console.error('Error generating item sprites:', error);
  });
```

### Parameters

- `description` (string): A text description of the items you want to generate.
- `options` (object):
  - `itemCount` (number): Number of distinct items to generate (default: 4)
  - `size` (string): Size of the output image (default: '1024x1024')
  - `style` (string): Art style of the sprites (default: 'pixel-art')
  - `padding` (number): Padding between items (default: 1)
  - `itemType` (string): Type of items to generate (default: 'equipment')
  - `background` (string): Background color or 'transparent' (default: 'white')
  - `save` (boolean): Whether to save the item sheet to disk (default: false)

### Return Value

The function returns a promise that resolves to an object containing:

- `original`: URL of the original generated image
- `itemSheet`: Base64-encoded data URL of the processed item sheet
- `metadata`: Object containing information about the item sheet, including dimensions and item data

## Additional Features

SpriteAI also provides utility functions to enhance your sprite generation workflow:

- `fetchAvailableAnimationStates()`: Returns an array of available animation states for character sprites.
- `fetchAvailableSpriteStyles()`: Returns an array of available art styles for sprite generation.

These functions can be useful for dynamically populating options in your application's user interface.

## Conclusion

SpriteAI offers a powerful and flexible way to generate various types of game sprites using AI. By leveraging these functions, you can quickly create high-quality assets for your game development projects, saving time and resources in the asset creation process.

Remember to experiment with different descriptions and options to achieve the desired results for your specific game aesthetic and requirements. Happy sprite generating!