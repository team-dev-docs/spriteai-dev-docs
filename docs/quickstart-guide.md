# SpriteAI SDK Quickstart Guide

Welcome to the SpriteAI SDK! This guide will help you get started with generating game assets using AI.

## Installation

To use the SpriteAI SDK, you'll need to install it in your project. Use npm or yarn to install the package:

```bash
npm install spriteai
# or
yarn add spriteai
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

To create a character spritesheet:

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
console.log(result.spritesheet); // Base64 encoded spritesheet
console.log(result.metadata); // Metadata about the spritesheet
```

### Generating Environment Sprites

To create environment sprites:

```javascript
const environmentDescription = 'Medieval castle';
const options = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy',
  save: true
};

const result = await generateEnvironmentSprites(environmentDescription, options);
console.log(result.tileset); // Base64 encoded tileset
console.log(result.metadata); // Metadata about the environment sprites
```

### Generating Item Sprites

To create item sprites:

```javascript
const itemDescription = 'Magic potions';
const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment',
  save: true
};

const result = await generateItemSprites(itemDescription, options);
console.log(result.itemSheet); // Base64 encoded item sheet
console.log(result.metadata); // Metadata about the item sprites
```

### Fetching Available Options

You can fetch available animation states and sprite styles:

```javascript
const animationStates = await fetchAvailableAnimationStates();
console.log(animationStates); // Array of available animation states

const spriteStyles = await fetchAvailableSpriteStyles();
console.log(spriteStyles); // Array of available sprite styles
```

## Customization

Each generation function accepts an options object that allows you to customize the output. Common options include:

- `size`: The dimensions of the generated image (e.g., '1024x1024')
- `style`: The art style of the sprites (e.g., 'pixel-art', 'vector', '3d')
- `save`: Boolean to determine if the result should be saved to disk

Refer to the individual function documentation for more specific options.

## Handling Results

All generation functions return an object containing:

- The original image URL from the AI generation
- A Base64 encoded string of the processed spritesheet/tileset/item sheet
- Metadata about the generated assets

You can use the Base64 encoded string to display the image directly in a web application or save it to a file.

## Error Handling

Make sure to wrap your API calls in try-catch blocks to handle any potential errors:

```javascript
try {
  const result = await generateCharacterSpritesheet(description, options);
  // Handle successful result
} catch (error) {
  console.error('Error generating character spritesheet:', error);
}
```

## Next Steps

Explore the individual function documentation for more detailed information on each feature of the SpriteAI SDK. Happy sprite generating!