
  
  

# generateSprite

This function generates a sprite image and metadata using DALL-E 3 and GPT-4. It is exported from the sprite SDK.

## Why use generateSprite?

This function allows you to easily generate sprite images optimized for animation along with the metadata needed to load them in a game engine like Phaser. It handles prompting DALL-E 3, downloading the images, processing them, and querying GPT-4 to determine the frame size.

## Parameters

- `description` (required): A text description of the sprite to generate (e.g. "Italian plumber")
- `options` (optional): An options object
  - `iterations`: Number of sprite sets to generate
  - `size`: Image size (default 1024x1024)
  - `save`: Whether to save the images to disk

## Prerequisites

- sprite SDK installed
- OpenAI API key configured

## Usage

```js
import { sprite } from 'sprite';

const spriteData = await sprite.generateSprite('Italian plumber', {
  iterations: 5,
  save: true
});
```

The returned `spriteData` will be an array if `iterations` is set, otherwise an object containing:

- `image`: Base64 encoded image
- `messages`: Frame width and height for use in Phaser spritesheet config


  
  