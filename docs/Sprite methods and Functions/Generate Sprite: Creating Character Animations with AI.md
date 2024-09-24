

  # **Generate Sprite**

High Level

This function is part of our Node.js SDK, which you can install from NPM. It's specifically designed to generate sprite sheets for walking animations in game development. You can import it from the `sprite` object like this:

```javascript
import { sprite } from 'sprite-ai'
```

## Why should I use this function?

The `generateSprite` function is a powerful tool for game developers and designers who need to create character sprite sheets for walking animations quickly and efficiently. It leverages AI to generate a set of frames optimized for smooth walking cycles based on a text description. This function is particularly useful when you need:

1. Rapid prototyping of character walking animations
2. Consistent style across multiple characters' movement cycles (Super Nintendo-like graphics)
3. Automated creation of sprite sheets specifically tailored for walking animations in Phaser.js or similar game engines
4. Time-saving solution for creating frame-by-frame walking sequences

## What parameters or arguments are required?

The `generateSprite` function accepts two parameters:

1. `description` (required): A string describing the character you want to generate a walking animation for.
2. `options` (optional): An object that can include:
   - `iterations`: Number of walking sprite variations to generate
   - `size`: Image size (default is "1024x1024")
   - `save`: Boolean to indicate if the image should be saved locally
   - `animationFrames`: Number of frames in the walking cycle (default is 8)

## Prerequisites

To use this function, you need:

1. Node.js installed on your system
2. The sprite-ai package installed in your project
3. An OpenAI API key with access to DALL-E 3 and GPT-4 Vision

## How do I use this function?

Here's a step-by-step guide to using the `generateSprite` function for walking animations:

1. Import the function into your project:

   ```javascript
   import { sprite } from 'sprite-ai'
   ```

2. Call the function with a description of your character's walking animation:

   ```javascript
   const result = await sprite.generateSprite("a cute robot walking with a slight bounce", { iterations: 1, save: true, animationFrames: 8 });
   ```

3. The function will return an object containing:
   - `messages`: JSON object with recommended frameWidth and frameHeight for use in Phaser.js, as well as suggested animation key and frame rate
   - `image`: Base64-encoded image data of the generated walking animation sprite sheet

4. You can then use this information to load the walking sprite into your game:

   ```javascript
   // In your Phaser game scene
   this.load.spritesheet('robotWalk', 'path/to/saved/image.png', { 
     frameWidth: result.messages.frameWidth, 
     frameHeight: result.messages.frameHeight 
   });

   // Create the walking animation
   this.anims.create({
     key: result.messages.animationKey,
     frames: this.anims.generateFrameNumbers('robotWalk', { start: 0, end: 7 }),
     frameRate: result.messages.frameRate,
     repeat: -1
   });
   ```

The function handles the entire process of generating the walking animation sprite sheet, including:
- Creating a prompt for DALL-E 3 to generate the initial walking sequence
- Processing the image to ensure it's in the correct format for a sprite sheet (grayscale with alpha channel)
- Using GPT-4 Vision to analyze the generated image and determine optimal frame dimensions for the walking cycle
- Arranging the frames in a proper sprite sheet layout for easy animation implementation
- Optionally saving the walking animation sprite sheet to your local file system

By using this function, you can streamline your walking animation creation workflow, ensuring consistent and high-quality character movements across your game development projects.

  