# Generating Sprites with SpriteAI

SpriteAI is a powerful tool that allows you to create dynamic and customizable sprites for your games and applications. This guide will walk you through the process of generating sprites using SpriteAI, highlighting its key features and providing practical examples.

## Introduction to SpriteAI

SpriteAI is a Node.js-based library that leverages artificial intelligence to generate character spritesheets and other game assets. It uses OpenAI's DALL-E 3 model to create images based on text descriptions, and then processes these images to produce game-ready sprites.

## Key Features

- Generate character spritesheets with multiple animation states
- Create environment sprites and tilesets
- Produce item sprites for game inventories
- Customize sprite styles, sizes, and themes
- Remove background colors for transparent sprites

## Generating Character Spritesheets

The main function for creating character spritesheets is `generateCharacterSpritesheet`. Here's how to use it:

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

This function creates a spritesheet with multiple animation states for a character based on your description. You can customize various aspects such as the number of frames, size, style, and direction of the character.

## Creating Environment Sprites

For environment assets, use the `generateEnvironmentSprites` function:

```javascript
import { generateEnvironmentSprites } from 'spriteai';

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
    console.log('Environment tileset generated:', result.tileset);
    console.log('Metadata:', result.metadata);
  })
  .catch(error => {
    console.error('Error generating environment sprites:', error);
  });
```

This function creates a tileset of environment elements that can be used to build game levels or scenes.

## Generating Item Sprites

For creating game items or inventory icons, use the `generateItemSprites` function:

```javascript
import { generateItemSprites } from 'spriteai';

const description = 'medieval weapons';
const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  itemType: 'equipment',
  background: 'transparent'
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

This function generates a collection of item sprites arranged in a grid, perfect for game inventories or collectibles.

## Customization Options

SpriteAI offers various customization options to tailor the output to your needs:

- `style`: Choose from styles like 'pixel-art', 'vector', '3d', 'hand-drawn', or 'anime'.
- `size`: Set the dimensions of the output image (e.g., '1024x1024', '512x512').
- `states`: For character spritesheets, define the animation states (e.g., ['idle', 'walk', 'run']).
- `framesPerState`: Set the number of frames for each animation state.
- `theme`: For environment sprites, specify themes like 'fantasy', 'sci-fi', etc.
- `background`: Choose the background color or set to 'transparent'.

## Fetching Available Options

SpriteAI provides functions to fetch available animation states and sprite styles:

```javascript
import { fetchAvailableAnimationStates, fetchAvailableSpriteStyles } from 'spriteai';

fetchAvailableAnimationStates().then(states => {
  console.log('Available animation states:', states);
});

fetchAvailableSpriteStyles().then(styles => {
  console.log('Available sprite styles:', styles);
});
```

Use these functions to get up-to-date information on the options available for your sprite generation.

## Conclusion

SpriteAI offers a powerful and flexible way to generate sprites for your games and applications. By leveraging AI-driven image generation and processing techniques, it allows you to quickly create high-quality assets based on text descriptions. Experiment with different options and descriptions to achieve the perfect sprites for your projects!