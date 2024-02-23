
  
  

# generateHouseAsset

This function allows you to generate a 2D asset image depicting a house using DALL-E 3.

## Why use this function?

- Convenient way to generate house images for use in games or other applications
- Leverages DALL-E 3 to create high quality, custom images
- Handles prompting DALL-E and returning the images

## Parameters

- `description` - string description of the type of house you want to generate (e.g. "Victorian house")
- `options` - object with optional additional parameters:
  - `iterations` - number of images to generate
  - `size` - size of the generated images (default 1024x1024)

## Prerequisites

- Access to the OpenAI API with DALL-E 3 model enabled
- API key stored in `openAiObject`

## How to use

```js
import { sprite } from 'sprite';

const house = await sprite.generateHouseAsset('ranch style house'); 

// returns a single 1024x1024 image by default 

const houses = await sprite.generateHouseAsset('log cabin in forest', {
  iterations: 5,
  size: '512x512'
});

// returns 5 512x512 log cabin images
```

The function handles prompting DALL-E and returning either a single image or multiple images based on the options passed in. The returned images can then be used in a game or application.


  
  