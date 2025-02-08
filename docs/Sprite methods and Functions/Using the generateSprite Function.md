

  # **generateSprite Function**

High Level

This function is exported from our Node.js SDK, which you can install from NPM and import from the sprite object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateSprite` function is a powerful tool for creating custom sprite sheets for game development, particularly for use with Phaser.js. It leverages AI to generate a set of character frames based on a description, optimized for walking animations. This function is especially useful when you need:

1. Quick prototyping of game characters
2. Custom sprites without manual design work
3. AI-generated assets that resemble Super Nintendo-style graphics

## What parameters or arguments are required?

The `generateSprite` function takes two parameters:

1. `description` (required): A string describing the character you want to generate.
2. `options` (optional): An object with the following possible properties:
   - `iterations`: Number of variations to generate
   - `size`: Image size (default is "1024x1024")
   - `save`: Boolean to determine if the generated image should be saved locally

## Prerequisites

To use this function, you need:

1. Node.js installed on your system
2. The sprite SDK installed in your project
3. An OpenAI API key set up in your environment
4. Axios for HTTP requests
5. Sharp for image processing

## How do I use this function?

Here's a step-by-step guide to using the `generateSprite` function:

1. Import the function from the sprite SDK:
   ```javascript
   import { sprite } from 'sprite'
   ```

2. Call the function with a description and optional parameters:
   ```javascript
   const result = await sprite.generateSprite("A pixelated warrior", {
     iterations: 1,
     size: "1024x1024",
     save: true
   });
   ```

3. The function will return an object containing:
   - `messages`: JSON object with recommended frameWidth and frameHeight for use in Phaser.js
   - `image`: Base64-encoded image data URL of the generated sprite sheet

4. You can then use this information to load the sprite sheet in Phaser.js:
   ```javascript
   this.load.spritesheet('character', result.image, { 
     frameWidth: result.messages.frameWidth, 
     frameHeight: result.messages.frameHeight 
   });
   ```

The function handles the entire process of generating the sprite sheet, including:
- Creating the image using DALL-E 3
- Processing the image (greyscale conversion, alpha channel)
- Analyzing the image to determine optimal frame dimensions
- Optionally saving the image locally

This automated process saves significant time in asset creation and ensures consistency in your game's graphical style.

  