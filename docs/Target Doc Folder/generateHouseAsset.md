
  
  

# generateHouseAsset

This function generates a 2D asset image depicting a house using DALL-E 3 AI.

## Why use this function?

This function provides an easy way to generate house images that can be used in a Phaser JS game. It handles prompting DALL-E 3 and returning the generated images.

## Parameters

- `description` - The description of the house asset to generate, e.g. "yellow two story house with white trim and a red door"
- `options` - Optional parameters:
  - `iterations` - Number of images to generate
  - `size` - Size of the generated images, default 1024x1024

## Prerequisites

- Access to OpenAI API with DALL-E 3 model enabled
- API key stored in `openAiObject`

## How to use

```js
import { sprite } from "sprite";

const generatedImages = await sprite.generateHouseAsset("yellow two story house", {
  iterations: 3  
});
```

This will generate 3 1024x1024 images depicting a yellow two story house using DALL-E 3. The images are returned in the `generatedImages` variable.


  
  