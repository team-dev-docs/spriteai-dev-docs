
  
  

# generateSprite

This function generates sprite sheets by calling the DALL-E 3 API to generate images, processing them, and extracting sprite sheet dimensions.

## Why use generateSprite?

This function handles all the complexity of generating sprite sheets from a text prompt using AI, processing the images, and outputting key data like the frame width and height needed to use the sprite sheet in a game engine like Phaser. It makes generating sprites much easier.

## Parameters

- `description` (required): The text prompt describing the sprite to generate. This will be passed to DALL-E to generate the image.
- `options` (optional): An object with additional options:
  - `size`: The output image size, defaults to "1024x1024".
  - `save`: Whether to save the generated image as a PNG file, defaults to false.

## Prerequisites

- OpenAI API key
- OpenAI API packages installed
- Image processing packages installed (sharp)

## Usage

```js
import { sprite } from 'sprite';

const result = await sprite.generateSprite('a purple cat walking', {
  size: '512x512',
  save: true  
});

// Use sprite sheet frame data  
this.load.spritesheet('cat', 'cat.png', {
  frameWidth: result.messages.frameWidth,
  frameHeight: result.messages.frameHeight
});
```

The function returns sprite sheet metadata and the image data URI. The frameWidth and frameHeight values can be passed to a game engine's sprite loader. The image data URI contains the actual sprite sheet image data.


  
  