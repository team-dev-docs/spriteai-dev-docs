# Generate Spaceman Documentation

## Overview

This document covers the new functions added to the SpriteAI package for generating character spritesheets, environment sprites, and item sprites. These functions utilize AI-powered image generation to create game assets based on text descriptions.

## generateCharacterSpritesheet

The `generateCharacterSpritesheet` function creates a character spritesheet with multiple animation states.

### Usage

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

const result = await generateCharacterSpritesheet(description, options);
```

### Parameters

- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array of strings): Animation states to include (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Number of frames for each animation state (default: 6)
  - `size` (string): Size of the generated image (default: '1024x1024')
  - `style` (string): Art style of the sprite (default: 'pixel-art')
  - `padding` (number): Padding between frames (default: 1)
  - `direction` (string): Direction the character faces (default: 'right')
  - `save` (boolean): Whether to save the generated image to disk

### Return Value

Returns an object containing:
- `original` (string): URL of the original generated image
- `spritesheet` (string): Base64-encoded image data URL of the processed spritesheet
- `metadata` (object): Information about the generated spritesheet, including states, dimensions, and frame data

### Example

```javascript
const result = await generateCharacterSpritesheet('A blue alien astronaut', {
  states: ['idle', 'walk', 'jump'],
  framesPerState: 8,
  style: 'pixel-art',
  save: true
});

console.log(result.metadata);
console.log(result.spritesheet);
```

## generateEnvironmentSprites

The `generateEnvironmentSprites` function creates a tileset of environment sprites.

### Usage

```javascript
import { generateEnvironmentSprites } from 'spriteai';

const result = await generateEnvironmentSprites(description, options);
```

### Parameters

- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of different elements to generate (default: 4)
  - `size` (string): Size of the generated image (default: '1024x1024')
  - `style` (string): Art style of the sprites (default: 'pixel-art')
  - `padding` (number): Padding between elements (default: 1)
  - `theme` (string): Theme of the environment (default: 'fantasy')
  - `save` (boolean): Whether to save the generated image to disk

### Return Value

Returns an object containing:
- `original` (string): URL of the original generated image
- `tileset` (string): Base64-encoded image data URL of the processed tileset
- `metadata` (object): Information about the generated tileset, including dimensions and tile data

### Example

```javascript
const result = await generateEnvironmentSprites('A lush forest with ancient ruins', {
  elements: 6,
  style: 'pixel-art',
  theme: 'mystical',
  save: true
});

console.log(result.metadata);
console.log(result.tileset);
```

## generateItemSprites

The `generateItemSprites` function creates a collection of item sprites for game use.

### Usage

```javascript
import { generateItemSprites } from 'spriteai';

const result = await generateItemSprites(description, options);
```

### Parameters

- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of different items to generate (default: 4)
  - `size` (string): Size of the generated image (default: '1024x1024')
  - `style` (string): Art style of the sprites (default: 'pixel-art')
  - `padding` (number): Padding between items (default: 1)
  - `itemType` (string): Type of items to generate (default: 'equipment')
  - `background` (string): Background color of the sprite sheet (default: 'white')
  - `save` (boolean): Whether to save the generated image to disk

### Return Value

Returns an object containing:
- `original` (string): URL of the original generated image
- `itemSheet` (string): Base64-encoded image data URL of the processed item sheet
- `metadata` (object): Information about the generated item sheet, including dimensions and item data

### Example

```javascript
const result = await generateItemSprites('Magical artifacts and potions', {
  itemCount: 8,
  style: 'pixel-art',
  itemType: 'magical',
  save: true
});

console.log(result.metadata);
console.log(result.itemSheet);
```

## Utility Functions

### fetchAvailableAnimationStates

Retrieves a list of available animation states for character spritesheets.

```javascript
import { fetchAvailableAnimationStates } from 'spriteai';

const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### fetchAvailableSpriteStyles

Retrieves a list of available sprite styles for generation.

```javascript
import { fetchAvailableSpriteStyles } from 'spriteai';

const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Notes

- These functions use OpenAI's DALL-E 3 model for image generation, which may result in varying outputs for the same input.
- Generated images are optimized for game development use, with clear separation between elements and consistent styling.
- When saving images, they are stored in an 'assets' folder with filenames based on the description.
- The functions may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and API access to use these functions.
