---
slug: /
sidebar_position: 1
---
# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sizzling sprite sheet image based on a given description, using cutting-edge AI-powered image generation and analysis. Get ready to bring your pixelated dreams to life!

## Usage
To unleash the power of `generateSprite`, import it from the sprite module and call it with a description of the character you want to materialize from the digital ether.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate. Let your imagination run wild!
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate. More iterations, more spice!
  - `size` (string): Size of the generated image (default: "1024x1024"). Go big or go home!
  - `save` (boolean): Whether to save the generated image to disk. Preserve your pixelated masterpieces!

## Return Value
Returns an object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information. The vital stats of your digital creation!
- `image`: Base64-encoded image data URL of the generated sprite sheet. Your sprite, ready to set the game world on fire!

## Examples

1. Generate a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot with lasers for eyes");
console.log(result.messages);
console.log(result.image);
```

2. Generate multiple variations:
```javascript
const variations = await sprite.generateSprite("A cartoon cat riding a unicycle", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

## Notes or Considerations
- This function harnesses the power of AI models (DALL-E 3 and GPT) to generate and analyze images. Expect some magical variations for the same input!
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid). Perfect for creating characters that strut their stuff!
- The function converts images to grayscale, giving your sprites that classic, timeless look.
- When saving images, they're stored in an 'assets' folder with a filename based on the description. Your digital art gallery awaits!
- The function may take some time to complete due to API calls and image processing. Good things come to those who wait!

Remember, with great sprite power comes great sprite responsibility. Use `generateSprite` wisely and watch your game worlds come alive with pixel-perfect precision!
