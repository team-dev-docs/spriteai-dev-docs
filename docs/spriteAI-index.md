# SpriteAI Documentation

## Introduction

SpriteAI is a powerful library for generating game-ready sprites and assets using AI. This documentation provides an overview of the main functions and their usage.

## Functions

### generateCharacterSpritesheet

Generates a character spritesheet with multiple animation states.

```javascript
async function generateCharacterSpritesheet(description, options = {})
```

#### Parameters:
- `description` (string): A description of the character to generate.
- `options` (object): Configuration options for the spritesheet generation.
  - `states` (array): Animation states (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Number of frames per animation state (default: 6)
  - `size` (string): Image size (default: '1024x1024')
  - `style` (string): Art style (default: 'pixel-art')
  - `padding` (number): Padding between frames (default: 1)
  - `direction` (string): Character facing direction (default: 'right')
  - `save` (boolean): Whether to save the spritesheet to disk

#### Returns:
An object containing:
- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded spritesheet image
- `metadata`: Detailed information about the spritesheet

### fetchAvailableAnimationStates

Retrieves a list of available animation states.

```javascript
async function fetchAvailableAnimationStates()
```

#### Returns:
An array of animation state strings.

### fetchAvailableSpriteStyles

Retrieves a list of available sprite styles.

```javascript
async function fetchAvailableSpriteStyles()
```

#### Returns:
An array of sprite style strings.

### generateEnvironmentSprites

Generates environment sprites for game backgrounds or tilesets.

```javascript
async function generateEnvironmentSprites(description, options = {})
```

#### Parameters:
- `description` (string): A description of the environment to generate.
- `options` (object): Configuration options for the environment generation.
  - `elements` (number): Number of distinct elements to generate (default: 4)
  - `size` (string): Image size (default: '1024x1024')
  - `style` (string): Art style (default: 'pixel-art')
  - `padding` (number): Padding between elements (default: 1)
  - `theme` (string): Environment theme (default: 'fantasy')
  - `save` (boolean): Whether to save the tileset to disk

#### Returns:
An object containing:
- `original`: URL of the original generated image
- `tileset`: Base64-encoded tileset image
- `metadata`: Detailed information about the tileset

### generateItemSprites

Generates item sprites for game inventories or pickups.

```javascript
async function generateItemSprites(description, options = {})
```

#### Parameters:
- `description` (string): A description of the items to generate.
- `options` (object): Configuration options for the item generation.
  - `itemCount` (number): Number of items to generate (default: 4)
  - `size` (string): Image size (default: '1024x1024')
  - `style` (string): Art style (default: 'pixel-art')
  - `padding` (number): Padding between items (default: 1)
  - `itemType` (string): Type of items to generate (default: 'equipment')
  - `background` (string): Background color (default: 'white')
  - `save` (boolean): Whether to save the item sheet to disk

#### Returns:
An object containing:
- `original`: URL of the original generated image
- `itemSheet`: Base64-encoded item sheet image
- `metadata`: Detailed information about the item sheet

## Usage Examples

Here are some basic examples of how to use the main functions:

```javascript
// Generate a character spritesheet
const characterSprites = await generateCharacterSpritesheet('a medieval knight');

// Get available animation states
const animationStates = await fetchAvailableAnimationStates();

// Get available sprite styles
const spriteStyles = await fetchAvailableSpriteStyles();

// Generate environment sprites
const environmentSprites = await generateEnvironmentSprites('a forest clearing');

// Generate item sprites
const itemSprites = await generateItemSprites('magical artifacts');
```

For more detailed usage and advanced options, refer to the individual function documentation above.