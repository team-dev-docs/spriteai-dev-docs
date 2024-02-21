
  
  

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

- DALL-E 3 access credentials configured on the OpenAI object
- Phaser game using images that need house assets

## How to use

Call the `generateHouseAsset` function, passing in a `description` of the house:

```js
const houseImage = await sprite.generateHouseAsset("Victorian style house"); 
```

To generate multiple house images, specify `options.iterations`:

```js 
const houseImages = await sprite.generateHouseAsset("log cabin in the woods", {
  iterations: 5 
});
```

The function returns either a single image response or an array of responses if multiple iterations were requested. The images can then be used in a Phaser game or other application.


  
  