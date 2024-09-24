

  # **Generate 2D Model**

High Level

This function is part of our Node.js SDK, which you can install from NPM. It's designed to generate 2D model sheets for game development, particularly optimized for walking animations. You can import it from the `model2d` object like this:

```javascript
import { model2d } from 'model2d-ai'
```

## Why should I use this function?

The `generate2DModel` function is a powerful tool for game developers and designers who need to create character 2D models quickly and efficiently. It leverages AI to generate a set of frames for a walking animation based on a text description. This function is particularly useful when you need:

1. Rapid prototyping of character designs
2. Consistent style across multiple characters (Super Nintendo-like graphics)
3. Automated creation of 2D model sheets optimized for Phaser.js or similar game engines
4. Quick iteration on character concepts without manual drawing

## What parameters or arguments are required?

The `generate2DModel` function accepts two parameters:

1. `description` (required): A string describing the character you want to generate.
2. `options` (optional): An object that can include:
   - `iterations`: Number of 2D model variations to generate
   - `size`: Image size (default is "1024x1024")
   - `save`: Boolean to indicate if the image should be saved locally
   - `style`: String to specify the art style (e.g., "pixel", "cartoon", "realistic")

## Prerequisites

To use this function, you need:

1. Node.js installed on your system
2. The model2d-ai package installed in your project
3. An OpenAI API key with access to DALL-E 3 and GPT-4 Vision

## How do I use this function?

Here's a step-by-step guide to using the `generate2DModel` function:

1. Import the function into your project:

   ```javascript
   import { model2d } from 'model2d-ai'
   ```

2. Call the function with a description of your character:

   ```javascript
   const result = await model2d.generate2DModel("a cute robot", { iterations: 1, save: true, style: "pixel" });
   ```

3. The function will return an object containing:
   - `messages`: JSON object with recommended frameWidth and frameHeight for use in Phaser.js
   - `image`: Base64-encoded image data of the generated 2D model sheet
   - `metadata`: Additional information about the generated 2D model, including style and dimensions

4. You can then use this information to load the 2D model into your game:

   ```javascript
   // In your Phaser game scene
   this.load.spritesheet('robot', 'path/to/saved/image.png', { 
     frameWidth: result.messages.frameWidth, 
     frameHeight: result.messages.frameHeight 
   });
   ```

The function handles the entire process of generating the 2D model, including:
- Creating a prompt for DALL-E 3 to generate the initial image
- Processing the image to ensure it's in the correct format (grayscale with alpha channel)
- Using GPT-4 Vision to analyze the generated image and determine optimal frame dimensions
- Optionally saving the image to your local file system
- Providing metadata about the generated 2D model for easy integration into your game engine

By using this function, you can streamline your 2D model creation workflow and focus on other aspects of game development. The addition of style options allows for greater flexibility in character design, enabling you to match your game's aesthetic more precisely.

  