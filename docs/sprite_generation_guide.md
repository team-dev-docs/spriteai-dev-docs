# Sprite Generation Guide

This guide provides detailed instructions on how to use the sprite generation features in our library. It covers generating basic sprites, applying effects, and creating animated sprites.

## Table of Contents
1. Basic Sprite Generation
2. Applying Effects
3. Creating Animated Sprites
4. Customization Options

## 1. Basic Sprite Generation

To generate a basic sprite, use the `generatePixelArt` function:

```javascript
const result = await sprite.generatePixelArt("a red apple", {
  size: "64x64"
});
```

This will return an object containing the generated sprite image in base64 format.

## 2. Applying Effects

You can apply various effects to your sprites:

### Add Outline
```javascript
const result = await sprite.addOutline("a red apple", {
  color: { r: 0, g: 0, b: 0, alpha: 255 },
  thickness: 1
});
```

### Create Glitch Art
```javascript
const result = await sprite.createGlitchArt("a red apple", {
  sortMode: 'brightness',
  noiseAmount: 10
});
```

### Add Shadow
```javascript
const result = await sprite.addShadow("a red apple", {
  opacity: 0.5,
  blur: 3,
  offsetX: 5,
  offsetY: 5
});
```

## 3. Creating Animated Sprites

To create animated sprites:

### Generate Sprite Animation
```javascript
const result = await sprite.createSpriteAnimation("a walking cat", 4, {
  steps: 3
});
```

### Add Wave Effect
```javascript
const result = await sprite.addWaveEffect("a flag", {
  intensity: 20,
  frames: 10
});
```

## 4. Customization Options

Most functions accept an `options` object that can include:

- `size`: Output size (e.g., "64x64")
- `save`: Boolean to save the sprite to disk
- `rotate`: Rotation angle in degrees
- `tint`: Color tint to apply
- `scale`: Scale factor for the sprite

Example with custom options:

```javascript
const result = await sprite.generatePixelArt("a blue car", {
  size: "128x128",
  save: true,
  rotate: 45,
  tint: { r: 0, g: 0, b: 255 },
  scale: 1.5
});
```

Refer to individual function documentation for specific customization options available for each effect or animation type.