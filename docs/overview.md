# SpriteAI Overview

SpriteAI is a powerful tool designed to generate and manipulate game sprites and pixel art using AI-powered image generation. This overview will introduce you to the main features and capabilities of SpriteAI.

## Key Features

1. Character Spritesheet Generation
2. Environment Sprite Creation
3. Item Sprite Generation
4. Pixel Art Creation
5. Isometric Sprite Generation
6. Animated Emoji Creation

## Getting Started

To begin using SpriteAI, you'll need to install it in your project:

```bash
npm install spriteai
```

Then, you can import and use the various functions in your JavaScript code:

```javascript
import { generateCharacterSpritesheet, generateEnvironmentSprites, generateItemSprites } from 'spriteai';
```

## Main Functions

### generateCharacterSpritesheet

This function creates a character spritesheet with multiple animation states:

```javascript
const result = await generateCharacterSpritesheet('a cute dragon', {
  states: ['idle', 'walk', 'run'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art'
});
```

### generateEnvironmentSprites

Generate environment sprites for your game:

```javascript
const result = await generateEnvironmentSprites('forest landscape', {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy'
});
```

### generateItemSprites

Create item sprites for game inventories or pickups:

```javascript
const result = await generateItemSprites('medieval weapons', {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment'
});
```

## Additional Features

SpriteAI also offers functions for generating pixel art (`generatePixelArt`), isometric sprites (`generateIsometric`), and animated emojis (`generateAnimatedEmoji`). Each of these functions provides unique capabilities for different aspects of game asset creation.

## Customization

Most functions in SpriteAI accept various options to customize the output, including:

- Image size
- Art style
- Number of frames or elements
- Saving options

## Next Steps

To learn more about each function and its specific usage, please refer to the individual documentation pages for detailed information and examples.

- [Getting Started Guide](getting-started.md)
- [Generate Sprite Documentation](generateSprite.md)
- [Generate Pixel Art Documentation](generatePixelArt.md)
- [Generate Isometric Documentation](generateIsometric.md)
- [Generate Animated Emoji Documentation](generateAnimatedEmoji.md)

SpriteAI is a versatile tool that can significantly streamline your game asset creation process. Explore the documentation to unlock its full potential in your projects!