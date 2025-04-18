---
slug: /quickstart
sidebar_position: 0
---

# SpriteAI Quickstart Guide

## Overview

SpriteAI is a powerful SDK that allows you to generate game-ready sprite assets using AI. With just a few lines of code, you can create character spritesheets, environment tiles, and item collections for your games.

## Installation

```bash
npm install sprite-ai
```

Or using Yarn:

```bash
yarn add sprite-ai
```

## Setting up

First, import the necessary functions from the SpriteAI package:

```javascript
import { 
  generateCharacterSpritesheet, 
  generateEnvironmentSprites, 
  generateItemSprites,
  fetchAvailableAnimationStates,
  fetchAvailableSpriteStyles
} from 'sprite-ai';
```

## Generating Character Spritesheets

### Basic Usage

```javascript
const result = await generateCharacterSpritesheet('a cyberpunk robot warrior');

// Access the generated spritesheet
const spritesheetDataUrl = result.spritesheet;

// Access metadata about the sprite animations
const metadata = result.metadata;
console.log(metadata.states); // List of animation states
console.log(metadata.framesPerState); // Number of frames per animation
```

### Advanced Options

```javascript
const options = {
  states: ['idle', 'walk', 'run', 'attack', 'jump'],  // Animation states to generate
  framesPerState: 8,                                    // Number of frames per animation
  size: '1024x1024',                                    // Resolution of the output image
  style: 'pixel-art',                                   // Visual style
  padding: 2,                                           // Pixel padding between sprites
  direction: 'right',                                   // Direction character faces
  save: true                                            // Save to disk
};

const result = await generateCharacterSpritesheet('a medieval knight', options);
```

## Generating Environment Sprites

```javascript
const options = {
  elements: 6,           // Number of environment elements to generate
  style: 'pixel-art',    // Visual style
  theme: 'sci-fi',       // Environment theme
  save: true             // Save to disk
};

const result = await generateEnvironmentSprites('space station interior', options);

// Access the generated tileset
const tilesetDataUrl = result.tileset;

// Access metadata
console.log(result.metadata.elements);  // Number of tile elements
console.log(result.metadata.theme);     // Theme used
```

## Generating Item Sprites

```javascript
const options = {
  itemCount: 8,           // Number of items to generate
  style: 'pixel-art',      // Visual style
  itemType: 'weapons',     // Type of items
  background: 'transparent',// Background setting
  save: true               // Save to disk
};

const result = await generateItemSprites('magical staffs', options);

// Access the generated item sheet
const itemSheetDataUrl = result.itemSheet;
```

## Fetching Available Options

You can programmatically fetch the available animation states and sprite styles:

```javascript
// Get available animation states
const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']

// Get available sprite styles
const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Working with Generated Sprites

### In a Web Application

```javascript
// Generate a character spritesheet
const result = await generateCharacterSpritesheet('fantasy warrior');

// Display the spritesheet in an HTML image element
const imgElement = document.createElement('img');
imgElement.src = result.spritesheet; // This is a data URL
document.body.appendChild(imgElement);

// Or if you're using a game engine like Phaser
this.load.spritesheet('character', result.spritesheet, { 
  frameWidth: 64,  // Adjust based on your needs
  frameHeight: 64  // Adjust based on your needs
});
```

### Saving to Disk

When using the `save: true` option, the sprites are saved to an 'assets' folder in your current working directory.

## Example: Complete Game Character Generation

```javascript
async function createGameCharacter() {
  // 1. Generate a character spritesheet
  const character = await generateCharacterSpritesheet('cute forest fairy', {
    states: ['idle', 'walk', 'fly', 'cast'],
    style: 'pixel-art',
    save: true
  });
  
  // 2. Generate some environment elements to match
  const environment = await generateEnvironmentSprites('magical forest elements', {
    elements: 6,
    style: 'pixel-art',
    theme: 'fantasy',
    save: true
  });
  
  // 3. Generate items the character might use
  const items = await generateItemSprites('magical fairy items', {
    itemCount: 4,
    style: 'pixel-art',
    itemType: 'magical',
    save: true
  });
  
  return {
    character,
    environment,
    items
  };
}

// Call the function to generate all assets
const gameAssets = await createGameCharacter();
```

## Next Steps

Now that you've generated your sprite assets, you can:

- Integrate them into your game engine
- Create animation sequences from the spritesheet frames
- Build tilemaps with the environment sprites
- Use the item sprites for inventory systems

Check out our other documentation pages for more detailed information on each function and advanced usage techniques.