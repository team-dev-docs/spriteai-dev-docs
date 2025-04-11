# Quick Start Guide

## Introduction

This quick start guide will help you get up and running with the `generateSprite` function, which creates sprite sheet images using AI-powered image generation and analysis.

## Installation

To use the `generateSprite` function, make sure you have the sprite module installed in your project. You can import it like this:

```javascript
import { sprite } from './path/to/sprite/module';
```

## Basic Usage

Here's a simple example to generate a sprite:

```javascript
const description = "A pixelated robot";
const result = await sprite.generateSprite(description);

console.log(result.messages); // JSON object with frameHeight and frameWidth
console.log(result.image);    // Base64-encoded image data URL
```

## Advanced Usage

You can customize the sprite generation with additional options:

```javascript
const description = "A cartoon cat";
const options = {
  iterations: 3,
  size: "1024x1024",
  save: true
};

const variations = await sprite.generateSprite(description, options);

variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

## Parameters

- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.

## Output

The function returns an object (or array of objects for multiple iterations) containing:

- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

## Tips

- Be specific in your descriptions for better results.
- Generated sprites are optimized for walking animations (6 frames in a 2x3 grid).
- Images are converted to grayscale, which may affect the final output.
- When saving is enabled, images are stored in an 'assets' folder.

## Next Steps

For more detailed information on the `generateSprite` function, including additional examples and considerations, refer to the full documentation.

Happy sprite generating!