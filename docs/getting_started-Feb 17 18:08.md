# Getting Started with SpriteAI

SpriteAI is a powerful library for generating and manipulating pixel art sprites and spritesheets using AI. This guide will help you get started with installing and using the basic features of SpriteAI.

## Installation

To install SpriteAI, make sure you have Node.js installed on your system, then run the following command:

```
npm install spriteai
```

## Basic Usage

Here's a simple example of how to use SpriteAI to generate a pixel art sprite:

```javascript
import { sprite } from 'spriteai';

async function generateSprite() {
  const result = await sprite.generatePixelArt('A cute cat');
  console.log(result.image); // Base64 encoded image data
}

generateSprite();
```

## Main Features

SpriteAI offers a wide range of features for sprite generation and manipulation:

1. **Pixel Art Generation**: Create pixel art sprites from text descriptions.
2. **Spritesheet Generation**: Generate full character spritesheets with multiple animation states.
3. **Special Effects**: Apply various effects like outlines, glows, and elemental variations.
4. **Animation**: Create animated sprites and apply motion effects.
5. **Weather Effects**: Add dynamic weather effects to your sprites.
6. **Lighting and Shading**: Implement advanced lighting and shading techniques.

## Advanced Examples

### Generating a Character Spritesheet

```javascript
const characterSheet = await sprite.generateCharacterSpritesheet('A warrior with a sword', {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 4,
  style: 'pixel-art'
});
```

### Adding Weather Effects

```javascript
const weatherySprite = await sprite.addWeatherEffect('A house', {
  type: 'rain',
  intensity: 0.7,
  frames: 10
});
```

### Creating Elemental Variations

```javascript
const fireSprite = await sprite.createElementalVariation('A mage', 'fire');
```

## Next Steps

Explore the full API documentation to discover all the features and options available in SpriteAI. Experiment with different combinations of effects and generation techniques to create unique and engaging pixel art for your projects.

For more detailed information on each function and its parameters, refer to the API documentation.