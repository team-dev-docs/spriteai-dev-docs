# Sprite Effect Library Documentation

This document provides an overview of all available sprite effects provided by the library. Each effect is explained in detail, including its purpose, parameters, and visual examples.

## 1. Pixelation Effect

### Purpose:
Creates a pixelated version of the sprite, simulating lower resolution or retro-style graphics.

### Parameters:
- `pixelSize` (default: 8): Size of each pixel block
- `preserveAlpha` (default: true): Whether to preserve original alpha values
- `mode` (default: 'average'): Pixelation mode ('average' or 'dominant')

### Example:
```javascript
const result = await sprite.addPixelationEffect('character', { pixelSize: 4, mode: 'dominant' });
```

**Before:**
[Image of original sprite]

**After:**
[Image of pixelated sprite]

## 2. Mosaic Effect

### Purpose:
Creates a mosaic-style effect by breaking the sprite into larger tiles.

### Parameters:
- `tileSize` (default: 32): Size of each mosaic tile
- `columns` (default: 3): Number of columns in the mosaic
- `rows` (default: 3): Number of rows in the mosaic
- `rotation` (default: true): Whether to randomly rotate tiles
- `scale` (default: true): Whether to randomly scale tiles
- `spacing` (default: 0): Spacing between tiles

### Example:
```javascript
const result = await sprite.addMosaicEffect('character', { tileSize: 16, columns: 4, rows: 4 });
```

**Before:**
[Image of original sprite]

**After:**
[Image of sprite with mosaic effect]

## 3. Dissolve Effect

### Purpose:
Creates a dissolve animation effect, gradually revealing or hiding the sprite.

### Parameters:
- `steps` (default: 10): Number of dissolution steps
- `pattern` (default: 'random'): Dissolution pattern ('random', 'cellular', or 'gradient')
- `direction` (default: 'out'): Dissolve direction ('in' or 'out')
- `seed` (default: current timestamp): Random seed for reproducible patterns

### Example:
```javascript
const result = await sprite.addDissolveEffect('character', { steps: 15, pattern: 'cellular', direction: 'in' });
```

**Before:**
[Image of original sprite]

**After:**
[Animated GIF showing dissolve effect]

## 4. Wave Distortion Effect

### Purpose:
Applies a wave-like distortion to the sprite, creating a rippling or wavy animation.

### Parameters:
- `intensity` (default: 30): Intensity of the wave distortion
- `rippleCount` (default: 3): Number of ripple rings
- `frames` (default: 10): Number of animation frames
- `speed` (default: 1): Speed of ripple expansion

### Example:
```javascript
const result = await sprite.addWaveEffect('character', { intensity: 20, frames: 8 });
```

**Before:**
[Image of original sprite]

**After:**
[Animated GIF showing wave distortion effect]

## 5. Glitch Wave Effect

### Purpose:
Applies a glitch-like wave distortion to the sprite, creating a digital distortion effect.

### Parameters:
- `intensity` (default: 20): Intensity of the wave distortion
- `glitchAmount` (default: 0.3): Amount of glitch effect (0-1)
- `scanlines` (default: true): Add scanline effect
- `frames` (default: 8): Number of animation frames
- `chromaShift` (default: 2): RGB channel shift amount

### Example:
```javascript
const result = await sprite.addGlitchWaveEffect('character', { intensity: 25, glitchAmount: 0.5 });
```

**Before:**
[Image of original sprite]

**After:**
[Animated GIF showing glitch wave effect]

## 6. Displacement Effect

### Purpose:
Applies a displacement map to the sprite, creating various distortion effects.

### Parameters:
- `intensity` (default: 15): Intensity of the displacement
- `displacementMap` (default: 'noise'): Type of displacement map ('noise', 'waves', or 'custom')
- `frames` (default: 1): Number of animation frames
- `frequency` (default: 0.05): Frequency of displacement pattern
- `customMap` (optional): Custom displacement map data

### Example:
```javascript
const result = await sprite.addDisplacementEffect('character', { intensity: 10, displacementMap: 'waves', frames: 5 });
```

**Before:**
[Image of original sprite]

**After:**
[Animated GIF showing displacement effect]