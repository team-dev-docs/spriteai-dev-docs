

  # **generateHouseAsset Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateHouseAsset` function allows you to create 2D assets for house-like structures that can be used in Phaser JS games. It leverages the DALL-E 3 AI model to generate these assets based on your description, saving you time and effort in asset creation.

## What are the parameters or arguments required?

1. `description` (string): A description of the house or structure you want to generate.
2. `options` (object): 
   - `iterations` (number, optional): The number of iterations to generate.
   - `size` (string, optional): The size of the generated image (default: "1024x1024").

## Prerequisites

- An active OpenAI API key with access to the DALL-E 3 model.
- The `openAiObject` should be properly initialized with your API key.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
const description = "medieval stone castle with tall towers";
const options = { iterations: 3, size: "512x512" };

try {
  const assets = await sprite.generateHouseAsset(description, options);
  console.log("Generated assets:", assets);
} catch (error) {
  console.error("Error generating house asset:", error);
}
```

This function returns a promise that resolves to either:
- An array of responses if `iterations` is specified in the options.
- A single response object if no iterations are specified.

Each response contains the generated image data from DALL-E 3.

Note: The function uses the DALL-E 3 model, which may have associated costs. Make sure to check OpenAI's pricing and adjust your usage accordingly.

  