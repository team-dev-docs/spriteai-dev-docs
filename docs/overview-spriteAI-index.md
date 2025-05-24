# SpriteAI Overview

SpriteAI is a powerful library for generating game assets using AI-driven image generation. This document provides an overview of the main features and functions available in the SpriteAI library.

## Main Features

SpriteAI offers three primary functions for generating game assets:

1. Character Spritesheets
2. Environment Sprites
3. Item Sprites

Additionally, it provides utility functions to fetch available animation states and sprite styles.

## Character Spritesheets

The `generateCharacterSpritesheet` function allows you to create character spritesheets with multiple animation states.

### Usage

```javascript
import { generateCharacterSpritesheet } from 'spriteAI';

const result = await generateCharacterSpritesheet('a medieval knight', {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  direction: 'right'
});
```

### Options

- `states`: Array of animation states (default: ['idle', 'walk', 'run', 'attack'])
- `framesPerState`: Number of frames per animation state (default: 6)
- `size`: Image size (default: '1024x1024')
- `style`: Art style (default: 'pixel-art')
- `padding`: Padding between frames (default: 1)
- `direction`: Character facing direction (default: 'right')

## Environment Sprites

The `generateEnvironmentSprites` function creates environmental tiles for game backgrounds and levels.

### Usage

```javascript
import { generateEnvironmentSprites } from 'spriteAI';

const result = await generateEnvironmentSprites('forest', {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy'
});
```

### Options

- `elements`: Number of distinct environment pieces (default: 4)
- `size`: Image size (default: '1024x1024')
- `style`: Art style (default: 'pixel-art')
- `padding`: Padding between elements (default: 1)
- `theme`: Environment theme (default: 'fantasy')

## Item Sprites

The `generateItemSprites` function generates a collection of item sprites for game inventories or pickups.

### Usage

```javascript
import { generateItemSprites } from 'spriteAI';

const result = await generateItemSprites('medieval weapons', {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment'
});
```

### Options

- `itemCount`: Number of items to generate (default: 4)
- `size`: Image size (default: '1024x1024')
- `style`: Art style (default: 'pixel-art')
- `padding`: Padding between items (default: 1)
- `itemType`: Type of items (default: 'equipment')
- `background`: Background color (default: 'white')

## Utility Functions

### Fetch Available Animation States

```javascript
import { fetchAvailableAnimationStates } from 'spriteAI';

const states = await fetchAvailableAnimationStates();
// Returns: ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### Fetch Available Sprite Styles

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

const styles = await fetchAvailableSpriteStyles();
// Returns: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Output

All generation functions return an object containing:

- `original`: URL of the original generated image
- `spritesheet`/`tileset`/`itemSheet`: Base64-encoded PNG data of the processed image
- `metadata`: Object containing relevant information about the generated assets

## Note

This library uses OpenAI's DALL-E 3 model for image generation. Ensure you have the necessary API credentials and comply with OpenAI's usage policies when using this library.