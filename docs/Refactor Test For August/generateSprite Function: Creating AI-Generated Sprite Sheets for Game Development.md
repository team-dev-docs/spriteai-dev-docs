

  # **generateSprite Function**

High Level

This is an asynchronous function that is exported from our Node.js SDK. You can install it from NPM and import it from the sprite object as follows:

```javascript
import { sprite } from 'sprite-ai'
```

## Why should I use this function?

The `generateSprite` function allows you to create sprite sheets for game development, particularly optimized for walking animations. It leverages AI to generate a set of frames based on a given description, making it easier to create game assets without manual illustration.

Key benefits include:
- Automated sprite generation based on text descriptions
- Integration with DALL-E 3 for image creation
- Optimization for walking animations
- Option to save generated sprites locally
- Automatic frame size calculation for use in Phaser.js

## What parameters or arguments are required?

The function accepts two parameters:

1. `description` (required): A string describing the character or sprite you want to generate.
2. `options` (optional): An object that can include:
   - `iterations`: Number of sprite variations to generate
   - `size`: Image size (default is "1024x1024")
   - `save`: Boolean to determine if the sprite should be saved locally

## Prerequisites

To use this function, you need:
- Node.js environment
- OpenAI API key set up in your environment
- Axios for HTTP requests
- Sharp for image processing

## How do I use this function?

Here's a step-by-step guide to using the `generateSprite` function:

1. Import the function:
   ```javascript
   import { sprite } from 'sprite-ai'
   ```

2. Call the function with a description and options:
   ```javascript
   const result = await sprite.generateSprite("medieval knight", {
     iterations: 1,
     size: "1024x1024",
     save: true
   });
   ```

3. The function will return an object or an array of objects (if iterations > 1) containing:
   - `messages`: JSON object with recommended frameWidth and frameHeight
   - `image`: Base64 encoded image data URL

4. You can then use this information to load the sprite in Phaser.js:
   ```javascript
   this.load.spritesheet('knight', 'path/to/saved/image.png', { 
     frameWidth: result.messages.content.frameWidth, 
     frameHeight: result.messages.content.frameHeight 
   });
   ```

The function handles the entire process of generating the sprite, including:
- Creating the image using DALL-E 3
- Processing the image (greyscale conversion, alpha channel)
- Analyzing the image to determine optimal frame sizes
- Optionally saving the sprite locally

This automated process significantly streamlines the asset creation workflow for game developers, allowing for rapid prototyping and iteration of character designs.

  