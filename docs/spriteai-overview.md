# SpriteAI Overview

## Introduction

SpriteAI is a powerful JavaScript library designed to simplify the creation and manipulation of game sprites and assets using AI-powered image generation. This overview will introduce you to the key features and functionalities of SpriteAI, helping you get started with integrating it into your game development projects.

## Key Features

SpriteAI offers several main functions for generating game assets:

1. Character Spritesheets
2. Environment Sprites
3. Item Sprites

Additionally, it provides utility functions for:

- Fetching available animation states
- Fetching available sprite styles

## Character Spritesheets

The `generateCharacterSpritesheet` function is the core feature of SpriteAI, allowing you to create detailed character animations with customizable states.

```javascript
import { generateCharacterSpritesheet } from 'spriteAI';

const result = await generateCharacterSpritesheet('a brave knight', {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  direction: 'right',
  save: true
});
```

This function generates a spritesheet with multiple animation states, each represented by a row of frames. The result includes the original image URL, the processed spritesheet as a base64-encoded string, and metadata about the generated sprites.

## Environment Sprites

For creating game environments, SpriteAI offers the `generateEnvironmentSprites` function:

```javascript
import { generateEnvironmentSprites } from 'spriteAI';

const result = await generateEnvironmentSprites('forest', {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy',
  save: true
});
```

This function generates a tileset of environment elements, perfect for creating diverse game worlds.

## Item Sprites

To create item sprites for your game, use the `generateItemSprites` function:

```javascript
import { generateItemSprites } from 'spriteAI';

const result = await generateItemSprites('medieval weapons', {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment',
  save: true
});
```

This function generates a collection of item sprites, ideal for game inventories or collectibles.

## Utility Functions

SpriteAI also provides utility functions to enhance your workflow:

- `fetchAvailableAnimationStates()`: Returns an array of available animation states.
- `fetchAvailableSpriteStyles()`: Returns an array of available sprite styles.

These functions can be used to dynamically populate options in your game development tools or interfaces.

## Customization Options

All generation functions accept various options for customization, including:

- Size of the output image
- Art style (e.g., pixel-art, vector, 3D)
- Number of frames or elements
- Specific themes or directions
- Saving options

## Integration

To use SpriteAI in your project, first install it via npm:

```bash
npm install spriteAI
```

Then, import the desired functions in your JavaScript files:

```javascript
import { generateCharacterSpritesheet, generateEnvironmentSprites, generateItemSprites } from 'spriteAI';
```

## Conclusion

SpriteAI offers a robust set of tools for AI-powered sprite generation, streamlining the asset creation process for game developers. By leveraging OpenAI's DALL-E model and advanced image processing techniques, SpriteAI enables the rapid creation of high-quality, customizable game assets.

For more detailed information on each function and its options, please refer to the specific documentation pages for character spritesheets, environment sprites, and item sprites.