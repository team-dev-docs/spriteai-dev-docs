
  
  

# generateHouseAsset

This function allows you to generate a 2D asset image depicting a house using DALL-E 3.

## Why use this function?

- Convenient way to generate house images for use in games or other applications
- Leverages DALL-E 3 to create high quality images based on text descriptions

## Arguments

- `description` (string): Text description of the type of house you want to generate an image for
- `options` (object): Optional additional parameters
  - `iterations` (number): Number of images to generate iteratively. Will return an array of images.
  - `size` (string): Size of the generated images, e.g. "1024x1024". Default is "1024x1024".

## Prerequisites

- Access to the OpenAI API with a valid API key
- The OpenAI SDK installed and imported

## Usage

```js
import { sprite } from 'sprite';

const houseImage = await sprite.generateHouseAsset('Victorian style house', {
  iterations: 3,
  size: '512x512'  
});
```

The above will generate 3 images at 512x512 pixels depicting Victorian style houses.


  
  