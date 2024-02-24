
  
  

# generateHouseAsset

This function allows you to generate a 2D asset image depicting a house using DALL-E 3 AI.

## Why use this function?

- Convenient way to generate house images for use in games or other applications
- Leverages DALL-E 3 to create high quality, custom images
- Handles prompting DALL-E 3 and returning the responses

## Parameters

- `description` - string description of the type of house you want to generate an image for
- `options` - object with following optional properties:
  - `iterations` - number of images to generate
  - `size` - size of the generated images (default 1024x1024)

## Prerequisites

- DALL-E 3 access credentials configured on the OpenAI object
- Node.js environment

## How to use

```js
import { sprite } from 'sprite';

const generatedImages = await sprite.generateHouseAsset('Victorian style house', {
  iterations: 3,
  size: '512x512'  
});
```

This will generate 3 images with a resolution of 512x512 depicting Victorian style houses.

The images are returned in an array that can be rendered or used in a game.


  
  