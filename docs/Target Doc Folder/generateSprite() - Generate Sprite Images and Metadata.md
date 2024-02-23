
  
  

# generateSprite

This function generates a sprite image and metadata using DALL-E 3 and GPT-4. It is exported from the sprite SDK.

## Why use generateSprite()

This function handles communicating with the OpenAI API to generate a sprite image matching a provided description. It also extracts key image metadata like frameWidth and frameHeight for using the image as a sprite sheet. This saves you time from having to generate images manually and parse the results.

## Required parameters

- `description` (string): The text description of the sprite to generate. This will be used to prompt DALL-E 3.
- `options` (object): Optional additional parameters. Can contain:
  - `iterations` (number): Generate multiple images and metadata.
  - `size` (string): The output image size, defaults to 1024x1024. 
  - `save` (boolean): Whether to save the output image file to disk.

## Prerequisites

- OpenAI API key
- Node.js environment

## How to use

```js
import { sprite } from 'sprite';

const spriteMeta = await sprite.generateSprite('a purple cat wearing sunglasses', {
  iterations: 5,
  save: true
});

// spriteMeta contains image data URLs and frame metadata 
```

The function handles communicating with the OpenAI APIs, generating variations, saving files, and extracting metadata. The output contains image data for using the sprite and frame details for the specific images generated.


  
  