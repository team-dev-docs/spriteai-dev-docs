# Generating Sprites with SpriteAI

SpriteAI is a powerful tool that allows you to generate game sprites and assets using AI-powered image generation. This guide will walk you through the process of creating various types of sprites using the SpriteAI package.

## Introduction

SpriteAI leverages advanced AI models to create high-quality sprites based on text descriptions. It offers functions to generate character spritesheets, environment sprites, and item sprites, making it an invaluable tool for game developers and digital artists.

## Installation

To get started with SpriteAI, install it via npm:

```bash
npm install spriteai
```

## Generating Character Spritesheets

The `generateCharacterSpritesheet` function allows you to create animated character sprites with multiple states.

### Basic Usage

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

const result = await generateCharacterSpritesheet('A pixelated warrior with a sword and shield');

console.log(result.original); // URL of the original generated image
console.log(result.spritesheet); // Base64 encoded spritesheet
console.log(result.metadata); // Metadata about the generated spritesheet
```

### Options

You can customize the spritesheet generation with various options:

```javascript
const options = {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  direction: 'right',
  save: true
};

const result = await generateCharacterSpritesheet('A futuristic robot', options);
```

## Generating Environment Sprites

The `generateEnvironmentSprites` function creates tileset-style sprites for game environments.

### Basic Usage

```javascript
import { generateEnvironmentSprites } from 'spriteai';

const result = await generateEnvironmentSprites('A lush forest with ancient ruins');

console.log(result.original); // URL of the original generated image
console.log(result.tileset); // Base64 encoded tileset
console.log(result.metadata); // Metadata about the generated tileset
```

### Options

Customize your environment sprites with these options:

```javascript
const options = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  theme: 'fantasy',
  save: true
};

const result = await generateEnvironmentSprites('A desert oasis', options);
```

## Generating Item Sprites

Use the `generateItemSprites` function to create sprites for game items or equipment.

### Basic Usage

```javascript
import { generateItemSprites } from 'spriteai';

const result = await generateItemSprites('Medieval weapons and armor');

console.log(result.original); // URL of the original generated image
console.log(result.itemSheet); // Base64 encoded item sheet
console.log(result.metadata); // Metadata about the generated items
```

### Options

Customize your item sprites with these options:

```javascript
const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  itemType: 'equipment',
  background: 'white',
  save: true
};

const result = await generateItemSprites('Magical potions and scrolls', options);
```

## Additional Features

SpriteAI also provides utility functions to enhance your sprite generation workflow:

- `fetchAvailableAnimationStates()`: Retrieves a list of available animation states for character spritesheets.
- `fetchAvailableSpriteStyles()`: Provides a list of available sprite styles that can be used in generation.

## Conclusion

SpriteAI offers a robust set of tools for generating game sprites using AI. By leveraging these functions, you can quickly create high-quality assets for your game development projects, saving time and enhancing creativity in your workflow.

Remember to refer to the full API documentation for more detailed information on each function and its parameters. Happy sprite generating!