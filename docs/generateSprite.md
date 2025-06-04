---
slug: /
sidebar_position: 1
---
# 🌶️ generateSprite Documentation: Spice Up Your Game!

## 🔥 Brief Description
`generateSprite` is a magical function that conjures up sizzling sprite sheet images based on your wildest descriptions, using cutting-edge AI-powered image generation and analysis. It's like having a team of tiny, spicy digital artists living in your computer!

## 🚀 Usage: Ignite Your Imagination!
To harness the fiery power of `generateSprite`, import it from the sprite module and call it with a description of the character you want to bring to life. It's like summoning a pixelated genie with a taste for hot sauce!

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## 🌶️ Parameters: The Secret Ingredients
- `description` (string, required): A text description of the character to generate. Let your imagination run wild and spicy!
- `options` (object, optional): Your flavor enhancers:
  - `iterations` (number): Number of sprite variations to generate. More iterations = more fiery magic!
  - `size` (string): Size of the generated image (default: "1024x1024"). Go big or go home, hot stuff!
  - `save` (boolean): Whether to save the generated image to disk. Save your masterpiece for posterity!

## 🔥 Return Value: The Fruits of Your Fiery Labor
Returns an object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information. It's like the blueprint of your spicy sprite!
- `image`: Base64-encoded image data URL of the generated sprite sheet. Ready to set your game world on fire!

## 🌟 Examples: Time to Cook Up Some Sprites!

1. Generate a single sizzling sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot with laser eyes and rocket boots, breathing fire");
console.log("Check out this hot robot!", result.messages);
console.log("Here's the spicy image data:", result.image);
```

2. Generate multiple flaming variations:
```javascript
const variations = await sprite.generateSprite("A cartoon cat with rainbow fur, a jetpack, and flames shooting from its paws", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Spicy Variation ${index + 1}:`, variation.messages);
});
```

## 🧠 Notes or Considerations: Handle with Care, It's Hot!
- Our function uses AI models (DALL-E 3 and GPT) to generate and analyze images. It's like having a team of tiny, spice-loving artists living in your computer!
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid). It's like Tetris, but for spicy animations!
- The function converts images to grayscale, which may affect the final output. Think of it as adding a smoky flavor to your sprites!
- When saving images, they are stored in an 'assets' folder with a filename based on the description. It's like a cozy, spicy home for your sprites!
- The function may take some time to complete due to API calls and image processing. Good things come to those who wait, especially when it comes to perfectly seasoned sprites!

Now go forth and create some pixel-perfect, mouth-watering magic! 🌟🔥✨ Remember, with great spice comes great responsibility. Use your newfound power wisely, and don't forget to keep a glass of milk handy! 🥛
