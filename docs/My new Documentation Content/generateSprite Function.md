
  
  

# generateSprite

This function generates a sprite image with animation frames using DALL-E 3 and OpenAI image APIs. It can be useful for rapidly prototyping game sprites.

## Why should I use this function?

You should use this function when you need to quickly generate sprite images with animation frames for a game prototype or concept. It leverages AI to create images based on a text description you provide.

## What parameters are required?

The function takes two parameters:

- `description` (required) - A text description of the sprite you want to generate. This will be used to prompt DALL-E to create the image.

- `options` (optional) - An options object that can configure the following:

  - `size` - The size of the generated image (default 1024x1024)

  - `save` - Whether to save the generated image as a PNG file (boolean, default false)

## Prerequisites

To use this function, you'll need:

- Access to the OpenAI image generation APIs
- The OpenAI SDK package installed
- Axios installed for making HTTP requests

## How do I use this function?

Import the `generateSprite` function from the sprite SDK:

```js
import { sprite } from 'sprite';
```

Then call it, passing a description:

```js
const result = await sprite.generateSprite('a purple cat with 3 walking frames'); 
```

The result will contain the generated sprite image data URL and suggested frame size.

You can pass options to configure image size and saving:

```js
const options = {
  size: '512x512',
  save: true
};

const result = await sprite.generateSprite('a blue dog', options);
```

The image will be 512x512 and saved to your assets folder as a PNG file.


  
  