# Getting Started with SpriteAI

## Introduction

SpriteAI is a powerful tool for generating and manipulating sprite images for game development, particularly with Phaser.js. This guide will help you get started with using SpriteAI in your projects.

## Installation

To use SpriteAI, you'll need to install the following dependencies:

```bash
npm install openai axios sharp jimp
```

## Basic Usage

Here's a simple example of how to use SpriteAI to generate a sprite:

```javascript
import { sprite } from './path/to/spriteAI';

async function generateCharacterSprite() {
  const description = 'A pixelated warrior with a sword and shield';
  const result = await sprite.generateSprite(description);
  
  console.log('Frame dimensions:', result.messages);
  console.log('Sprite image data URL:', result.image);
}

generateCharacterSprite();
```

## Key Features

1. **Sprite Generation**: Create sprite sheets based on text descriptions using AI.
2. **Image Manipulation**: Apply various effects like color cycling, mirroring, and pixelation.
3. **Spritesheet Handling**: Split and combine spritesheets for easy management.
4. **Special Effects**: Add particle effects, shatter animations, and more to your sprites.

## Advanced Techniques

### Creating Animated Sprites

To create an animated sprite, you can use the `createSpriteAnimation` function:

```javascript
const description = 'A walking robot';
const options = { steps: 4 }; // Number of interpolation steps between frames
const result = await sprite.createSpriteAnimation(description, options);

console.log('Original frames:', result.frames);
console.log('Interpolated frames:', result.interpolatedFrames);
console.log('Total frame count:', result.frameCount);
```

### Applying Effects

SpriteAI offers various effects you can apply to your sprites:

```javascript
// Add a glitch effect
const glitchedSprite = await sprite.addGlitchWaveEffect(spriteBuffer, glitchOptions);

// Create a kaleidoscope effect
const kaleidoscopeSprite = await sprite.addKaleidoscopeEffect(spriteBuffer, kaleidoscopeOptions);

// Generate a particle effect
const particleEffect = await sprite.generateParticleEffect(spriteBuffer, particleCount, particleOptions);
```

## Tips and Best Practices

1. **Optimize Performance**: When working with multiple sprites or effects, consider using `optimizePalette` to reduce the color palette and improve rendering performance.

2. **Consistent Style**: For a cohesive look in your game, use similar descriptions when generating multiple sprites for the same game or scene.

3. **Experiment with Options**: Many functions in SpriteAI accept option parameters. Experiment with these to achieve the desired look for your sprites.

4. **Error Handling**: Always implement proper error handling when working with asynchronous functions to manage potential API or processing errors.

## Conclusion

This guide covers the basics of getting started with SpriteAI. For more detailed information on specific functions and advanced usage, refer to the individual function documentation. Happy sprite creating!