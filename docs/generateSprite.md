---
slug: /
sidebar_position: 1
---
# generateSprite Documentation

## 🔥 Brief Description
`generateSprite` is a sizzling function that whips up a sprite sheet image based on your wildest descriptions, using AI-powered image generation and analysis that's hotter than a jalapeño!

## 🚀 Usage
To unleash the power of `generateSprite`, import it from the sprite module and call it with a description that'll make your pixels pop!

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## 🌶️ Parameters
- `description` (string, required): A text description of the character to generate. Make it spicy!
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate. More is merrier!
  - `size` (string): Size of the generated image (default: "1024x1024"). Go big or go home!
  - `save` (boolean): Whether to save the generated image to disk. Save that heat for later!

## 🎁 Return Value
Returns an object or array of objects hotter than ghost peppers, containing:
- `messages`: JSON object with frameHeight and frameWidth information. It's the secret sauce!
- `image`: Base64-encoded image data URL of the generated sprite sheet. Picture perfect!

## 🌟 Examples

1. Generate a single sprite sheet that's fire:
```javascript
const result = await sprite.generateSprite("A pixelated robot breakdancing");
console.log(result.messages); // Check out those spicy details!
console.log(result.image); // Behold the pixel perfection!
```

2. Generate multiple variations to spice things up:
```javascript
const variations = await sprite.generateSprite("A cartoon cat riding a unicycle", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages); // Each one hotter than the last!
});
```

## 🌡️ Notes or Considerations
- This function uses AI models (DALL-E 3 and GPT) that are so hot, they might just melt your expectations! Results may vary, but they're always spicy.
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid). It's like a dance floor for your pixels!
- The function converts images to grayscale, adding a classic, smoky flavor to your sprites.
- When saving images, they're stored in an 'assets' folder with a filename based on the description. It's like a spice rack for your digital creations!
- The function may take some time to complete due to API calls and image processing. Good things come to those who wait for the perfect blend of spices!

Get ready to add some serious flavor to your game development with `generateSprite`! 🌶️🎮✨
