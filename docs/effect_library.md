# Effect Library Documentation

This document details all available sprite effects provided by the library. For each effect, we'll explain its purpose, parameters, and provide visual examples of before and after application.

## 1. Pixelation Effect

### Purpose:
Creates a pixelated version of the sprite by reducing the level of detail.

### Parameters:
- `pixelSize` (default: 8): Size of each pixel block.
- `preserveAlpha` (default: true): Whether to maintain the original alpha channel.
- `mode` (default: 'average'): Pixelation mode, either 'average' or 'dominant'.

### Example:
```javascript
const result = await sprite.addPixelationEffect('character', { pixelSize: 4, mode: 'dominant' });
```

Before: [Original sprite image]
After: [Pixelated sprite image]

## 2. Mosaic Effect

### Purpose:
Creates a mosaic-like effect by breaking the sprite into tiles.

### Parameters:
- `tileSize` (default: 32): Size of each mosaic tile.
- `columns` (default: 3): Number of columns in the mosaic.
- `rows` (default: 3): Number of rows in the mosaic.
- `rotation` (default: true): Whether to randomly rotate tiles.
- `scale` (default: true): Whether to randomly scale tiles.
- `spacing` (default: 0): Spacing between tiles.

### Example:
```javascript
const result = await sprite.addMosaicEffect('character', { tileSize: 16, columns: 4, rows: 4 });
```

Before: [Original sprite image]
After: [Mosaic sprite image]

## 3. Dissolve Effect

### Purpose:
Creates a dissolve animation effect, useful for transitions or disintegration effects.

### Parameters:
- `steps` (default: 10): Number of dissolution steps.
- `pattern` (default: 'random'): Dissolution pattern ('random', 'cellular', or 'gradient').
- `direction` (default: 'out'): Dissolve direction ('in' or 'out').
- `seed` (default: current timestamp): Random seed for reproducible patterns.

### Example:
```javascript
const result = await sprite.addDissolveEffect('character', { steps: 15, pattern: 'cellular', direction: 'in' });
```

Before: [Original sprite image]
After: [Series of dissolve effect frames]

## 4. Wave Distortion Effect

### Purpose:
Applies a wave-like distortion to the sprite.

### Parameters:
- `intensity` (default: 10): Intensity of the wave distortion.
- `frequency` (default: 0.1): Frequency of the waves.
- `animationFrames` (default: 8): Number of animation frames to generate.

### Example:
```javascript
const result = await sprite.addWaveEffect('character', { intensity: 15, frequency: 0.05, animationFrames: 10 });
```

Before: [Original sprite image]
After: [Series of wave distortion effect frames]

## 5. Glitch Wave Effect

### Purpose:
Creates a glitchy, distorted version of the sprite with wave-like patterns.

### Parameters:
- `intensity` (default: 20): Intensity of the wave distortion.
- `glitchAmount` (default: 0.3): Amount of glitch effect (0-1).
- `scanlines` (default: true): Whether to add scanline effect.
- `frames` (default: 8): Number of animation frames.
- `chromaShift` (default: 2): RGB channel shift amount.

### Example:
```javascript
const result = await sprite.addGlitchWaveEffect('character', { intensity: 25, glitchAmount: 0.5, frames: 10 });
```

Before: [Original sprite image]
After: [Series of glitch wave effect frames]

## 6. Displacement Effect

### Purpose:
Applies a displacement map to the sprite, creating various distortion effects.

### Parameters:
- `intensity` (default: 15): Intensity of the displacement.
- `displacementMap` (default: 'noise'): Type of displacement map ('noise', 'waves', or 'custom').
- `frames` (default: 1): Number of animation frames.
- `frequency` (default: 0.05): Frequency of displacement pattern.
- `customMap` (optional): Custom displacement map data.

### Example:
```javascript
const result = await sprite.addDisplacementEffect('character', { intensity: 20, displacementMap: 'waves', frames: 5 });
```

Before: [Original sprite image]
After: [Series of displacement effect frames]

## 7. Weather Effect

### Purpose:
Adds weather-related effects to the sprite, such as rain, snow, or fog.

### Parameters:
- `type` (default: 'rain'): Type of weather effect ('rain', 'snow', 'fog', 'storm', 'sandstorm').
- `intensity` (default: 0.5): Intensity of the weather effect (0-1).
- `frames` (default: 10): Number of animation frames.
- `speed` (default: 1.0): Animation speed multiplier.
- `tint` (optional): Color tint for the weather particles.
- `particleSize` (default: 2): Size of weather particles.

### Example:
```javascript
const result = await sprite.addWeatherEffect('character', { type: 'snow', intensity: 0.7, frames: 15 });
```

Before: [Original sprite image]
After: [Series of weather effect frames]