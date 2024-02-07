
  
  

# generateSprite

This function generates a sprite sheet image using DALL-E 3 and analyzes it to determine the optimal frame size to use in a Phaser game.

## Why use this function?

- Automatically generates a sprite sheet image for you based on a text prompt
- Analyzes the generated image to provide the ideal frame width and height to use in Phaser
- Handles communicating with the OpenAI API and image processing
- Easy way to get sprites for your game without needing graphic design skills

## Parameters

- `description` (string): The text prompt to send to DALL-E to generate the sprite sheet image
- `options` (object): Optional parameters
  - `size` (string): The image size, defaults to "1024x1024"
  - `save` (boolean): Whether to save the generated image as a PNG file, defaults to false

## Prerequisites

- OpenAI API key
- OpenAI SDK installed
- Sharp image processing library installed

## Usage

```js
import { sprite } from 'sprite';

const result = await sprite.generateSprite('a purple monster with 3 eyes', {
  size: '512x512',
  save: true 
});

// Create spritesheet using optimal frame size
this.load.spritesheet('monster', 'assets/purplemonster.png', {
  frameWidth: result.messages.frameWidth, 
  frameHeight: result.messages.frameHeight
});
```

The `generateSprite` function returns an object containing the analyzed frame width and height as well as a data URL containing the generated sprite sheet image.


  
  