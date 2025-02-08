

  # **generateHouseAsset Function**

High Level

This is an asynchronous function that is part of our Node.js SDK. You can access it after installing the package from NPM and importing the sprite object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateHouseAsset` function allows you to create 2D assets for use in Phaser JS games. It leverages the DALL-E 3 model to generate images based on your description, making it easy to quickly produce game assets without manual design work.

## What parameters are required?

1. `description` (string): A description of the house asset you want to generate.
2. `options` (object): An optional configuration object with the following properties:
   - `iterations` (number): The number of images to generate.
   - `size` (string): The size of the generated image (default: "1024x1024").

## Prerequisites

- An OpenAI API key with access to the DALL-E 3 model.
- The `openai` package installed and configured in your project.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
const sprite = require('sprite');

async function createGameAsset() {
  const description = "medieval stone house with a thatched roof";
  const options = { iterations: 3, size: "512x512" };

  try {
    const assets = await sprite.generateHouseAsset(description, options);
    console.log(`Generated ${assets.length} house assets`);
    // Process the generated assets here
  } catch (error) {
    console.error("Error generating house asset:", error);
  }
}

createGameAsset();
```

This function will generate multiple iterations of the described house asset, which you can then use in your Phaser JS game. The assets are returned as an array of responses from the DALL-E 3 API, which you can further process as needed for your game development workflow.

Note: Make sure you have properly set up your OpenAI API credentials before using this function.

  