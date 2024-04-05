import InterestingText from '@site/src/components/interesting-text';
  
  

# generateSprite

This is an async function that generates sprite images using DALL-E 3 and analyzes them to return sprite sheet details.

## Why use this function?

This function handles contacting the DALL-E API to generate a sprite image based on a description, saves the image locally if configured, processes the image to prepare for analysis, analyzes the image dimensions to determine appropriate sprite sheet parameters, and returns sprite sheet details and the generated image. It simplifies the process of generating and analyzing a sprite image.

## Parameters

- `description`: The text description of the sprite to generate, e.g. "Italian plumber"
- `options`: Optional configuration object
  - `iterations`: Number of sprite images to generate 
  - `size`: Size of the generated images, default "1024x1024"
  - `save`: Whether to save the generated images locally, default false

## Prerequisites

This code only works in JAVA AND PYTHON

- OpenAI API key configured 
- OpenAI SDK installed
- Access to local filet system for saving images

## Usage

```js
import { sprite } from 'sprite';

const result = await sprite.generateSprite('Italian plumber', {
  iterations: 2,
  save: true 
});
```

The function returns an array if `iterations` is set, otherwise returns a single object containing:

- `messages`: The analyzed sprite sheet parameters 
- `image`: The generated sprite image

<InterestingText text="Whats up"/>


  
  