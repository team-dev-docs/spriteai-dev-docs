

  # **generateHouseAsset Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM. It's accessed through the `sprite` object, which you can import like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateHouseAsset` function allows you to create 2D assets for use in Phaser.js games. It leverages the DALL-E 3 model to generate images based on your descriptions, saving you time and effort in asset creation for your game development process.

## What parameters or arguments are required?

1. `description` (string): A description of the house asset you want to generate.
2. `options` (object): An optional configuration object with the following properties:
   - `iterations` (number): The number of images to generate.
   - `size` (string): The size of the generated image (default: "1024x1024").

## Prerequisites

- You must have the Sprite SDK installed in your project.
- An active OpenAI API key with access to the DALL-E 3 model.
- The `openAiObject` must be properly configured with your API credentials.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
import { sprite } from 'sprite'

async function generateGameAsset() {
  const description = "medieval stone house with a thatched roof"
  const options = {
    iterations: 3,
    size: "1024x1024"
  }

  try {
    const assets = await sprite.generateHouseAsset(description, options)
    console.log("Generated assets:", assets)
    // Process the generated assets for your game
  } catch (error) {
    console.error("Error generating asset:", error)
  }
}

generateGameAsset()
```

This function allows you to generate multiple iterations of the same asset description, which can be useful for creating variations or selecting the best result. If you don't specify `iterations` in the options, it will generate a single image.

The function returns either an array of responses (when using iterations) or a single response object, containing the generated image data from DALL-E 3.

Remember to handle the asynchronous nature of this function using async/await or promises in your implementation.

  