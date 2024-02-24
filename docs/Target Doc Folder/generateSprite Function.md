
  
  

# generateSprite

This function generates a sprite image and metadata using DALL-E 3 and GPT-4. It is exported from the sprite SDK.

## Why use generateSprite?

This function simplifies the process of generating sprite images optimized for animation. It handles prompting DALL-E 3, processing the image, sending it to GPT-4 to analyze, and returning sprite metadata.

## Parameters

- `description` (required): A text description of the sprite to generate (e.g. "Italian plumber")
- `options` (optional): An options object
  - `iterations`: Number of sprite sets to generate
  - `size`: Image size (default "1024x1024")
  - `save`: Whether to save the PNG (default false)

## Prerequisites

- sprite SDK installed
- OpenAI API key configured 

## Usage

```js
import { sprite } from 'sprite';

const spriteData = await sprite.generateSprite('Italian plumber', {
  iterations: 2,
  save: true
});
```

The returned `spriteData` contains the GPT-4 analyzed frame width and height for each generated sprite image.


  
  