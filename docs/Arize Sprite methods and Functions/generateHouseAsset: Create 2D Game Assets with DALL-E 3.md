
  
  # **generateHouseAsset Function**

High Level

This is an asynchronous function that is part of our Node.js SDK. You can access it after installing the package from NPM and importing the sprite object:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateHouseAsset` function allows you to create 2D assets for use in Phaser.js games. It leverages the DALL-E 3 model to generate images based on text descriptions, making it easy to quickly produce game assets without manual design work.

## What parameters or arguments are required?

1. `description` (string): A text description of the house asset you want to generate.
2. `options` (object): 
   - `iterations` (number, optional): The number of images to generate.
   - `size` (string, optional): The size of the generated image(s). Defaults to "1024x1024".

## Prerequisites

- An active OpenAI API key with access to the DALL-E 3 model.
- The `openai` package installed and properly configured in your project.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
const sprite = require('sprite');

async function createGameAsset() {
  try {
    const result = await sprite.generateHouseAsset("medieval castle with a drawbridge", {
      iterations: 3,
      size: "1024x1024"
    });
    console.log(result);
  } catch (error) {
    console.error("Error generating asset:", error);
  }
}

createGameAsset();
```

This function will generate three different 1024x1024 images of a medieval castle with a drawbridge. The `iterations` option allows you to create multiple variations, which can be useful for selecting the best fit for your game or for creating diverse assets.

If you don't specify `iterations`, the function will generate a single image:

```javascript
const singleAsset = await sprite.generateHouseAsset("futuristic skyscraper");
```

The function returns either a single response object or an array of response objects from the DALL-E 3 API, depending on whether you use the `iterations` option.

Remember to handle the asynchronous nature of this function using async/await or promises in your code.
  
  