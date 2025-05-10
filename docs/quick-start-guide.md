# Quick Start Guide

## Introduction

This quick start guide will help you get started with using the `generateSprite` function to create AI-powered sprite sheets for your projects.

## Installation

To use the `generateSprite` function, you need to have the sprite module installed in your project. Make sure you have the necessary dependencies set up.

## Basic Usage

Here's how to quickly generate a sprite sheet using the `generateSprite` function:

1. Import the sprite module:

```javascript
import { sprite } from './path/to/sprite/module';
```

2. Call the `generateSprite` function with a description:

```javascript
const description = "A pixelated robot";
const result = await sprite.generateSprite(description);
```

3. Access the generated sprite sheet:

```javascript
console.log(result.messages); // Frame height and width information
console.log(result.image); // Base64-encoded image data URL
```

## Advanced Options

You can customize the sprite generation process using optional parameters:

```javascript
const options = {
  iterations: 3, // Generate 3 variations
  size: "1024x1024", // Set custom size
  save: true // Save the generated image to disk
};

const variations = await sprite.generateSprite("A cartoon cat", options);
```

## Example: Generating Multiple Variations

Here's an example of how to generate and process multiple sprite variations:

```javascript
const variations = await sprite.generateSprite("A cartoon cat", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
  // Process or display each variation as needed
});
```

## Important Notes

- The function uses AI models, so results may vary for the same input.
- Generated sprites are optimized for walking animations (6 frames in a 2x3 grid).
- Images are converted to grayscale during processing.
- When saving is enabled, images are stored in an 'assets' folder.
- The function may take some time to complete due to API calls and image processing.

For more detailed information and advanced usage, please refer to the full `generateSprite` documentation.
