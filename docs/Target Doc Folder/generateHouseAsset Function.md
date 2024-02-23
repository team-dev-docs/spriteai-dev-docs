
  
  

# generateHouseAsset

This function allows you to generate a 2D asset image depicting a house using DALL-E 3 AI.

## Why use this function?

- Convenient way to generate house images for use in games or other applications
- Leverages DALL-E 3 to create high quality, custom images
- Handles prompting DALL-E 3 and returning the responses

## Parameters

- `description` - String description of the type of house you want to generate an image for
- `options` - Optional object with additional options:
  - `iterations` - Number of images to generate 
  - `size` - Size of the generated images (default 1024x1024)

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

The function will handle prompting DALL-E 3 to generate the specified number of images matching the description. It returns an array containing the API response objects for each generated image.


  
  