# Getting Started with spriteAI

Welcome to spriteAI! This guide will help you get started with using the spriteAI module to generate game assets programmatically.

## Installation

To use spriteAI, you'll need to install the required dependencies. Make sure you have Node.js installed, then run:

```bash
npm install openai axios sharp jimp
```

## Basic Usage

First, import the necessary functions from the spriteAI module:

```javascript
import { generateCharacterSpritesheet, generateEnvironmentSprites, generateItemSprites } from 'spriteAI';
```

### Generating Character Spritesheets

To create a character spritesheet, use the `generateCharacterSpritesheet` function:

```javascript
const characterDescription = 'a brave knight in shining armor';
const options = {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  direction: 'right',
  save: true
};

const result = await generateCharacterSpritesheet(characterDescription, options);
console.log(result.spritesheet); // Base64 encoded PNG
console.log(result.metadata); // Spritesheet metadata
```

### Creating Environment Sprites

To generate environment sprites, use the `generateEnvironmentSprites` function:

```javascript
const environmentDescription = 'medieval castle';
const options = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy',
  save: true
};

const result = await generateEnvironmentSprites(environmentDescription, options);
console.log(result.tileset); // Base64 encoded PNG
console.log(result.metadata); // Environment sprite metadata
```

### Generating Item Sprites

To create item sprites, use the `generateItemSprites` function:

```javascript
const itemDescription = 'magical weapons';
const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment',
  save: true
};

const result = await generateItemSprites(itemDescription, options);
console.log(result.itemSheet); // Base64 encoded PNG
console.log(result.metadata); // Item sprite metadata
```

## Advanced Features

### Fetching Available Animation States

You can get a list of available animation states using the `fetchAvailableAnimationStates` function:

```javascript
import { fetchAvailableAnimationStates } from 'spriteAI';

const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### Fetching Available Sprite Styles

To get a list of available sprite styles, use the `fetchAvailableSpriteStyles` function:

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Customization Options

Each generation function (`generateCharacterSpritesheet`, `generateEnvironmentSprites`, `generateItemSprites`) accepts an options object that allows you to customize various aspects of the generated sprites. Common options include:

- `size`: The dimensions of the generated image (e.g., '1024x1024')
- `style`: The artistic style of the sprites (e.g., 'pixel-art')
- `save`: Whether to save the generated image to the local filesystem

Refer to each function's documentation for specific options and their default values.

## Saving Generated Assets

When the `save` option is set to `true`, the generated assets will be saved in the `assets` directory of your current working directory. The filenames will be based on the description provided, with spaces replaced by underscores.

## Error Handling

It's recommended to wrap your API calls in try-catch blocks to handle any potential errors:

```javascript
try {
  const result = await generateCharacterSpritesheet(description, options);
  // Process the result
} catch (error) {
  console.error('An error occurred:', error);
}
```

This concludes the getting started guide for spriteAI. Happy sprite generation!