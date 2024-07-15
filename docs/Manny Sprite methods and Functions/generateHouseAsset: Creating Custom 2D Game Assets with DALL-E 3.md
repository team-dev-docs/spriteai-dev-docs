
  
  # **generateHouseAsset Function Documentation**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateHouseAsset` function allows you to create 2D assets for your Phaser JS game. It leverages OpenAI's DALL-E 3 model to generate images based on your description, making it easy to create custom house assets or other game elements quickly and efficiently.

## What parameters or arguments are required?

The function takes two parameters:

1. `description` (string): A description of the house or asset you want to generate.
2. `options` (object): An optional configuration object with the following properties:
   - `iterations` (number): The number of images to generate.
   - `size` (string): The size of the generated image (default: "1024x1024").

## Prerequisites

- An OpenAI API key with access to the DALL-E 3 model.
- The `openAiObject` must be properly initialized with your API key.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
const description = "medieval stone house with a thatched roof";
const options = { iterations: 3, size: "1024x1024" };

try {
  const generatedAssets = await sprite.generateHouseAsset(description, options);
  console.log("Generated assets:", generatedAssets);
} catch (error) {
  console.error("Error generating house asset:", error);
}
```

This function allows you to generate multiple iterations of the same asset by specifying the `iterations` option. If `iterations` is not provided, it will generate a single image.

The function returns either:
- An array of responses if `iterations` is specified.
- A single response object if `iterations` is not specified.

Each response object contains information about the generated image, including its URL.

Note: The generated images are 2D assets suitable for use in Phaser JS games. The function uses DALL-E 3 to interpret your description and create appropriate game assets.
  
  