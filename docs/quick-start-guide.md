# Quick Start Guide

## Introduction

Welcome to the quick start guide for using the `generateSprite` function. This guide will help you get up and running with generating AI-powered sprite sheets for your projects.

## Installation

First, ensure you have the necessary module installed in your project. You can typically do this by importing the `sprite` module from the appropriate path:

```javascript
import { sprite } from './path/to/sprite/module';
```

## Basic Usage

Here's a simple example to generate a sprite sheet:

```javascript
const description = "A pixelated robot";
const result = await sprite.generateSprite(description);

console.log(result.messages); // Logs frame information
console.log(result.image);    // Logs base64-encoded image data URL
```

This will generate a single sprite sheet based on the provided description.

## Advanced Usage

### Generating Multiple Variations

You can generate multiple variations of a sprite by using the `iterations` option:

```javascript
const description = "A cartoon cat";
const options = { iterations: 3 };
const variations = await sprite.generateSprite(description, options);

variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

### Customizing Output

You can customize the output with additional options:

```javascript
const options = {
  size: "1024x1024", // Set the size of the generated image
  save: true           // Save the generated image to disk
};

const result = await sprite.generateSprite("A magical wizard", options);
```

## What You Get

The `generateSprite` function returns an object (or array of objects for multiple iterations) containing:

- `messages`: A JSON object with `frameHeight` and `frameWidth` information.
- `image`: A base64-encoded image data URL of the generated sprite sheet.

## Important Notes

- The function uses AI models to generate and analyze images, so results may vary for the same input.
- Generated sprites are optimized for walking animations and follow a 2x3 grid layout (6 frames).
- Images are converted to grayscale during processing.
- When saving is enabled, images are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.

## Next Steps

For more detailed information about the `generateSprite` function, including all available options and return values, please refer to the full [generateSprite documentation](./generateSprite.md).

Happy sprite generating!