# Usage Examples

This page provides practical examples of how to use the main features of the SpriteAI library. These examples will help you get started with generating various types of sprites and manipulating images.

## Generating a Character Spritesheet

To create a character spritesheet with multiple animation states, you can use the `generateCharacterSpritesheet` function. Here's an example:

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

This will generate a spritesheet with four animation states (idle, walk, run, attack), each with 6 frames, in a pixel-art style.

## Creating Environment Sprites

To generate environment sprites for your game, use the `generateEnvironmentSprites` function:

```javascript
import { generateEnvironmentSprites } from 'spriteai';

const description = 'forest tileset';
const options = {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
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

This will create a forest tileset with 6 distinct elements in a fantasy theme.

## Generating Item Sprites

For creating item sprites for your game's inventory system, use the `generateItemSprites` function:

```javascript
import { generateItemSprites } from 'spriteai';

const description = 'medieval weapons';
const options = {
  itemCount: 8,
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

This will generate a set of 8 medieval weapon sprites suitable for use in a game inventory.

## Removing Background Color

To remove a specific background color from an image, you can use the `removeBackgroundColor` function:

```javascript
import { removeBackgroundColor } from 'spriteai';

const inputPath = 'path/to/input/image.png';
const outputPath = 'path/to/output/image.png';
const targetColor = '#FFFFFF'; // White background
const colorThreshold = 10; // Adjust this value to fine-tune color matching

removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)
  .then(() => {
    console.log('Background color removed successfully');
  })
  .catch(error => {
    console.error('Error removing background color:', error);
  });
```

This function is useful for creating transparent sprites from images with solid color backgrounds.

## Generating a Landscape Sprite

To create a landscape sprite for your game background, use the `generateLandscapeSprite` function:

```javascript
import { generateLandscapeSprite } from 'spriteai';

const description = 'mountain range';
const options = {
  size: '1024x512',
  style: 'pixel-art',
  timeOfDay: 'sunset',
  weather: 'clear',
  perspective: 'side-scrolling',
  save: true,
  removeBackground: true
};

generateLandscapeSprite(description, options)
  .then(result => {
    console.log('Landscape sprite generated:', result.landscape);
    console.log('Metadata:', result.metadata);
  })
  .catch(error => {
    console.error('Error generating landscape sprite:', error);
  });
```

This will generate a side-scrolling mountain range landscape with a sunset setting and clear weather.

## Fetching Available Animation States and Sprite Styles

SpriteAI provides functions to fetch predefined animation states and sprite styles:

```javascript
import { fetchAvailableAnimationStates, fetchAvailableSpriteStyles } from 'spriteai';

// Fetch available animation states
fetchAvailableAnimationStates()
  .then(states => {
    console.log('Available animation states:', states);
  })
  .catch(error => {
    console.error('Error fetching animation states:', error);
  });

// Fetch available sprite styles
fetchAvailableSpriteStyles()
  .then(styles => {
    console.log('Available sprite styles:', styles);
  })
  .catch(error => {
    console.error('Error fetching sprite styles:', error);
  });
```

These functions can be useful for providing options to users or for dynamically adjusting your sprite generation parameters.

Remember to handle errors appropriately in your applications and to respect the rate limits and usage policies of the underlying AI services used by SpriteAI.