
  
  

# generateHouseAsset

This function allows you to generate a 2D asset image depicting a house using DALL-E 3 AI.

## Why use this function?

- It provides an easy way to generate house images using AI that you can use in your Phaser.js games
- Iterative image generation allows you to generate multiple variations of a house asset

## Parameters

- `description` - string description of the type of house you want to generate 
- `options` - optional object with the following properties:
  - `iterations` - number of house images to generate 
  - `size` - size of the generated images (default 1024x1024)

## Prerequisites

- Access to the OpenAI API with a valid API key
- The `openAiObject` needs to be configured with the API key

## Usage

```js
import { sprite } from 'sprite';

const house = await sprite.generateHouseAsset('Victorian house', {
  iterations: 3,
  size: '512x512'  
});
```

The above will generate 3 Victorian style house images at 512x512 pixels.

The function handles both iterative and single image generation based on the options passed in. The images are returned in an array.


  
  