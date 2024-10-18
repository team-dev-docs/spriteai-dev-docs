

  # **generateHouseAsset Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

The `generateHouseAsset` function allows you to create 2D assets for houses or buildings that can be used in Phaser.js games.

## Why should I use this function?

Use this function when you need to quickly generate custom 2D house or building assets for your Phaser.js game. It leverages the DALL-E 3 AI model to create unique images based on your descriptions, saving time and resources in asset creation.

## What parameters or arguments are required?

The function takes two parameters:
1. `description` (string): A description of the house or building you want to generate.
2. `options` (object): An optional object with the following properties:
   - `iterations` (number): The number of images to generate.
   - `size` (string): The size of the generated image (default is "1024x1024").

## Prerequisites

- You must have the Sprite SDK installed and properly configured.
- Ensure you have a valid OpenAI API key set up for DALL-E 3 access.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
import { sprite } from 'sprite'

async function generateGameAsset() {
  const description = "medieval castle with high towers and a drawbridge"
  const options = {
    iterations: 3,
    size: "1024x1024"
  }

  try {
    const assets = await sprite.generateHouseAsset(description, options)
    console.log("Generated assets:", assets)
    // Process the generated assets for your game
  } catch (error) {
    console.error("Error generating assets:", error)
  }
}

generateGameAsset()
```

This function will generate three different 2D assets of a medieval castle based on the given description. The assets can then be used in your Phaser.js game.

Note that if you don't specify the `iterations` option, the function will generate only one image. You can adjust the `size` option to get different image dimensions if needed.

  