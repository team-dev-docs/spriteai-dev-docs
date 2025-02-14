# Getting Started with SpriteAI

SpriteAI is a powerful library for generating and manipulating game sprites and pixel art using AI. This guide will help you get started with installing and using the basic features of SpriteAI.

## Installation

To install SpriteAI, use npm:

```
npm install spriteai
```

## Basic Usage

Here's a quick example of how to generate a simple sprite:

```javascript
import { sprite } from 'spriteai';

async function generateSimpleSprite() {
  const result = await sprite.generatePixelArt('A cute cat');
  console.log(result.image); // Base64 encoded image data
}

generateSimpleSprite();
```

## Main Features

SpriteAI offers a wide range of features for sprite generation and manipulation:

1. Sprite Generation
   - `generatePixelArt`: Create pixel art sprites
   - `generateIsometric`: Generate isometric sprites
   - `generateAnimatedEmoji`: Create animated emoji sprites

2. Sprite Manipulation
   - `addOutline`: Add outlines to sprites
   - `createColorCycle`: Generate color cycling animations
   - `createPixelPerfect`: Scale sprites while maintaining pixel perfect quality

3. Special Effects
   - `createGlitchArt`: Apply glitch effects to sprites
   - `addShadow`: Add dynamic shadows to sprites
   - `createMirrorSprite`: Create mirrored versions of sprites

4. Animation
   - `createSpriteAnimation`: Generate sprite animations
   - `addWaveEffect`: Apply wave distortion animations
   - `addDissolveEffect`: Create dissolve transition effects

5. Advanced Techniques
   - `createElementalVariation`: Generate elemental variations of sprites
   - `createLightingVariation`: Apply dynamic lighting to sprites
   - `addWeatherEffect`: Add weather effects to sprite backgrounds

## Example: Creating an Elemental Sprite

Here's an example of how to create a fire elemental variation of a sprite:

```javascript
import { sprite } from 'spriteai';

async function createFireSprite() {
  const result = await sprite.createElementalVariation('A warrior', 'fire');
  console.log(result.elemental); // Base64 encoded fire elemental sprite
  console.log(result.withGlow); // Base64 encoded sprite with added glow effect
}

createFireSprite();
```

## Next Steps

Explore the full API documentation to learn about all the available methods and options. Experiment with different combinations of effects and manipulations to create unique and dynamic sprites for your games or applications.