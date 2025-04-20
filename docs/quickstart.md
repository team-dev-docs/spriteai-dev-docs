# Quick Start Guide for SpriteAI

This guide will help you get started with SpriteAI, a powerful tool for generating game assets using AI.

## Installation

```bash
npm install spriteai
```

## Basic Usage

SpriteAI provides two main functions for generating game assets:

1. `generateCharacterSpritesheet` - Creates character animation spritesheets
2. `generateLandscapeSprite` - Creates landscape and background scenes

### Generating Character Spritesheets

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

const result = await generateCharacterSpritesheet('a medieval knight with armor', {
  states: ['idle', 'walk', 'attack', 'jump'],
  framesPerState: 8,
  style: 'pixel-art'
});

console.log(result.spritesheet); // Base64 encoded spritesheet
console.log(result.metadata); // Animation metadata
```

### Generating Landscape Sprites

```javascript
import { generateLandscapeSprite } from 'spriteai';

const landscape = await generateLandscapeSprite('a mountain forest with waterfall', {
  style: 'pixel-art',
  timeOfDay: 'sunset',
  weather: 'clear',
  perspective: 'side-scrolling'
});

console.log(landscape.landscape); // Base64 encoded landscape
console.log(landscape.metadata); // Landscape metadata
```

## Advanced Options

### Character Spritesheet Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| states | array | ['idle', 'walk', 'run', 'attack'] | Animation states to generate |
| framesPerState | number | 6 | Number of frames per animation state |
| size | string | '1024x1024' | Output size of the spritesheet |
| style | string | 'pixel-art' | Art style (e.g., pixel-art, cartoon) |
| padding | number | 1 | Padding between sprites |
| direction | string | 'right' | Base direction of character |
| save | boolean | false | Whether to save the generated image locally |

### Landscape Sprite Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| size | string | '1024x1024' | Output size of the landscape |
| style | string | 'pixel-art' | Art style (e.g., pixel-art, cartoon) |
| timeOfDay | string | 'day' | Time setting (day, night, sunset, dawn) |
| weather | string | 'clear' | Weather conditions (clear, rainy, foggy, snowy) |
| perspective | string | 'side-scrolling' | View perspective (side-scrolling, top-down, isometric) |
| save | boolean | false | Whether to save the generated image locally |
| removeBackground | boolean | false | Whether to remove the white background |
| backgroundColor | string | '#FFFFFF' | Background color to remove (if removeBackground is true) |
| colorThreshold | number | 0.1 | Threshold for background color removal (higher values remove more similar colors) |

## Background Removal

SpriteAI supports background removal for landscape sprites, making it easier to integrate assets into your games:

```javascript
const landscape = await generateLandscapeSprite('a castle on a hill', {
  removeBackground: true,
  backgroundColor: '#FFFFFF',
  colorThreshold: 0.2
});
```

## Saving Assets Locally

Both generator functions support saving the output directly to your project's assets folder:

```javascript
await generateCharacterSpritesheet('a wizard casting spells', {
  save: true  // Saves to ./assets/a_wizard_casting_spells_spritesheet.png
});

await generateLandscapeSprite('a haunted forest', {
  save: true  // Saves to ./assets/a_haunted_forest_landscape.png
});
```

## Working with Generated Assets

The generated assets are returned both as URLs (for the original AI-generated image) and as base64-encoded strings that can be easily used in web applications:

```javascript
const sprite = await generateCharacterSpritesheet('robot');
document.getElementById('character').src = sprite.spritesheet;

const landscape = await generateLandscapeSprite('cyberpunk city');
document.getElementById('background').src = landscape.landscape;
```

## Metadata

Both functions return helpful metadata that you can use in your game engine:

### Character Metadata Example

```javascript
{
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  totalFrames: 24,
  dimensions: {
    width: 1024,
    height: 1024
  },
  frameData: {
    idle: {
      row: 0,
      frames: 6,
      startFrame: 0,
      endFrame: 5
    },
    // ... other states
  }
}
```

This quick start guide covers the basics to get you up and running with SpriteAI. For more detailed information, check the full API documentation.