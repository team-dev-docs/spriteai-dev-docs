

  # **generateHouseAsset Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateHouseAsset` function allows you to create 2D assets for use in Phaser.js games, specifically depicting houses or building-like structures. It leverages the DALL-E 3 AI model to generate these assets based on your description, saving time and effort in asset creation for game development. This function is particularly useful for rapidly prototyping game environments or creating diverse architectural elements for your game world.

## What parameters or arguments are required?

1. `description` (string): A detailed description of the house or building you want to generate.
2. `options` (object): 
   - `iterations` (number, optional): The number of times to generate the asset.
   - `size` (string, optional): The size of the generated image (default: "1024x1024").
   - `style` (string, optional): The artistic style of the generated asset (e.g., "pixel art", "cartoon", "realistic").

## Prerequisites

- An active OpenAI API key with access to the DALL-E 3 model.
- The `openAiObject` must be properly configured with your API credentials.
- Basic familiarity with Phaser.js and sprite integration in game development.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
const houseDescription = "medieval stone cottage with a thatched roof and flower boxes under the windows";
const options = { iterations: 3, size: "512x512", style: "pixel art" };

try {
  const generatedAssets = await sprite.generateHouseAsset(houseDescription, options);
  console.log("Generated assets:", generatedAssets);
  
  // Example: Load the generated asset into Phaser
  this.load.image('house', generatedAssets[0].url);
  this.add.image(400, 300, 'house');
} catch (error) {
  console.error("Error generating house asset:", error);
}
```

This function will generate the specified number of iterations of the house asset based on your description. If no `iterations` are specified, it will generate a single asset. The function returns an array of responses from the DALL-E 3 API if multiple iterations are requested, or a single response object for a single generation.

Each response object contains information about the generated image, including its URL, which you can use to display or further process the asset in your Phaser.js game.

## Integration with Phaser.js

Once you have generated your house asset, you can easily integrate it into your Phaser.js game. Here's a quick example of how to load and use the generated asset:

```javascript
class GameScene extends Phaser.Scene {
    preload() {
        // Assuming you've stored the URL from generateHouseAsset
        this.load.image('house', generatedAssetUrl);
    }

    create() {
        // Add the house sprite to your game
        const house = this.add.sprite(400, 300, 'house');
        
        // You can then manipulate the sprite as needed
        house.setScale(0.5);
        house.setInteractive();
        house.on('pointerdown', () => {
            console.log('House clicked!');
        });
    }
}
```

This integration allows you to quickly populate your game world with diverse, AI-generated house assets, enhancing the visual richness of your game environments.

Remember to handle the asynchronous nature of the `generateHouseAsset` function using `async/await` or promises in your implementation, and consider caching generated assets for performance optimization in your game.

  