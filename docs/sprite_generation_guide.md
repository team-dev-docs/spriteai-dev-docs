

  # SpriteAI Documentation

SpriteAI is a powerful library for programmatically generating game sprites and pixel art using AI. This guide covers the main sprite generation methods and additional effects.

## Main Sprite Generation Methods

### generateSprite

Generates a character sprite with walking animation frames.

```javascript
const result = await sprite.generateSprite("red dragon", {
  size: "1024x1024",
  save: true
});
```

Parameters:
- `description` (string): Description of the sprite to generate
- `options` (object):
  - `size` (string): Image size (default "1024x1024") 
  - `save` (boolean): Whether to save the image file
  - `iterations` (number): Number of variations to generate

Returns an object with:
- `messages`: Frame size information
- `image`: Base64 encoded sprite image
- `metadata` (if requested): Additional sprite metadata

### generatePixelArt  

Creates a single pixel art sprite.

```javascript
const pixelArt = await sprite.generatePixelArt("space alien", {
  save: true
});
```

Parameters:
- `description` (string): Description of pixel art to generate
- `options` (object): 
  - `save` (boolean): Whether to save the image file

Returns an object with:
- `image`: Base64 encoded pixel art image
- `url`: URL of the generated image

### generateIsometric

Generates an isometric view sprite.

```javascript 
const isoSprite = await sprite.generateIsometric("medieval castle", {
  save: true
});
```

Parameters:
- `description` (string): Description of isometric sprite
- `options` (object):
  - `save` (boolean): Whether to save the image file

Returns an object with:
- `image`: Base64 encoded isometric sprite
- `url`: URL of the generated image

### generateAnimatedEmoji

Creates a 4-frame animated emoji.

```javascript
const animEmoji = await sprite.generateAnimatedEmoji("laughing face", {
  save: true  
});
```

Parameters:
- `description` (string): Description of animated emoji
- `options` (object):
  - `save` (boolean): Whether to save the image file

Returns an object with:
- `image`: Base64 encoded animated emoji frames
- `url`: URL of the generated image

### generateRetroConsole

Generates a sprite in the style of a retro game console.

```javascript
const retroSprite = await sprite.generateRetroConsole("space invader", "genesis", {
  save: true
});
```

Parameters:
- `description` (string): Description of retro sprite
- `consoleType` (string): Retro console to emulate (e.g. "genesis", "msx", "commodore64")
- `options` (object):
  - `save` (boolean): Whether to save the image file

Returns an object with:
- `image`: Base64 encoded retro-style sprite
- `url`: URL of the generated image

## Additional Effects and Variations

### addOutline

Adds an outline to a sprite.

```javascript
const outlined = await sprite.addOutline("cat", {
  color: { r: 0, g: 0, b: 0, alpha: 255 },
  thickness: 2
});
```

### createGlitchArt

Applies a glitch effect to a sprite.

```javascript
const glitched = await sprite.createGlitchArt("computer", {
  sortMode: "brightness",
  noiseAmount: 15  
});
```

### optimizePalette

Optimizes the color palette of a sprite.

```javascript
const optimized = await sprite.optimizePalette("tropical bird", 16);
```

### addShadow

Adds a shadow effect to a sprite.

```javascript
const shadowed = await sprite.addShadow("tree", {
  opacity: 0.6,
  blur: 4,
  offsetX: 8,
  offsetY: 8
});
```

### createMirrorSprite

Creates a mirrored version of a sprite.

```javascript
const mirrored = await sprite.createMirrorSprite("butterfly", "horizontal", {
  fade: true
});
```

### addWaveEffect

Applies a wave distortion effect.

```javascript
const waved = await sprite.addWaveEffect("ocean", {
  amplitude: 15,
  frequency: 0.08,
  frames: 12
});
```

### createElementalVariation

Generates an elemental variation of a sprite.

```javascript
const fireSprite = await sprite.createElementalVariation("warrior", "fire", {
  intensity: 0.8,
  particleCount: 20
});
```

### createLightingVariation

Applies dynamic lighting to a sprite.

```javascript
const litSprite = await sprite.createLightingVariation("cave", {
  lightColor: { r: 255, g: 200, b: 100 },
  intensity: 0.9,
  direction: "top-right",
  shadows: true
});
```

### addWeatherEffect

Adds weather effects to a sprite.

```javascript
const rainySprite = await sprite.addWeatherEffect("landscape", {
  type: "rain",
  intensity: 0.7,
  frames: 15,
  speed: 1.2
});
```

## Best Practices

1. Be specific in your sprite descriptions for best results.
2. Experiment with different options and effects to achieve desired looks.
3. Use `save: true` to keep generated sprites for later use.
4. Optimize palettes for retro-style sprites.
5. Combine multiple effects for more complex sprite variations.
6. Use elemental and lighting variations to create mood and atmosphere.
7. Animate sprites using frame interpolation for smoother animations.
8. Leverage weather and particle effects for dynamic game environments.

  