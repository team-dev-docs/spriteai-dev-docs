# Getting Started with SpriteAI

SpriteAI is a powerful library for generating and manipulating game sprites using AI. This guide will help you get started with the basic usage of SpriteAI.

## Installation

To install SpriteAI, use npm:

```bash
npm install spriteai
```

## Basic Usage

Here's a simple example of how to use SpriteAI:

```javascript
import { sprite } from 'spriteai';

async function generateSprite() {
  const result = await sprite.generateSprite('a cute cat');
  console.log(result.image); // Base64 encoded image
}

generateSprite();
```

## Main Features

1. **Sprite Generation**: Create custom sprites from text descriptions.
2. **Pixel Art**: Generate pixel art style sprites.
3. **Isometric Sprites**: Create isometric game assets.
4. **Animated Emojis**: Generate simple animated emojis.
5. **Retro Console Sprites**: Create sprites in the style of classic gaming consoles.
6. **Special Effects**: Add various effects like outlines, glitch art, shadows, and more.

## Advanced Usage

### Generating a Character Spritesheet

```javascript
const spritesheet = await sprite.generateCharacterSpritesheet('warrior', {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 4,
  size: '512x512'
});
```

### Adding Special Effects

```javascript
const glitchedSprite = await sprite.createGlitchArt('robot', {
  sortMode: 'brightness',
  noiseAmount: 15
});
```

### Creating Elemental Variations

```javascript
const fireSprite = await sprite.createElementalVariation('wizard', 'fire');
```

## Options

Most functions in SpriteAI accept an `options` object that allows you to customize the output. Common options include:

- `size`: Specify the output image size (e.g., '256x256')
- `save`: Boolean to save the generated image to disk
- `iterations`: Number of variations to generate

## Error Handling

SpriteAI functions are asynchronous and may throw errors. Always use try-catch blocks or .catch() when calling these functions.

```javascript
try {
  const result = await sprite.generateSprite('complex description');
  // Handle result
} catch (error) {
  console.error('Error generating sprite:', error);
}
```

For more detailed information on each function and its options, please refer to the full API documentation.