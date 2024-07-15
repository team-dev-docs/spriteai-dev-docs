
  
  # **generateSprite Function Documentation**

High Level

This function is exported from our Node.js SDK, which you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateSprite` function allows you to create custom sprite sheets for game characters based on text descriptions. It utilizes AI-powered image generation to produce a set of frames optimized for walking animations, saving time and effort in character design and animation.

## What parameters or arguments are required?

1. `description` (string): A text description of the character you want to generate.
2. `options` (object, optional): Additional configuration options:
   - `iterations` (number): Number of sprite variations to generate.
   - `size` (string): Image size (default: "1024x1024").
   - `save` (boolean): Whether to save the generated image to disk.

## Prerequisites

- Node.js environment
- OpenAI API key set up in your environment
- Required dependencies: `axios`, `sharp`, `openai`

## How do I use this function?

1. Import the function from the SDK:

   ```javascript
   import { sprite } from 'sprite'
   ```

2. Call the function with a description and optional parameters:

   ```javascript
   const result = await sprite.generateSprite("a pixelated warrior", {
     iterations: 3,
     size: "1024x1024",
     save: true
   });
   ```

3. The function returns an object or array (if iterations > 1) containing:
   - `messages`: JSON object with frameHeight and frameWidth for use in Phaser.js
   - `image`: Base64-encoded image data URL of the generated sprite sheet

4. Use the returned data to load the sprite sheet in your Phaser.js game:

   ```javascript
   this.load.spritesheet('character', result.image, { 
     frameWidth: result.messages.frameWidth, 
     frameHeight: result.messages.frameHeight 
   });
   ```

This function streamlines the process of creating game-ready sprite sheets, leveraging AI to generate character animations based on simple text descriptions. It's particularly useful for rapid prototyping or when you need placeholder graphics for game development.
  
  