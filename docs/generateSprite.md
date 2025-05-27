---
slug: /
sidebar_position: 1
---
# generateSprite Documentation

## Brief Description
`generateSprite` is a powerful function that conjures up mind-blowing sprite sheet images based on your wildest descriptions, leveraging cutting-edge AI-powered image generation and analysis techniques. Get ready to revolutionize your game development process!

## Usage
Unleash the power of `generateSprite` by importing it from the sprite module and summoning it with a description of the character you want to bring to life.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate. Let your imagination run wild!
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate. More iterations, more awesomeness!
  - `size` (string): Size of the generated image (default: "1024x1024"). Go big or go home!
  - `save` (boolean): Whether to save the generated image to disk. Preserve your masterpieces!

## Return Value
Returns an object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information. The secret sauce of your sprite's anatomy!
- `image`: Base64-encoded image data URL of the generated sprite sheet. Pixels of pure magic!

## Examples

1. Generate a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot with laser eyes and rocket boosters");
console.log(result.messages); // Unveil the sprite's secrets
console.log(result.image); // Behold your creation!
```

2. Generate multiple variations:
```javascript
const variations = await sprite.generateSprite("A cartoon cat with superpowers and a cape", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages); // Explore the multiverse of your sprite!
});
```

## Notes or Considerations
- This function harnesses the power of AI models (DALL-E 3 and GPT) to generate and analyze images. Each output is a unique masterpiece!
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid). It's like choreographing a pixel dance!
- The function converts images to grayscale, giving your sprites that classic, timeless look.
- When saving images, they're stored in an 'assets' folder with a filename based on the description. Your sprite gallery awaits!
- Be patient, young Padawan! The function may take some time to complete due to API calls and image processing. Great art takes time!

Now go forth and create sprites that will make the gaming world tremble with excitement!
