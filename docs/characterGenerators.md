---
slug: /character-generators
sidebar_position: 2
---

# Character Generators

Dev-Docs provides convenient functions for generating character sprites using AI. This page covers the `generateNinja`, `generateSpaceman`, and `generateRobot` functions.

## Overview

These functions are built on top of the `generateCharacterSpritesheet` function and provide pre-configured options for creating specific character types. They simplify the process of generating character sprites for common game archetypes.

## generateNinja

Generates a ninja character sprite sheet.

### Usage

```javascript
import { generateNinja } from 'dev-docs/spriteAI';

const ninjaSprite = await generateNinja();
```

### Options

The `generateNinja` function accepts an optional options object with the following properties:

- `size`: The size of the generated image (default: '1024x1024')
- `style`: The art style to use (default: 'pixel-art')
- `save`: Whether to save the generated image to disk (default: false)

### Example

```javascript
const ninjaSprite = await generateNinja({
  size: '2048x2048',
  style: 'anime',
  save: true
});

console.log(ninjaSprite.metadata);
```

## generateSpaceman

Generates a spaceman character sprite sheet.

### Usage

```javascript
import { generateSpaceman } from 'dev-docs/spriteAI';

const spacemanSprite = await generateSpaceman();
```

### Options

The `generateSpaceman` function accepts the same options as `generateNinja`.

### Example

```javascript
const spacemanSprite = await generateSpaceman({
  size: '1024x1024',
  style: 'vector',
  save: true
});

console.log(spacemanSprite.spritesheet);
```

## generateRobot

Generates a robot character sprite sheet.

### Usage

```javascript
import { generateRobot } from 'dev-docs/spriteAI';

const robotSprite = await generateRobot();
```

### Options

The `generateRobot` function accepts the same options as `generateNinja` and `generateSpaceman`.

### Example

```javascript
const robotSprite = await generateRobot({
  size: '2048x2048',
  style: '3d',
  save: false
});

console.log(robotSprite.original);
```

## Return Value

All character generator functions return an object with the following properties:

- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded data URL of the processed sprite sheet
- `metadata`: Object containing information about the generated sprite sheet, including:
  - `states`: Array of animation states
  - `framesPerState`: Number of frames per animation state
  - `totalFrames`: Total number of frames in the sprite sheet
  - `dimensions`: Object with `width` and `height` of the sprite sheet
  - `frameData`: Object with information about each animation state's position in the sprite sheet

## Notes

- These functions use AI models to generate images, so results may vary between calls.
- Generated sprite sheets are optimized for game development, with consistent character sizes and clear frame separation.
- The `save` option will store generated images in an 'assets' folder with filenames based on the character type.
- Processing time may vary depending on the size and complexity of the requested sprite sheet.

For more advanced sprite generation options, refer to the [generateCharacterSpritesheet](/docs/generate-sprite) documentation.