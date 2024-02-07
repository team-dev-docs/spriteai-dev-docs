
  
  

# generateHouseAsset

This function allows you to generate a 2D asset image depicting a house using DALL-E 3.

## Why use this function?

- Convenient way to generate house images for use in games or other applications
- Leverages DALL-E 3 to create high quality, custom images based on a text description
- Handles prompting DALL-E and returning the responses

## Arguments

- `description` (string): Text description of the type of house you want to generate an image for
- `options` (object): Optional additional parameters
  - `iterations` (number): Generate multiple images by specifying number of iterations
  - `size` (string): Size of the generated images, default 1024x1024

## Prerequisites

- DALL-E 3 access credentials configured on the OpenAI object
- Node.js environment

## Usage

```js
import { sprite } from 'sprite';

const house = await sprite.generateHouseAsset('ranch style house with white siding');
```

This will generate a 1024x1024 image of a ranch style house with white siding.

You can also specify iterations and size:

```js 
const houses = await sprite.generateHouseAsset('modern glass house', {
  iterations: 5,
  size: '512x512'
});
```

This will generate 5 images with 512x512 resolution of different modern glass houses.


  
  