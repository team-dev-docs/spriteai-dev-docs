# SpriteAI Overview

## Introduction

SpriteAI is a powerful tool designed to generate and manipulate sprite images for game development and other graphical applications. It leverages artificial intelligence to create character spritesheets, environment sprites, and item sprites based on text descriptions.

## Key Features

1. Character Spritesheet Generation
2. Environment Sprite Creation
3. Item Sprite Generation
4. Background Color Removal
5. Custom Animation States
6. Multiple Art Styles Support

## Getting Started

To begin using SpriteAI, install the package via npm:

```bash
npm install spriteai
```

Then, import the necessary functions in your project:

```javascript
import { generateCharacterSpritesheet, generateEnvironmentSprites, generateItemSprites } from 'spriteai';
```

## Core Functions

### generateCharacterSpritesheet

This function creates a character spritesheet based on a text description and custom options.

```javascript
const result = await generateCharacterSpritesheet('a cute dragon', {
  states: ['idle', 'walk', 'run'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art',
  padding: 2,
  direction: 'left',
  save: true
});
```

### generateEnvironmentSprites

Generate environment sprites for game backgrounds or tilesets.

```javascript
const environment = await generateEnvironmentSprites('forest clearing', {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy'
});
```

### generateItemSprites

Create a collection of item sprites for game inventories or pickups.

```javascript
const items = await generateItemSprites('magical artifacts', {
  itemCount: 8,
  size: '512x512',
  style: 'pixel-art',
  itemType: 'equipment'
});
```

## Additional Features

- **Background Removal**: Remove specific background colors from sprites.
- **Custom Animation States**: Define your own animation states for character spritesheets.
- **Multiple Art Styles**: Choose from pixel-art, vector, 3D, hand-drawn, and anime styles.

## API Reference

For detailed information on function parameters and return values, please refer to the API reference documentation.

## Examples

Check out the `examples` folder in the SpriteAI repository for more usage scenarios and code samples.

## Contributing

We welcome contributions to SpriteAI! Please see our CONTRIBUTING.md file for guidelines on how to submit issues, feature requests, and pull requests.

## License

SpriteAI is released under the MIT License. See the LICENSE file for more details.
