---
slug: /
sidebar_position: 1
---

# 🎨 generateSprite Documentation

## 🚀 Brief Description
`generateSprite` is a magical function that conjures up sprite sheet images based on your wildest descriptions, using cutting-edge AI-powered image generation and analysis. It's like having a team of tiny digital artists living in your computer!

## 🔧 Usage
To harness the power of `generateSprite`, summon it from the sprite module and call it with a description of the character you want to bring to life. It's like casting a spell, but with code!

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## 🎭 Parameters
- `description` (string, required): A vivid text description of the character to generate. Let your imagination run wild!
- `options` (object, optional): Your magical customization toolkit:
  - `iterations` (number): Number of sprite variations to generate. More iterations = more pixelated possibilities!
  - `size` (string): Size of the generated image (default: "1024x1024"). Go big or go home!
  - `save` (boolean): Whether to save the generated image to disk. Preserve your masterpiece for posterity!

## 🎁 Return Value
Returns an object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information. The secret dimensions of your sprite's world!
- `image`: Base64-encoded image data URL of the generated sprite sheet. Your character, ready to rock your game world!

## 🌟 Examples

1. Generate a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot with laser eyes and rocket boots");
console.log("Behold, our mechanical marvel!", result.messages);
console.log("Witness the birth of our robot:", result.image);
```

2. Generate multiple variations:
```javascript
const variations = await sprite.generateSprite("A cartoon cat with rainbow fur and a jetpack", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Feast your eyes on Cosmic Cat Variation ${index + 1}:`, variation.messages);
});
```

## 🧠 Notes or Considerations
- Our function uses AI models (DALL-E 3 and GPT) to generate and analyze images. It's like having a tiny, unpredictable art studio in your code!
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid). It's like a dance routine for your pixels!
- The function converts images to grayscale, which may affect the final output. Think of it as adding a touch of film noir to your sprites!
- When saving images, they are stored in an 'assets' folder with a filename based on the description. It's like a cozy digital home for your creations!
- The function may take some time to complete due to API calls and image processing. Good sprites come to those who wait!

Now go forth and create some pixel-perfect magic! 🌟✨
