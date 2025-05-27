---
slug: /
sidebar_position: 1
---
# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sizzling sprite sheet image based on a given description, using cutting-edge AI-powered image generation and analysis. Get ready to bring your game characters to life with this pixel-perfect powerhouse!

## Usage
To unleash the full potential of `generateSprite`, import it from the sprite module and call it with a vivid description of the character you want to conjure into existence.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): A tantalizing text description of the character to generate. Let your imagination run wild!
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate. More iterations, more spice!
  - `size` (string): Size of the generated image (default: "1024x1024"). Go big or go home!
  - `save` (boolean): Whether to save the generated image to disk. Preserve your pixel perfection!

## Return Value
Returns an object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information. The secret sauce of your sprite's dimensions!
- `image`: Base64-encoded image data URL of the generated sprite sheet. Your character, ready to rock the game world!

## Examples

1. Generate a single sprite sheet that'll make your game pop:
```javascript
const result = await sprite.generateSprite("A pixelated robot with laser eyes and rocket boots");
console.log(result.messages); // Unveil the sprite's vital stats
console.log(result.image); // Behold your robotic masterpiece!
```

2. Generate multiple variations to spice up your character roster:
```javascript
const variations = await sprite.generateSprite("A cartoon cat with ninja skills and a jetpack", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages); // Each cat, unique and ready for action!
});
```

## Notes or Considerations
- This function harnesses the power of AI models (DALL-E 3 and GPT) to generate and analyze images, which means each sprite is a unique work of art. Embrace the variety!
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid). It's like a dance floor for your characters!
- The function converts images to grayscale, giving your sprites that classic, timeless look.
- When saving images, they're stored in an 'assets' folder with a filename based on the description. Your sprite gallery, organized and ready to go!
- The function may take a moment to complete due to API calls and image processing. Good things come to those who wait!

Get ready to spice up your game with `generateSprite` – where every pixel tells a story, and every character is a star waiting to be born!
