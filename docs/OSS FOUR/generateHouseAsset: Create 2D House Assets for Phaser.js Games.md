

  # **generateHouseAsset Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateHouseAsset` function allows you to create 2D assets for house-like structures that can be used in Phaser.js games. It leverages OpenAI's DALL-E 3 model to generate images based on your description, saving you time and effort in asset creation.

## What parameters or arguments are required?

1. `description` (string): A description of the house or structure you want to generate.
2. `options` (object): 
   - `iterations` (number, optional): Number of images to generate.
   - `size` (string, optional): Size of the generated image (default: "1024x1024").

## Prerequisites

- You must have the Sprite AI SDK installed in your project.
- An active OpenAI API key with access to the DALL-E 3 model.

## How do I use this function?

To use the `generateHouseAsset` function, follow these steps:

1. Import the function from the Sprite AI SDK.
2. Call the function with a description and optional parameters.
3. Handle the returned promise to access the generated image(s).

Example usage:

```javascript
import { sprite } from 'sprite'

async function createHouseAsset() {
  try {
    const result = await sprite.generateHouseAsset("modern two-story house with a red roof", {
      iterations: 3,
      size: "1024x1024"
    });
    console.log(result);
    // Process the generated images as needed
  } catch (error) {
    console.error("Error generating house asset:", error);
  }
}

createHouseAsset();
```

This function is particularly useful when you need to quickly generate multiple variations of house assets for your Phaser.js game. It allows for rapid prototyping and can help inspire new ideas for your game's visual design.

  