

  # **generateSprite Function**

High Level

The `generateSprite` function is an asynchronous method exported from our Node.js SDK. You can install it from NPM and import it from the sprite object as follows:

```javascript
import { sprite } from 'sprite-ai'
```

## Why should I use this function?

This function is essential for developers who need to generate sprite sheets for game development, particularly for walking animations. It leverages AI to create custom sprites based on text descriptions, saving significant time and effort in sprite creation.

## What are the params or arguments required?

1. `description` (string): A text description of the character you want to generate.
2. `options` (object, optional): 
   - `iterations` (number): Number of sprite variations to generate.
   - `size` (string): Image size (default: "1024x1024").
   - `save` (boolean): Whether to save the generated image to disk.

## Prerequisites

- Node.js environment
- OpenAI API key set up in your environment
- `axios` and `sharp` libraries installed
- Access to OpenAI's DALL-E 3 and GPT-4 Vision Preview models

## How do I use this function?

1. Basic usage:
   ```javascript
   const result = await sprite.generateSprite("a pixelated warrior");
   ```

2. With options:
   ```javascript
   const result = await sprite.generateSprite("a pixelated warrior", {
     iterations: 3,
     size: "1024x1024",
     save: true
   });
   ```

The function generates a sprite sheet with 6 frames arranged in a 2x3 grid, optimized for walking animations. It uses DALL-E 3 to create the image and GPT-4 Vision to analyze the appropriate frame dimensions.

The returned object contains:
- `messages`: JSON object with recommended frameHeight and frameWidth for use in Phaser.js
- `image`: Base64-encoded image data URL

If `iterations` is specified, it returns an array of these objects.

Note: The generated sprites are in grayscale and resemble Super Nintendo graphics style. The function also provides an option to save the generated image to the `assets` folder in your current working directory.

  