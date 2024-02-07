
  
  

# generateHouseAsset

This function generates a 2D asset image depicting a house using DALL-E 3 AI.

## Why use this function?

This function provides an easy way to generate custom 2D house images that can be used in a Phaser JS game. It handles prompting DALL-E 3 and returning the generated images.

## Parameters

- `description` - The description of the house to generate. This prompts DALL-E on what type of house to generate.
- `options` - Optional parameters:
  - `iterations` - Number of images to generate. Will return an array of images.
  - `size` - Size of the generated images, e.g. "1024x1024". Default is "1024x1024".

## Prerequisites

- DALL-E 3 access credentials configured on the OpenAI object
- Phaser JS game where you want to use the generated images

## Usage

```js
import { sprite } from "sprite";

const house = await sprite.generateHouseAsset("small red brick house", {
  iterations: 3  
});
```

The above will generate 3 images of a small red brick house that are 1024x1024 pixels.


  
  