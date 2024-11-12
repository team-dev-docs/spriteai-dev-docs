

  # **generateHouseAsset Function**

High Level

This is an asynchronous function that is part of our Node.js SDK. You can access it after installing the package from NPM and importing the sprite object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateHouseAsset` function allows you to create 2D game assets for use in Phaser JS games. It leverages the DALL-E 3 AI model to generate images based on your description, saving time and resources in asset creation for game development.

## What parameters or arguments are required?

1. `description` (string): A description of the house asset you want to generate.
2. `options` (object): An optional configuration object with the following properties:
   - `iterations` (number): The number of image variations to generate.
   - `size` (string): The size of the generated image (default: "1024x1024").

## Prerequisites

- An OpenAI API key with access to the DALL-E 3 model.
- The OpenAI Node.js library installed and configured in your project.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
const sprite = require('sprite');

async function generateGameAsset() {
  const description = "medieval stone house with a thatched roof";
  const options = {
    iterations: 3,
    size: "1024x1024"
  };

  try {
    const result = await sprite.generateHouseAsset(description, options);
    console.log(result);
  } catch (error) {
    console.error("Error generating house asset:", error);
  }
}

generateGameAsset();
```

This function will generate three variations of a medieval stone house with a thatched roof, each as a 1024x1024 pixel image. The function returns an array of responses from the DALL-E 3 API, which you can then use to access the generated images for your game.

If you don't specify the `iterations` option, the function will generate a single image and return the API response directly.

Remember to handle the asynchronous nature of this function using async/await or promises in your implementation.

  