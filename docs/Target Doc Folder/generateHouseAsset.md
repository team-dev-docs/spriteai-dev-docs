
  
  

# generateHouseAsset

This function allows you to generate a 2D asset image depicting a house using DALL-E 3 AI.

## Why use this function?

- Convenient way to generate house images for use in games or other applications
- Leverages DALL-E 3 to create high quality, custom images
- Handles prompting DALL-E 3 and returning the responses

## Parameters

- `description` - string description of the type of house you want to generate an image for
- `options` - object with optional additional parameters:
  - `iterations` - number of images to generate 
  - `size` - size of the generated images (default 1024x1024)

## Prerequisites

- DALL-E 3 access credentials configured on the `openAiObject`
- Node.js environment

## Usage

```js
import { sprite } from 'sprite';

const houseImage = await sprite.generateHouseAsset('Victorian style house', {
  iterations: 3,
  size: '512x512'  
});
```

The function will handle prompting DALL-E 3 based on the description provided. By default, it will generate 1 image at 1024x1024 pixels. 

You can request multiple images by passing `options.iterations`.

The function returns either a single image response or an array of responses if multiple iterations were requested. Each response contains the generated image.


  
  