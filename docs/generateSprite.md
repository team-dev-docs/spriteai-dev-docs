---
slug: /
sidebar_position: 1
---
# SpriteProcessor and Unified Sprite API

## Overview

The SpriteProcessor class and unified sprite API provide a comprehensive set of tools for processing, transforming, and manipulating sprite images. This documentation covers the main features and usage of the new unified API.

## SpriteProcessor Class

The SpriteProcessor class is the core component for sprite manipulation. It offers various methods for applying transformations, pixel art effects, and visual effects to sprite images.

### Constructor

```javascript
const processor = new SpriteProcessor(input);
```

- `input`: Can be a file path (string) or a buffer containing the image data.

### Methods

#### process(options)

Applies a series of operations to the sprite image.

```javascript
await processor.process({
  transform: {...},
  pixelArt: {...},
  effects: {...}
});
```

- `options`: An object containing operation configurations:
  - `transform`: Transformations like resize, rotate, flip, etc.
  - `pixelArt`: Pixel art effects like pixelation and color palette reduction.
  - `effects`: Visual effects like outline, shadow, and glow.

#### output(options)

Generates the output buffer and metadata for the processed image.

```javascript
const result = await processor.output({
  format: 'png',
  quality: 80
});
```

- `options`: Output configuration (format, quality, etc.)
- Returns: An object with `buffer` (processed image data) and `metadata`.

## Unified API Functions

### processSprite(input, options)

Process a single sprite with given operations.

```javascript
const result = await processSprite(input, {
  transform: {...},
  pixelArt: {...},
  effects: {...},
  output: {...}
});
```

### processSprites(sprites, options)

Process multiple sprites with the same set of operations.

```javascript
const results = await processSprites(spriteArray, options);
```

### createSpriteSheet(sprites, options)

Create a sprite sheet from multiple images.

```javascript
const sheet = await createSpriteSheet(spriteArray, {
  columns: 4,
  spacing: 2,
  padding: 10
});
```

### createSpriteAnimation(frames, options)

Create an animated sprite sequence.

```javascript
const animation = await createSpriteAnimation(frameArray, {
  delay: 100,
  loop: 0
});
```

### extractSprites(spriteSheet, options)

Extract individual sprites from a sprite sheet.

```javascript
const sprites = await extractSprites(sheetImage, {
  columns: 4,
  rows: 3,
  padding: 2,
  spacing: 1
});
```

## Examples

### Basic Sprite Processing

```javascript
const { processSprite } = require('./sprite-module');

const result = await processSprite('input.png', {
  transform: {
    resize: { width: 64, height: 64 },
    flipHorizontal: true
  },
  pixelArt: {
    pixelation: 'medium',
    palette: { preset: 'gameboy' }
  },
  effects: {
    outline: { width: 2, color: { r: 0, g: 0, b: 0, alpha: 1 } }
  },
  output: { format: 'png', quality: 90 }
});

console.log(result.metadata);
// Use result.buffer for the processed image data
```

### Creating a Sprite Sheet

```javascript
const { createSpriteSheet } = require('./sprite-module');

const sheet = await createSpriteSheet(['sprite1.png', 'sprite2.png', 'sprite3.png'], {
  columns: 3,
  spacing: 2,
  padding: 5
});

console.log(sheet.width, sheet.height);
// Use sheet.buffer for the sprite sheet image data
```

## Notes

- The new unified API provides a more consistent and flexible approach to sprite manipulation compared to the legacy methods.
- When using the `processSprites` function, all sprites will be processed with the same options.
- The `createSpriteAnimation` function outputs an animated WebP image by default.
- For backwards compatibility, legacy method aliases are still available but may be deprecated in future versions.
