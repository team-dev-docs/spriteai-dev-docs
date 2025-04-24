# SpriteAI SDK Quickstart Guide

This guide will help you get started with the SpriteAI SDK, which allows you to generate game assets programmatically using AI.

## Installation

To use the SpriteAI SDK, you need to have Node.js installed on your system. Then, you can install the SDK using npm:

```bash
npm install spriteai
```

## Usage

First, import the necessary functions from the SpriteAI SDK:

```javascript
import { 
  generateCharacterSpritesheet, 
  generateEnvironmentSprites, 
  generateItemSprites, 
  fetchAvailableAnimationStates, 
  fetchAvailableSpriteStyles 
} from 'spriteai';
```

### Generating Character Spritesheets

To generate a character spritesheet:

```javascript
const characterDescription = 'A brave knight in shining armor';
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

### Generating Environment Sprites

To generate environment sprites:

```javascript
const environmentDescription = 'A lush forest with ancient ruins';
const options = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy',
  save: true
};

const result = await generateEnvironmentSprites(environmentDescription, options);
console.log(result.tileset); // Base64 encoded PNG
console.log(result.metadata); // Environment tileset metadata
```

### Generating Item Sprites

To generate item sprites:

```javascript
const itemDescription = 'Medieval weapons and armor';
const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment',
  save: true
};

const result = await generateItemSprites(itemDescription, options);
console.log(result.itemSheet); // Base64 encoded PNG
console.log(result.metadata); // Item sheet metadata
```

### Fetching Available Animation States

To get a list of available animation states:

```javascript
const states = await fetchAvailableAnimationStates();
console.log(states); // Array of available animation states
```

### Fetching Available Sprite Styles

To get a list of available sprite styles:

```javascript
const styles = await fetchAvailableSpriteStyles();
console.log(styles); // Array of available sprite styles
```

## Options

Each generation function accepts an options object that allows you to customize the output. Here are some common options:

- `size`: The size of the generated image (e.g., '1024x1024')
- `style`: The art style of the sprites (e.g., 'pixel-art', 'vector', '3d', 'hand-drawn', 'anime')
- `save`: When set to `true`, saves the generated image to the `assets` folder in your current working directory

Refer to each function's specific options for more details.

## Output

The generation functions return an object containing:

- The original image URL from the AI generation
- A Base64 encoded PNG of the processed spritesheet/tileset
- Metadata about the generated assets, including dimensions, frame data, and more

## Next Steps

- Explore the different options for each generation function to customize your output
- Integrate the generated assets into your game development workflow
- Check out the full API documentation for more advanced usage and features

Happy sprite generating!