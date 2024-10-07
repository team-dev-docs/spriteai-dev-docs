

  # **generateSprite Function**

High Level

The `generateSprite` function is an asynchronous method exported from our Node.js SDK. You can install it from NPM and import it from the sprite object as follows:

```javascript
import { sprite } from 'sprite-ai'
```

## Why should I use this function?

This function allows you to generate sprite sheets for game characters based on text descriptions. It utilizes AI-powered image generation and analysis to create sprites optimized for walking animations, resembling Super Nintendo graphics. This can significantly speed up the asset creation process for game developers.

## What parameters or arguments are required?

The `generateSprite` function accepts two parameters:

1. `description` (required): A string describing the character you want to generate.
2. `options` (optional): An object that can include:
   - `iterations`: Number of sprite variations to generate.
   - `size`: Image size (default is "1024x1024").
   - `save`: Boolean to determine if the generated image should be saved locally.

## Prerequisites

- Node.js environment
- OpenAI API key set up in your environment
- Required dependencies: OpenAI, axios, sharp, and path

## How do I use this function?

Here's a step-by-step guide to using the `generateSprite` function:

1. Import the function:
   ```javascript
   import { sprite } from 'sprite-ai'
   ```

2. Call the function with a description and options:
   ```javascript
   const result = await sprite.generateSprite("a pixelated warrior", {
     iterations: 3,
     size: "1024x1024",
     save: true
   });
   ```

3. The function will return either:
   - An array of iterations (if `options.iterations` is set), each containing:
     - `messages`: JSON object with frameHeight and frameWidth
     - `image`: Base64 encoded image data URL
   - Or a single object with the same structure if no iterations are specified

4. You can then use the returned data to load the sprite in your game engine. For example, in Phaser.js:
   ```javascript
   this.load.spritesheet('character', result.image, { 
     frameWidth: result.messages.content.frameWidth, 
     frameHeight: result.messages.content.frameHeight 
   });
   ```

This function streamlines the process of creating game sprites by leveraging AI to generate and analyze character images, providing you with ready-to-use sprite sheets and the necessary dimensions for implementation in your game engine.

  