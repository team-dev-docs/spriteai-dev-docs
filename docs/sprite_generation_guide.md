# SpriteAI Sprite Generation Guide

This guide provides comprehensive instructions on how to use SpriteAI to generate various types of sprites. It covers different sprite types, available options, and best practices for optimal results.

## Table of Contents

1. Basic Sprite Generation
2. Pixel Art Sprites  
3. Isometric Sprites
4. Animated Emoji Sprites
5. Retro Console Sprites
6. Character Spritesheets
7. Special Effects
8. Advanced Techniques
9. Best Practices

## 1. Basic Sprite Generation

To generate a basic sprite:

```javascript
const result = await sprite.generateSprite("description", options);
```

- `description`: A text description of the sprite you want to generate
- `options`: Optional settings like size, iterations, etc.

Example:
```javascript
const hero = await sprite.generateSprite("A brave knight with shining armor", {
  size: "512x512",
  iterations: 3
});
```

## 2. Pixel Art Sprites

For pixel art style sprites:

```javascript 
const pixelArt = await sprite.generatePixelArt("description", options);
```

Example:
```javascript
const pixelHero = await sprite.generatePixelArt("An 8-bit style hero character", {
  size: "64x64"
});
```

## 3. Isometric Sprites

Generate isometric view sprites:

```javascript
const iso = await sprite.generateIsometric("description", options);
```

Example: 
```javascript
const isoBuilding = await sprite.generateIsometric("A medieval castle tower", {
  size: "256x256"
});
```

## 4. Animated Emoji Sprites

Create animated emoji sprites:

```javascript
const animEmoji = await sprite.generateAnimatedEmoji("description", options);
```

Example:
```javascript
const happyFace = await sprite.generateAnimatedEmoji("A smiling face winking", {
  frames: 4
});
```

## 5. Retro Console Sprites

Generate sprites in the style of retro game consoles:

```javascript
const retro = await sprite.generateRetroConsole("description", "console", options);
```

Supported consoles: "genesis", "msx", "commodore64"

Example:
```javascript
const retroShip = await sprite.generateRetroConsole("A spaceship", "genesis", {
  size: "32x32"
});
```

## 6. Character Spritesheets

Generate full character spritesheets with multiple animations:

```javascript
const sheet = await sprite.generateCharacterSpritesheet("description", options);
```

Example:
```javascript
const heroSheet = await sprite.generateCharacterSpritesheet("A heroic warrior", {
  states: ['idle', 'walk', 'attack', 'jump'],
  framesPerState: 8,
  size: "1024x1024"
});
```

## 7. Special Effects

Apply various special effects to sprites:

- Particle effects: `sprite.generateParticleEffect()`
- Color cycling: `sprite.createColorCycle()`
- Outlines: `sprite.addOutline()`
- Glitch effects: `sprite.createGlitchArt()`
- Shadows: `sprite.addShadow()`
- Reflections: `sprite.addReflectionEffect()`
- Weather effects: `sprite.addWeatherEffect()`

Example:
```javascript
const glowingHero = await sprite.addOutline("A heroic character", {
  color: { r: 255, g: 255, b: 0, alpha: 255 },
  thickness: 2
});
```

## 8. Advanced Techniques

- Sprite variations: `sprite.generateSpriteVariations()`
- Palette optimization: `sprite.optimizePalette()`
- Pixel-perfect scaling: `sprite.createPixelPerfect()`
- Sprite combination: `sprite.combineSprites()`
- Elemental variations: `sprite.createElementalVariation()`
- Lighting variations: `sprite.createLightingVariation()`

Example:
```javascript
const fireHero = await sprite.createElementalVariation("A warrior", "fire", {
  intensity: 0.8
});
```

## 9. Best Practices

- Provide clear, detailed descriptions for best results
- Experiment with different options to find the optimal settings
- Use appropriate sprite sizes for your target platform
- Leverage special effects and variations to create diverse assets
- Combine multiple techniques for unique and dynamic sprites
- Always review and potentially touch up generated sprites for final polish