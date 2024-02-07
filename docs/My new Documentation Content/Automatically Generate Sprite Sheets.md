
  
  

# generateSprite

This function generates a sprite sheet image using DALL-E 3 and analyzes it to determine the frame width and height.

## Why use this function?

Use this function when you need to automatically generate a sprite sheet image for use in a game or app. It handles prompting DALL-E 3, retrieving the image, converting it to greyscale and determining the frame dimensions.

## Parameters

- `description` (string): A text prompt describing the sprite you want to generate
- `options` (object): Optional parameters
  - `size` (string): The output image size, defaults to "1024x1024"
  - `save` (boolean): Whether to save the output image to disk, defaults to false

## Prerequisites

- OpenAI API key for DALL-E 3 access
- Axios for making API requests
- Sharp for image processing

## Usage

```js
import { sprite } from 'sprite';

const result = await sprite.generateSprite('a spaceship sprite sheet');

console.log(result.messages); // { frameWidth: 115, frameHeight: 380 } 
console.log(result.image); // base64 encoded sprite sheet image
```

The function returns an object containing the analyzed frame width and height for using the image as a sprite sheet, along with the generated greyscale sprite sheet image encoded as a base64 data URL.

The image can be saved to disk by passing `save: true` in the options.


  
  