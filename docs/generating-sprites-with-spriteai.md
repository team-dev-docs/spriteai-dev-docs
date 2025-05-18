# Generating Sprites with SpriteAI

## Introduction

SpriteAI is a powerful tool for generating game sprites using artificial intelligence. This document will guide you through the process of creating sprites using the SpriteAI module, showcasing its capabilities and how to leverage them in your game development projects.

## Getting Started

To begin generating sprites with SpriteAI, you'll need to import the necessary modules and set up your environment. Here's a basic setup:

```javascript
import { generateCharacterSpritesheet, generateEnvironmentSprites, generateItemSprites } from 'spriteai';
```

## Generating Character Spritesheets

SpriteAI excels at creating character spritesheets with various animation states. Here's how to use the `generateCharacterSpritesheet` function:

```javascript
const characterDescription = 'A brave knight in shining armor';
const options = {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  direction: 'right'
};

const result = await generateCharacterSpritesheet(characterDescription, options);
console.log(result.spritesheet); // Base64 encoded spritesheet
console.log(result.metadata);    // Metadata about the generated spritesheet
```

This function generates a character spritesheet based on the provided description and options. The result includes the spritesheet image and metadata about the animation states and frames.

## Creating Environment Sprites

For generating environment elements, use the `generateEnvironmentSprites` function:

```javascript
const environmentDescription = 'A lush forest with ancient ruins';
const environmentOptions = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy'
};

const environmentResult = await generateEnvironmentSprites(environmentDescription, environmentOptions);
console.log(environmentResult.tileset);  // Base64 encoded tileset
console.log(environmentResult.metadata); // Metadata about the generated tileset
```

This function creates a tileset of environment sprites based on your description, perfect for building game worlds.

## Generating Item Sprites

For creating game items, use the `generateItemSprites` function:

```javascript
const itemDescription = 'Medieval weapons and armor';
const itemOptions = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment'
};

const itemResult = await generateItemSprites(itemDescription, itemOptions);
console.log(itemResult.itemSheet); // Base64 encoded item sheet
console.log(itemResult.metadata);  // Metadata about the generated items
```

This function generates a sheet of item sprites, ideal for inventory systems or collectibles in your game.

## Customization Options

SpriteAI offers various customization options for each generation function:

- `size`: Determines the output image size (e.g., '1024x1024')
- `style`: Sets the art style (e.g., 'pixel-art', 'vector', '3d')
- `padding`: Adjusts spacing between sprites
- `save`: When set to true, saves the generated image to disk

## Best Practices

1. Be specific in your descriptions to get the best results.
2. Experiment with different styles and options to find what works best for your game.
3. Use the metadata provided in the results to correctly implement the sprites in your game engine.
4. Consider generating multiple variations and choosing the best one for your needs.

## Conclusion

SpriteAI provides a powerful and flexible way to generate game sprites programmatically. By leveraging AI, you can quickly create diverse and high-quality assets for your game projects, from character animations to environment tiles and item icons. Experiment with the different functions and options to unleash your creativity and streamline your game development process.