
  
  

# generateSprite

This function generates a sprite image and metadata using DALL-E 3 and GPT-4. It is exported from the sprite SDK.

## Why use generateSprite?

This function allows you to easily generate sprite images optimized for animation along with the metadata needed to load them in a game engine like Phaser. It handles prompting DALL-E 3, processing the image, sending it to GPT-4 to analyze, and returning sprite sheet details.

## Required parameters

- `description` - A text description of the sprite to generate, ex: "a red bird with blue eyes" 
- `options` - Optional additional parameters:
  - `iterations` - Number of sprite sets to generate
  - `size` - Size of the generated sprite image, default 1024x1024
  - `save` - Whether to save the sprite image file to disk

## Prerequisites

- sprite SDK installed
- OpenAI API key configured 

## Usage

```js
import { sprite } from 'sprite';

const spriteData = await sprite.generateSprite('a red bird with blue eyes', {
  iterations: 5,
  save: true 
});
```

The returned `spriteData` contains the GPT-4 analyzed frame width and height for each generated sprite image.


  
  