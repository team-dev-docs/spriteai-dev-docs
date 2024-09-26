

  # **generateHouseAsset Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM. It's accessible through the `sprite` object:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateHouseAsset` function allows you to create 2D game assets for houses or buildings using AI-generated images. It's particularly useful for developers working with Phaser JS who need quick, customizable house assets for their games.

## What parameters or arguments are required?

1. `description` (string): A description of the house or building you want to generate.
2. `options` (object): 
   - `iterations` (number, optional): Number of images to generate.
   - `size` (string, optional): Image size (default: "1024x1024").

## Prerequisites

- An OpenAI API key with access to DALL-E 3
- The `sprite` package installed in your project

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
import { sprite } from 'sprite'

async function createHouseAsset() {
  const description = "modern two-story house with a red roof"
  const options = { iterations: 3, size: "512x512" }

  try {
    const result = await sprite.generateHouseAsset(description, options)
    console.log(result)
  } catch (error) {
    console.error("Error generating house asset:", error)
  }
}

createHouseAsset()
```

This function utilizes DALL-E 3 to generate images based on your description. If you specify `iterations` in the options, it will create multiple images. Otherwise, it generates a single image.

The function returns either an array of image responses (if iterations > 1) or a single image response object, which you can then use in your Phaser JS game.

Remember to handle the asynchronous nature of this function using async/await or promises in your code.

  