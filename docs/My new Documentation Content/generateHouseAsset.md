
  
  

# generateHouseAsset

This function allows you to generate a 2D asset image depicting a house using DALL-E 3 AI.

## Why use this function?

This function provides an easy way to generate house images that you can use in your Phaser.js games. It handles prompting DALL-E 3 and returning the images.

## Parameters

- `description` - The description of the type of house you want to generate (e.g. "Victorian house")
- `options` - Optional parameters:
  - `iterations` - Number of images to generate
  - `size` - Size of the generated images (default 1024x1024)

## Prerequisites

- Access to OpenAI's DALL-E 3 model
- Node.js environment with OpenAI API keys configured

## Usage

```js
import { sprite } from 'sprite';

const house = await sprite.generateHouseAsset('ranch style house');
```

This will generate a 1024x1024 image of a ranch style house.

You can also request multiple iterations:

```js 
const houses = await sprite.generateHouseAsset('log cabin', {
  iterations: 5  
});
```

This will return 5 1024x1024 log cabin images in an array.


  
  