

  # **generateHouseAsset Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the sprite object as follows:

```javascript
import { sprite } from 'sprite'
```

The `generateHouseAsset` function allows you to create 2D game assets using OpenAI's DALL-E 3 model, specifically tailored for use in Phaser JS games.

## Why should I use this function?

Use this function when you need to programmatically generate custom 2D house assets for your Phaser JS game. It leverages the power of DALL-E 3 to create unique, description-based images that can be directly used as game assets.

## What parameters or arguments are required?

1. `description` (string): A textual description of the house asset you want to generate.
2. `options` (object): 
   - `iterations` (number, optional): The number of image variations to generate.
   - `size` (string, optional): The size of the generated image (default: "1024x1024").

## Prerequisites

- An initialized OpenAI object with proper authentication.
- The `openAiObject.images` module must be available and properly configured.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
const sprite = require('sprite');

async function createGameAsset() {
  const description = "medieval stone house with a thatched roof";
  const options = {
    iterations: 3,
    size: "1024x1024"
  };

  try {
    const assets = await sprite.generateHouseAsset(description, options);
    console.log(`Generated ${assets.length} house assets`);
    // Process the generated assets for your game
  } catch (error) {
    console.error("Error generating house asset:", error);
  }
}

createGameAsset();
```

This function allows for flexibility in asset generation. If you specify the `iterations` option, it will generate multiple variations of the asset. If not, it will generate a single asset based on your description.

The function returns either an array of responses (when using iterations) or a single response object, which you can then use to access the generated image data for your Phaser JS game.

  