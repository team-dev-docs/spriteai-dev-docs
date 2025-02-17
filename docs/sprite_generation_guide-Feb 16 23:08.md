# Sprite Generation Guide

This guide provides detailed instructions on how to use the sprite generation features in the spriteAI library. It covers generating basic sprites, applying effects, and creating animated sprites.

## Generating Basic Sprites

To generate a basic sprite, use the `generateSprite` function:

```javascript
const result = await sprite.generateSprite("a red robot", {
  size: "256x256"
});
```

This will return an object containing the generated sprite image as a data URL.

Options:
- `size`: Image size (default "1024x1024")
- `save`: Boolean to save image file (default false)

## Applying Effects

The library provides several functions to apply effects to sprites:

### Add Outline

```javascript 
const result = await sprite.addOutline("robot", {
  color: { r: 255, g: 0, b: 0, alpha: 255 },
  thickness: 2
});
```

### Create Glitch Art

```javascript
const result = await sprite.createGlitchArt("robot", {
  sortMode: "brightness",
  noiseAmount: 15  
});
```

### Add Pixelation

```javascript
const result = await sprite.addPixelationEffect("robot", {
  pixelSize: 8,
  mode: "average"
});
```

## Creating Animated Sprites

To generate animated sprites, use functions like:

### Create Sprite Animation

```javascript
const result = await sprite.createSpriteAnimation("walking robot", 4, {
  steps: 5
});
```

This generates 4 keyframes and interpolates 5 steps between each.

### Add Wave Effect

```javascript
const result = await sprite.addWaveEffect("flag", {
  intensity: 20,
  frames: 10
});
```

Creates a waving animation effect.

### Generate Character Spritesheet  

```javascript
const result = await sprite.generateCharacterSpritesheet("knight", {
  states: ["idle", "walk", "attack"],
  framesPerState: 6
});
```

Generates a full character spritesheet with multiple animation states.

## Customization Options

Most effect functions accept customization options to control the output:

- `intensity`: Controls strength of effects
- `frames`: Number of animation frames
- `color`: Specify colors for tinting, outlines, etc.
- `pattern`: Choose effect patterns (e.g. "radial", "grid")
- `direction`: Set direction for some effects

Refer to each function's documentation for specific options available.