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
- `save`: Save to file (default false)

## Applying Effects

### Add Outline

```javascript 
const result = await sprite.addOutline("red dragon", {
  color: { r: 255, g: 255, b: 255, alpha: 255 },
  thickness: 2
});

console.log(result.original); // Original sprite
console.log(result.outlined); // Outlined sprite
```

### Add Glow

```javascript
const result = await sprite.addGlitchArt("red dragon", {
  sortMode: "brightness",
  noiseAmount: 15  
});

console.log(result.original); // Original sprite
console.log(result.glitched); // Glitched sprite
```

### Weather Effects

```javascript
const result = await sprite.addWeatherEffect("forest scene", {
  type: "rain",
  intensity: 0.7,
  frames: 10,
  speed: 1.5
});

console.log(result.weatherFrames); // Array of weather effect frames
```

## Creating Animated Sprites

### Generate Character Spritesheet

```javascript
const result = await sprite.generateCharacterSpritesheet("knight", {
  states: ["idle", "walk", "attack"],
  framesPerState: 4,
  size: "512x512"  
});

console.log(result.spritesheet); // Full spritesheet image
console.log(result.metadata); // Animation metadata
```

### Create Wave Animation

```javascript
const result = await sprite.addWaveEffect("water", {
  intensity: 20,
  frames: 8
});

console.log(result.waveFrames); // Array of wave animation frames
```

## Customization Options

Most sprite generation and effect methods support additional options:

- `size`: Output dimensions 
- `style`: Art style (e.g. "pixel-art", "cartoon")
- `colorScheme`: Color palette to use
- `background`: Background color/transparency
- `frames`: Number of animation frames
- `intensity`: Effect strength (0.0-1.0)

Refer to the documentation for each specific method to see all available options.