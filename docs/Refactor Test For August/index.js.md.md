

  Summary:
This code file contains a module for generating sprite sheets and house assets using OpenAI's DALL-E 3 model. It includes functions for image processing, background removal, and color analysis. The main object is `sprite`, which contains methods for generating sprite sheets and house assets.

Main object: sprite

Methods:

1. generateSprite(description, options)
   Generates a sprite sheet based on the given description.

   Example:
   ```javascript
   const result = await sprite.generateSprite("medieval knight", { size: "1024x1024", save: true });
   ```

2. generateHouseAsset(description, options)
   Generates a 2D house asset for use in a Phaser JS game.

   Example:
   ```javascript
   const result = await sprite.generateHouseAsset("medieval castle", { size: "1024x1024", iterations: 3 });
   ```

Helper functions:

1. removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold, options)
   Removes the background color from an image.

2. encodeImage(imagePath)
   Encodes an image file to base64.

3. getUniqueColors(imagePath, options)
   Retrieves unique colors from an image.

  