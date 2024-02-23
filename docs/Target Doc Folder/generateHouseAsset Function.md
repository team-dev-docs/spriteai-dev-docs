
  
  

# generateHouseAsset

This function allows you to generate a 2D asset image depicting a house using DALL-E 3 AI.

## Why use this function?

- Convenient way to generate house images for use in games or other applications
- Leverages DALL-E 3 to create high quality, custom images
- Handles prompting DALL-E 3 and returning the responses

## Parameters

- `description` - string description of the type of house you want to generate an image for
- `options` - object with the following optional properties:
  - `iterations` - number of images to generate
  - `size` - size of the generated images (default 1024x1024)

## Prerequisites

- Access to OpenAI API key
- OpenAI object with DALL-E 3 model loaded

## Usage

```js
const { sprite } = require('sprite');

async function generateHouse() {
  const house = await sprite.generateHouseAsset('Victorian style house', {
    iterations: 3,
    size: '512x512'  
  });
  
  // house contains an array of 3 generated 512x512 Victorian house images
}

generateHouse();
```

The function handles prompting DALL-E 3 to generate house images based on the description provided. It can generate multiple iterations if specified and returns either a single image or an array of images.


  
  