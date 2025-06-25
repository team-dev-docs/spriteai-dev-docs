# Game Development with SpriteAI SDK

## Overview

The SpriteAI SDK provides powerful tools for game development, enabling developers to easily generate and manage game assets, characters, and environments. This guide will walk you through the core features of game development using the SpriteAI SDK.

## Key Functions for Game Asset Generation

### Character Sprite Generation

The `generateCharacterSpritesheet()` function allows you to create dynamic character spritesheets with multiple animation states:

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

async function createPlayerSprite() {
  const playerSprite = await generateCharacterSpritesheet('fantasy warrior', {
    states: ['idle', 'walk', 'run', 'attack'],
    framesPerState: 6,
    style: 'pixel-art'
  });

  console.log(playerSprite.metadata);
}
```

#### Available Options
- `states`: Animation states (default: ['idle', 'walk', 'run', 'attack'])
- `framesPerState`: Number of frames per animation state
- `style`: Sprite art style
- `size`: Spritesheet dimensions
- `save`: Option to save the generated spritesheet

### Available Animation States

You can fetch the list of predefined animation states:

```javascript
import { fetchAvailableAnimationStates } from 'spriteai';

async function getAnimationStates() {
  const states = await fetchAvailableAnimationStates();
  console.log(states);
  // Returns: ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
}
```

### Available Sprite Styles

Get a list of supported sprite art styles:

```javascript
import { fetchAvailableSpriteStyles } from 'spriteai';

async function getSpriteStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles);
  // Returns: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
}
```

## Environment and Item Sprite Generation

### Creating Environment Sprites

Generate environment tilesets for your game world:

```javascript
import { generateEnvironmentSprites } from 'spriteai';

async function createGameEnvironment() {
  const environmentSprites = await generateEnvironmentSprites('fantasy forest', {
    elements: 4,
    style: 'pixel-art',
    theme: 'fantasy'
  });

  console.log(environmentSprites.metadata);
}
```

### Creating Item Sprites

Generate item sprites for inventory and collectibles:

```javascript
import { generateItemSprites } from 'spriteai';

async function createGameItems() {
  const itemSprites = await generateItemSprites('medieval weapons', {
    itemCount: 4,
    style: 'pixel-art',
    itemType: 'equipment'
  });

  console.log(itemSprites.metadata);
}
```

## Background Color Removal

Remove background colors from sprites for seamless integration:

```javascript
import { removeBackgroundColor } from 'spriteai';

async function processSprite() {
  await removeBackgroundColor(
    'input-sprite.png', 
    'output-sprite.png', 
    'white', 
    colorThreshold
  );
}
```

## Best Practices

1. Always check the available styles and states before generating sprites
2. Use consistent art styles across your game assets
3. Experiment with different generation options
4. Save generated assets for reuse
5. Consider performance when generating large or complex spritesheets

## Next Steps

- Explore advanced sprite manipulation techniques
- Learn about animation state management
- Investigate sprite optimization strategies

Happy game development with SpriteAI!