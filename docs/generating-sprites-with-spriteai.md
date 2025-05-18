# Generating Sprites with SpriteAI

SpriteAI is a powerful tool for generating game sprites and assets using artificial intelligence. This guide will walk you through the process of generating various types of sprites using the SpriteAI package.

## Introduction

SpriteAI leverages advanced AI models to create high-quality sprite sheets and game assets based on text descriptions. It offers a range of functions to generate character spritesheets, environment sprites, and item sprites, making it an invaluable tool for game developers and digital artists.

## Generating Character Spritesheets

The `generateCharacterSpritesheet` function is the core feature of SpriteAI for creating animated character sprites. Here's how to use it:

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

const result = await generateCharacterSpritesheet('a brave knight in shining armor', {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  direction: 'right'
});

console.log(result.spritesheet); // Base64 encoded spritesheet
console.log(result.metadata);    // Metadata about the generated spritesheet
```

### Options

- `states`: An array of animation states to generate (default: ['idle', 'walk', 'run', 'attack'])
- `framesPerState`: Number of frames for each animation state (default: 6)
- `size`: Output size of the spritesheet (default: '1024x1024')
- `style`: Art style of the sprite (default: 'pixel-art')
- `direction`: Base direction the character faces (default: 'right')
- `save`: Whether to save the generated image to disk (default: false)

## Generating Environment Sprites

For creating game environments and tilesets, use the `generateEnvironmentSprites` function:

```javascript
import { generateEnvironmentSprites } from 'spriteai';

const result = await generateEnvironmentSprites('medieval castle', {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy'
});

console.log(result.tileset);  // Base64 encoded tileset
console.log(result.metadata); // Metadata about the generated tileset
```

### Options

- `elements`: Number of distinct environment pieces to generate (default: 4)
- `size`: Output size of the tileset (default: '1024x1024')
- `style`: Art style of the sprites (default: 'pixel-art')
- `theme`: Theme of the environment (default: 'fantasy')
- `save`: Whether to save the generated image to disk (default: false)

## Generating Item Sprites

For creating game items and icons, use the `generateItemSprites` function:

```javascript
import { generateItemSprites } from 'spriteai';

const result = await generateItemSprites('magical potions', {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment'
});

console.log(result.itemSheet); // Base64 encoded item sheet
console.log(result.metadata);  // Metadata about the generated items
```

### Options

- `itemCount`: Number of distinct items to generate (default: 4)
- `size`: Output size of the item sheet (default: '1024x1024')
- `style`: Art style of the items (default: 'pixel-art')
- `itemType`: Type of items to generate (default: 'equipment')
- `save`: Whether to save the generated image to disk (default: false)

## Additional Features

### Fetching Available Animation States

You can retrieve a list of available animation states:

```javascript
import { fetchAvailableAnimationStates } from 'spriteai';

const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### Fetching Available Sprite Styles

To get a list of available sprite styles:

```javascript
import { fetchAvailableSpriteStyles } from 'spriteai';

const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Conclusion

SpriteAI provides a powerful and flexible way to generate game assets programmatically. By leveraging AI-powered image generation, it enables developers and artists to quickly create high-quality sprites for various game elements, from animated characters to environmental tilesets and item collections. Experiment with different descriptions and options to unleash your creativity and streamline your game development process.