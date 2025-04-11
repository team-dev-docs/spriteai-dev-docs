# Quick Start Guide

## Introduction

This quick start guide will help you get up and running with the SpriteAI library, focusing on the `generateSprite` function for creating AI-powered sprite sheets.

## Installation

First, install the SpriteAI library in your project:

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
  
  console.log(result.messages); // Log frame information
  console.log(result.image);    // Log base64-encoded image data
}

generateSimpleSprite();
```

This will generate a sprite sheet of a pixelated robot with default options.

## Advanced Usage

For more control over the sprite generation process, you can use additional options:

```javascript
import { sprite } from 'spriteai';

async function generateAdvancedSprite() {
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

generateAdvancedSprite();
```

This will generate three variations of a cartoon cat sprite, each 512x512 pixels, and save the images to disk.

## Function Parameters

- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

The `generateSprite` function returns an object (or array of objects for multiple iterations) containing:

- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

## Notes

- The function uses AI models to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid).
- Images are converted to grayscale during processing.
- When saving is enabled, images are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.

With this quick start guide, you should be able to begin generating AI-powered sprite sheets using the SpriteAI library. Experiment with different descriptions and options to create unique characters for your projects!