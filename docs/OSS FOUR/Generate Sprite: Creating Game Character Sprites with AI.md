

  # **Generate Sprite**

High Level

This function is part of the sprite AI SDK, which you can install from NPM and import into your project. It generates sprite sheets for game characters based on text descriptions.

```javascript
import { sprite } from 'spriteai'
```

## Why should I use this function?

The `generateSprite` function is a powerful tool for game developers and designers who need to quickly create sprite sheets for their characters. It uses AI to generate a series of frames optimized for walking animations, saving time and effort in the sprite creation process.

Key benefits include:
- Rapid generation of sprite sheets from text descriptions
- AI-powered creation of SNES-style graphics
- Option for multiple iterations to find the best result
- Automatic calculation of optimal frame dimensions

## What parameters or arguments are required?

The function takes two parameters:

1. `description` (string): A text description of the character you want to generate.
2. `options` (object, optional): An object with additional configuration options:
   - `iterations` (number): Number of sprite variations to generate
   - `size` (string): Image size (default: "1024x1024")
   - `save` (boolean): Whether to save the generated image to disk

## Prerequisites

Before using this function, ensure you have:
- Installed the spriteAI SDK
- Set up your OpenAI API key in your environment variables
- Installed required dependencies (axios, sharp)

## How do I use this function?

Here's a step-by-step guide to using the `generateSprite` function:

1. Import the function from the SDK:
   ```javascript
   import { sprite } from 'spriteai'
   ```

2. Call the function with a description and options:
   ```javascript
   const result = await sprite.generateSprite("A pixelated warrior", { iterations: 3, save: true });
   ```

3. The function will return an object (or array of objects if using iterations) containing:
   - `messages`: JSON object with recommended frameWidth and frameHeight
   - `image`: Base64-encoded image data URL of the generated sprite sheet

4. You can then use this information to load the sprite sheet in your game engine:
   ```javascript
   this.load.spritesheet('warrior', imageDataUrl, { frameWidth: result.messages.frameWidth, frameHeight: result.messages.frameHeight });
   ```

The function generates a 1024x1024 image with 6 frames arranged in a 2x3 grid, optimized for walking animations. It uses DALL-E 3 to create the initial image and GPT-4 Vision to analyze the result and suggest optimal frame dimensions.

By leveraging AI, this function streamlines the sprite creation process, allowing you to focus on game design and mechanics rather than manual sprite sheet creation.

  