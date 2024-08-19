

  # **generateSprite Method**

High Level

This is a method that is part of the sprite object exported from our Node.js SDK. You can access it after installing the package from NPM and importing it as follows:

```javascript
import { sprite } from 'sprite-ai'
```

## Why should I use this method?

The `generateSprite` method is a powerful tool for creating sprite sheets optimized for walking animations. It leverages AI technology to generate a set of character frames based on a given description. This method is particularly useful for:

1. Rapid prototyping of game characters
2. Creating consistent sprite sheets in a Super Nintendo style
3. Automating the sprite creation process for walking animations
4. Obtaining both the visual assets and the correct frame dimensions for use in game engines like Phaser.js

## What parameters or arguments are required?

The `generateSprite` method accepts two parameters:

1. `description` (required): A string describing the character you want to generate.
2. `options` (optional): An object that can include the following properties:
   - `iterations`: Number of sprite variations to generate
   - `size`: Image size (default is "1024x1024")
   - `save`: Boolean to determine if the generated image should be saved locally

## Prerequisites

Before using this method, ensure you have:

1. Installed the sprite-ai package from NPM
2. Set up your OpenAI API credentials
3. Installed necessary dependencies like `axios` and `sharp`

## How do I use this method?

Here's a step-by-step guide to using the `generateSprite` method:

1. Import the sprite object from the SDK:
   ```javascript
   import { sprite } from 'sprite-ai'
   ```

2. Call the method with a description and options:
   ```javascript
   const result = await sprite.generateSprite("a pixelated warrior", {
     iterations: 1,
     size: "1024x1024",
     save: true
   });
   ```

3. The method will return an object or an array of objects (if iterations > 1) containing:
   - `messages`: JSON object with recommended frameWidth and frameHeight
   - `image`: Base64 encoded image data URL

4. You can then use this information to load the sprite sheet in your game:
   ```javascript
   this.load.spritesheet('warrior', result.image, { 
     frameWidth: result.messages.frameWidth, 
     frameHeight: result.messages.frameHeight 
   });
   ```

This method streamlines the process of creating and implementing sprite sheets for walking animations, saving time and ensuring consistency in your game development workflow.

  