# Getting Started with SpriteAI

Welcome to SpriteAI, a powerful tool for generating game assets using AI. This guide will help you get started with using the main functions provided by the SpriteAI library.

## Installation

To use SpriteAI, you'll need to install it in your project. You can do this using npm:

```bash
npm install spriteai
```

## Importing SpriteAI

Once installed, you can import the necessary functions from SpriteAI in your JavaScript code:

```javascript
import { 
  generateCharacterSpritesheet, 
  generateEnvironmentSprites, 
  generateItemSprites, 
  fetchAvailableAnimationStates, 
  fetchAvailableSpriteStyles 
} from 'spriteai';
```

## Generating Character Spritesheets

The `generateCharacterSpritesheet` function allows you to create character spritesheets with various animation states.

```javascript
const characterSprite = await generateCharacterSpritesheet('a medieval knight', {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  direction: 'right',
  save: true
});

console.log(characterSprite.spritesheet); // Base64 encoded spritesheet
console.log(characterSprite.metadata); // Metadata about the spritesheet
```

### Options

- `states`: Array of animation states (default: ['idle', 'walk', 'run', 'attack'])
- `framesPerState`: Number of frames per animation state (default: 6)
- `size`: Image size (default: '1024x1024')
- `style`: Art style (default: 'pixel-art')
- `padding`: Padding between frames (default: 1)
- `direction`: Character facing direction (default: 'right')
- `save`: Whether to save the spritesheet to disk (default: false)

## Generating Environment Sprites

The `generateEnvironmentSprites` function creates tilesets for game environments.

```javascript
const environmentSprites = await generateEnvironmentSprites('forest', {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy',
  save: true
});

console.log(environmentSprites.tileset); // Base64 encoded tileset
console.log(environmentSprites.metadata); // Metadata about the tileset
```

### Options

- `elements`: Number of distinct environment pieces (default: 4)
- `size`: Image size (default: '1024x1024')
- `style`: Art style (default: 'pixel-art')
- `padding`: Padding between elements (default: 1)
- `theme`: Environment theme (default: 'fantasy')
- `save`: Whether to save the tileset to disk (default: false)

## Generating Item Sprites

The `generateItemSprites` function creates spritesheets for game items or equipment.

```javascript
const itemSprites = await generateItemSprites('magical weapons', {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment',
  background: 'white',
  save: true
});

console.log(itemSprites.itemSheet); // Base64 encoded item sheet
console.log(itemSprites.metadata); // Metadata about the item sheet
```

### Options

- `itemCount`: Number of distinct items (default: 4)
- `size`: Image size (default: '1024x1024')
- `style`: Art style (default: 'pixel-art')
- `padding`: Padding between items (default: 1)
- `itemType`: Type of items (default: 'equipment')
- `background`: Background color (default: 'white')
- `save`: Whether to save the item sheet to disk (default: false)

## Fetching Available Options

SpriteAI provides functions to fetch available animation states and sprite styles:

```javascript
const availableStates = await fetchAvailableAnimationStates();
console.log(availableStates); // Array of available animation states

const availableStyles = await fetchAvailableSpriteStyles();
console.log(availableStyles); // Array of available sprite styles
```

## Saving Generated Assets

When the `save` option is set to `true`, SpriteAI will automatically save the generated assets to your project's `assets` folder. The filenames will be based on the description provided, with spaces replaced by underscores.

## Next Steps

Now that you're familiar with the basic functions of SpriteAI, you can start integrating it into your game development workflow. Experiment with different descriptions, styles, and options to create unique and diverse game assets for your projects.

Remember to handle any potential errors or exceptions that may occur during the API calls, and consider implementing rate limiting to avoid overloading the AI image generation service.

For more advanced usage and detailed API documentation, please refer to the other sections of our documentation.