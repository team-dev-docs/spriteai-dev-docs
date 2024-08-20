

  # **generateHouseAsset Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the sprite object as follows:

```javascript
import { sprite } from 'sprite'
```

The `generateHouseAsset` function allows you to create 2D assets for house-like structures that can be used in Phaser JS games.

## Why should I use this function?

Use this function when you need to programmatically generate 2D house assets for your Phaser JS game. It leverages the DALL-E 3 model to create custom assets based on your description, saving time on manual asset creation and enabling dynamic content generation.

## What parameters or arguments are required?

1. `description` (string): A description of the house asset you want to generate.
2. `options` (object): An optional configuration object with the following properties:
   - `iterations` (number): The number of asset variations to generate.
   - `size` (string): The size of the generated image (default: "1024x1024").

## Prerequisites

- You must have the sprite SDK installed and properly configured.
- An active OpenAI API key with access to the DALL-E 3 model.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
const sprite = require('sprite');

async function generateHouseExample() {
  const description = "modern two-story house with a red roof";
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

generateHouseExample();
```

This function will generate three variations of a modern two-story house with a red roof, each as a 1024x1024 image. The function returns an array of responses from the DALL-E 3 API, which you can then use in your Phaser JS game.

If you don't specify the `iterations` option, the function will generate a single asset and return the response directly instead of an array.

Remember to handle the asynchronous nature of this function using async/await or promises in your application.

  