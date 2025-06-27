# Getting Started with SpriteAI

Welcome to SpriteAI! This guide will walk you through the process of integrating the SpriteAI npm package into your projects and explore its expanded capabilities.

## Installation

To begin using SpriteAI, you'll need to install it in your project directory. Simply run the following command:

```bash
npm install spriteai
```

## Basic Usage

Once SpriteAI is installed, you can start leveraging its powerful features in your project. Here's a quick example demonstrating the main functionalities:

```javascript
const spriteAI = require('spriteai');

// Initialise a new SpriteAI instance
const ai = new spriteAI.SpriteAI();

// Generate a character sprite
ai.generateCharacterSpritesheet('hero', { style: 'pixel' })
  .then(spritesheet => {
    console.log('Character spritesheet successfully generated:', spritesheet);
  })
  .catch(error => {
    console.error('Sprite generation encountered an error:', error);
  });

// Generate environment sprites
ai.generateEnvironmentSprites('forest', { tilesetSize: 16 })
  .then(tileset => {
    console.log('Environment tileset generated:', tileset);
  })
  .catch(error => {
    console.error('Environment sprite generation error:', error);
  });
```

## Key Features

SpriteAI offers an extensive range of powerful features to enhance your sprite creation and manipulation:

1. **Sprite Generation**: Advanced sprite generation techniques including:
   - Character Spritesheets
   - Environment Tilesets
   - Landscape Scenes
   - Item Sprite Collections

2. **Sprite Transformations**: Comprehensive sprite manipulation functions:
   - Rotate Spritesheet
   - Tint Sprites
   - Flip Sprites
   - Add Shadows
   - Create Color Cycling Animations

3. **Advanced Effects**:
   - Particle Effects
   - Glitch Art
   - Pixelation
   - Mosaic Effects
   - Weather Effects
   - Displacement Effects

4. **Style Variations**:
   - Pixel Art
   - Isometric Sprites
   - Mecha Variations
   - Elemental Variations
   - Lighting Variations

## Sprite Style Exploration

SpriteAI now provides a function to explore available sprite styles:

```javascript
const styles = await spriteAI.fetchAvailableSpriteStyles();
console.log('Available Sprite Styles:', styles);
```

## Advanced Techniques

SpriteAI is capable of complex sprite operations. You can create intricate sprite animations, apply various transformations, and unlock a world of creative possibilities.

### Example: Advanced Sprite Manipulation

```javascript
const sprite = await ai.generateSprite('fantasy warrior');
const enhancedSprite = sprite
  .addShadow()
  .createSpriteAnimation()
  .addGlitchWaveEffect();
```

## Next Steps

To become a SpriteAI expert, we recommend:

1. Exploring the comprehensive API documentation
2. Experimenting with sprite generation and transformation techniques
3. Testing various style variations
4. Joining our community forums for tips and inspiration

Thank you for choosing SpriteAI. We're excited to see the amazing sprites and game assets you'll create with our enhanced package!

## Version Compatibility

- Requires Node.js 16.x or higher
- Compatible with modern web and game development frameworks

## Support

For additional support, visit our documentation site or join our developer community on GitHub.
