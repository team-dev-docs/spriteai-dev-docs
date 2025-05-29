# SpriteAI Overview

## Introduction

SpriteAI is a powerful tool for generating game assets using AI-powered image generation. It provides a set of functions to create character spritesheets, environment sprites, item sprites, and more, tailored for game development needs.

## Key Features

- Generate character spritesheets with customizable animation states
- Create environment sprites for game worlds
- Produce item sprites for in-game objects
- Support for various art styles, including pixel art
- Customizable output sizes and options

## Main Functions

### generateCharacterSpritesheet

Generates a character spritesheet based on a text description and specified options.

```javascript
const result = await generateCharacterSpritesheet(description, options);
```

#### Parameters:
- `description`: A string describing the character
- `options`: An object containing customization parameters such as:
  - `states`: Array of animation states (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState`: Number of frames per animation state (default: 6)
  - `size`: Output image size (default: '1024x1024')
  - `style`: Art style (default: 'pixel-art')
  - `direction`: Character facing direction (default: 'right')

#### Return Value:
Returns an object containing:
- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded spritesheet image
- `metadata`: Information about the generated spritesheet

### generateEnvironmentSprites

Creates a tileset of environment sprites based on a description and options.

```javascript
const result = await generateEnvironmentSprites(description, options);
```

#### Parameters:
- `description`: A string describing the environment
- `options`: An object containing customization parameters such as:
  - `elements`: Number of distinct environment pieces (default: 4)
  - `size`: Output image size (default: '1024x1024')
  - `style`: Art style (default: 'pixel-art')
  - `theme`: Environment theme (default: 'fantasy')

#### Return Value:
Returns an object containing:
- `original`: URL of the original generated image
- `tileset`: Base64-encoded tileset image
- `metadata`: Information about the generated tileset

### generateItemSprites

Produces a collection of item sprites for game inventories or pickups.

```javascript
const result = await generateItemSprites(description, options);
```

#### Parameters:
- `description`: A string describing the items
- `options`: An object containing customization parameters such as:
  - `itemCount`: Number of items to generate (default: 4)
  - `size`: Output image size (default: '1024x1024')
  - `style`: Art style (default: 'pixel-art')
  - `itemType`: Type of items (default: 'equipment')

#### Return Value:
Returns an object containing:
- `original`: URL of the original generated image
- `itemSheet`: Base64-encoded item sheet image
- `metadata`: Information about the generated items

## Additional Features

- Background color removal for sprites
- Fetching available animation states and sprite styles
- Saving generated assets to disk

## Usage Example

```javascript
import { generateCharacterSpritesheet } from './spriteAI';

const description = 'A brave knight in shining armor';
const options = {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art',
  save: true
};

const result = await generateCharacterSpritesheet(description, options);
console.log('Spritesheet generated:', result.spritesheet);
console.log('Metadata:', result.metadata);
```

## Conclusion

SpriteAI simplifies the process of creating game assets by leveraging AI-powered image generation. It's particularly useful for indie game developers, prototyping, and rapid asset creation. The tool's flexibility in terms of art styles, output sizes, and customization options makes it adaptable to various game development needs.

For more detailed information on specific functions, please refer to their individual documentation pages.