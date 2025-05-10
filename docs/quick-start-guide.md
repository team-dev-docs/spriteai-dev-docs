# Quick Start Guide

Welcome to the SpriteAI quick start guide! This guide will help you get started with generating sprite sheets using our AI-powered tool.

## Installation

First, make sure you have the SpriteAI module installed in your project:

```bash
npm install spriteai
```

## Basic Usage

Here's a simple example to generate a sprite sheet:

```javascript
import { sprite } from 'spriteai';

async function generateSimpleSprite() {
  const description = "A pixelated robot";
  const result = await sprite.generateSprite(description);
  
  console.log(result.messages); // Log frame dimensions
  console.log(result.image);    // Log base64-encoded image data URL
}

generateSimpleSprite();
```

This will generate a sprite sheet based on the description "A pixelated robot".

## Advanced Options

You can customize the sprite generation with additional options:

```javascript
import { sprite } from 'spriteai';

async function generateCustomSprite() {
  const description = "A cartoon cat";
  const options = {
    iterations: 3,
    size: "512x512",
    save: true
  };
  
  const variations = await sprite.generateSprite(description, options);
  
  variations.forEach((variation, index) => {
    console.log(`Variation ${index + 1}:`, variation.messages);
  });
}

generateCustomSprite();
```

This example generates three variations of a cartoon cat sprite, with a smaller size and saves the results to disk.

## Understanding the Output

The `generateSprite` function returns an object (or array of objects for multiple iterations) containing:

- `messages`: A JSON object with `frameHeight` and `frameWidth` information.
- `image`: A base64-encoded image data URL of the generated sprite sheet.

## Tips for Best Results

1. Be specific in your descriptions for more accurate results.
2. Experiment with different iteration counts to get varied options.
3. Use the `save` option to keep generated sprites for later use.
4. Remember that generated sprites are optimized for walking animations with 6 frames in a 2x3 grid.

## Next Steps

Explore the full API documentation to learn about more advanced features and options available in SpriteAI.

Happy sprite generating!
