
  
  

# generateSprite

This function generates a sprite image and metadata using DALL-E 3 and GPT-4. It is exported from the sprite SDK.

## Why use generateSprite()?

This function handles communicating with the OpenAI API to generate a sprite image and determine the frame width and height needed to use it as a sprite sheet in a Phaser game. It saves you the trouble of setting up the OpenAI clients and making the API calls yourself.

## Parameters

- `description` (required): A text description of the sprite to generate (e.g. "a knight")
- `options` (optional): An object with additional options
  - `size`: The output image size (default "1024x1024")
  - `iterations`: Number of sprite images to generate
  - `save`: Whether to save the generated image to disk

## Prerequisites

You'll need to have the sprite SDK installed:

```
npm install sprite
```

And have OpenAI API keys configured.

## Usage

```js
import { sprite } from 'sprite';

const spriteData = await sprite.generateSprite('a knight');

// Sprite image data URL 
console.log(spriteData.image); 

// Frame width and height
console.log(spriteData.messages);
```

The `generateSprite` method handles all the complexity of generating the image via DALL-E and determining the frame dimensions using GPT-4 behind the scenes.


  
  