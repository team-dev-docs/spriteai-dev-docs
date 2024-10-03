

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
4. Generating consistent asset sets for larger projects

## What parameters or arguments are required?

The function takes two parameters:
1. `description` (string): A description of the house or asset you want to generate
2. `options` (object): An optional configuration object with the following properties:
   - `iterations` (number): Number of image variations to generate
   - `size` (string): Image size (default is "1024x1024")
   - `style` (string): Optional parameter to specify a particular art style (e.g., "pixel art", "watercolor", "cartoon")

## Prerequisites

Before using this function, ensure you have:
1. Installed the sprite SDK
2. Set up your OpenAI API credentials
3. Initialized the OpenAI client (referred to as `openAiObject` in the code)
4. Familiarized yourself with Phaser JS asset integration

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
     size: "1024x1024",
     style: "pixel art"
   });
   ```

3. The function will return either:
   - A single response object if no iterations are specified
   - An array of response objects if iterations are specified

4. Each response object contains the generated image data, which you can then use in your Phaser JS game.

5. To use the generated asset in Phaser:
   ```javascript
   this.load.image('house', result.imageData);
   // Later in your game code
   this.add.image(400, 300, 'house');
   ```

Note: The function uses DALL-E 3 to generate images, so be mindful of API usage and costs associated with multiple iterations. Consider caching generated assets for repeated use in your game to optimize performance and reduce API calls.

## Best Practices

- Use specific and detailed descriptions for best results
- Experiment with different styles to find the perfect fit for your game's aesthetic
- Consider generating a set of assets (e.g., houses, trees, vehicles) in the same style for a cohesive look
- Implement error handling to manage potential API failures or unexpected responses

By leveraging the `generateHouseAsset` function, you can significantly streamline your game development process, allowing for rapid iteration and unique visual elements in your Phaser JS projects.

  