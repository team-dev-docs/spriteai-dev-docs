# SpriteAI Overview

## Introduction

SpriteAI is a powerful Node.js library for generating and manipulating game sprites and assets using artificial intelligence. It leverages OpenAI's DALL-E 3 model to create high-quality, customizable sprites for characters, environments, and items in various styles, particularly suited for game development.

## Key Features

- Character Spritesheet Generation
- Environment Sprite Creation
- Item Sprite Generation
- Customizable Animation States
- Multiple Art Styles Support
- Automatic Spritesheet Creation

## Installation

To use SpriteAI in your project, install it via npm:

```bash
npm install spriteai
```

## Main Components

### 1. Character Spritesheet Generation

The `generateCharacterSpritesheet` function allows you to create complete character spritesheets with multiple animation states.

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

const result = await generateCharacterSpritesheet('A pixelated warrior', {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  style: 'pixel-art'
});
```

### 2. Environment Sprite Generation

Use `generateEnvironmentSprites` to create tileset sprites for game environments.

```javascript
import { generateEnvironmentSprites } from 'spriteai';

const environmentSprites = await generateEnvironmentSprites('forest', {
  elements: 4,
  style: 'pixel-art',
  theme: 'fantasy'
});
```

### 3. Item Sprite Generation

The `generateItemSprites` function helps create sprites for game items and equipment.

```javascript
import { generateItemSprites } from 'spriteai';

const itemSprites = await generateItemSprites('magical artifacts', {
  itemCount: 4,
  style: 'pixel-art',
  itemType: 'equipment'
});
```

## Customization Options

SpriteAI offers various customization options for each generation function, including:

- Art style (e.g., pixel-art, vector, 3D, hand-drawn, anime)
- Image size
- Number of frames or elements
- Animation states
- Background removal

## Utility Functions

- `fetchAvailableAnimationStates()`: Retrieves a list of available animation states.
- `fetchAvailableSpriteStyles()`: Provides a list of supported sprite styles.
- `removeBackgroundColor()`: Removes a specified background color from an image.

## Output

Each generation function returns an object containing:

- The original generated image URL
- A processed spritesheet or tileset (as a base64-encoded data URL)
- Metadata about the generated sprites (e.g., dimensions, frame data)

## Saving Assets

All generation functions include an option to automatically save the generated assets to the local filesystem.

## Conclusion

SpriteAI simplifies the process of creating game assets by leveraging AI technology. It's particularly useful for indie game developers, prototyping, and rapid asset creation. For more detailed information on each function and advanced usage, refer to the specific documentation pages for character, environment, and item sprite generation.