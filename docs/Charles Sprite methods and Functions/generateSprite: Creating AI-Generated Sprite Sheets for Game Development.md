
  
  # **generateSprite Function**

High Level

This function is part of our Node.js SDK that you can install from NPM and import from the sprite object `sprite` as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateSprite` function is a powerful tool for creating sprite sheets optimized for walking animations. It leverages OpenAI's DALL-E 3 model to generate character images and uses GPT-4 Vision to analyze the resulting images for optimal frame dimensions. This function is particularly useful for game developers who need quick, AI-generated sprite assets for their projects.

## What parameters or arguments are required?

The `generateSprite` function accepts two parameters:

1. `description` (required): A string describing the character you want to generate.
2. `options` (optional): An object that can include the following properties:
   - `iterations`: Number of sprite variations to generate.
   - `size`: Image size (default is "1024x1024").
   - `save`: Boolean to determine if the image should be saved locally.

## Prerequisites

To use this function, you need:

1. An OpenAI API key with access to DALL-E 3 and GPT-4 Vision models.
2. Node.js installed on your system.
3. The following npm packages installed: `openai`, `axios`, `sharp`, and `path`.

## How do I use this function?

Here's a step-by-step guide to using the `generateSprite` function:

1. Import the function from the sprite module:

   ```javascript
   import { sprite } from 'sprite'
   ```

2. Call the function with a description and options:

   ```javascript
   const result = await sprite.generateSprite("a pixelated knight", {
     iterations: 1,
     size: "1024x1024",
     save: true
   });
   ```

3. The function will return an object (or an array of objects if iterations > 1) containing:
   - `messages`: JSON object with frameHeight and frameWidth information.
   - `image`: Base64-encoded image data URL.

4. You can then use this information to load the sprite sheet in your game engine, for example in Phaser.js:

   ```javascript
   this.load.spritesheet('knight', imageDataUrl, { 
     frameWidth: result.messages.content.frameWidth, 
     frameHeight: result.messages.content.frameHeight 
   });
   ```

Note that the function generates a 6-frame sprite sheet arranged in a 2x3 grid, optimized for walking animations. The style resembles Super Nintendo graphics, and the background is white to facilitate easy integration into your game projects.
  
  