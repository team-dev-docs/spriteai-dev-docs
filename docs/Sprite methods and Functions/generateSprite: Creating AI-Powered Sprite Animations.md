

  # **generateSprite Method**

High Level

This is an asynchronous method that is part of the sprite object in our Node.js SDK. You can access it after installing the package from NPM and importing it as follows:

```javascript
import { sprite } from 'sprite-ai'
```

## Why should I use this function?

The `generateSprite` method is a powerful tool for creating custom sprite animations. It leverages AI to generate a spritesheet based on a text description, making it ideal for:

1. Rapid prototyping of game characters
2. Creating unique assets for your game or application
3. Experimenting with different character designs without manual drawing

## What parameters or arguments are required?

The `generateSprite` method accepts two parameters:

1. `description` (required): A string describing the character or sprite you want to generate.
2. `options` (optional): An object with additional configuration:
   - `iterations`: Number of sprite variations to generate
   - `size`: Image size (default is "1024x1024")
   - `save`: Boolean to determine if the generated image should be saved locally

## Prerequisites

To use this function effectively, you need:

1. An OpenAI API key with access to DALL-E 3 and GPT-4 Vision Preview
2. Node.js installed on your system
3. The sprite-ai package installed in your project

## How do I use this function?

Here's a step-by-step guide to using the `generateSprite` method:

1. Import the sprite object from the SDK:
   ```javascript
   import { sprite } from 'sprite-ai'
   ```

2. Call the method with a description and options:
   ```javascript
   const result = await sprite.generateSprite("a cute robot", { iterations: 3, size: "1024x1024", save: true });
   ```

3. The function will return an object (or array of objects if using iterations) containing:
   - `messages`: JSON object with recommended frameWidth and frameHeight for use in Phaser.js
   - `image`: Base64 encoded image data of the generated sprite

4. You can then use this data to load the sprite into your game engine:
   ```javascript
   this.load.spritesheet('robot', result.image, { frameWidth: result.messages.frameWidth, frameHeight: result.messages.frameHeight });
   ```

The function handles the entire process of generating the sprite, including:
- Creating a prompt for DALL-E 3 to generate the initial image
- Processing the image to grayscale
- Using GPT-4 Vision to analyze the image and suggest optimal frame dimensions
- Formatting the response for easy integration with game engines like Phaser.js

This method streamlines the sprite creation process, allowing you to quickly generate and implement game-ready assets with minimal manual intervention.

  