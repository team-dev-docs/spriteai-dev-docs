

  # **generateHouseAsset Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the sprite object as follows:

```javascript
import { sprite } from 'sprite'
```

The `generateHouseAsset` function allows you to create 2D assets for house-like structures that can be used in Phaser JS games.

## Why should I use this function?

Use this function when you need to programmatically generate 2D house assets for your Phaser JS game. It leverages the power of DALL-E 3 to create custom images based on your descriptions, saving time and resources in asset creation.

## What parameters or arguments are required?

1. `description` (string): A detailed description of the house asset you want to generate.
2. `options` (object): 
   - `iterations` (number, optional): The number of variations to generate.
   - `size` (string, optional): The size of the image (default: "1024x1024").

## Prerequisites

- An initialized `openAiObject` with proper authentication.
- Access to the DALL-E 3 API through the OpenAI platform.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
const description = "medieval stone cottage with a thatched roof";
const options = { iterations: 3, size: "512x512" };

try {
  const result = await sprite.generateHouseAsset(description, options);
  console.log(result);
} catch (error) {
  console.error("Error generating house asset:", error);
}
```

This function will generate the specified number of iterations of the house asset based on your description. If no iterations are specified, it will generate a single image.

The function returns either an array of responses (if iterations > 1) or a single response object containing the generated image data.

Note: The actual image data format and additional properties in the response may vary based on the OpenAI API's current implementation.

## Integration with Phaser JS

Once you've generated your house assets, you can easily integrate them into your Phaser JS game. Here's a quick example of how to load and use the generated asset:

```javascript
function preload() {
    this.load.image('house', 'path/to/generated/house.png');
}

function create() {
    this.add.image(400, 300, 'house');
}
```

This will add your generated house asset to the game at coordinates (400, 300). You can adjust the position and scale as needed for your specific game layout.

## Performance Considerations

When using generated assets, keep in mind that they may be larger in file size compared to manually optimized sprites. To ensure smooth gameplay, consider the following tips:

1. Use appropriate image sizes for your game's resolution.
2. Implement texture atlases for multiple house variations.
3. Utilize asset compression techniques supported by Phaser JS.

By following these practices, you can maintain high performance while leveraging the flexibility of dynamically generated house assets in your game.

  