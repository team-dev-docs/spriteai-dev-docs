# Sprite Effect Library Documentation

This document outlines all available sprite effects provided by the library. Each effect is described with its purpose, parameters, and visual examples.

## 1. Pixelation Effect

### Purpose:
Creates a pixelated version of the sprite, simulating lower resolution.

### Parameters:
- `pixelSize` (default: 8): Size of each pixel block
- `preserveAlpha` (default: true): Whether to preserve the original alpha channel
- `mode` (default: 'average'): Pixelation mode ('average' or 'dominant')

### Example:
[Before and After images would be inserted here]

## 2. Mosaic Effect

### Purpose:
Generates a mosaic-style effect by creating a grid of repeated, potentially modified tiles from the original sprite.

### Parameters:
- `tileSize` (default: 32): Size of each mosaic tile
- `columns` (default: 3): Number of columns in the mosaic
- `rows` (default: 3): Number of rows in the mosaic
- `rotation` (default: true): Whether to randomly rotate tiles
- `scale` (default: true): Whether to randomly scale tiles
- `spacing` (default: 0): Spacing between tiles

### Example:
[Before and After images would be inserted here]

## 3. Dissolve Effect

### Purpose:
Creates a dissolve animation effect, gradually revealing or hiding the sprite.

### Parameters:
- `steps` (default: 10): Number of dissolution steps
- `pattern` (default: 'random'): Dissolution pattern ('random', 'cellular', or 'gradient')
- `direction` (default: 'out'): Dissolve direction ('in' or 'out')
- `seed` (default: current timestamp): Random seed for reproducible patterns

### Example:
[Animated GIF showing dissolve effect would be inserted here]

## 4. Splash Effect

### Purpose:
Generates a splash or ripple effect emanating from the center of the sprite.

### Parameters:
- `intensity` (default: 30): Intensity of the splash distortion
- `rippleCount` (default: 3): Number of ripple rings
- `frames` (default: 10): Number of animation frames
- `speed` (default: 1): Speed of ripple expansion
- `center` (default: null): Custom center point, or null for center

### Example:
[Animated GIF showing splash effect would be inserted here]

## 5. Shatter Effect

### Purpose:
Creates an animation of the sprite breaking into pieces.

### Parameters:
- `pieces` (default: 12): Number of shatter pieces
- `spread` (default: 100): How far pieces spread
- `rotation` (default: true): Whether pieces should rotate
- `gravity` (default: 0.5): Gravity effect on pieces
- `frames` (default: 15): Number of animation frames
- `pattern` (default: 'radial'): Shatter pattern ('radial' or 'grid')

### Example:
[Animated GIF showing shatter effect would be inserted here]

## 6. Kaleidoscope Effect

### Purpose:
Applies a kaleidoscopic effect to the sprite, creating symmetrical patterns.

### Parameters:
- `segments` (default: 8): Number of repeated segments
- `rotation` (default: 0): Base rotation angle
- `zoom` (default: 1.0): Zoom factor
- `centerX` (default: 0.5): Center point X (0-1)
- `centerY` (default: 0.5): Center point Y (0-1)
- `frames` (default: 1): Number of animation frames

### Example:
[Before and After images or Animated GIF would be inserted here]

## 7. Glitch Wave Effect

### Purpose:
Creates a glitchy, wave-distorted version of the sprite.

### Parameters:
- `intensity` (default: 20): Intensity of the wave distortion
- `glitchAmount` (default: 0.3): Amount of glitch effect (0-1)
- `scanlines` (default: true): Add scanline effect
- `frames` (default: 8): Number of animation frames
- `chromaShift` (default: 2): RGB channel shift amount

### Example:
[Animated GIF showing glitch wave effect would be inserted here]

## 8. Displacement Effect

### Purpose:
Applies a displacement map to the sprite, creating various distortion effects.

### Parameters:
- `intensity` (default: 15): Intensity of the displacement
- `displacementMap` (default: 'noise'): Type of displacement map ('noise', 'waves', or 'custom')
- `frames` (default: 1): Number of animation frames
- `frequency` (default: 0.05): Frequency of displacement pattern
- `customMap` (default: null): Custom displacement map data

### Example:
[Before and After images or Animated GIF would be inserted here]