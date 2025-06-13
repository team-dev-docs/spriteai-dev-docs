# SpriteAI: AI-Powered Game Asset Generation 🎮✨

## Overview

SpriteAI is a powerful JavaScript library that leverages AI technology to generate high-quality game assets, including character spritesheets, environment sprites, and item sprites. This library simplifies the process of creating unique and customizable game graphics using OpenAI's DALL-E 3 model.

## Installation

```bash
npm install spriteai
```

## Core Functions

### Character Sprite Generation

Generate dynamic character spritesheets with multiple animation states:

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

const result = await generateCharacterSpritesheet('a heroic knight', {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 6,
  style: 'pixel-art'
});
```

### Environment Sprite Generation

Create immersive game environments with ease:

```javascript
import { generateEnvironmentSprites } from 'spriteai';

const result = await generateEnvironmentSprites('mystical forest', {
  elements: 4,
  style: 'pixel-art',
  theme: 'fantasy'
});
```

### Item Sprite Generation

Design unique game items and equipment:

```javascript
import { generateItemSprites } from 'spriteai';

const result = await generateItemSprites('magical artifacts', {
  itemCount: 6,
  style: 'pixel-art',
  itemType: 'equipment'
});
```

## Utility Functions

### Fetch Available Animation States

```javascript
import { fetchAvailableAnimationStates } from 'spriteai';

const animationStates = await fetchAvailableAnimationStates();
// Returns: ['idle', 'walk', 'run', 'attack', ...]
```

### Fetch Available Sprite Styles

```javascript
import { fetchAvailableSpriteStyles } from 'spriteai';

const spriteStyles = await fetchAvailableSpriteStyles();
// Returns: ['pixel-art', 'vector', '3d', 'hand-drawn', ...]
```

## Key Features

- 🤖 AI-powered sprite generation
- 🎨 Multiple art styles
- 🔧 Highly customizable
- 📦 Easy integration
- 🚀 Rapid asset creation

## Configuration Options

Each generation function supports various configuration options:

- `size`: Image dimensions (default: '1024x1024')
- `style`: Art style (default: 'pixel-art')
- `save`: Option to save generated sprites locally

## Supported Sprite Types

- Character sprites
- Environment tilesets
- Item sprites
- Customizable animation states

## Performance Considerations

- Requires internet connection for AI image generation
- Processing time varies based on image complexity
- OpenAI API rate limits apply

## Error Handling

Always wrap sprite generation in try-catch blocks to handle potential errors:

```javascript
try {
  const spritesheet = await generateCharacterSpritesheet('wizard');
} catch (error) {
  console.error('Sprite generation failed:', error);
}
```

## License

SpriteAI is released under the MIT License.

## Contributing

Contributions and feature requests are welcome! Please visit our GitHub repository to learn more about contributing to the project.