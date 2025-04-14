# Quick Start Guide

This guide will help you get started with the SpriteAI library, which allows you to generate character spritesheets and environment sprites using AI.

## Installation

First, install the SpriteAI library in your project:

```bash
npm install spriteai
```

## Importing the Library

Import the necessary functions from the SpriteAI library:

```javascript
import { 
  generateCharacterSpritesheet, 
  generateEnvironmentSprites, 
  fetchAvailableAnimationStates, 
  fetchAvailableSpriteStyles 
} from 'spriteai';
```

## Generating a Character Spritesheet

To generate a character spritesheet, use the `generateCharacterSpritesheet` function:

```javascript
const description = 'A brave knight in shining armor';
const options = {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  direction: 'right',
  save: true
};

const result = await generateCharacterSpritesheet(description, options);
console.log(result.spritesheet); // Base64 encoded spritesheet
console.log(result.metadata); // Spritesheet metadata
```

## Generating Environment Sprites

To generate environment sprites, use the `generateEnvironmentSprites` function:

```javascript
const envDescription = 'Forest clearing with ancient ruins';
const envOptions = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy',
  save: true
};

const envResult = await generateEnvironmentSprites(envDescription, envOptions);
console.log(envResult.tileset); // Base64 encoded tileset
console.log(envResult.metadata); // Tileset metadata
```

## Fetching Available Animation States

To get a list of available animation states:

```javascript
const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

## Fetching Available Sprite Styles

To get a list of available sprite styles:

```javascript
const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Notes

- The generated spritesheets and environment sprites are saved in the `assets` folder of your project when the `save` option is set to `true`.
- The library uses AI models to generate images, so results may vary for the same input.
- Make sure you have the necessary permissions and API keys set up for the AI image generation service used by SpriteAI.

This quick start guide covers the basic usage of the main functions in the SpriteAI library. For more detailed information on each function and its options, please refer to the full documentation.