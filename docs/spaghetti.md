# SpriteAI Documentation

## Introduction

SpriteAI is a powerful library for generating game assets using AI. This document provides an overview of the main functions and their usage.

## Functions

### generateCharacterSpritesheet

Generates a character spritesheet with customizable animation states.

```javascript
async function generateCharacterSpritesheet(description, options = {})
```

#### Parameters:
- `description`: String describing the character
- `options`: Object with the following properties:
  - `states`: Array of animation states (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState`: Number of frames per state (default: 6)
  - `size`: Image size (default: '1024x1024')
  - `style`: Art style (default: 'pixel-art')
  - `padding`: Padding between frames (default: 1)
  - `direction`: Character facing direction (default: 'right')

#### Returns:
An object containing:
- `original`: URL of the original generated image
- `spritesheet`: Base64 encoded spritesheet
- `metadata`: Object with spritesheet details

### generateEnvironmentSprites

Generates environment sprites for game backgrounds and tilesets.

```javascript
async function generateEnvironmentSprites(description, options = {})
```

#### Parameters:
- `description`: String describing the environment
- `options`: Object with the following properties:
  - `elements`: Number of distinct elements (default: 4)
  - `size`: Image size (default: '1024x1024')
  - `style`: Art style (default: 'pixel-art')
  - `padding`: Padding between elements (default: 1)
  - `theme`: Environment theme (default: 'fantasy')

#### Returns:
An object containing:
- `original`: URL of the original generated image
- `tileset`: Base64 encoded tileset
- `metadata`: Object with tileset details

### generateItemSprites

Generates item sprites for game inventories or pickups.

```javascript
async function generateItemSprites(description, options = {})
```

#### Parameters:
- `description`: String describing the items
- `options`: Object with the following properties:
  - `itemCount`: Number of items to generate (default: 4)
  - `size`: Image size (default: '1024x1024')
  - `style`: Art style (default: 'pixel-art')
  - `padding`: Padding between items (default: 1)
  - `itemType`: Type of items (default: 'equipment')
  - `background`: Background color (default: 'white')

#### Returns:
An object containing:
- `original`: URL of the original generated image
- `itemSheet`: Base64 encoded item sheet
- `metadata`: Object with item sheet details

### fetchAvailableAnimationStates

Retrieves available animation states for character spritesheets.

```javascript
async function fetchAvailableAnimationStates()
```

#### Returns:
An array of available animation states.

### fetchAvailableSpriteStyles

Retrieves available sprite styles for asset generation.

```javascript
async function fetchAvailableSpriteStyles()
```

#### Returns:
An array of available sprite styles.

## Usage Example

```javascript
import { generateCharacterSpritesheet } from 'spriteAI';

async function createHeroSprite() {
  const result = await generateCharacterSpritesheet('heroic knight', {
    states: ['idle', 'walk', 'attack'],
    framesPerState: 8,
    style: 'pixel-art',
    direction: 'right'
  });
  
  console.log(result.metadata);
  // Use result.spritesheet in your game engine
}

createHeroSprite();
```

This example generates a pixel-art spritesheet for a heroic knight character with idle, walk, and attack animations, each containing 8 frames.