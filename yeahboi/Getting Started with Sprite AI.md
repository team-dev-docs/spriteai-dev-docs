
  
  # Getting Started with Sprite AI

Sprite AI is a powerful tool that allows you to generate sprites and images using advanced AI models. This function, `generateSprite`, is part of the Sprite AI Node.js SDK and can be used to create sprite sheets, character animations, and other graphical assets for games and applications.

## Prerequisites

Before using the `generateSprite` function, ensure that you have the following prerequisites:

1. Node.js installed on your system.
2. The Sprite AI Node.js SDK installed via NPM (`npm install sprite-ai`).
3. An OpenAI API key configured in your environment (required for using the GPT-4 and DALL-E models).

## Importing the Function

To use the `generateSprite` function, you need to import it from the Sprite AI SDK:

```javascript
import { sprite } from 'sprite-ai';
```

## Why Use the `generateSprite` Function?

The `generateSprite` function is a powerful tool that allows you to generate sprites and character animations using advanced AI models. It leverages the capabilities of OpenAI's DALL-E and GPT-4 models to create high-quality visual assets based on your prompts and specifications.

## Function Parameters

The `generateSprite` function accepts the following parameters:

1. `description` (string): A textual description of the sprite or character you want to generate.
2. `options` (object, optional):
   - `iterations` (number, optional): The number of iterations or variations to generate for the sprite.
   - `size` (string, optional): The desired size of the generated image (e.g., "1024x1024").
   - `save` (boolean, optional): Whether to save the generated image to the local file system.

## Using the `generateSprite` Function

Here's an example of how to use the `generateSprite` function:

```javascript
import { sprite } from 'sprite-ai';

const description = 'a robot samurai cat';
const options = {
  iterations: 3,
  size: '512x512',
  save: true,
};

const results = await sprite.generateSprite(description, options);

console.log(results);
```

In this example, the `generateSprite` function is called with a description of "a robot samurai cat" and an `options` object specifying three iterations, a size of 512x512 pixels, and saving the generated images to the local file system.

The function will generate the requested sprites using the DALL-E model and analyze them using the GPT-4 model to determine the appropriate frame dimensions for use as a sprite sheet in a game engine like Phaser.js. The results are returned as an array of objects containing the generated image data and the recommended frame dimensions.

Note that using the `generateSprite` function requires an active internet connection and may incur costs associated with the OpenAI API usage.
  
  