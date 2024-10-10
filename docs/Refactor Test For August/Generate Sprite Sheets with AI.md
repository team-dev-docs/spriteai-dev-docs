

  # **Generate Sprite with AI**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the sprite object. It generates sprite sheets using AI, optimized for walking animations in a Super Nintendo style.

```javascript
import { sprite } from 'sprite-ai'
```

## Why should I use this function?

Use this function to quickly generate sprite sheets for game characters or objects. It leverages AI to create 6-frame walking animations in a retro Super Nintendo style, saving time and effort in sprite creation.

## What parameters or arguments are required?

1. `description` (string): A brief description of the character or object you want to generate.
2. `options` (object, optional):
   - `iterations` (number): Number of sprite variations to generate.
   - `size` (string): Image size (default: "1024x1024").
   - `save` (boolean): Whether to save the generated image locally.

## Prerequisites

- Node.js environment
- OpenAI API key (set as an environment variable)
- Installed dependencies: OpenAI, axios, sharp

## How do I use this function?

1. Import the function:
   ```javascript
   import { sprite } from 'sprite-ai'
   ```

2. Call the function with a description and optional parameters:
   ```javascript
   const result = await sprite.generateSprite("astronaut", { iterations: 3, save: true });
   ```

3. The function returns an object or array (if iterations > 1) containing:
   - `messages`: JSON object with frameWidth and frameHeight
   - `image`: Base64 encoded image data URL

4. Use the returned data to load the sprite in your game engine:
   ```javascript
   this.load.spritesheet('character', result.image, { 
     frameWidth: result.messages.content.frameWidth, 
     frameHeight: result.messages.content.frameHeight 
   });
   ```

This function simplifies the process of creating sprite sheets for game development, especially useful for prototyping or creating retro-style games. It handles the AI image generation, processing, and provides the necessary metadata for easy integration into game engines like Phaser.js.

  