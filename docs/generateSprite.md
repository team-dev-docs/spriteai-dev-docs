---
slug: /
sidebar_position: 1
---

# 🌶️🎨 generateSprite Documentation: Turn Up the Heat!

## 🚀🔥 Brief Description
`generateSprite` is a blazing hot function that conjures up sizzling sprite sheet images based on your wildest, most flavorful descriptions! Using cutting-edge AI-powered image generation and analysis, it's like having a team of tiny digital chefs cooking up pixel-perfect masterpieces in your computer's kitchen! 🍳✨

## 🔧🌶️ Usage: Fire Up Your Sprites!
To harness the spicy power of `generateSprite`, import it from the sprite module and call it with a description of the character you want to bring to life. It's like summoning a pixelated genie from a bottle of hot sauce!

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## 🎭🔥 Parameters: The Secret Ingredients
- `description` (string, required): A text description of the character to generate. Let your imagination run wild and spicy! 🌶️
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate. More iterations = more sizzling magic! 🎪
  - `size` (string): Size of the generated image (default: "1024x1024"). Go big or go home - make it hot! 🔥
  - `save` (boolean): Whether to save the generated image to disk. Save your spicy masterpiece for the world to see! 💾

## 🎁🌶️ Return Value: The Flaming Results
Returns an object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information. It's like the secret recipe blueprint of your sprite! 📋🔥
- `image`: Base64-encoded image data URL of the generated sprite sheet. Ready to set your game world ablaze! 🎮🔥

## 🌟🌶️ Examples: Time to Cook with Fire!

1. Generate a single blazing sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot with laser eyes and rocket boots breathing fire");
console.log(result.messages); // Check out those spicy specs!
console.log(result.image); // Behold your flaming creation!
```

2. Generate multiple sizzling variations:
```javascript
const variations = await sprite.generateSprite("A cartoon cat with rainbow fur, a jetpack, and chili pepper accessories", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`🔥 Spicy Variation ${index + 1}:`, variation.messages);
});
```

## 🧠🌶️ Notes or Considerations: Handle with Oven Mitts!
- Our function uses AI models (DALL-E 3 and GPT) to generate and analyze images. It's like having a team of tiny master chefs living in your computer, each with their own secret spice blend! 👨‍🍳🔥
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid). It's like Tetris, but for animations - and way spicier! 🎲🌶️
- The function converts images to grayscale, which may affect the final output. Think of it as adding a vintage filter with a smoky flavor! 🎞️
- When saving images, they are stored in an 'assets' folder with a filename based on the description. It's like a cozy spice cabinet for your pixel treasures! 🗂️🌶️
- The function may take some time to complete due to API calls and image processing. Good things come to those who wait - like a perfectly aged hot sauce! ⏰🔥
- Remember to keep your API keys secure - you don't want anyone else getting into your secret spice vault! 🔐

Now go forth and create some pixel-perfect magic that's hotter than a ghost pepper! Your sprites will be so spicy, they'll make players sweat with excitement! 🌟✨🌶️🔥🎮

*Warning: Side effects may include uncontrollable creativity, an addiction to pixel art, and the sudden urge to add flame effects to everything!* 🚨🔥
