# Getting Started with SpriteAI

SpriteAI is a powerful library for generating and manipulating sprite images for game development. This guide will help you get started with using SpriteAI in your projects.

## Installation

To install SpriteAI, use npm:

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
2. **Isometric Sprite Generation**: Generate isometric sprites for 2.5D games.
3. **Animated Emoji Creation**: Create simple animated emojis.
4. **Retro Console Style Sprites**: Generate sprites in the style of classic game consoles.
5. **Spritesheet Generation**: Create complete spritesheets with multiple animation states.
6. **Special Effects**: Add various effects like outlines, glows, reflections, and more.
7. **Weather Effects**: Add dynamic weather effects to your sprites.
8. **Elemental Variations**: Create elemental variations of your sprites (fire, water, earth, etc.).
9. **Lighting Variations**: Apply different lighting conditions to your sprites.

## Advanced Usage

Here are some examples of more advanced features:

### Generating a Character Spritesheet

```javascript
const result = await sprite.generateCharacterSpritesheet('A knight in armor', {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 4,
  size: '512x512'
});
```

### Adding Weather Effects

```javascript
const result = await sprite.addWeatherEffect('A house', {
  type: 'rain',
  intensity: 0.7,
  frames: 10
});
```

### Creating Elemental Variations

```javascript
const result = await sprite.createElementalVariation('A wizard', 'fire');
```

## Additional Resources

For more detailed information on each feature and advanced usage, please refer to the full API documentation.