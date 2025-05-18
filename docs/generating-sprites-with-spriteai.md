# Generating Sprites with SpriteAI

SpriteAI is a powerful tool for generating game sprites and assets using artificial intelligence. This guide will walk you through the process of creating various types of sprites using the SpriteAI library.

## Introduction

SpriteAI leverages advanced AI models to generate high-quality sprites for your game development needs. Whether you're creating character animations, environmental elements, or item icons, SpriteAI has you covered.

## Getting Started

To use SpriteAI, you'll need to import the necessary functions from the library:

```javascript
import { generateCharacterSpritesheet, generateEnvironmentSprites, generateItemSprites } from 'spriteai';
```

## Generating Character Spritesheets

The `generateCharacterSpritesheet` function allows you to create animated character sprites with multiple states and frames.

### Basic Usage

```javascript
const characterSprite = await generateCharacterSpritesheet('A heroic knight in armor', {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art'
});
```

### Parameters

- `description`: A string describing the character you want to generate.
- `options`: An object containing various configuration options:
  - `states`: An array of animation states (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState`: Number of frames for each animation state (default: 6)
  - `size`: Output image size (default: '1024x1024')
  - `style`: Art style of the sprite (default: 'pixel-art')
  - `padding`: Padding between sprites (default: 1)
  - `direction`: Base direction of the character (default: 'right')

### Return Value

The function returns an object containing:

- `original`: URL of the originally generated image
- `spritesheet`: Base64-encoded data URL of the processed spritesheet
- `metadata`: Object containing information about the generated spritesheet

## Generating Environment Sprites

Use the `generateEnvironmentSprites` function to create environmental elements for your game.

### Basic Usage

```javascript
const environmentSprites = await generateEnvironmentSprites('Forest landscape', {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy'
});
```

### Parameters

- `description`: A string describing the environment you want to generate.
- `options`: An object containing various configuration options:
  - `elements`: Number of distinct environment pieces to generate (default: 4)
  - `size`: Output image size (default: '1024x1024')
  - `style`: Art style of the sprites (default: 'pixel-art')
  - `padding`: Padding between sprites (default: 1)
  - `theme`: Theme of the environment (default: 'fantasy')

### Return Value

The function returns an object containing:

- `original`: URL of the originally generated image
- `tileset`: Base64-encoded data URL of the processed tileset
- `metadata`: Object containing information about the generated environment sprites

## Generating Item Sprites

The `generateItemSprites` function is perfect for creating item icons or collectibles for your game.

### Basic Usage

```javascript
const itemSprites = await generateItemSprites('Magic potion set', {
  itemCount: 8,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'potions'
});
```

### Parameters

- `description`: A string describing the items you want to generate.
- `options`: An object containing various configuration options:
  - `itemCount`: Number of distinct items to generate (default: 4)
  - `size`: Output image size (default: '1024x1024')
  - `style`: Art style of the sprites (default: 'pixel-art')
  - `padding`: Padding between sprites (default: 1)
  - `itemType`: Type of items being generated (default: 'equipment')
  - `background`: Background color of the spritesheet (default: 'white')

### Return Value

The function returns an object containing:

- `original`: URL of the originally generated image
- `itemSheet`: Base64-encoded data URL of the processed item sheet
- `metadata`: Object containing information about the generated item sprites

## Conclusion

SpriteAI provides a powerful and flexible way to generate various types of sprites for your game development needs. By leveraging AI-powered image generation, you can quickly create high-quality assets that can be easily integrated into your game projects.

Remember to experiment with different descriptions and options to get the best results for your specific needs. Happy sprite generating!