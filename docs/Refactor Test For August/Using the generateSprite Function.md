

  # **generateSprite Function**

High Level

The `generateSprite` function is an asynchronous method exported from our Node.js SDK. You can import it from the sprite object as follows:

```javascript
import { sprite } from 'sprite-ai'
```

## Why should I use this function?

This function is incredibly useful for game developers and designers who need to quickly generate sprite sheets for character animations. It leverages AI to create a series of frames based on a text description, saving time and effort in the sprite creation process. Additionally, it now supports enhanced customization options for more diverse sprite designs.

## What parameters or arguments are required?

The `generateSprite` function accepts two parameters:

1. `description` (required): A string describing the character or object you want to generate.
2. `options` (optional): An object that can include the following properties:
   - `iterations`: Number of sprite variations to generate.
   - `size`: Size of the generated image (default is "1024x1024").
   - `save`: Boolean to determine if the generated image should be saved locally.
   - `style`: String to specify the artistic style of the sprite (e.g., "pixel", "cartoon", "realistic").
   - `animation`: String to define the type of animation (e.g., "walk", "run", "idle").

## Prerequisites

To use this function, you need:

1. Node.js installed on your system.
2. The sprite-ai package installed in your project.
3. An OpenAI API key with access to DALL-E 3 and GPT-4 Vision Preview models.

## How do I use this function?

Here's a step-by-step guide to using the `generateSprite` function:

1. Import the function into your project:

   ```javascript
   import { sprite } from 'sprite-ai'
   ```

2. Call the function with a description and optional parameters:

   ```javascript
   const result = await sprite.generateSprite("a blue robot", {
     iterations: 1,
     size: "1024x1024",
     save: true,
     style: "pixel",
     animation: "walk"
   });
   ```

3. The function will return an object or an array of objects (if iterations > 1) containing:
   - `messages`: JSON object with frameHeight, frameWidth, and animation metadata.
   - `image`: Base64 encoded image data URL.

4. You can then use this information to load the sprite sheet in your game engine. For example, in Phaser.js:

   ```javascript
   this.load.spritesheet('robot', result.image, { 
     frameWidth: result.messages.content.frameWidth, 
     frameHeight: result.messages.content.frameHeight 
   });
   ```

The function generates a 1024x1024 image containing 6 frames of the described character in a 2x3 grid, optimized for the specified animation type. It uses DALL-E 3 for image generation and GPT-4 Vision for analyzing the resulting image to determine optimal frame dimensions and animation properties.

New Feature: The function now includes an option to generate sprites with transparent backgrounds, making it easier to integrate them into various game environments.

Note: The generated image is optimized for game performance and file size, with options for color or grayscale output based on your project needs.

  