
  
  

# generateSprite

This function generates a sprite image and metadata using DALL-E 3 and GPT-4. It is exported from the sprite SDK.

## Why use generateSprite()

This function simplifies the process of generating sprite images optimized for animation. It handles prompting DALL-E 3, processing the image, sending it to GPT-4 to analyze frame dimensions, and returning image data and dimensions for use in a game engine like Phaser.

## Parameters

- `description` (string): A text description of the sprite to generate, e.g. "a robot" 
- `options` (object): Optional additional parameters
  - `iterations` (number): Generate multiple images and analyze each one
  - `size` (string): Size of generated image, defaults to 1024x1024
  - `save` (boolean): Whether to save image file locally

## Prerequisites

- sprite SDK installed
- OpenAI API key configured 

## Usage

```js
import { sprite } from 'sprite';

const result = await sprite.generateSprite('a robot');

// result contains image data URL and frame dimensions 
console.log(result); 
```

The function handles prompting DALL-E, processing the image, sending it to GPT-4 for analysis, and returning the data. So it simplifies generating optimized sprite images.


  
  