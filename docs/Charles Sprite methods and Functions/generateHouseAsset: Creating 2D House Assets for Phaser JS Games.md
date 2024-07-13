
  
  # **generateHouseAsset Function**

High Level

This is an asynchronous function that is part of our Node.js SDK. You can access it after installing the package from NPM and importing the sprite object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateHouseAsset` function allows you to create 2D assets for use in Phaser JS games. It leverages the DALL-E 3 model to generate images based on your description, saving time and effort in asset creation for game development.

## What parameters or arguments are required?

1. `description` (string): A description of the house asset you want to generate.
2. `options` (object): An optional parameter that can include:
   - `iterations` (number): The number of images to generate.
   - `size` (string): The size of the generated image (default is "1024x1024").

## Prerequisites

- An active OpenAI API key with access to the DALL-E 3 model.
- The `openai` package installed and configured in your project.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
const result = await sprite.generateHouseAsset("medieval stone house", {
  iterations: 3,
  size: "512x512"
});
```

This will generate three 512x512 images of a medieval stone house.

If you don't specify iterations, it will generate a single image:

```javascript
const result = await sprite.generateHouseAsset("futuristic glass dome");
```

The function returns either a single response object or an array of response objects, depending on whether you used the `iterations` option. Each response object contains the generated image data from the DALL-E 3 API.

Note: The function uses the DALL-E 3 model, which may have usage limits or costs associated with it. Make sure you're aware of your OpenAI API usage and any applicable fees.
  
  