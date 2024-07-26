
  
  # **SpriteAI Generator**

## What does this do?

The SpriteAI Generator is a powerful tool that creates sprite sheets for game characters using AI-powered image generation. It leverages OpenAI's DALL-E 3 model to produce a set of character frames optimized for walking animations, and then uses GPT-4 Vision to analyze the generated image for optimal frame dimensions.

## Why should I use this?

This tool streamlines the process of creating sprite sheets for game development, particularly for projects using frameworks like Phaser.js. It offers several advantages:

1. Rapid prototyping: Quickly generate character sprites without manual illustration.
2. Consistency: Ensures a uniform style resembling Super Nintendo graphics.
3. Optimization: Automatically determines ideal frame dimensions for use in game engines.
4. Flexibility: Supports multiple iterations and customizable options.

## Prerequisites

To use the SpriteAI Generator, you'll need:

1. Node.js environment
2. OpenAI API key
3. Axios for HTTP requests
4. Sharp for image processing

## How to use this

1. Import the class containing the `generateSprite` method.

2. Call the method with a description of the character you want to generate:

   ```javascript
   const spriteGenerator = new SpriteGenerator();
   const result = await spriteGenerator.generateSprite("a medieval knight");
   ```

3. Optionally, you can pass additional options:

   ```javascript
   const options = {
     iterations: 3,
     size: "1024x1024",
     save: true
   };
   const results = await spriteGenerator.generateSprite("a medieval knight", options);
   ```

4. The method returns an object (or array of objects if using iterations) containing:
   - `messages`: JSON with recommended frameHeight and frameWidth
   - `image`: Base64 encoded image data URL

5. Use the returned information to load the sprite sheet in your game:

   ```javascript
   this.load.spritesheet('character', imageDataUrl, { 
     frameWidth: result.messages.frameWidth, 
     frameHeight: result.messages.frameHeight 
   });
   ```

This tool simplifies sprite creation, allowing developers to focus on game logic and mechanics rather than asset creation.
  
  