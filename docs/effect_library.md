# Effect Library Documentation

This document provides an overview of the available sprite effects in the library. Each effect is explained with its purpose, parameters, and visual examples.

## 1. Pixelation Effect

### Purpose:
Creates a pixelated version of the sprite, simulating lower resolution graphics.

### Parameters:
- `pixelSize`: Size of each pixel block (default: 8)
- `preserveAlpha`: Whether to maintain original alpha values (default: true)
- `mode`: Pixelation mode, either 'average' or 'dominant' (default: 'average')

### Example:
```javascript
const pixelated = await sprite.addPixelationEffect('character', {
  pixelSize: 12,
  mode: 'dominant'
});
```

## 2. Mosaic Effect

### Purpose:
Applies a mosaic-like effect to the sprite, creating a tiled appearance.

### Parameters:
- `tileSize`: Size of each mosaic tile (default: 32)
- `columns`: Number of columns in the mosaic (default: 3)
- `rows`: Number of rows in the mosaic (default: 3)
- `rotation`: Whether to randomly rotate tiles (default: true)
- `scale`: Whether to randomly scale tiles (default: true)
- `spacing`: Spacing between tiles (default: 0)

### Example:
```javascript
const mosaic = await sprite.addMosaicEffect('landscape', {
  tileSize: 24,
  columns: 4,
  rows: 4,
  spacing: 2
});
```

## 3. Dissolve Effect

### Purpose:
Creates a dissolve animation effect, useful for transitions or disintegration effects.

### Parameters:
- `steps`: Number of dissolution steps (default: 10)
- `pattern`: Dissolution pattern ('random', 'cellular', or 'gradient') (default: 'random')
- `direction`: Dissolve direction ('in' or 'out') (default: 'out')
- `seed`: Random seed for reproducible patterns (default: current timestamp)

### Example:
```javascript
const dissolve = await sprite.addDissolveEffect('object', {
  steps: 15,
  pattern: 'cellular',
  direction: 'in'
});
```

## 4. Splash Effect

### Purpose:
Applies a splash or ripple effect to the sprite, simulating liquid or energy impacts.

### Parameters:
- `intensity`: Intensity of the splash distortion (default: 30)
- `rippleCount`: Number of ripple rings (default: 3)
- `frames`: Number of animation frames (default: 10)
- `speed`: Speed of ripple expansion (default: 1)
- `center`: Custom center point for the effect (default: center of image)

### Example:
```javascript
const splash = await sprite.addSplashEffect('water_drop', {
  intensity: 40,
  rippleCount: 5,
  frames: 20
});
```

## 5. Shatter Effect

### Purpose:
Creates a shattering animation effect, breaking the sprite into pieces.

### Parameters:
- `pieces`: Number of shatter pieces (default: 12)
- `spread`: How far pieces spread (default: 100)
- `rotation`: Whether pieces should rotate (default: true)
- `gravity`: Gravity effect on pieces (default: 0.5)
- `frames`: Number of animation frames (default: 15)
- `pattern`: Shatter pattern ('radial' or 'grid') (default: 'radial')

### Example:
```javascript
const shatter = await sprite.addShatterEffect('glass', {
  pieces: 20,
  spread: 150,
  frames: 25,
  pattern: 'grid'
});
```

## 6. Kaleidoscope Effect

### Purpose:
Applies a kaleidoscope-like effect to the sprite, creating symmetrical patterns.

### Parameters:
- `segments`: Number of repeated segments (default: 8)
- `rotation`: Base rotation angle (default: 0)
- `zoom`: Zoom factor (default: 1.0)
- `centerX`: Center point X (0-1) (default: 0.5)
- `centerY`: Center point Y (0-1) (default: 0.5)
- `frames`: Number of animation frames (default: 1)

### Example:
```javascript
const kaleidoscope = await sprite.addKaleidoscopeEffect('mandala', {
  segments: 12,
  rotation: Math.PI / 6,
  zoom: 1.2,
  frames: 30
});
```

These effects provide a wide range of visual modifications and animations that can be applied to sprites, enhancing their appearance and creating dynamic visuals for games or interactive applications.