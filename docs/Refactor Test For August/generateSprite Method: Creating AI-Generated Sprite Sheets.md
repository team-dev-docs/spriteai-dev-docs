

  # **generateSprite Method**

High Level

The `generateSprite` method is an asynchronous function exported from our Node.js SDK. You can import it from the sprite object as follows:

```javascript
import { sprite } from 'sprite-ai'
```

## Why should I use this function?

The `generateSprite` function is designed to create sprite sheets for game characters, optimized for walking animations. It leverages AI to generate a 6-frame animation in a Super Nintendo-inspired style. This function is particularly useful for:

1. Rapid prototyping of game characters
2. Creating consistent sprite sheets for retro-style games
3. Automating the sprite creation process, saving time and effort

## What parameters or arguments are required?

The `generateSprite` function accepts two parameters:

1. `description` (required): A string describing the character you want to generate.
2. `options` (optional): An object with the following properties:
   - `iterations`: Number of sprite variations to generate
   - `size`: Image size (default is "1024x1024")
   - `save`: Boolean to determine if the generated image should be saved locally

## Prerequisites

Before using this function, ensure you have:

1. Installed the sprite-ai package from NPM
2. Set up your OpenAI API credentials
3. Installed required dependencies: axios and sharp

## How do I use this function?

Here's a step-by-step guide to using the `generateSprite` function:

1. Import the function:
   ```javascript
   import { sprite } from 'sprite-ai'
   ```

2. Call the function with a description and optional parameters:
   ```javascript
   const result = await sprite.generateSprite("a cat warrior", {
     iterations: 3,
     size: "1024x1024",
     save: true
   });
   ```

3. The function returns an object (or array of objects if using iterations) containing:
   - `messages`: JSON object with recommended frameHeight and frameWidth for use in Phaser.js
   - `image`: Base64-encoded image data URL of the generated sprite sheet

4. You can then use this information to load the sprite sheet in your game:
   ```javascript
   this.load.spritesheet('character', result.image, { 
     frameWidth: result.messages.frameWidth, 
     frameHeight: result.messages.frameHeight 
   });
   ```

The function handles the entire process of generating the sprite, including:
- Creating the image using DALL-E 3
- Processing the image (greyscale conversion, alpha channel addition)
- Analyzing the image to determine optimal frame dimensions
- Optionally saving the image locally

By using this function, you can quickly generate game-ready sprite sheets with minimal effort, streamlining your game development process.

  