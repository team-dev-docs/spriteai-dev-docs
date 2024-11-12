

  # SpriteAI API Reference

The SpriteAI module provides functions for generating sprite sheets and game assets using AI.

## sprite.generateSprite(description, options)

Generates a sprite sheet based on a text description.

### Parameters

- `description` (string): A text description of the character to generate
- `options` (object, optional): Configuration options
  - `size` (string, optional): Image size, e.g. "1024x1024". Default: "1024x1024"
  - `save` (boolean, optional): Whether to save the generated image to disk
  - `iterations` (number, optional): Number of iterations to generate

### Returns

- Without iterations: Object containing:
  - `messages`: JSON object with frameWidth and frameHeight 
  - `image`: Base64 encoded image data URL
- With iterations: Array of objects, each containing messages and image as above

### Example Usage

```javascript
import { sprite } from 'spriteAI';

// Generate a single sprite sheet
const result = await sprite.generateSprite('A cartoon cat');
console.log(result.messages);
console.log(result.image);

// Generate multiple iterations
const iterations = await sprite.generateSprite('A cartoon dog', { iterations: 3 });
iterations.forEach(result => {
  console.log(result.messages);
  console.log(result.image);
});
```

## sprite.generateHouseAsset(description, options)

Generates a 2D game asset based on a text description.

### Parameters

- `description` (string): A text description of the asset to generate
- `options` (object, optional): Configuration options
  - `size` (string, optional): Image size, e.g. "1024x1024". Default: "1024x1024"
  - `iterations` (number, optional): Number of iterations to generate

### Returns

- Without iterations: DALL-E API response object
- With iterations: Array of DALL-E API response objects

### Example Usage

```javascript
import { sprite } from 'spriteAI';

// Generate a single asset
const result = await sprite.generateHouseAsset('A cozy cottage');
console.log(result);

// Generate multiple iterations
const iterations = await sprite.generateHouseAsset('A futuristic skyscraper', { iterations: 3 });
iterations.forEach(result => {
  console.log(result);
});
```

## Additional Notes

- Both functions use OpenAI's DALL-E 3 model for image generation
- The `generateSprite` function includes additional processing to optimize the output for use as a sprite sheet in game engines like Phaser
- Generated images are provided in base64 encoded format, which can be easily used in web applications
- When saving is enabled, images are saved to an `assets` folder in the current working directory
- The module uses various image processing libraries (sharp, Jimp) for tasks like grayscale conversion and background removal

  