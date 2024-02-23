
  
  

# generateSprite

This function generates a sprite image and metadata using DALL-E 3 and GPT-4.

## Why use this function?

This function allows you to easily generate sprite images optimized for animation along with the required metadata to load them into a Phaser game. It handles prompting DALL-E 3, processing the image, sending it to GPT-4 to analyze, and returning the sprite image and frame data.

## Parameters

- `description` (required): A text description of the sprite to generate (e.g. "a knight")
- `options` (optional): An object with the following optional properties:
  - `size`: The image size to generate (default "1024x1024")
  - `iterations`: Number of sprite sets to generate 
  - `save`: Whether to save the generated sprite PNG to disk

## Prerequisites

- OpenAI API key for DALL-E 3 and GPT-4 access
- `OpenAI` SDK client instantiated

## Usage

```js
import { sprite } from 'sprite';

const sprite = await sprite.generateSprite('a knight');

// Sprite image data URL 
console.log(sprite.image); 

// Frame metadata
console.log(sprite.messages);
```

The returned `sprite` object contains the generated sprite image data URL and frame metadata extracted by GPT-4.

You can then load this into Phaser:

```js
this.load.spritesheet('knight', sprite.image, sprite.messages); 
```


  
  