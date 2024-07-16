
  
  # **generateHouseAsset Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the sprite object as follows:

```javascript
import { sprite } from 'sprite'
```

The `generateHouseAsset` function allows you to create 2D assets for house-like structures that can be used in Phaser JS games.

## Why should I use this function?

Use this function when you need to quickly generate custom 2D assets for house-like structures in your Phaser JS game. It leverages DALL-E 3 to create images based on your description, saving time and resources in asset creation.

## What parameters or arguments are required?

1. `description` (string): A description of the house or structure you want to generate.
2. `options` (object): 
   - `iterations` (number, optional): The number of images to generate.
   - `size` (string, optional): The size of the generated image (default: "1024x1024").

## Prerequisites

- You must have the sprite SDK installed and properly configured.
- An active OpenAI API key with access to DALL-E 3.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
const description = "medieval castle with high towers and a moat";
const options = {
  iterations: 3,
  size: "1024x1024"
};

try {
  const assets = await sprite.generateHouseAsset(description, options);
  console.log("Generated assets:", assets);
} catch (error) {
  console.error("Error generating assets:", error);
}
```

This function returns an array of responses if `iterations` is specified, or a single response otherwise. Each response contains the generated image data from DALL-E 3.

Note: The function uses DALL-E 3 to generate images, so the results may vary and might require fine-tuning of the description for optimal results.
  
  