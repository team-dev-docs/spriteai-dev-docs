
  
  

# generateHouseAsset

This function allows you to generate a 2D asset image depicting a house using DALL-E 3.

## Why use this function?

- Convenient way to generate house images for use in games or other applications
- Leverages DALL-E 3 to create high quality images based on text descriptions
- Handles prompting DALL-E 3 and returning the responses

## Parameters

- `description` - Text describing the type of house you want to generate an image for
- `options` - Optional object with additional configuration:
  - `iterations` - Number of images to generate 
  - `size` - Size of the generated images (default 1024x1024)

## Prerequisites

- Access to a DALL-E 3 API key
- The OpenAI SDK installed and configured with your API key

## Usage

```js
import { sprite } from 'sprite';

const house = await sprite.generateHouseAsset('a small red brick house', {
  iterations: 3  
});
```

The above will generate 3 images with DALL-E depicting small red brick houses.


  
  