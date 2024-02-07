
  
  

# generateSprite

This function generates a sprite sheet image using DALL-E 3 and analyzes it to determine the best frame size to use in a Phaser game.

## Why Use This Function

Use this function when you need to automatically generate a sprite sheet image for a Phaser game without having to manually create the sprites or determine the optimal frame size. It handles generating the image via DALL-E 3 and analyzing it to provide frame width and height values.

## Parameters

- `description`: A text description of the sprite you want to generate, e.g. "a red bird character". This will be used to prompt DALL-E 3 to create the image.

- `options`: An optional object containing:

  - `size`: The output image size, default "1024x1024".

  - `save`: A boolean, if true it will save the generated image as a PNG file.

## Prerequisites

- OpenAI API key for access to DALL-E 3 and other models
- Access to install and import the sprite SDK

## Usage

```js
import { sprite } from 'sprite';

const result = await sprite.generateSprite('a red bird character', {
  size: '512x512',
  save: true 
});
```

The returned `result` contains:

- `messages`: The analyzed frame width and height values
- `image`: A data URL encoding the generated sprite sheet image

The image will also be saved to your assets folder if `save` was set to true.

This allows you to easily generate a sprite sheet and get the frame size values needed to display it animated in Phaser.


  
  