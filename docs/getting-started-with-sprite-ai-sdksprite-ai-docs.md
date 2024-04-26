
  
  # Getting Started with Sprite AI Sprite AI SDK

The Sprite AI Node.js SDK provides a set of functions and utilities for generating sprites, character animations, and other graphical assets using advanced AI models like OpenAI's DALL-E and GPT-4. The `generateSprite` function is a powerful tool that allows you to create high-quality visual assets based on textual descriptions and specifications.

## Installation

To begin using the Sprite AI SDK, you'll need to install it via NPM:

```bash
npm install sprite-ai
```

## Usage

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

The `generateSprite` function accepts the following parameters:

- `description` (string): A textual description of the sprite or character you want to generate.
- `options` (object, optional):
  - `iterations` (number, optional): The number of iterations or variations to generate for the sprite.
  - `size` (string, optional): The desired size of the generated image (e.g., "1024x1024").
  - `save` (boolean, optional): Whether to save the generated image to the local file system.

The function will generate the requested sprites using the DALL-E model and analyze them using the GPT-4 model to determine the appropriate frame dimensions for use as a sprite sheet in a game engine like Phaser.js. The results are returned as an array of objects containing the generated image data and the recommended frame dimensions.

Note that using the `generateSprite` function requires an active internet connection and may incur costs associated with the OpenAI API usage.
  
  