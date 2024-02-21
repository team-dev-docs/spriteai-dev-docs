
  
  

# generateHouseAsset

This function allows you to generate a 2D asset image depicting a house using DALL-E 3 AI.

## Why use this function?

- Convenient way to generate house images for use in games or other applications
- Leverages DALL-E 3 AI to create images based on text descriptions
- Handles iterations and image size configuration

## Parameters

- `description` - Text description of the house you want to generate an image for
- `options` - Optional configuration object
  - `iterations` - Number of images to generate
  - `size` - Size of the generated images (default 1024x1024)

## Prerequisites

- Access to OpenAI API key
- OpenAI object with DALL-E 3 model loaded

## Usage

```js
const { sprite } = require('sprite');

async function generateHouse() {
  const house = await sprite.generateHouseAsset('a blue two story house with white trim', {
    iterations: 3,
    size: '512x512'  
  });
  
  // house contains an array with 3 generated house images 
}

generateHouse();
```

This will generate 3 images of size 512x512 depicting a blue two story house with white trim. The images are returned in an array that can be used in a game or app.


  
  