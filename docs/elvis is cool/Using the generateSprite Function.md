

  # **generateSprite Function**

High Level

This is an asynchronous function that is exported from our Node.js SDK. You can install it from NPM and import it from the sprite object as follows:

```javascript
import { sprite } from 'sprite-ai'
```

## Why should I use this function?

The `generateSprite` function is a powerful tool for creating custom sprite sheets for game development, particularly for use with Phaser.js. It leverages AI to generate a series of frames for a walking animation based on a given description. This function is especially useful for:

1. Rapidly prototyping game characters
2. Creating consistent, SNES-style sprite animations
3. Automating the sprite creation process for walking animations

## What parameters or arguments are required?

The `generateSprite` function accepts two parameters:

1. `description` (required): A string describing the character you want to generate.
2. `options` (optional): An object that can include the following properties:
   - `iterations`: Number of times to generate the sprite (for multiple variations)
   - `size`: Size of the generated image (default is "1024x1024")
   - `save`: Boolean indicating whether to save the generated image to the filesystem

## Prerequisites

To use this function, you need to:

1. Have the SDK installed in your Node.js project
2. Set up proper authentication for OpenAI API access
3. Ensure you have the necessary dependencies installed (axios, sharp, path)

## How do I use this function?

Here's a step-by-step guide to using the `generateSprite` function:

1. Import the function from the SDK:
   ```javascript
   import { sprite } from 'sprite-ai'
   ```

2. Call the function with a description and optional parameters:
   ```javascript
   const result = await sprite.generateSprite("a cartoon rabbit", {
     iterations: 1,
     size: "1024x1024",
     save: true
   });
   ```

3. The function will:
   - Generate a sprite sheet using DALL-E 3
   - Process the image (greyscale conversion, alpha channel addition)
   - Analyze the image to determine optimal frame dimensions
   - Return an object containing the processed image data and frame dimensions

4. You can then use the returned data to load the sprite in Phaser.js:
   ```javascript
   this.load.spritesheet('rabbit', result.image, { 
     frameWidth: result.messages.content.frameWidth, 
     frameHeight: result.messages.content.frameHeight 
   });
   ```

This function streamlines the process of creating custom sprite animations, allowing you to focus on game design and mechanics rather than manual sprite creation.

  