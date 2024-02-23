
  
  

# generateSprite

This function generates a sprite image and metadata using DALL-E 3 and GPT-4. It is exported from the sprite SDK.

## Why use generateSprite?

This function allows you to easily generate sprite images optimized for animation along with the required metadata to load them in a game engine like Phaser. It handles prompting DALL-E 3, processing the image, sending it to GPT-4 to analyze, and returning sprite sheet details.

## Required parameters

- `description` - A text description of the sprite to generate, e.g. "a knight with a sword and shield"  
- `options` (optional) - An options object that can configure output
  - `size` - The output image size, defaults to 1024x1024
  - `iterations` - Number of sprite variants to generate
  - `save` - Whether to save the PNGs to disk

## Prerequisites

- OpenAI API key for DALL-E 3 and GPT models
- Node.js environment

## How to use

Import the `generateSprite` function:

```js
import { sprite } from 'sprite';
```

Generate a sprite:

```js 
const sprite = await sprite.generateSprite("knight with sword and shield");
```

The returned `sprite` object contains:

- `image` - A data URI for the generated PNG
- `messages` - Metadata from GPT-4 analyzing the image, including suggested `frameWidth` and `frameHeight`

You can pass the URI to a Phaser loader and use the dimensions for animation.


  
  