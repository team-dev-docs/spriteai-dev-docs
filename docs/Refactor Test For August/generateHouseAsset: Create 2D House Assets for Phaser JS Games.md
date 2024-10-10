

  # **generateHouseAsset Function**

High Level

This is an asynchronous function that is exported from our Node.js SDK. You can install it from NPM and import it from the sprite object `sprite` like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateHouseAsset` function allows you to create 2D assets for use in Phaser JS games. It leverages the DALL-E 3 model to generate images based on your description, making it easier to create custom game assets without manual design work.

## What parameters or arguments are required?

1. `description` (string): A description of the house asset you want to generate.
2. `options` (object): 
   - `iterations` (number, optional): The number of images to generate.
   - `size` (string, optional): The size of the generated image(s). Default is "1024x1024".

## Prerequisites

- You need to have the Sprite SDK installed in your project.
- An OpenAI API key with access to the DALL-E 3 model is required.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
const sprite = require('sprite');

async function createGameAsset() {
  try {
    const result = await sprite.generateHouseAsset("medieval castle with towers", {
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

This function will generate three different 2D assets depicting a medieval castle with towers, each with a size of 1024x1024 pixels.

If you don't specify the `iterations` option, the function will generate a single image:

```javascript
const singleAsset = await sprite.generateHouseAsset("futuristic space station", {
  size: "512x512"
});
```

The function returns either a single response object or an array of response objects, depending on whether you use the `iterations` option. Each response object contains the generated image data that you can then use in your Phaser JS game.

Remember to handle the asynchronous nature of this function using async/await or promises in your game development workflow.

  