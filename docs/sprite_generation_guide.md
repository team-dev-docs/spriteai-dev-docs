# Sprite Generation Guide

This guide provides detailed instructions on how to use the sprite generation features in our library. It covers generating basic sprites, applying effects, and creating animated sprites.

## Generating Basic Sprites

To generate a basic pixel art sprite:

```javascript
const result = await sprite.generatePixelArt("red dragon", {
  size: "64x64"
});

console.log(result.image); // Base64 encoded PNG
```

Options:
- `size`: Output size (default "1024x1024")
- `save`: Boolean to save file locally (default false)

## Applying Effects

### Add Outline

```javascript 
const result = await sprite.addOutline("knight", {
  color: { r: 0, g: 0, b: 0, alpha: 255 },
  thickness: 2
});

console.log(result.original); // Original sprite
console.log(result.outlined); // Outlined sprite
```

### Add Glow

```javascript
const result = await sprite.addShadow("magic orb", {
  opacity: 0.5,
  blur: 3, 
  color: { r: 255, g: 255, b: 0 }
});
```

### Apply Color Cycling

```javascript
const result = await sprite.createColorCycle("rainbow crystal");

console.log(result.frames); // Array of color cycled frames
```

## Creating Animated Sprites

### Generate Spritesheet

```javascript
const result = await sprite.generateCharacterSpritesheet("warrior", {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 4,
  size: '512x512'
});

console.log(result.spritesheet); // Full spritesheet image
console.log(result.metadata); // Animation metadata
```

### Add Weather Effect

```javascript
const result = await sprite.addWeatherEffect("landscape", {
  type: 'rain',
  intensity: 0.7,
  frames: 10
});

console.log(result.weatherFrames); // Array of weather effect frames
```

## Customization Options

Most methods accept an `options` object for customization:

- `save`: Boolean to save output locally
- `size`: Output dimensions 
- `style`: Art style (e.g. "pixel-art", "isometric")
- `colorScheme`: Color palette to use
- `frames`: Number of animation frames to generate

Refer to individual method documentation for specific customization options available.