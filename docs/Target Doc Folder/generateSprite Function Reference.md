
  
  

# generateSprite

This function generates a sprite image and metadata using DALL-E 3 and GPT-4. It is exported from the sprite SDK.

## Why use generateSprite?

This function handles contacting the AI models, generating the image, saving it, and extracting the sprite sheet metadata in one easy call. It saves you having to call the AI APIs directly.

## Required parameters

- `description` - A text description of the sprite to generate, e.g. "Italian plumber" 
- `options` - An optional object with additional options:
  - `iterations` - Number of sprite variations to generate
  - `size` - Size of the generated image, default 1024x1024
  - `save` - Whether to save the generated image to disk

## Prerequisites

You'll need to have the sprite SDK installed:

```
npm install sprite
```

And have access keys for DALL-E 3 and GPT-4 models.

## How to use

Import the function:

```js
import { sprite } from 'sprite';
```

Generate a sprite:

```js 
const sprite = await sprite.generateSprite('Italian plumber');
```

This will return the sprite image data URI and metadata.

You can also pass options:

```js
const sprites = await sprite.generateSprite('knight', {
  iterations: 5,
  size: '512x512',
  save: true
});
```

This will generate and save 5 variations of a 512x512 knight sprite.


  
  