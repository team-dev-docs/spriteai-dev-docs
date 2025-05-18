# Generating Sprites with SpriteAI

SpriteAI is a powerful tool that allows you to generate character spritesheets and manipulate images using the OpenAI API and image processing libraries. This guide will walk you through the process of generating sprites using SpriteAI.

## Introduction

SpriteAI simplifies the process of creating pixel-art character animations with customizable states and frames. It's particularly useful for game developers, animators, and digital artists who need to quickly generate character spritesheets.

## Installation

Before you start generating sprites, make sure you have SpriteAI installed. You can install it using npm:

```bash
npm install spriteai
```

## Generating a Character Spritesheet

The main function for generating a character spritesheet is `generateCharacterSpritesheet`. Here's how to use it:

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
  })
  .catch(error => {
    console.error('Error generating spritesheet:', error);
  });
```

### Parameters

- `description`: A string describing the character you want to generate.
- `options`: An object containing various settings for the spritesheet generation.

### Options

- `states`: An array of animation states (default: ['idle', 'walk', 'run', 'attack'])
- `framesPerState`: Number of frames for each animation state (default: 6)
- `size`: Size of the generated image (default: '1024x1024')
- `style`: Art style of the sprite (default: 'pixel-art')
- `padding`: Padding between frames (default: 1)
- `direction`: Direction the character faces (default: 'right')
- `save`: Whether to save the generated spritesheet to disk (default: false)

### Return Value

The function returns a Promise that resolves to an object containing:

- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded data URL of the processed spritesheet
- `metadata`: Object containing information about the spritesheet, including states, frames, and dimensions

## Additional Features

### Fetching Available Animation States

You can retrieve a list of available animation states using the `fetchAvailableAnimationStates` function:

```javascript
import { fetchAvailableAnimationStates } from 'spriteai';

fetchAvailableAnimationStates()
  .then(states => {
    console.log('Available animation states:', states);
  })
  .catch(error => {
    console.error('Error fetching animation states:', error);
  });
```

### Fetching Available Sprite Styles

To get a list of available sprite styles, use the `fetchAvailableSpriteStyles` function:

```javascript
import { fetchAvailableSpriteStyles } from 'spriteai';

fetchAvailableSpriteStyles()
  .then(styles => {
    console.log('Available sprite styles:', styles);
  })
  .catch(error => {
    console.error('Error fetching sprite styles:', error);
  });
```

## Generating Environment Sprites

SpriteAI also allows you to generate environment sprites using the `generateEnvironmentSprites` function:

```javascript
import { generateEnvironmentSprites } from 'spriteai';

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

## Generating Item Sprites

For generating item sprites, use the `generateItemSprites` function:

```javascript
import { generateItemSprites } from 'spriteai';

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
    console.log('Item sprites generated:', result.itemSheet);
  })
  .catch(error => {
    console.error('Error generating item sprites:', error);
  });
```

## Conclusion

SpriteAI provides a powerful and flexible way to generate various types of sprites for your games or applications. By leveraging AI-powered image generation and processing, you can quickly create character spritesheets, environment tilesets, and item sprites with minimal effort. Experiment with different descriptions, styles, and options to achieve the perfect look for your project.