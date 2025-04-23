# SpriteAI Quickstart Guide

Welcome to SpriteAI! This guide will help you get started with using SpriteAI to generate and manipulate sprite images for your game development projects. We'll walk you through the installation process, basic usage, and some advanced features.

## Installation

To use SpriteAI, you'll need to install it via npm. Open your terminal and run:

```bash
npm install spriteai
```

## Basic Usage

Once installed, you can start using SpriteAI in your project. Here's a simple example to generate a sprite:

```javascript
const SpriteAI = require('spriteai');

async function generateSimpleSprite() {
  const spriteai = new SpriteAI();
  
  const sprite = await spriteai.generateSprite({
    description: 'A cute red cartoon fox',
    size: '64x64'
  });

  console.log(sprite.base64);
  // Output: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...
}

generateSimpleSprite();
```

This will generate a 64x64 pixel sprite of a cute red cartoon fox and output the base64-encoded image data.

## Advanced Features

### Generating Sprite Sheets

SpriteAI can also generate sprite sheets for animations:

```javascript
async function generateSpriteSheet() {
  const spriteai = new SpriteAI();
  
  const spriteSheet = await spriteai.generateSpriteSheet({
    description: 'A knight walking animation',
    frames: 4,
    size: '128x128'
  });

  console.log(spriteSheet.base64);
  console.log(spriteSheet.metadata);
}

generateSpriteSheet();
```

This will create a sprite sheet with 4 frames of a knight walking animation.

### Applying Effects

You can apply various effects to your sprites:

```javascript
async function applyEffects() {
  const spriteai = new SpriteAI();
  
  const baseSprite = await spriteai.generateSprite({
    description: 'A glowing magic orb',
    size: '64x64'
  });

  const glowEffect = await spriteai.addGlowEffect(baseSprite.buffer, {
    color: '#00ffff',
    intensity: 0.5
  });

  console.log(glowEffect.base64);
}

applyEffects();
```

This example generates a sprite of a glowing magic orb and then applies an additional glow effect to it.

## Best Practices

- Be specific in your descriptions for better results.
- Experiment with different sizes and frame counts for animations.
- Use effects judiciously to enhance your sprites without overwhelming them.

## Conclusion

This quickstart guide should help you get up and running with SpriteAI. For more detailed information on all available methods and options, check out our full [API documentation](https://docs.spriteai.com/api).

Happy sprite generating!