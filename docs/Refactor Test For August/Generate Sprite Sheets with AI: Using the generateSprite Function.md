

  # **generateSprite Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the sprite object as follows:

```javascript
import { sprite } from 'sprite-ai'
```

## Why should I use this function?

The `generateSprite` function is a powerful tool for creating sprite sheets programmatically. It leverages AI to generate a set of frames for character animations, specifically optimized for walking animations. This function is particularly useful when you need to:

1. Quickly prototype character designs for games or applications.
2. Generate multiple variations of a character sprite.
3. Create sprite sheets that are compatible with game engines like Phaser.js.

## What parameters or arguments are required?

The `generateSprite` function accepts two parameters:

1. `description` (required): A string describing the character you want to generate.
2. `options` (optional): An object with the following properties:
   - `iterations`: Number of variations to generate (if not specified, generates a single sprite sheet).
   - `size`: Size of the generated image (default is "1024x1024").
   - `save`: Boolean indicating whether to save the generated image to disk.

## Prerequisites

To use this function, you need to have:

1. Node.js installed on your system.
2. The sprite-ai package installed in your project.
3. An OpenAI API key set up in your environment variables.
4. The `axios` and `sharp` libraries installed for image processing.

## How do I use this function?

Here's a step-by-step guide on how to use the `generateSprite` function:

1. Import the function into your project:

   ```javascript
   import { sprite } from 'sprite-ai'
   ```

2. Call the function with a description of the character you want to generate:

   ```javascript
   const result = await sprite.generateSprite("A pixelated robot character", {
     iterations: 3,
     size: "1024x1024",
     save: true
   });
   ```

3. The function will return either:
   - An array of objects (if iterations > 1), each containing:
     - `messages`: JSON object with frameHeight and frameWidth information.
     - `image`: Base64 encoded image data URL.
   - A single object with the same structure (if iterations is not specified).

4. You can then use the returned information to load the sprite sheet in your game engine:

   ```javascript
   this.load.spritesheet('character', imageDataUrl, { 
     frameWidth: result.messages.content.frameWidth, 
     frameHeight: result.messages.content.frameHeight 
   });
   ```

The function handles the entire process of generating the sprite sheet, including:
- Creating the image using DALL-E 3
- Processing the image (converting to grayscale)
- Analyzing the image to determine optimal frame dimensions
- Optionally saving the image to disk

This automated process saves significant time in character creation and ensures consistency in your sprite designs.

  