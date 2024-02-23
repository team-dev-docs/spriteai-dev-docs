
  
  

# generateSprite

This function generates a sprite image and metadata using DALL-E 3 and GPT-4. It is exported from the sprite SDK.

## Why use generateSprite?

This function allows you to easily generate sprite images optimized for animation along with the necessary metadata to load them into a game engine like Phaser. It handles prompting DALL-E 3, processing the image, sending it to GPT-4 to analyze, and returning sprite sheet details.

## Parameters

- `description`: A text description of the sprite to generate, e.g. "a robot" 
- `options`: Optional parameters
  - `iterations`: Number of sprite sets to generate
  - `size`: Size of the generated sprite image, e.g. "1024x1024"
  - `save`: Whether to save the sprite image file to disk

## Prerequisites

- sprite SDK installed
- OpenAI API key configured 

## Usage

```js
import { sprite } from 'sprite';

const spriteData = await sprite.generateSprite('a robot');

// Sprite image data URI
console.log(spriteData.image); 

// Sprite sheet frame metadata
console.log(spriteData.messages); 
```

The function handles prompting DALL-E, processing the image, analyzing it with GPT-4, and returning the sprite image and metadata. The metadata includes the optimal `frameWidth` and `frameHeight` to load the sprite sheet animation in Phaser.


  
  