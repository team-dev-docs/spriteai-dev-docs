

  # **generateHouseAsset Method**

High Level

This is an asynchronous method that is part of our Node.js SDK. You can access it after installing the package from NPM and importing the sprite object:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateHouseAsset` method allows you to create 2D game assets for use in Phaser JS games. It leverages the DALL-E 3 model to generate images based on your description, saving time and resources in asset creation for game development.

## What parameters are required?

1. `description` (string): A description of the house asset you want to generate.
2. `options` (object): 
   - `iterations` (number, optional): Number of iterations to generate multiple assets.
   - `size` (string, optional): Size of the generated image. Default is "1024x1024".

## Prerequisites

- An OpenAI API key with access to the DALL-E 3 model.
- The `openai` package installed and properly configured in your project.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` method:

```javascript
const sprite = require('sprite');

async function generateGameAsset() {
  try {
    const result = await sprite.generateHouseAsset("medieval castle", {
      iterations: 3,
      size: "1024x1024"
    });
    console.log(result);
  } catch (error) {
    console.error("Error generating asset:", error);
  }
}

generateGameAsset();
```

This function will generate three iterations of a medieval castle asset for your game. The method returns an array of responses from the DALL-E 3 API if iterations are specified, or a single response object if no iterations are set.

Note: Make sure you have properly set up your OpenAI API credentials before using this function. The generated assets will be 2D images suitable for use in Phaser JS games.

  