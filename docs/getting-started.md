# Getting Started with SpriteAI

## Installation

To begin using SpriteAI, you'll need to install it in your project directory. Simply run the following command:

```bash
npm install spriteai
```

## Basic Usage

SpriteAI provides powerful tools for generating and manipulating game sprites. Here's a comprehensive overview of its key features:

### Character Sprite Generation

Create dynamic character spritesheets with ease:

```javascript
const spriteAI = require('spriteai');

// Generate a character spritesheet
await spriteAI.generateCharacterSpritesheet('hero warrior', {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  style: 'pixel-art',
  save: true
});
```

### Available Animation States

SpriteAI supports a variety of predefined animation states:

```javascript
const animationStates = await spriteAI.fetchAvailableAnimationStates();
// Returns: ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### Sprite Styles

Choose from multiple sprite rendering styles:

```javascript
const spriteStyles = await spriteAI.fetchAvailableSpriteStyles();
// Returns: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

### Environment Sprite Generation

Create environment sprite tilesets for game worlds:

```javascript
await spriteAI.generateEnvironmentSprites('fantasy forest', {
  elements: 4,
  style: 'pixel-art',
  theme: 'fantasy'
});
```

### Item Sprite Generation

Generate item sprites for game inventories:

```javascript
await spriteAI.generateItemSprites('magical weapons', {
  itemCount: 4,
  style: 'pixel-art',
  itemType: 'equipment'
});
```

## Advanced Features

### Background Removal

Remove background colors from sprites:

```javascript
await spriteAI.removeBackgroundColor(
  'input-sprite.png', 
  'output-sprite.png', 
  'white', 
  colorThreshold
);
```

## Key Features

1. **AI-Powered Sprite Generation**: Create unique sprites using advanced AI algorithms
2. **Multiple Animation States**: Support for various character animations
3. **Flexible Style Options**: Choose from multiple artistic styles
4. **Environment and Item Sprite Creation**: Generate complete game asset collections
5. **Background Removal**: Easy sprite background manipulation

## Recommended Next Steps

1. Explore the full API documentation
2. Experiment with different sprite generation options
3. Join our community forums for tips and inspiration

For in-depth information and advanced usage scenarios, please refer to our comprehensive API documentation.

Thank you for choosing SpriteAI. We're excited to see the amazing game assets you'll create with our package!
