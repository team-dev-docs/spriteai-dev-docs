
  
  

# generateHouseAsset

This function allows you to generate a 2D asset image depicting a house using DALL-E 3 AI.

## Why use this function?

- Easily create house images to use in your Phaser.js games without needing to design the assets yourself.
- Generate multiple variations by specifying `options.iterations`.

## Parameters

- `description` - String description of the type of house you want to generate.
- `options` - Optional object with additional options:
  - `iterations` - Number of images to generate.
  - `size` - Size of the generated images, default `"1024x1024"`.

## Prerequisites

- Access to the OpenAI API with DALL-E 3 model enabled.
- API keys stored in the `openAiObject`.

## Usage

```js
import { sprite } from "sprite";

const house = await sprite.generateHouseAsset("victorian house", {
  iterations: 3,
  size: "512x512", 
});
```

The function returns either a single image object or an array of images if `options.iterations` is set. The images can then be used as assets in a Phaser game.


  
  