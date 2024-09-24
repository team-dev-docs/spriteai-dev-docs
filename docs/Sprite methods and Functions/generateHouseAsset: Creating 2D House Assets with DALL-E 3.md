

  # **generateHouseAsset Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateHouseAsset` function allows you to create 2D assets for use in Phaser.js games, specifically depicting houses or building-like structures. It leverages the DALL-E 3 AI model to generate these assets based on your description, saving time and effort in asset creation for game development.

## What parameters or arguments are required?

1. `description` (string): A description of the house or building you want to generate.
2. `options` (object): 
   - `iterations` (number, optional): The number of times to generate the asset.
   - `size` (string, optional): The size of the generated image (default: "1024x1024").

## Prerequisites

- An active OpenAI API key with access to the DALL-E 3 model.
- The `openAiObject` must be properly configured with your API credentials.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
const houseDescription = "medieval stone cottage with a thatched roof";
const options = { iterations: 3, size: "512x512" };

try {
  const generatedAssets = await sprite.generateHouseAsset(houseDescription, options);
  console.log("Generated assets:", generatedAssets);
} catch (error) {
  console.error("Error generating house asset:", error);
}
```

This function will generate the specified number of iterations of the house asset based on your description. If no `iterations` are specified, it will generate a single asset. The function returns an array of responses from the DALL-E 3 API if multiple iterations are requested, or a single response object for a single generation.

Each response object contains information about the generated image, including its URL, which you can use to display or further process the asset in your Phaser.js game.

Remember to handle the asynchronous nature of this function using `async/await` or promises in your implementation.

## API Rate Limits and Costs

When using the `generateHouseAsset` function, be aware of OpenAI's API rate limits and associated costs:

- The DALL-E 3 API has rate limits that may vary based on your account tier.
- Each API call incurs a cost, which depends on the image size and the number of iterations.
- Implement appropriate error handling to manage rate limit errors (429 status code).

To manage API usage effectively:

```javascript
try {
  const generatedAssets = await sprite.generateHouseAsset(houseDescription, options);
  // Process generated assets
} catch (error) {
  if (error.response && error.response.status === 429) {
    console.log("Rate limit reached. Retrying after a delay...");
    // Implement retry logic with exponential backoff
  } else {
    console.error("Error generating house asset:", error);
  }
}
```

## Integrating Generated Assets into Phaser.js

To use the generated assets in your Phaser.js game:

1. Load the image in your Phaser.js preload function:

```javascript
function preload() {
  this.load.image('house', generatedAssets[0].url);
}
```

2. Create a sprite using the loaded asset in your create function:

```javascript
function create() {
  this.add.sprite(400, 300, 'house');
}
```

3. For multiple assets, you can create an array of sprites or use them for different game elements:

```javascript
function create() {
  generatedAssets.forEach((asset, index) => {
    this.add.sprite(100 * (index + 1), 300, `house${index}`);
  });
}
```

By following these steps, you can seamlessly integrate AI-generated house assets into your Phaser.js game, enhancing its visual appeal and reducing development time.

  