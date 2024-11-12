

  # **generateSprite Method**

High Level

This is an asynchronous method that is part of our Node.js SDK. You can access it after installing the package from NPM and importing the sprite object:

```javascript
import { sprite } from 'sprite-ai'
```

## Why should I use this function?

The `generateSprite` method is a powerful tool for creating sprite sheets with walking animations. It leverages AI to generate a set of frames based on your description, which can be directly used in game development environments like Phaser.js. This method is particularly useful when you need:

1. Quick prototyping of character animations
2. Custom sprite sheets without manual drawing
3. AI-generated assets that resemble Super Nintendo style graphics

## What parameters or arguments are required?

The `generateSprite` method accepts two parameters:

1. `description` (required): A string describing the character or sprite you want to generate.
2. `options` (optional): An object with the following possible properties:
   - `iterations`: Number of variations to generate
   - `size`: Image size (default is "1024x1024")
   - `save`: Boolean to indicate if the image should be saved locally

## Prerequisites

To use this function, you need to have:

1. Node.js installed on your system
2. The sprite-ai package installed in your project
3. An OpenAI API key with access to DALL-E 3 and GPT-4 Vision

## How do I use this function?

Here's a step-by-step guide to using the `generateSprite` method:

1. Import the sprite object from the package:
   ```javascript
   import { sprite } from 'sprite-ai'
   ```

2. Call the `generateSprite` method with a description and options:
   ```javascript
   const result = await sprite.generateSprite("a pixelated knight", {
     iterations: 1,
     size: "1024x1024",
     save: true
   });
   ```

3. The function will return an object or an array of objects (if iterations > 1) containing:
   - `messages`: JSON object with recommended frameWidth and frameHeight
   - `image`: Base64 encoded image data URL

4. You can then use this information to load the sprite sheet in Phaser.js:
   ```javascript
   this.load.spritesheet('knight', 'path/to/saved/image.png', {
     frameWidth: result.messages.content.frameWidth,
     frameHeight: result.messages.content.frameHeight
   });
   ```

The function generates a 1024x1024 image with 6 frames arranged in a 2x3 grid, optimized for walking animations. It uses DALL-E 3 to create the image and GPT-4 Vision to analyze the result and suggest appropriate frame dimensions.

Note: The generated image is converted to grayscale to optimize for game development use. If you need color sprites, you may need to modify the function or post-process the image.

  