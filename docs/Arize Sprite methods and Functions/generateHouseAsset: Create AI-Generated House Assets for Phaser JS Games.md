
  
  # **generateHouseAsset Function**

High Level

This is an asynchronous function that is part of our Node.js SDK. You can access it after installing the package from NPM and importing the sprite object:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateHouseAsset` function allows you to create 2D assets for your Phaser JS games using AI-generated images. It's particularly useful when you need custom house or building assets that match a specific description. This function leverages the DALL-E 3 model to generate these assets, saving you time and effort in asset creation.

## What parameters or arguments are required?

1. `description` (string): A description of the house or building asset you want to generate.
2. `options` (object): An optional configuration object with the following properties:
   - `iterations` (number): The number of image variations to generate.
   - `size` (string): The size of the generated image (default: "1024x1024").

## Prerequisites

- You must have the sprite SDK installed and properly configured in your project.
- Ensure you have valid API credentials for accessing the DALL-E 3 model.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
const sprite = require('sprite');

async function generateAsset() {
  const description = "medieval fantasy cottage with a thatched roof";
  const options = {
    iterations: 3,
    size: "1024x1024"
  };

  try {
    const result = await sprite.generateHouseAsset(description, options);
    console.log(result);
  } catch (error) {
    console.error("Error generating asset:", error);
  }
}

generateAsset();
```

This function allows you to generate multiple variations of the same asset by specifying the `iterations` option. If `iterations` is not provided, it will generate a single image.

The function returns either a single response object or an array of response objects, depending on whether `iterations` is specified. Each response object contains information about the generated image, including its URL.

Remember to handle the asynchronous nature of this function using async/await or promises in your code.
  
  