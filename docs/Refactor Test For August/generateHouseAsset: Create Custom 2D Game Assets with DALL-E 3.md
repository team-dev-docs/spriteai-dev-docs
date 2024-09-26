

  # **generateHouseAsset Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the sprite object as follows:

```javascript
import { sprite } from 'sprite'
```

The `generateHouseAsset` function leverages OpenAI's DALL-E 3 model to create 2D game assets based on user descriptions.

## Why should I use this function?

Use this function when you need to quickly generate custom 2D assets for your Phaser JS games. It's particularly useful for:
1. Rapid prototyping of game environments
2. Creating unique house or building assets
3. Experimenting with different visual styles for your game

## What parameters or arguments are required?

The function takes two parameters:
1. `description` (string): A description of the house or asset you want to generate
2. `options` (object): An optional configuration object with the following properties:
   - `iterations` (number): Number of image variations to generate
   - `size` (string): Image size (default is "1024x1024")

## Prerequisites

Before using this function, ensure you have:
1. Installed the sprite SDK
2. Set up your OpenAI API credentials
3. Initialized the OpenAI client (referred to as `openAiObject` in the code)

## How do I use this function?

Here's a step-by-step guide to using the `generateHouseAsset` function:

1. Import the sprite SDK:
   ```javascript
   import { sprite } from 'sprite'
   ```

2. Call the function with a description and options:
   ```javascript
   const result = await sprite.generateHouseAsset("modern two-story house", {
     iterations: 3,
     size: "1024x1024"
   });
   ```

3. The function will return either:
   - A single response object if no iterations are specified
   - An array of response objects if iterations are specified

4. Each response object contains the generated image data, which you can then use in your Phaser JS game.

Note: The function uses DALL-E 3 to generate images, so be mindful of API usage and costs associated with multiple iterations.

  