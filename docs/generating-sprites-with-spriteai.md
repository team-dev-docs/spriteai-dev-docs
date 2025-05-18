# Generating Sprites with SpriteAI

## Introduction

SpriteAI is a powerful tool that allows you to generate character spritesheets and manipulate images using AI-powered technology. This document will guide you through the process of generating sprites using SpriteAI, showcasing its features and providing examples of how to use the library effectively.

## Key Features

SpriteAI offers several key features for sprite generation:

1. Character spritesheet generation
2. Environment sprite creation
3. Item sprite generation
4. Customizable animation states
5. Various art styles and output sizes
6. Background color removal

## Generating Character Spritesheets

The main function for generating character spritesheets is `generateCharacterSpritesheet`. Here's how to use it:

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

### Options Explained

- `states`: An array of animation states for the character (default: ['idle', 'walk', 'run', 'attack'])
- `framesPerState`: Number of frames for each animation state (default: 6)
- `size`: Output size of the spritesheet (default: '1024x1024')
- `style`: Art style of the sprite (default: 'pixel-art')
- `padding`: Padding between frames (default: 1)
- `direction`: Direction the character faces (default: 'right')
- `save`: Whether to save the spritesheet to disk (default: false)

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
  theme: 'fantasy'
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

## Generating Item Sprites

For creating item sprites, use the `generateItemSprites` function:

```javascript
import { generateItemSprites } from 'spriteai';

const description = 'medieval weapons';
const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  itemType: 'equipment',
  background: 'white'
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

You can retrieve a list of available animation states:

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

To get a list of available sprite styles:

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

## Conclusion

SpriteAI provides a powerful and flexible way to generate various types of sprites for your game development needs. By leveraging AI-powered image generation and customizable options, you can create unique and high-quality sprites quickly and easily. Experiment with different descriptions, styles, and options to get the perfect sprites for your project!