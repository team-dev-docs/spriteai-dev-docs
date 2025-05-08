# Getting Started with SpriteAI

Welcome to SpriteAI! This guide helps you generate character spritesheets, environment sprites, and item sprites for game development.

## Installation

Install SpriteAI in your project directory:

```bash
npm install spriteai
```

## Quick Example

Generate a character spritesheet:

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

const description = 'a cute dragon';
const options = {
  states: ['idle', 'walk', 'run'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art',
  padding: 2,
  direction: 'left',
  save: true
};

generateCharacterSpritesheet(description, options)
  .then(result => console.log('Spritesheet generated:', result.spritesheet))
  .catch(error => console.error('Error:', error));
```

## Key Features

1. **Character Spritesheet Generation**
2. **Environment Sprite Generation**
3. **Item Sprite Generation**
4. **Background Removal**

## Generating Sprites

### Character Spritesheet

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

const options = {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  direction: 'right',
  save: true
};

generateCharacterSpritesheet('a brave knight', options)
  .then(result => console.log('Spritesheet URL:', result.spritesheet))
  .catch(error => console.error('Error:', error));
```

### Environment Sprites

```javascript
import { generateEnvironmentSprites } from 'spriteai';

const options = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  theme: 'fantasy'
};

generateEnvironmentSprites('forest', options)
  .then(result => console.log('Tileset URL:', result.tileset))
  .catch(error => console.error('Error:', error));
```

### Item Sprites

```javascript
import { generateItemSprites } from 'spriteai';

const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  itemType: 'equipment',
  background: 'transparent'
};

generateItemSprites('medieval weapons', options)
  .then(result => console.log('Item sheet URL:', result.itemSheet))
  .catch(error => console.error('Error:', error));
```

## Removing Background Color

```javascript
import { removeBackgroundColor } from 'spriteai';

removeBackgroundColor('input.png', 'output.png', '#FFFFFF', 10)
  .then(() => console.log('Background removed'))
  .catch(error => console.error('Error:', error));
```

## Advanced Usage

- `fetchAvailableAnimationStates()`: List available animation states
- `fetchAvailableSpriteStyles()`: List available sprite styles

For detailed information, refer to our API documentation.

## Next Steps

1. Experiment with different options
2. Combine sprites for complete game assets
3. Explore API documentation
4. Join community forums for support

Thank you for choosing SpriteAI!
