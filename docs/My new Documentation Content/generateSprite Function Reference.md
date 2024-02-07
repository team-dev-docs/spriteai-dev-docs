
  
  

# generateSprite

This function generates a sprite image with animation frames using DALL-E 3 AI image generation. It is exported from the sprite SDK and can be imported and used in a Node.js application.

## Why should I use this function?

You should use this function when you need to automatically generate a sprite image with animation frames for use in a game or other application. It leverages AI to create images based on a text prompt, saving you time from having to create sprite images manually.

## What parameters are required?

The function takes two parameters:

- `description` (required) - A string describing the sprite you want generated. This will be used to construct the AI prompt.

- `options` (optional) - An options object that can contain:

  - `size` - The size of the generated image, default 1024x1024.

  - `save` - A boolean, if true it will save the generated image as a PNG file in your assets folder.

## Prerequisites

- Node.js installed
- The `sprite` SDK installed from NPM
- A DALL-E 3 API key configured in the SDK

## How do I use this function?

Import the `generateSprite` function from the `sprite` SDK:

```js
import { sprite } from 'sprite';
```

Then call it, passing a description of the sprite:

```js 
const sprite = await sprite.generateSprite('a red square bouncing');
```

This will use DALL-E to generate a 1024x1024 sprite image with 6 animation frames of a red square bouncing, and return the image data and frame size.

You can also pass options:

```js
const options = {
  size: '512x512',
  save: true 
};

const sprite = await sprite.generateSprite('a blue circle', options); 
```

The function returns an object containing the generated image data URL and suggested frame size.


  
  