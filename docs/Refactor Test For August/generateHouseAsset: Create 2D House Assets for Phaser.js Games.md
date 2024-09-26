

  # **generateHouseAsset Function**

High Level

This is an asynchronous function that is exported from our Node.js SDK. You can install it from NPM and import it from the sprite object `sprite` like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateHouseAsset` function allows you to create 2D assets for use in Phaser.js games. It leverages the DALL-E 3 model to generate images based on your descriptions, making it easy to quickly produce custom game assets without the need for manual design.

## What parameters or arguments are required?

The function takes two parameters:

1. `description` (string): A description of the house asset you want to generate.
2. `options` (object): An optional configuration object with the following properties:
   - `iterations` (number): The number of images to generate.
   - `size` (string): The size of the generated image(s). Defaults to "1024x1024" if not specified.

## Prerequisites

- You must have the Sprite SDK installed in your project.
- An OpenAI API key is required, as this function uses the DALL-E 3 model.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
import { sprite } from 'sprite'

async function createGameAsset() {
  const description = "medieval stone house with a thatched roof"
  const options = {
    iterations: 3,
    size: "512x512"
  }

  try {
    const assets = await sprite.generateHouseAsset(description, options)
    console.log(`Generated ${assets.length} house assets`)
    // Process the generated assets here
  } catch (error) {
    console.error("Error generating house asset:", error)
  }
}

createGameAsset()
```

This function is particularly useful when you need to quickly generate multiple variations of a game asset. By specifying the `iterations` option, you can create several versions of the same asset in a single call, allowing you to choose the best one for your game.

The function returns an array of responses from the DALL-E 3 API, each containing the generated image data. If no `iterations` are specified, it returns a single response object.

Remember to handle the asynchronous nature of this function using async/await or promises in your implementation.

  