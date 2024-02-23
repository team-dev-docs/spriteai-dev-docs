
  
  

# generateSprite

This function generates a sprite image and metadata using DALL-E 3 and GPT-4. It is exported from the sprite SDK.

## Why use generateSprite()?

This function handles communicating with the OpenAI APIs to generate a sprite image based on a text description. It also extracts key image metadata like frame width and height needed to use the image as a sprite sheet. This saves you time from having to do this yourself.

## Parameters

- `description`: The text description of the sprite to generate. This will be used to prompt DALL-E 3.
- `options`: Optional object containing:
  - `iterations`: Number of sprite variations to generate.
  - `size`: Size of the generated image, default 1024x1024. 
  - `save`: Whether to save the generated image as a PNG file.

## Prerequisites

You'll need to have the sprite SDK installed:

```
npm install sprite
```

And have OpenAI API keys configured.

## Usage

```js
import { sprite } from 'sprite';

const spriteData = await sprite.generateSprite('a purple cat', {
  iterations: 5,
  save: true
});
```

The returned `spriteData` contains the generated image data URI and metadata like frame sizes.


  
  