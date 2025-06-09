# Hi Kyle and Thomas

## Introduction

SpriteAI is a powerful and versatile library designed to generate and manipulate game sprites and assets using AI-powered image generation. It offers a range of functions to create character spritesheets, environment sprites, item sprites, and more, making it an essential tool for game developers and digital artists.

The `generateItemSprites` function helps create collections of item sprites for game inventories or pickups. It offers:

* Adjustable item count

* Different item types (e.g., equipment, consumables)

* Consistent styling and scaling

### Additional Utilities

* Background color removal for creating transparent sprites

* Fetching available animation states and sprite styles

## Getting Started

To use SpriteAI in your project, install it via npm:

```bash
npm install spriteai
```

Then, import and use the desired functions in your JavaScript code:

```javascript
import { generateCharacterSpritesheet, generateEnvironmentSprites, generateItemSprites } from 'spriteai';

// Generate a character spritesheet
const characterSprite = await generateCharacterSpritesheet('a cute dragon', {
  states: ['idle', 'walk', 'run'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art'
});

// Generate environment sprites
const environmentSprites = await generateEnvironmentSprites('forest', {
  elements: 6,
  theme: 'fantasy'
});

// Generate item sprites
const itemSprites = await generateItemSprites('medieval weapons', {
  itemCount: 8,
  itemType: 'equipment'
});
```

## Advanced Usage

SpriteAI offers various options for fine-tuning your sprite generation. You can adjust parameters such as image size, style, padding, and more. For detailed information on each function and its options, refer to the specific documentation pages:

* [Generate Sprite](./generateSprite.md)

* [Generate Pixel Art](./generatePixelArt.md)

* [Generate Animated Emoji](./generateAnimatedEmoji.md)

* [Generate Isometric Sprites](./generateIsometric.md)

## Conclusion

SpriteAI streamlines the process of creating game assets by leveraging AI-powered image generation. Whether you're working on a pixel art platformer, an isometric RPG, or any other type of game, SpriteAI can help you quickly generate high-quality sprites and environments, saving time and enhancing your creative workflow.

For more detailed information on each function and advanced usage scenarios, please refer to the individual documentation pages and the API reference.
