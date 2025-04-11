# Quick Start Guide

## Introduction

Welcome to the Quick Start Guide for SpriteAI! This guide will help you get started with generating sprite sheets using AI-powered image generation and analysis.

## Installation

To use SpriteAI, first install the package:

```bash
npm install spriteai
```

## Basic Usage

Here's how to quickly generate a sprite sheet:

1. Import the `sprite` module:

```javascript
import { sprite } from 'spriteai';
```

2. Use the `generateSprite` function:

```javascript
const description = "A pixelated robot";
const result = await sprite.generateSprite(description);

console.log(result.messages); // JSON object with frameHeight and frameWidth
console.log(result.image);    // Base64-encoded image data URL
```

## Function Parameters

The `generateSprite` function accepts two parameters:

- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.

## Advanced Usage

### Generating Multiple Variations

To generate multiple sprite variations:

```javascript
const description = "A cartoon cat";
const options = { iterations: 3 };

const variations = await sprite.generateSprite(description, options);

variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

### Saving Generated Sprites

To save the generated sprite to disk:

```javascript
const description = "A fantasy warrior";
const options = { save: true };

const result = await sprite.generateSprite(description, options);
// The sprite will be saved in the 'assets' folder
```

## Notes

- The function uses AI models to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid).
- The function converts images to grayscale, which may affect the final output.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.

With this quick start guide, you should be able to begin generating sprite sheets using SpriteAI. For more detailed information on other functions and advanced usage, please refer to the full documentation.