

  # **generateHouseAsset Function**

High Level

The `generateHouseAsset` function is an asynchronous method exported from our Node.js SDK. You can access it after installing the package from NPM and importing the sprite object:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

This function allows you to generate 2D assets for use in Phaser JS games. It leverages the DALL-E 3 model to create custom images based on your description, saving time and resources in asset creation for game development.

## What parameters or arguments are required?

1. `description` (string): A textual description of the house asset you want to generate.
2. `options` (object): 
   - `iterations` (number, optional): The number of images to generate.
   - `size` (string, optional): The size of the generated image(s). Defaults to "1024x1024".

## Prerequisites

- An active OpenAI API key with access to the DALL-E 3 model.
- The `openai` package installed and configured in your project.

## How do I use this function?

Here's a basic example of how to use the `generateHouseAsset` function:

```javascript
const description = "medieval stone house with a thatched roof";
const options = { iterations: 3, size: "1024x1024" };

try {
  const result = await sprite.generateHouseAsset(description, options);
  console.log(result);
} catch (error) {
  console.error("Error generating house asset:", error);
}
```

This function allows for two modes of operation:

1. Single image generation: If no `iterations` are specified in the options, it generates a single image.
2. Multiple image generation: If `iterations` are specified, it generates multiple images in a loop.

The function returns either a single response object or an array of response objects, depending on whether iterations were specified. Each response object contains the generated image data from the DALL-E 3 API.

Note: The generated images are 2D assets specifically prompted for use with Phaser JS games. Adjust your description accordingly to get the most suitable results for your game context.

  