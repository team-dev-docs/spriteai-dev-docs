
  
  

# generateSprite

This function generates a sprite image and metadata using DALL-E 3 and GPT-4.

## Why use this function?

This function allows you to easily generate sprite images optimized for animation along with the necessary metadata to load them into a game engine like Phaser. It handles prompting DALL-E 3, processing the image, sending it to GPT-4 to analyze, and returning sprite sheet details.

## Parameters

- `description` (required): A text description of the sprite to generate (e.g. "Italian plumber")
- `options` (optional): An object with additional options
  - `iterations`: Number of sprite variations to generate
  - `size`: Image size (default 1024x1024)
  - `save`: Whether to save the images to disk

## Prerequisites

- OpenAI API key
- Node.js environment

## Usage

```js
import { sprite } from 'sprite';

const spriteData = await sprite.generateSprite('Italian plumber', {
  iterations: 5,
  save: true 
});
```

The returned `spriteData` will be an array if `iterations` is set, otherwise an object with `image` and `messages` properties.

The `image` property is a data URI for the generated sprite image. 

The `messages` property contains the GPT-4 extracted sprite sheet details like `frameWidth` and `frameHeight`.


  
  