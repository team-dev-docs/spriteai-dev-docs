# Getting Started with SpriteAI

Welcome to SpriteAI! This guide will help you get started with using the powerful sprite generation functions provided by our library.

## Installation

To begin using SpriteAI, install it via npm:

```bash
npm install spriteai
```

## Basic Usage

After installation, you can start using SpriteAI's functions in your project. Here's how to import and use the main functions:

```javascript
import { 
  generateCharacterSpritesheet, 
  generateEnvironmentSprites, 
  generateItemSprites,
  fetchAvailableAnimationStates,
  fetchAvailableSpriteStyles
} from 'spriteai';
```

## Generating Character Spritesheets

The `generateCharacterSpritesheet` function allows you to create animated character spritesheets:

```javascript
const characterDescription = 'a brave knight';
const options = {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  direction: 'right'
};

const result = await generateCharacterSpritesheet(characterDescription, options);
console.log(result.spritesheet); // Base64 encoded spritesheet
console.log(result.metadata); // Spritesheet metadata
```

## Creating Environment Sprites

Use `generateEnvironmentSprites` to create tileset-style environment sprites:

```javascript
const environmentDescription = 'forest';
const options = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy'
};

const result = await generateEnvironmentSprites(environmentDescription, options);
console.log(result.tileset); // Base64 encoded tileset
console.log(result.metadata); // Tileset metadata
```

## Generating Item Sprites

For creating game items, use the `generateItemSprites` function:

```javascript
const itemDescription = 'magical artifacts';
const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment'
};

const result = await generateItemSprites(itemDescription, options);
console.log(result.itemSheet); // Base64 encoded item sheet
console.log(result.metadata); // Item sheet metadata
```

## Fetching Available Options

SpriteAI provides functions to fetch available animation states and sprite styles:

```javascript
const animationStates = await fetchAvailableAnimationStates();
console.log(animationStates); // Array of available animation states

const spriteStyles = await fetchAvailableSpriteStyles();
console.log(spriteStyles); // Array of available sprite styles
```

## Advanced Usage

Each generation function accepts various options to customize the output. Refer to the function signatures in the code for detailed option descriptions.

## Saving Generated Sprites

To save generated sprites, set the `save` option to `true` when calling the generation functions. The sprites will be saved in the `assets` folder of your current working directory.

## Next Steps

- Explore the full API documentation for detailed information on each function and its options.
- Experiment with different descriptions and options to create unique sprites for your game or application.
- Join our community forums to share your creations and get inspiration from other developers.

Happy sprite generating with SpriteAI!