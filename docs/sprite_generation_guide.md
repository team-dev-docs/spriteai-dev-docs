# Sprite Generation Guide

This guide provides detailed instructions on how to use the sprite generation features in our library. You can generate basic sprites, apply various effects, and create animated sprites.

## Table of Contents
1. [Generating Basic Sprites](#generating-basic-sprites)
2. [Applying Effects](#applying-effects)
3. [Creating Animated Sprites](#creating-animated-sprites)
4. [Customization Options](#customization-options)

## Generating Basic Sprites

To generate a basic sprite, use the `generateSprite` function:

```javascript
const result = await sprite.generateSprite("a cute cat", {
  size: "256x256",
  save: true
});
```

This will generate a sprite of a cute cat and save it to the assets folder.

## Applying Effects

You can apply various effects to your sprites:

### Add Outline
```javascript
const outlined = await sprite.addOutline("a cute cat", {
  color: { r: 255, g: 0, b: 0, alpha: 255 },
  thickness: 2
});
```

### Create Glitch Art
```javascript
const glitched = await sprite.createGlitchArt("a cute cat", {
  sortMode: "brightness",
  noiseAmount: 15
});
```

### Add Shadow
```javascript
const shadowed = await sprite.addShadow("a cute cat", {
  opacity: 0.5,
  blur: 5,
  offsetX: 10,
  offsetY: 10
});
```

## Creating Animated Sprites

To create animated sprites:

### Generate Spritesheet
```javascript
const spritesheet = await sprite.generateCharacterSpritesheet("adventurer", {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024'
});
```

### Create Wave Effect Animation
```javascript
const waveEffect = await sprite.addWaveEffect("ocean waves", {
  intensity: 20,
  frames: 10
});
```

## Customization Options

Many functions accept custom options for fine-tuning the output:

- `size`: Dimensions of the output image (e.g., "256x256")
- `save`: Boolean to determine if the sprite should be saved to disk
- `scale`: Scaling factor for the sprite
- `rotate`: Rotation angle in degrees
- `tint`: Color tint to apply to the sprite

Example with custom options:
```javascript
const customSprite = await sprite.generateSprite("a majestic dragon", {
  size: "512x512",
  save: true,
  scale: 1.5,
  rotate: 45,
  tint: { r: 100, g: 150, b: 200 }
});
```

Refer to the specific function documentation for more detailed customization options available for each effect or generation method.