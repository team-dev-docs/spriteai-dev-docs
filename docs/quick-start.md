# Quick Start Guide for SpriteAI

## Installation

To get started with SpriteAI, first install the package using npm:

```bash
npm install spriteai
```

## Basic Usage

### Generating Character Spritesheets

Create pixel art character spritesheets with customizable animation states:

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

// Basic example
const description = 'a heroic knight';
const options = {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 6,
  style: 'pixel-art',
  save: true
};

try {
  const result = await generateCharacterSpritesheet(description, options);
  console.log('Spritesheet generated:', result.spritesheet);
} catch (error) {
  console.error('Spritesheet generation failed:', error);
}
```

### Available Options

- `states`: Array of animation states (e.g., ['idle', 'walk', 'run'])
- `framesPerState`: Number of frames for each animation state
- `style`: Art style ('pixel-art', 'vector', '3d')
- `size`: Output image size (default: '1024x1024')
- `save`: Whether to save the generated spritesheet

### Other Available Methods

#### Fetch Available Animation States

```javascript
import { fetchAvailableAnimationStates } from 'spriteai';

const states = await fetchAvailableAnimationStates();
console.log('Available states:', states);
// Example output: ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

#### Fetch Available Sprite Styles

```javascript
import { fetchAvailableSpriteStyles } from 'spriteai';

const styles = await fetchAvailableSpriteStyles();
console.log('Available styles:', styles);
// Example output: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Environment and Item Sprites

### Generating Environment Sprites

```javascript
import { generateEnvironmentSprites } from 'spriteai';

const description = 'fantasy forest';
const options = {
  elements: 4,
  style: 'pixel-art',
  theme: 'fantasy'
};

const result = await generateEnvironmentSprites(description, options);
console.log('Environment tileset:', result.tileset);
```

### Generating Item Sprites

```javascript
import { generateItemSprites } from 'spriteai';

const description = 'magical weapons';
const options = {
  itemCount: 4,
  style: 'pixel-art',
  itemType: 'equipment'
};

const result = await generateItemSprites(description, options);
console.log('Item sheet:', result.itemSheet);
```

## Requirements

- Node.js version 14.0.0 or higher
- OpenAI API key (configure through environment variables)

## Error Handling

Always wrap asynchronous sprite generation methods in try/catch blocks to handle potential errors:

```javascript
try {
  const spritesheet = await generateCharacterSpritesheet(description, options);
} catch (error) {
  // Handle specific error types
  if (error.response) {
    console.error('API Error:', error.response.data);
  } else {
    console.error('Sprite generation failed:', error.message);
  }
}
```

## Next Steps

- Explore advanced sprite manipulation techniques
- Check out the full API documentation
- Join the community for tips and inspiration

## Support

For more detailed information, refer to the full documentation or contact support.
