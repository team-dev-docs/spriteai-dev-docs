
  
  

# generateHouseAsset

This function allows you to generate a 2D asset image depicting a house using DALL-E 3 AI.

## Why use this function?

- Convenient way to generate house images for use in games or other applications
- Leverages powerful DALL-E 3 AI image generation capabilities
- Handles prompting DALL-E and returning the responses

## Parameters

- `description` - string description of the type of house you want to generate an image for
- `options` - object with optional additional parameters:
  - `iterations` - number of images to generate
  - `size` - size of the generated images (default 1024x1024)

## Prerequisites

- DALL-E 3 access credentials configured on the OpenAI object
- Phaser game using images that match the generated asset

## How to use

Call the function passing in a `description` of the house:

```js
const houseImage = await generateHouseAsset("Victorian style house"); 
```

You can also pass `options` to configure iterations and size:

```js
const houseImages = await generateHouseAsset("log cabin in the woods", {
  iterations: 5,
  size: "512x512"
});
```

The function handles prompting DALL-E and returning either a single image response or an array of responses if `iterations` is defined.


  
  