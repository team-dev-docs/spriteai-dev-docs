# Getting Started with SpriteAI

Welcome to SpriteAI! This guide will help you get started with using the SpriteAI package for generating and manipulating sprite images.

## Installation

To begin using SpriteAI, you need to install it in your project. Run the following command in your project directory:

```bash
npm install spriteai
```

## Basic Usage

After installation, you can start using SpriteAI in your project. Here's a basic example of how to use the main features:

```javascript
import { generateCharacterSpritesheet, removeBackgroundColor } from 'spriteai';

// Generate a character spritesheet
const description = 'a cute dragon';
const options = {
  states: ['idle', 'walk', 'run'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art',
  padding: 2,
  direction: 'right',
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

// Remove background color from an image
const inputPath = 'path/to/input/image.png';
const outputPath = 'path/to/output/image.png';
const targetColor = '#FFFFFF'; // Color to remove
const colorThreshold = 10; // Threshold for color matching

removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)
  .then(() => {
    console.log('Background color removed successfully.');
  })
  .catch(error => {
    console.error('Error removing background color:', error);
  });
```

## Key Features

SpriteAI offers several powerful features for sprite generation and manipulation:

1. **Character Spritesheet Generation**: Create spritesheets with multiple animation states.
2. **Background Color Removal**: Remove specific colors from images to create transparent backgrounds.
3. **Environment Sprite Generation**: Generate tileset sprites for game environments.
4. **Item Sprite Generation**: Create sprites for game items and equipment.

## Advanced Usage

For more advanced usage and detailed API reference, please refer to the following sections:

- [API Reference](./api-reference.md)
- [Usage Examples](./usage-examples.md)
- [Advanced Techniques](./advanced-techniques.md)

## Configuration

SpriteAI uses the OpenAI API for image generation. Make sure you have set up your OpenAI API credentials properly. You can do this by setting the `OPENAI_API_KEY` environment variable or by configuring it in your application code.

## Next Steps

To get the most out of SpriteAI:

1. Explore the full API documentation to understand all available functions and options.
2. Experiment with different sprite generation parameters to achieve desired results.
3. Try combining multiple features, such as generating a spritesheet and then removing its background.
4. Join our community forums or contribute to the project on GitHub for support and collaboration.

We hope you enjoy using SpriteAI for your sprite generation needs!