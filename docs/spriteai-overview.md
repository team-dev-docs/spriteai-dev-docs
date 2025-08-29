# SpriteAI Overview

SpriteAI is a powerful tool designed to generate and manipulate game sprites and assets using AI-powered image generation and processing techniques. This overview provides a high-level introduction to SpriteAI's capabilities and main features.

## What is SpriteAI?

SpriteAI is a JavaScript-based library that leverages OpenAI's DALL-E 3 model and various image processing libraries to create game-ready sprites, animated characters, environment tiles, and item icons. It's designed to streamline the asset creation process for game developers and digital artists.

## Key Features

### 1. Character Spritesheet Generation

Generate complete character spritesheets with customizable animation states, including:
- Idle
- Walk
- Run
- Attack
- And more

### 2. Environment Sprite Generation

Create tileset sprites for game environments with various elements and themes.

### 3. Item Sprite Generation

Generate collections of item sprites suitable for game inventories or pickups.

### 4. Customization Options

SpriteAI offers various customization options, including:
- Art style (e.g., pixel art, vector, 3D, hand-drawn, anime)
- Image size
- Number of animation frames
- Character direction
- Background removal

## Main Functions

SpriteAI provides several core functions:

1. `generateCharacterSpritesheet`: Creates a full character spritesheet with multiple animation states.
2. `generateEnvironmentSprites`: Generates a set of environment tiles or elements.
3. `generateItemSprites`: Creates a collection of item sprites.
4. `removeBackgroundColor`: Removes a specific background color from an image.

## Getting Started

To start using SpriteAI, you'll need to install the package and set up your OpenAI API credentials. Here's a basic example of generating a character spritesheet:

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

const description = 'a cute dragon';
const options = {
  states: ['idle', 'walk', 'run'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art',
  direction: 'right',
  save: true
};

generateCharacterSpritesheet(description, options)
  .then(result => {
    console.log('Spritesheet generated:', result.spritesheet);
  })
  .catch(error => {
    console.error('Error generating spritesheet:', error);
  });
```

## Use Cases

SpriteAI is ideal for:
- Indie game developers needing quick asset generation
- Prototyping game ideas and characters
- Creating consistent art styles across multiple assets
- Generating placeholder graphics for game development

## Next Steps

To dive deeper into SpriteAI's capabilities, check out the following documentation:
- [Getting Started Guide](./getting-started.md)
- [Generate Sprite Documentation](./generateSprite.md)
- [Generate Pixel Art Documentation](./generatePixelArt.md)
- [Generate Isometric Sprites Documentation](./generateIsometric.md)
- [Generate Animated Emoji Documentation](./generateAnimatedEmoji.md)

SpriteAI opens up a world of possibilities for rapid game asset creation. Explore its features and integrate it into your game development workflow to streamline your sprite and asset generation process.