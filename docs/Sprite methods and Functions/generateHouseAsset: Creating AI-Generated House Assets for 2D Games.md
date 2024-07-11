
  
  # **generateHouseAsset Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateHouseAsset` function allows you to create 2D game assets for houses or buildings using AI-generated images. This is particularly useful for developers working with Phaser JS who need quick, customizable house assets for their games.

## What parameters or arguments are required?

1. `description` (string): A description of the house or building you want to generate.
2. `options` (object): An optional configuration object with the following properties:
   - `iterations` (number): The number of images to generate.
   - `size` (string): The size of the generated image (default: "1024x1024").

## Prerequisites

- You must have the Sprite AI SDK installed in your project.
- An active OpenAI API key with access to DALL-E 3 is required.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
const sprite = require('sprite');

async function createHouseAsset() {
  const description = "small cozy cottage with a thatched roof";
  const options = { iterations: 3, size: "1024x1024" };

  try {
    const houseAssets = await sprite.generateHouseAsset(description, options);
    console.log("Generated house assets:", houseAssets);
  } catch (error) {
    console.error("Error generating house asset:", error);
  }
}

createHouseAsset();
```

This function utilizes DALL-E 3 to generate 2D assets based on your description. You can specify the number of iterations to generate multiple variations. The function returns an array of responses when using iterations, or a single response object otherwise.

Each response contains information about the generated image, which you can then use in your Phaser JS game.
  
  