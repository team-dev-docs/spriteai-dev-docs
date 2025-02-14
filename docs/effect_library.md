# Sprite Effect Library Documentation

This document provides an overview of all available sprite effects in the library. Each effect is explained with its purpose, parameters, and visual examples.

## 1. Pixelation Effect

### Purpose:
Creates a pixelated version of the sprite by reducing the effective resolution.

### Parameters:
- `pixelSize` (default: 8): Size of each pixel block
- `preserveAlpha` (default: true): Whether to preserve the original alpha channel
- `mode` (default: 'average'): Pixel color calculation mode ('average' or 'dominant')

### Example:
[Before and After images would be inserted here]

## 2. Mosaic Effect

### Purpose:
Applies a mosaic-like effect by creating a grid of repeated, potentially modified tiles from the original sprite.

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
Creates a dissolution animation effect, gradually revealing or hiding the sprite.

### Parameters:
- `steps` (default: 10): Number of dissolution steps
- `pattern` (default: 'random'): Dissolution pattern ('random', 'cellular', or 'gradient')
- `direction` (default: 'out'): Dissolution direction ('in' or 'out')
- `seed` (default: current timestamp): Random seed for reproducible patterns

### Example:
[Before and After images would be inserted here]

## 4. Wave Distortion Effect

### Purpose:
Applies a wave-like distortion to the sprite, creating a rippling animation.

### Parameters:
- `amplitude` (default: 10): Intensity of the wave distortion
- `frequency` (default: 0.1): Frequency of the waves
- `phase` (default: 0): Starting phase of the wave
- `direction` (default: 'horizontal'): Direction of the wave ('horizontal' or 'vertical')
- `animationFrames` (default: 1): Number of animation frames to generate

### Example:
[Before and After images would be inserted here]

## 5. Glitch Wave Effect

### Purpose:
Creates a glitchy, wave-like distortion effect with optional scanlines and color channel shifting.

### Parameters:
- `intensity` (default: 20): Intensity of the wave distortion
- `glitchAmount` (default: 0.3): Amount of glitch effect (0-1)
- `scanlines` (default: true): Whether to add a scanline effect
- `frames` (default: 8): Number of animation frames
- `chromaShift` (default: 2): RGB channel shift amount

### Example:
[Before and After images would be inserted here]

## 6. Displacement Effect

### Purpose:
Applies a displacement map to the sprite, creating various distortion effects.

### Parameters:
- `intensity` (default: 15): Intensity of the displacement
- `displacementMap` (default: 'noise'): Type of displacement map ('noise', 'waves', or 'custom')
- `frames` (default: 1): Number of animation frames
- `frequency` (default: 0.05): Frequency for wave-based displacement
- `customMap` (optional): Custom displacement map data

### Example:
[Before and After images would be inserted here]

## 7. Weather Effect

### Purpose:
Adds various weather effects to the sprite, such as rain, snow, or fog.

### Parameters:
- `type` (default: 'rain'): Type of weather effect ('rain', 'snow', 'fog', 'storm', 'sandstorm')
- `intensity` (default: 0.5): Intensity of the weather effect (0-1)
- `frames` (default: 10): Number of animation frames
- `speed` (default: 1.0): Animation speed multiplier
- `tint` (optional): Color tint for the weather particles
- `particleSize` (default: 2): Size of weather particles

### Example:
[Before and After images would be inserted here]