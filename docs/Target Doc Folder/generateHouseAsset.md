
  
  

# generateHouseAsset

This function allows you to generate a 2D asset image depicting a house using DALL-E 3 AI.

## Why use this function?

- Convenient way to generate house images for use in games or other applications
- Leverages DALL-E 3 AI to create images based on text descriptions
- Handles iterations and sizing options

## Arguments

- `description` (string): Text description of the house you want to generate an image for
- `options` (object): Optional additional options
  - `iterations` (number): Number of images to generate
  - `size` (string): Size of the generated images, default "1024x1024"

## Prerequisites

- DALL-E 3 access credentials configured on the OpenAI object
- Phaser game using images that need house assets

## How to use

```js
import { sprite } from 'sprite';

const house = await sprite.generateHouseAsset('a red brick house with white window trim', {
  iterations: 3,
  size: '512x512'  
});
```

This will generate 3 images with a size of 512x512 pixels depicting a red brick house with white window trim.

The images can then be used as assets in a Phaser game.


  
  