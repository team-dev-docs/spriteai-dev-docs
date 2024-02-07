
  
  

# generateHouseAsset

This function allows you to generate a 2D asset image depicting a house using DALL-E 3 AI.

## Why use this function?

This function provides an easy way to generate custom 2D house images that you can use in your Phaser JS games. It handles prompting DALL-E 3 and returning the generated images.

## Parameters

- `description` - The description of the type of house you want to generate (e.g. "Victorian house")
- `options` - Optional parameters:
  - `iterations` - Number of images to generate
  - `size` - Size of the generated images (default 1024x1024)

## Prerequisites

- DALL-E 3 access credentials configured on the OpenAI object
- Phaser JS game setup

## Usage

```js
import { sprite } from 'sprite';

const house = await sprite.generateHouseAsset('ranch style house');

// Use house image in Phaser game
```

You can generate multiple iterations by passing the `iterations` option:

```js 
const houses = await sprite.generateHouseAsset('log cabin', {
  iterations: 5 
});
```

The function returns either a single image response or an array of responses if multiple iterations were requested.


  
  