# SpriteAI Documentation

## Introduction

SpriteAI is a powerful library for generating game assets using AI. It provides functions to create character spritesheets, environment sprites, and item sprites for use in game development.

## Installation

To use SpriteAI, you need to install the following dependencies:

```bash
npm install openai axios sharp jimp
```

## Usage

Import the required functions from the SpriteAI library:

```javascript
import { 
  generateCharacterSpritesheet, 
  generateEnvironmentSprites, 
  generateItemSprites, 
  fetchAvailableAnimationStates, 
  fetchAvailableSpriteStyles 
} from 'spriteAI';
```

## API Reference

### generateCharacterSpritesheet(description, options)

Generates a character spritesheet based on the provided description and options.

#### Parameters:

- `description` (string): A description of the character.
- `options` (object): Configuration options for the spritesheet.
  - `states` (array): Animation states (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Image size (default: '1024x1024').
  - `style` (string): Art style (default: 'pixel-art').
  - `padding` (number): Padding between frames (default: 1).
  - `direction` (string): Character facing direction (default: 'right').
  - `save` (boolean): Whether to save the spritesheet to disk.

#### Returns:

An object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded spritesheet image.
- `metadata`: Detailed information about the spritesheet.

### generateEnvironmentSprites(description, options)

Generates environment sprites based on the provided description and options.

#### Parameters:

- `description` (string): A description of the environment.
- `options` (object): Configuration options for the environment sprites.
  - `elements` (number): Number of distinct elements (default: 4).
  - `size` (string): Image size (default: '1024x1024').
  - `style` (string): Art style (default: 'pixel-art').
  - `padding` (number): Padding between elements (default: 1).
  - `theme` (string): Environment theme (default: 'fantasy').
  - `save` (boolean): Whether to save the tileset to disk.

#### Returns:

An object containing:
- `original`: URL of the original generated image.
- `tileset`: Base64-encoded tileset image.
- `metadata`: Detailed information about the tileset.

### generateItemSprites(description, options)

Generates item sprites based on the provided description and options.

#### Parameters:

- `description` (string): A description of the items.
- `options` (object): Configuration options for the item sprites.
  - `itemCount` (number): Number of distinct items (default: 4).
  - `size` (string): Image size (default: '1024x1024').
  - `style` (string): Art style (default: 'pixel-art').
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items (default: 'equipment').
  - `background` (string): Background color (default: 'white').
  - `save` (boolean): Whether to save the item sheet to disk.

#### Returns:

An object containing:
- `original`: URL of the original generated image.
- `itemSheet`: Base64-encoded item sheet image.
- `metadata`: Detailed information about the item sheet.

### fetchAvailableAnimationStates()

Retrieves a list of available animation states.

#### Returns:

An array of strings representing animation states.

### fetchAvailableSpriteStyles()

Retrieves a list of available sprite styles.

#### Returns:

An array of strings representing sprite styles.

## Examples

### Generate a Character Spritesheet

```javascript
const character = await generateCharacterSpritesheet('A medieval knight in armor', {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 4,
  style: 'pixel-art',
  save: true
});

console.log(character.metadata);
```

### Generate Environment Sprites

```javascript
const environment = await generateEnvironmentSprites('A magical forest', {
  elements: 6,
  style: 'hand-drawn',
  theme: 'fantasy',
  save: true
});

console.log(environment.metadata);
```

### Generate Item Sprites

```javascript
const items = await generateItemSprites('Ancient magical artifacts', {
  itemCount: 8,
  style: 'pixel-art',
  itemType: 'collectibles',
  save: true
});

console.log(items.metadata);
```

## Conclusion

SpriteAI provides a powerful set of tools for generating game assets using AI. By leveraging these functions, game developers can quickly create high-quality sprites for characters, environments, and items, streamlining the asset creation process in game development.