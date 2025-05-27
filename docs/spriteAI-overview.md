# SpriteAI Overview

SpriteAI is a powerful library for generating game assets using AI. This document provides an overview of the main features and functions available in the SpriteAI library.

## Key Features

- Generate character spritesheets
- Create environment sprites
- Produce item sprites
- Fetch available animation states and sprite styles

## Main Functions

### generateCharacterSpritesheet

This function creates a character spritesheet based on a given description and options.

```javascript
const result = await generateCharacterSpritesheet(description, options);
```

#### Parameters:
- `description`: A string describing the character
- `options`: An object containing customization options such as:
  - `states`: Array of animation states (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState`: Number of frames per animation state (default: 6)
  - `size`: Image size (default: '1024x1024')
  - `style`: Art style (default: 'pixel-art')
  - `padding`: Padding between frames (default: 1)
  - `direction`: Character facing direction (default: 'right')

#### Returns:
An object containing:
- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded PNG of the processed spritesheet
- `metadata`: Detailed information about the spritesheet

### generateEnvironmentSprites

This function creates environment sprites based on a given description and options.

```javascript
const result = await generateEnvironmentSprites(description, options);
```

#### Parameters:
- `description`: A string describing the environment
- `options`: An object containing customization options such as:
  - `elements`: Number of environment elements (default: 4)
  - `size`: Image size (default: '1024x1024')
  - `style`: Art style (default: 'pixel-art')
  - `padding`: Padding between elements (default: 1)
  - `theme`: Environment theme (default: 'fantasy')

#### Returns:
An object containing:
- `original`: URL of the original generated image
- `tileset`: Base64-encoded PNG of the processed tileset
- `metadata`: Detailed information about the tileset

### generateItemSprites

This function creates item sprites based on a given description and options.

```javascript
const result = await generateItemSprites(description, options);
```

#### Parameters:
- `description`: A string describing the items
- `options`: An object containing customization options such as:
  - `itemCount`: Number of items to generate (default: 4)
  - `size`: Image size (default: '1024x1024')
  - `style`: Art style (default: 'pixel-art')
  - `padding`: Padding between items (default: 1)
  - `itemType`: Type of items (default: 'equipment')
  - `background`: Background color (default: 'white')

#### Returns:
An object containing:
- `original`: URL of the original generated image
- `itemSheet`: Base64-encoded PNG of the processed item sheet
- `metadata`: Detailed information about the item sheet

### fetchAvailableAnimationStates

This function retrieves a list of available animation states.

```javascript
const states = await fetchAvailableAnimationStates();
```

#### Returns:
An array of strings representing available animation states.

### fetchAvailableSpriteStyles

This function retrieves a list of available sprite styles.

```javascript
const styles = await fetchAvailableSpriteStyles();
```

#### Returns:
An array of strings representing available sprite styles.

## Utility Functions

### removeBackgroundColor

This internal function removes a specific background color from an image.

## Getting Started

To use SpriteAI in your project, you'll need to import the necessary functions:

```javascript
import { 
  generateCharacterSpritesheet, 
  generateEnvironmentSprites, 
  generateItemSprites, 
  fetchAvailableAnimationStates, 
  fetchAvailableSpriteStyles 
} from 'spriteAI';
```

Then, you can start generating game assets using AI by calling the appropriate functions with your desired parameters.

For more detailed information on each function and its usage, please refer to the specific function documentation.