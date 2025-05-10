# Sprite Utilities

This documentation covers the utility functions available for sprite manipulation in the Dev-Docs library.

## Overview

The sprite utilities module provides a set of functions for common sprite operations, including:

- Transforming sprites
- Creating sprite sheets
- Generating sprite animations  
- Extracting individual sprites from sheets
- Applying color effects
- Flipping and rotating sprites
- Adding visual effects like outlines and glows
- Applying pixel art filters

These utilities leverage the Sharp image processing library to perform efficient sprite manipulations.

## Key Functions

### transformSprite

Applies transformations like resizing and background removal to a sprite image.

```javascript
async function transformSprite(input, options = {})
```

**Parameters:**
- `input`: Buffer or file path of input sprite image
- `options`: Object containing transformation options

**Returns:** Promise resolving to an object with the transformed sprite buffer and metadata

### createSpriteSheet 

Combines multiple sprite images into a single sprite sheet.

```javascript
async function createSpriteSheet(sprites, options)
```

**Parameters:**
- `sprites`: Array of sprite image buffers or file paths
- `options`: Object with sprite sheet options like columns, spacing, etc.

**Returns:** Promise resolving to an object with the sprite sheet buffer and metadata

### createSpriteAnimation

Generates an animated WebP from a sequence of sprite frames.

```javascript  
async function createSpriteAnimation(frames, options = {})
```

**Parameters:**
- `frames`: Array of sprite frame buffers or file paths
- `options`: Animation options like delay, loop, etc.

**Returns:** Promise resolving to the animated WebP buffer

### extractSprites

Extracts individual sprites from a sprite sheet image.

```javascript
async function extractSprites(spriteSheet, options)
```

**Parameters:**
- `spriteSheet`: Buffer or file path of sprite sheet image
- `options`: Extraction options specifying rows, columns, etc.

**Returns:** Promise resolving to an array of extracted sprite objects

### colorizeSprite

Applies color manipulations like tinting and HSL adjustments to a sprite.

```javascript
async function colorizeSprite(input, options = {})
```

**Parameters:**
- `input`: Buffer or file path of input sprite
- `options`: Color manipulation options

**Returns:** Promise resolving to an object with the colorized sprite buffer and metadata

### flipRotateSprite

Flips and/or rotates a sprite image.

```javascript
async function flipRotateSprite(input, options = {})
```

**Parameters:**
- `input`: Buffer or file path of input sprite  
- `options`: Flip and rotation options

**Returns:** Promise resolving to an object with the transformed sprite buffer and metadata

### applyEffects

Adds visual effects like outlines, shadows, and glows to a sprite.

```javascript
async function applyEffects(input, options = {})
```

**Parameters:**
- `input`: Buffer or file path of input sprite
- `options`: Effect options for outlines, shadows, glows, etc.

**Returns:** Promise resolving to an object with the processed sprite buffer and metadata

### applyPixelArtFilters

Applies pixel art-specific filters and effects to a sprite.

```javascript
async function applyPixelArtFilters(input, options = {})
```

**Parameters:**
- `input`: Buffer or file path of input sprite
- `options`: Pixel art filter options 

**Returns:** Promise resolving to an object with the filtered sprite buffer and metadata

## Usage Examples

Here are some basic examples of using the sprite utility functions:

```javascript
import { sprite } from './path/to/sprite/module';

// Transform a sprite
const transformed = await sprite.transformSprite('input.png', { 
  resize: { width: 64, height: 64 }
});

// Create a sprite sheet
const sheet = await sprite.createSpriteSheet(['sprite1.png', 'sprite2.png'], {
  columns: 2,
  spacing: 1
});

// Generate an animation  
const animation = await sprite.createSpriteAnimation(['frame1.png', 'frame2.png'], {
  delay: 200,
  loop: 0  
});

// Extract sprites from a sheet
const sprites = await sprite.extractSprites('sheet.png', {
  rows: 2,
  columns: 3
});

// Colorize a sprite
const colored = await sprite.colorizeSprite('sprite.png', {
  tint: { r: 255, g: 0, b: 0, alpha: 0.5 }
});

// Flip and rotate
const flipped = await sprite.flipRotateSprite('sprite.png', {
  flipHorizontal: true,
  rotate: 90
});

// Apply effects
const withEffects = await sprite.applyEffects('sprite.png', {
  outline: { width: 2, color: { r: 0, g: 0, b: 0, alpha: 1 } },
  glow: { radius: 10, color: { r: 255, g: 255, b: 0, alpha: 0.5 } }
});

// Apply pixel art filters  
const pixelated = await sprite.applyPixelArtFilters('sprite.png', {
  pixelation: 'medium',
  dithering: { enabled: true, pattern: 'bayer' }
});
```

For more detailed information on options and usage, refer to the inline documentation in the source code.