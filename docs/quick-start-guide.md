# Quick Start Guide

This guide will help you get started with using the spriteAI library to generate character spritesheets.

## Installation

First, make sure you have the spriteAI library installed in your project. You can typically do this via npm:

```bash
npm install spriteai
```

## Basic Usage

Here's a simple example of how to generate a character spritesheet:

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

const description = 'A pixelated robot';
const options = {
  states: ['idle', 'walk', 'run'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art',
  save: true
};

generateCharacterSpritesheet(description, options)
  .then(result => {
    console.log('Spritesheet generated:', result.spritesheet);
    console.log('Metadata:', result.metadata);
  })
  .catch(error => {
    console.error('Error generating spritesheet:', error);
  });
```

## Function Parameters

The `generateCharacterSpritesheet` function takes two parameters:

1. `description` (string, required): A text description of the character to generate.
2. `options` (object, optional): Configuration options for the spritesheet generation.

### Options

- `states` (array of strings): Animation states to include (e.g., ['idle', 'walk', 'run']).
- `framesPerState` (number): Number of frames for each animation state.
- `size` (string): Size of the generated image (e.g., '512x512').
- `style` (string): Art style for the sprite (e.g., 'pixel-art').
- `padding` (number): Padding between frames.
- `direction` (string): Direction the character should face (e.g., 'right').
- `save` (boolean): Whether to save the generated image to disk.

## Return Value

The function returns a Promise that resolves to an object containing:

- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet.
- `metadata`: Object containing information about the spritesheet, including states, dimensions, and frame data.

## Advanced Usage

For more advanced usage, including generating environment sprites or removing background colors, please refer to the full documentation.

## Notes

- The function uses AI models to generate images, which may result in varying outputs for the same input.
- Generated spritesheets are optimized for the specified animation states and follow a grid layout.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.

For more detailed information and advanced features, please consult the complete documentation.